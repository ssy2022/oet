// script.js
const itemsPerPage = 30; // Not used here, but kept for compatibility
const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];
let tests = []; // Array of test cases from JSON

const testSelect = document.getElementById("test-select");
const languageSelect = document.getElementById("language-select");
const maleVoiceSelect = document.getElementById("male-voice-select");
const femaleVoiceSelect = document.getElementById("female-voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const startTestButton = document.getElementById("start-test-button");
const viewScriptButton = document.getElementById("view-script-button");
const scoreButton = document.getElementById("score-button");
const revealAnswersButton = document.getElementById("reveal-answers-button");
const introText = document.getElementById("intro-text");
const notesPreview = document.getElementById("notes-preview");
const questionsDisplay = document.getElementById("questions-display");
const answerForm = document.getElementById("notes-form");
const results = document.getElementById("results");
const scoreText = document.getElementById("score-text");
const detailedScores = document.getElementById("detailed-scores");
const scriptDisplay = document.getElementById("script-display");
const scriptText = document.getElementById("script-text");
const hideScriptButton = document.getElementById("hide-script-button");

let currentTest = null;
let currentAnswers = []; // User's inputs
let correctAnswers = []; // From JSON

// Load tests from JSON
async function loadTests() {
    try {
        const response = await fetch('oet_listening_tests.json');
        if (!response.ok) {
            throw new Error('Failed to load tests data');
        }
        tests = await response.json();
        populateTestSelect();
    } catch (error) {
        console.error('Error loading tests:', error);
        document.querySelector(".container").innerHTML += '<p class="warning">Failed to load test data.</p>';
    }
}

// Populate test select
function populateTestSelect() {
    testSelect.innerHTML = '<option value="">Choose a test</option>';
    tests.forEach((test) => {
        const option = document.createElement("option");
        option.value = test.id;
        option.textContent = test.title;
        testSelect.appendChild(option);
    });
}

// Load voices and populate selects
function loadVoices() {
    voices = synth.getVoices();
    if (voices.length > 0) {
        populateLanguageSelect();
        setDefaultVoices();
    }
}

function populateLanguageSelect() {
    const languages = [...new Set(voices.map((voice) => voice.lang))].sort();
    languageSelect.innerHTML = '<option value="">Select Language</option>';
    languages.forEach((lang) => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
}

function setDefaultVoices() {
    const isChrome = /Chrome/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

    // Default language
    let defaultLang = "en";
    languageSelect.value = defaultLang;

    // Male voice (Cardiologist)
    let maleVoiceName = "";
    if (isChrome) {
        maleVoiceName = voices.find(v => v.name === "Google UK English" && v.lang === "en-GB")?.name || "";
    } else if (isSafari) {
        maleVoiceName = voices.find(v => v.name === "Daniel" && v.lang === "en-GB")?.name || "";
    }
    maleVoiceSelect.value = maleVoiceName;

    // Female voice (Patient)
    let femaleVoiceName = "";
    if (isChrome) {
        femaleVoiceName = voices.find(v => v.name === "Google US English" && v.lang === "en-US")?.name || "";
    } else if (isSafari) {
        femaleVoiceName = voices.find(v => v.name === "Samantha" && v.lang === "en-US")?.name || "";
    }
    femaleVoiceSelect.value = femaleVoiceName;

    populateVoiceSelects();
}

function populateVoiceSelects() {
    // Male voices (en-GB)
    maleVoiceSelect.innerHTML = '<option value="">Select Male Voice</option>';
    voices.filter(v => v.lang === "en-GB").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        maleVoiceSelect.appendChild(option);
    });

    // Female voices (en-US)
    femaleVoiceSelect.innerHTML = '<option value="">Select Female Voice</option>';
    voices.filter(v => v.lang === "en-US").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        femaleVoiceSelect.appendChild(option);
    });
}

// Event listeners
testSelect.addEventListener("change", (e) => {
    const testId = e.target.value;
    currentTest = tests.find(t => t.id === testId);
    if (currentTest) {
        startTestButton.disabled = false;
        viewScriptButton.disabled = false;
        displayQuestions();
        saveSettings();
    } else {
        resetUI();
    }
});

languageSelect.addEventListener("change", () => {
    populateVoiceSelects();
    saveSettings();
});

maleVoiceSelect.addEventListener("change", () => saveSettings());
femaleVoiceSelect.addEventListener("change", () => saveSettings());
repeatCountSelect.addEventListener("change", () => saveSettings());

startTestButton.addEventListener("click", startTTS);
viewScriptButton.addEventListener("click", toggleScript);
scoreButton.addEventListener("click", scoreAnswers);
revealAnswersButton.addEventListener("click", revealAnswers);
hideScriptButton.addEventListener("click", toggleScript);

// Save/load settings
function saveSettings() {
    localStorage.setItem("language", languageSelect.value);
    localStorage.setItem("maleVoice", maleVoiceSelect.value);
    localStorage.setItem("femaleVoice", femaleVoiceSelect.value);
    localStorage.setItem("repeatCount", repeatCountSelect.value);
}

function loadSettings() {
    languageSelect.value = localStorage.getItem("language") || "";
    maleVoiceSelect.value = localStorage.getItem("maleVoice") || "";
    femaleVoiceSelect.value = localStorage.getItem("femaleVoice") || "";
    repeatCountSelect.value = localStorage.getItem("repeatCount") || "1";
    if (languageSelect.value) {
        populateVoiceSelects();
    }
}

// Display questions for preview and input
function displayQuestions() {
    if (!currentTest) return;

    // Intro
    introText.innerHTML = currentTest.introduction;
    introText.style.display = "block";

    // Questions display for preview
    questionsDisplay.innerHTML = currentTest.questions.map(q => `<p>${q}</p>`).join('');
    notesPreview.style.display = "block";

    // Answer form
    answerForm.innerHTML = '';
    currentTest.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-container';
        div.innerHTML = `
            <label>${index + 1}. </label>
            <input type="text" class="note-input" id="ans${index}" placeholder="Enter answer" data-index="${index}">
        `;
        answerForm.appendChild(div);
    });
    answerForm.style.display = "block";
    scoreButton.disabled = false;
    revealAnswersButton.disabled = false;

    document.getElementById("term-count").textContent = `Total Questions: ${currentTest.answers.length}`;
}

// Collect user answers
function getUserAnswers() {
    currentAnswers = [];
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        currentAnswers.push(input ? input.value.trim().toLowerCase() : '');
    }
}

// TTS Functions
function startTTS() {
    if (!currentTest || isSpeaking) return;
    if (!maleVoiceSelect.value || !femaleVoiceSelect.value) {
        alert("Please select male and female voices.");
        return;
    }

    startTestButton.disabled = true;
    isSpeaking = true;

    // Step 1: Read introduction
    speakText(currentTest.introduction, null, () => {
        // Step 2: 30 second pause (simulate by timer)
        setTimeout(() => {
            // Step 3: Read script sentences
            speakScript();
        }, 30000);
    });
}

function speakText(text, voiceName, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(v => v.name === voiceName);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = 0.9; // Natural speed
    utterance.onend = () => {
        if (callback) callback();
    };
    synth.speak(utterance);
}

function speakScript() {
    let index = 0;
    const repeatCount = parseInt(repeatCountSelect.value) || 1;

    function speakNext() {
        if (index >= currentTest.script.length) {
            isSpeaking = false;
            startTestButton.disabled = false;
            return;
        }

        const line = currentTest.script[index];
        // Skip labels, get dialogue
        const dialogue = line.replace(/^(Cardiologist|Sara[h ]Mitchell): /i, '').trim();
        if (!dialogue) {
            index++;
            speakNext();
            return;
        }

        // Determine voice
        let voiceName = "";
        if (/Cardiologist/i.test(line)) {
            voiceName = maleVoiceSelect.value;
        } else if (/Sarah Mitchell/i.test(line)) {
            voiceName = femaleVoiceSelect.value;
        }

        // Speak with repeat
        let repeats = 0;
        function repeatUtterance() {
            speakText(dialogue, voiceName, () => {
                repeats++;
                if (repeats < repeatCount) {
                    setTimeout(repeatUtterance, 500); // Short pause between repeats
                } else {
                    // 1 second pause between speakers
                    setTimeout(() => {
                        index++;
                        speakNext();
                    }, 1000);
                }
            });
        }
        repeatUtterance();
    }

    speakNext();
}

// Script toggle
function toggleScript() {
    const isVisible = scriptDisplay.style.display !== "none";
    scriptDisplay.style.display = isVisible ? "none" : "block";
    scriptText.textContent = currentTest ? currentTest.fullScript : "";
    viewScriptButton.textContent = isVisible ? "View Script" : "Hide Script";
}

// Scoring
function scoreAnswers() {
    if (!currentTest) return;
    getUserAnswers();
    correctAnswers = currentTest.answers.map(a => a.toLowerCase());

    let totalScore = 0;
    const scores = [];

    for (let i = 0; i < currentAnswers.length; i++) {
        const userAns = currentAnswers[i];
        const correct = correctAnswers[i];
        const similarity = calculateSimilarity(userAns, correct);
        const points = similarity >= 0.8 ? 1 : 0; // 80% or higher for full point
        totalScore += points;
        scores.push({ index: i + 1, similarity: Math.round(similarity * 100), points });
    }

    scoreText.textContent = `Score: ${totalScore} out of ${currentTest.answers.length}`;
    detailedScores.innerHTML = scores.map(s => `<p>Q${s.index}: ${s.similarity}% (${s.points} point)</p>`).join('');
    results.style.display = "block";
}

// Similarity calculation (simple word overlap percentage, case-insensitive)
function calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const words1 = str1.split(/\s+/).filter(w => w.length > 0);
    const words2 = str2.split(/\s+/).filter(w => w.length > 0);
    if (words1.length === 0 && words2.length === 0) return 1;
    const intersection = words1.filter(w1 => words2.includes(w1)).length;
    return intersection / Math.max(words1.length, words2.length);
}

// Reveal answers
function revealAnswers() {
    scoreAnswers(); // Score first
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        const div = input.parentElement;
        const correct = currentTest.answers[i];
        const span = document.createElement('span');
        span.textContent = ` (Correct: ${correct})`;
        span.className = currentAnswers[i] === correct ? 'correct' : 'incorrect';
        div.appendChild(span);
        input.disabled = true;
    }
    revealAnswersButton.disabled = true;
}

function resetUI() {
    startTestButton.disabled = true;
    viewScriptButton.disabled = true;
    scoreButton.disabled = true;
    revealAnswersButton.disabled = true;
    introText.style.display = "none";
    notesPreview.style.display = "none";
    answerForm.style.display = "none";
    results.style.display = "none";
    scriptDisplay.style.display = "none";
    currentTest = null;
}

// Init
synth.onvoiceschanged = () => {
    loadVoices();
    loadSettings();
};

if (!synth) {
    const warning = document.createElement("p");
    warning.textContent = "This browser does not support TTS. Please use a modern browser.";
    warning.className = "warning";
    document.querySelector(".container").prepend(warning);
    startTestButton.disabled = true;
} else {
    loadTests();
    loadVoices();
    loadSettings();
}
