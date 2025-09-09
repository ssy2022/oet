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
            throw new Error(`Failed to load tests data: ${response.status}`);
        }
        tests = await response.json();
        console.log('Tests loaded:', tests); // Debug log
        populateTestSelect();
        // Automatically select the first test
        if (tests.length > 0) {
            testSelect.value = tests[0].id;
            currentTest = tests[0];
            displayQuestions();
            updateButtonStates();
            console.log('Auto-selected first test:', tests[0].id); // Debug log
        }
    } catch (error) {
        console.error('Error loading tests:', error);
        document.querySelector(".container").innerHTML += `<p class="warning">Failed to load test data: ${error.message}</p>`;
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
    console.log('Test select populated'); // Debug log
}

// Load voices and set defaults
function loadVoices() {
    voices = synth.getVoices();
    console.log('Voices loaded:', voices); // Debug log
    if (voices.length > 0) {
        setDefaultLanguageAndVoices();
        populateLanguageSelect();
        populateVoiceSelects();
        updateButtonStates();
    } else {
        console.warn('No voices available yet, waiting for onvoiceschanged');
    }
}

// Automatically set language and voices based on browser
function setDefaultLanguageAndVoices() {
    const isChrome = /Chrome/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

    // Set default language to en-US
    languageSelect.value = "en-US";
    console.log('Default language set to en-US'); // Debug log

    // Set default voices
    let maleVoiceName = "";
    let femaleVoiceName = "";

    if (isChrome) {
        maleVoiceName = voices.find(v => v.name === "Google UK English" && v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang === "en-GB")?.name || "";
        femaleVoiceName = voices.find(v => v.name === "Google US English" && v.lang === "en-US")?.name || 
                          voices.find(v => v.lang === "en-US")?.name || "";
    } else if (isSafari) {
        maleVoiceName = voices.find(v => v.name === "Daniel" && v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang === "en-GB")?.name || "";
        femaleVoiceName = voices.find(v => v.name === "Samantha" && v.lang === "en-US")?.name || 
                          voices.find(v => v.lang === "en-US")?.name || "";
    } else {
        // Fallback for other browsers
        maleVoiceName = voices.find(v => v.lang === "en-GB")?.name || "";
        femaleVoiceName = voices.find(v => v.lang === "en-US")?.name || "";
    }

    // Ensure voices are set
    if (maleVoiceName) maleVoiceSelect.value = maleVoiceName;
    if (femaleVoiceName) femaleVoiceSelect.value = femaleVoiceName;

    console.log(`Default voices set: Male=${maleVoiceName}, Female=${femaleVoiceName}`); // Debug log
    saveSettings();
    populateVoiceSelects(); // Ensure selects reflect the set values
}

// Populate language select
function populateLanguageSelect() {
    const languages = [...new Set(voices.map((voice) => voice.lang))].sort();
    languageSelect.innerHTML = '<option value="">Select Language</option>';
    languages.forEach((lang) => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
    if (languages.includes("en-US")) {
        languageSelect.value = "en-US";
    }
    console.log('Language select populated'); // Debug log
}

// Populate voice selects
function populateVoiceSelects() {
    // Male voices (en-GB for Cardiologist)
    maleVoiceSelect.innerHTML = '<option value="">Select Male Voice</option>';
    voices.filter(v => v.lang === "en-GB").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        maleVoiceSelect.appendChild(option);
    });

    // Female voices (en-US for Patient)
    femaleVoiceSelect.innerHTML = '<option value="">Select Female Voice</option>';
    voices.filter(v => v.lang === "en-US").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        femaleVoiceSelect.appendChild(option);
    });

    // Restore defaults or saved voices
    const savedMaleVoice = localStorage.getItem("maleVoice");
    const savedFemaleVoice = localStorage.getItem("femaleVoice");
    if (savedMaleVoice && voices.find(v => v.name === savedMaleVoice)) {
        maleVoiceSelect.value = savedMaleVoice;
    } else {
        const defaultMale = voices.find(v => v.lang === "en-GB")?.name || "";
        maleVoiceSelect.value = defaultMale;
    }
    if (savedFemaleVoice && voices.find(v => v.name === savedFemaleVoice)) {
        femaleVoiceSelect.value = savedFemaleVoice;
    } else {
        const defaultFemale = voices.find(v => v.lang === "en-US")?.name || "";
        femaleVoiceSelect.value = defaultFemale;
    }

    console.log('Voice selects populated:', {
        maleVoice: maleVoiceSelect.value,
        femaleVoice: femaleVoiceSelect.value
    }); // Debug log
}

// Update button states based on selections
function updateButtonStates() {
    const isReady = currentTest && maleVoiceSelect.value && femaleVoiceSelect.value;
    startTestButton.disabled = !isReady;
    viewScriptButton.disabled = !currentTest;
    console.log('Button states updated:', {
        currentTest: !!currentTest,
        maleVoice: maleVoiceSelect.value,
        femaleVoice: femaleVoiceSelect.value,
        startTestButtonDisabled: startTestButton.disabled,
        viewScriptButtonDisabled: viewScriptButton.disabled
    }); // Debug log
}

// Event listeners
testSelect.addEventListener("change", (e) => {
    const testId = Number(e.target.value); // Coerce to number
    currentTest = tests.find(t => t.id === testId);
    if (currentTest) {
        displayQuestions();
        updateButtonStates();
        saveSettings();
    } else {
        resetUI();
    }
    console.log('Test selected:', testId, currentTest); // Debug log
});

languageSelect.addEventListener("change", () => {
    populateVoiceSelects();
    updateButtonStates();
    saveSettings();
    console.log('Language changed:', languageSelect.value); // Debug log
});

maleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
    console.log('Male voice changed:', maleVoiceSelect.value); // Debug log
});

femaleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
    console.log('Female voice changed:', femaleVoiceSelect.value); // Debug log
});

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
    console.log('Settings saved:', {
        language: languageSelect.value,
        maleVoice: maleVoiceSelect.value,
        femaleVoice: femaleVoiceSelect.value,
        repeatCount: repeatCountSelect.value
    }); // Debug log
}

function loadSettings() {
    languageSelect.value = localStorage.getItem("language") || "en-US";
    maleVoiceSelect.value = localStorage.getItem("maleVoice") || "";
    femaleVoiceSelect.value = localStorage.getItem("femaleVoice") || "";
    repeatCountSelect.value = localStorage.getItem("repeatCount") || "1";
    populateVoiceSelects();
    updateButtonStates();
    console.log('Settings loaded'); // Debug log
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
    console.log('Questions displayed for test:', currentTest.id); // Debug log
}

// Collect user answers
function getUserAnswers() {
    currentAnswers = [];
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        currentAnswers.push(input ? input.value.trim().toLowerCase() : '');
    }
    console.log('User answers collected:', currentAnswers); // Debug log
}

// TTS Functions
function startTTS() {
    if (!currentTest || isSpeaking) {
        console.warn('Cannot start TTS:', { currentTest: !!currentTest, isSpeaking }); // Debug log
        return;
    }
    if (!maleVoiceSelect.value || !femaleVoiceSelect.value) {
        alert("Please select male and female voices.");
        console.warn('Voices not selected:', {
            maleVoice: maleVoiceSelect.value,
            femaleVoice: femaleVoiceSelect.value
        }); // Debug log
        return;
    }

    startTestButton.disabled = true;
    isSpeaking = true;
    console.log('Starting TTS for test:', currentTest.id); // Debug log

    // Step 1: Play beep sound
    playBeep(() => {
        // Step 2: Read introduction
        speakText(currentTest.introduction, femaleVoiceSelect.value, () => {
            console.log('Introduction spoken'); // Debug log
            // Step 3: 30 second pause
            setTimeout(() => {
                console.log('30 second pause completed'); // Debug log
                // Step 4: Read script sentences
                speakScript();
            }, 30000);
        });
    });
}

// Simulate beep sound (placeholder for actual audio)
function playBeep(callback) {
    // In a real scenario, play an audio file (e.g., 'beep.mp3')
    console.log('Playing beep sound'); // Debug log
    // Simulate beep duration
    setTimeout(callback, 1000); // Assume beep is 1 second
}

function speakText(text, voiceName, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(v => v.name === voiceName);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log(`Speaking with voice: ${voiceName}`); // Debug log
    } else {
        console.warn(`Voice not found: ${voiceName}, using default`); // Debug log
    }
    utterance.rate = 0.9; // Natural speed
    utterance.onend = () => {
        console.log('Utterance ended'); // Debug log
        if (callback) callback();
    };
    utterance.onerror = (e) => {
        console.error('SpeechSynthesisUtterance error:', e); // Debug log
        isSpeaking = false;
        startTestButton.disabled = false;
    };
    synth.speak(utterance);
}

function speakScript() {
    let index = 0;
    const repeatCount = parseInt(repeatCountSelect.value) || 1;
    console.log(`Speaking script with ${repeatCount} repeats`); // Debug log

    function speakNext() {
        if (index >= currentTest.script.length) {
            isSpeaking = false;
            startTestButton.disabled = false;
            console.log('Script speaking completed'); // Debug log
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

        console.log(`Speaking line ${index + 1}: ${dialogue} (Voice: ${voiceName})`); // Debug log

        // Speak with repeat
        let repeats = 0;
        function repeatUtterance() {
            speakText(dialogue, voiceName, () => {
                repeats++;
                if (repeats < repeatCount) {
                    console.log(`Repeating line ${index + 1}, repeat ${repeats + 1}`); // Debug log
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
    console.log(`Script display toggled: ${isVisible ? 'hidden' : 'shown'}`); // Debug log
}

// Scoring
function scoreAnswers() {
    if (!currentTest) {
        console.warn('No test selected for scoring'); // Debug log
        return;
    }
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
    console.log('Answers scored:', { totalScore, scores }); // Debug log
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
        if (!div.querySelector('span')) { // Prevent duplicate spans
            div.appendChild(span);
        }
        input.disabled = true;
    }
    revealAnswersButton.disabled = true;
    console.log('Answers revealed'); // Debug log
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
    console.log('UI reset'); // Debug log
}

// Init
synth.onvoiceschanged = () => {
    console.log('Voices changed event triggered'); // Debug log
    loadVoices();
    loadSettings();
};

if (!synth) {
    const warning = document.createElement("p");
    warning.textContent = "This browser does not support TTS. Please use a modern browser.";
    warning.className = "warning";
    document.querySelector(".container").prepend(warning);
    startTestButton.disabled = true;
    console.error('TTS not supported'); // Debug log
} else {
    loadTests();
    loadVoices();
    loadSettings();
}
