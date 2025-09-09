// script.js
const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];
let tests = [];
let pauseTimer = null;
let currentScriptIndex = -1; // For highlighting

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
const scriptLines = document.getElementById("script-lines");
const hideScriptButton = document.getElementById("hide-script-button");
const timerSection = document.getElementById("timer-section");
const timerDisplay = document.getElementById("timer-display");
const skipButton = document.getElementById("skip-button");

let currentTest = null;
let currentAnswers = [];
let correctAnswers = [];

// Load tests from JSON
async function loadTests() {
    try {
        const response = await fetch('oet_listening_tests.json');
        if (!response.ok) {
            throw new Error(`Failed to load tests data: ${response.status}`);
        }
        tests = await response.json();
        populateTestSelect();
        if (tests.length > 0) {
            testSelect.value = tests[0].id;
            currentTest = tests[0];
            displayQuestions();
            updateButtonStates();
        }
    } catch (error) {
        console.error('Error loading tests:', error);
        document.querySelector(".container").innerHTML += `<p class="warning">Failed to load test data: ${error.message}</p>`;
    }
}

function populateTestSelect() {
    testSelect.innerHTML = '<option value="">Choose a test</option>';
    tests.forEach((test) => {
        const option = document.createElement("option");
        option.value = test.id;
        option.textContent = test.title;
        testSelect.appendChild(option);
    });
}

function loadVoices() {
    voices = synth.getVoices();
    if (voices.length > 0) {
        setDefaultLanguageAndVoices();
        populateLanguageSelect();
        populateVoiceSelects();
        updateButtonStates();
    }
}

function setDefaultLanguageAndVoices() {
    const isChrome = /Chrome/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

    languageSelect.value = "en-US";

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
        maleVoiceName = voices.find(v => v.lang === "en-GB")?.name || "";
        femaleVoiceName = voices.find(v => v.lang === "en-US")?.name || "";
    }

    if (maleVoiceName) maleVoiceSelect.value = maleVoiceName;
    if (femaleVoiceName) femaleVoiceSelect.value = femaleVoiceName;

    saveSettings();
    populateVoiceSelects();
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
    if (languages.includes("en-US")) {
        languageSelect.value = "en-US";
    }
}

function populateVoiceSelects() {
    maleVoiceSelect.innerHTML = '<option value="">Select Male Voice</option>';
    voices.filter(v => v.lang === "en-GB").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        maleVoiceSelect.appendChild(option);
    });

    femaleVoiceSelect.innerHTML = '<option value="">Select Female Voice</option>';
    voices.filter(v => v.lang === "en-US").forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        femaleVoiceSelect.appendChild(option);
    });

    // Restore or set defaults
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
}

function updateButtonStates() {
    const isReady = currentTest && maleVoiceSelect.value && femaleVoiceSelect.value;
    startTestButton.disabled = !isReady;
    viewScriptButton.disabled = !currentTest;
    scoreButton.disabled = !currentTest;
    revealAnswersButton.disabled = !currentTest;
}

testSelect.addEventListener("change", (e) => {
    const testId = Number(e.target.value);
    currentTest = tests.find(t => t.id === testId);
    if (currentTest) {
        displayQuestions();
        updateButtonStates();
        saveSettings();
    } else {
        resetUI();
    }
});

languageSelect.addEventListener("change", () => {
    populateVoiceSelects();
    updateButtonStates();
    saveSettings();
});

maleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
});

femaleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
});

repeatCountSelect.addEventListener("change", () => saveSettings());

startTestButton.addEventListener("click", startTTS);
viewScriptButton.addEventListener("click", toggleScript);
scoreButton.addEventListener("click", scoreAnswers);
revealAnswersButton.addEventListener("click", revealAnswers);
hideScriptButton.addEventListener("click", toggleScript);

skipButton.addEventListener("click", () => {
    if (pauseTimer) {
        clearInterval(pauseTimer);
    }
    timerSection.style.display = "none";
    speakScript();
});

function saveSettings() {
    localStorage.setItem("language", languageSelect.value);
    localStorage.setItem("maleVoice", maleVoiceSelect.value);
    localStorage.setItem("femaleVoice", femaleVoiceSelect.value);
    localStorage.setItem("repeatCount", repeatCountSelect.value);
}

function loadSettings() {
    languageSelect.value = localStorage.getItem("language") || "en-US";
    maleVoiceSelect.value = localStorage.getItem("maleVoice") || "";
    femaleVoiceSelect.value = localStorage.getItem("femaleVoice") || "";
    repeatCountSelect.value = localStorage.getItem("repeatCount") || "1";
    populateVoiceSelects();
    updateButtonStates();
}

function displayQuestions() {
    if (!currentTest) return;

    introText.innerHTML = currentTest.introduction;
    introText.style.display = "block";

    // Improved questions display with line breaks
    const questionsHtml = currentTest.questions.map(q => {
        return q.split('\n').map(line => `<div class="question-line">${line}</div>`).join('');
    }).join('');
    questionsDisplay.innerHTML = questionsHtml;
    notesPreview.style.display = "block";

    // Answer form with structured inputs
    answerForm.innerHTML = '';
    currentTest.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-container';
        div.innerHTML = `
            <label>${index + 1}.</label>
            <input type="text" class="note-input" id="ans${index}" placeholder="Enter your answer here">
        `;
        answerForm.appendChild(div);
    });
    answerForm.style.display = "block";
    scoreButton.disabled = false;
    revealAnswersButton.disabled = false;

    document.getElementById("term-count").textContent = `Total Questions: ${currentTest.answers.length}`;
}

function getUserAnswers() {
    currentAnswers = [];
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        currentAnswers.push(input ? input.value.trim().toLowerCase() : '');
    }
}

function startTTS() {
    if (!currentTest || isSpeaking) return;
    if (!maleVoiceSelect.value || !femaleVoiceSelect.value) {
        alert("Please select male and female voices.");
        return;
    }

    startTestButton.disabled = true;
    isSpeaking = true;

    // Step 1: Play beep
    playBeep(() => {
        // Step 2: Read introduction
        speakText(currentTest.introduction, femaleVoiceSelect.value, () => {
            // Step 3: Show timer for 30s pause
            startPreviewTimer();
        });
    });
}

function startPreviewTimer() {
    timerSection.style.display = "block";
    let timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    pauseTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(pauseTimer);
            timerSection.style.display = "none";
            speakScript();
        }
    }, 1000);
}

function playBeep(callback) {
    console.log('Playing beep sound');
    setTimeout(callback, 1000);
}

function speakText(text, voiceName, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(v => v.name === voiceName);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = 0.9;
    utterance.onend = () => {
        if (callback) callback();
    };
    utterance.onerror = (e) => {
        console.error('TTS error:', e);
        isSpeaking = false;
        startTestButton.disabled = false;
    };
    synth.speak(utterance);
}

function speakScript() {
    let index = 0;
    const repeatCount = parseInt(repeatCountSelect.value) || 1;
    currentScriptIndex = 0; // Reset for highlighting

    function speakNext() {
        if (index >= currentTest.script.length) {
            isSpeaking = false;
            startTestButton.disabled = false;
            highlightScriptLine(-1); // Remove highlight
            return;
        }

        const line = currentTest.script[index];
        // Improved label removal: Use test-specific speakers
        const maleLabel = currentTest.maleSpeaker + ':';
        const femaleLabel = currentTest.femaleSpeaker + ':';
        let dialogue = line.replace(new RegExp(`^(${maleLabel}|${femaleLabel})\\s*`, 'i'), '').trim();
        if (!dialogue) {
            index++;
            speakNext();
            return;
        }

        // Determine voice
        let voiceName = "";
        if (line.toLowerCase().includes(currentTest.maleSpeaker.toLowerCase())) {
            voiceName = maleVoiceSelect.value;
        } else if (line.toLowerCase().includes(currentTest.femaleSpeaker.toLowerCase())) {
            voiceName = femaleVoiceSelect.value;
        }

        // Highlight current line if script is visible
        currentScriptIndex = index;
        highlightScriptLine(index);

        let repeats = 0;
        function repeatUtterance() {
            speakText(dialogue, voiceName, () => {
                repeats++;
                if (repeats < repeatCount) {
                    setTimeout(repeatUtterance, 500);
                } else {
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

function highlightScriptLine(index) {
    if (scriptDisplay.style.display === "none") return;
    document.querySelectorAll('.script-line').forEach(line => line.classList.remove('highlight'));
    if (index >= 0) {
        const lineElement = document.querySelector(`.script-line[data-index="${index}"]`);
        if (lineElement) lineElement.classList.add('highlight');
    }
}

function toggleScript() {
    const isVisible = scriptDisplay.style.display !== "none";
    scriptDisplay.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
        renderScriptLines();
    }
    viewScriptButton.textContent = isVisible ? "View Script" : "Hide Script";
    hideScriptButton.style.display = isVisible ? "none" : "block";
}

function renderScriptLines() {
    scriptLines.innerHTML = '';
    currentTest.script.forEach((line, index) => {
        const p = document.createElement('p');
        p.className = 'script-line';
        p.dataset.index = index;
        p.textContent = line;
        scriptLines.appendChild(p);
    });
    // Highlight current if speaking
    if (isSpeaking && currentScriptIndex >= 0) {
        highlightScriptLine(currentScriptIndex);
    }
}

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
        const points = similarity >= 0.8 ? 1 : 0;
        totalScore += points;
        scores.push({ index: i + 1, similarity: Math.round(similarity * 100), points });
    }

    scoreText.textContent = `Score: ${totalScore} out of ${currentTest.answers.length}`;
    detailedScores.innerHTML = scores.map(s => `<p>Q${s.index}: ${s.similarity}% (${s.points ? 'Correct' : 'Incorrect'})</p>`).join('');
    results.style.display = "block";
}

function calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const words1 = str1.split(/\s+/).filter(w => w.length > 0);
    const words2 = str2.split(/\s+/).filter(w => w.length > 0);
    if (words1.length === 0 && words2.length === 0) return 1;
    const intersection = words1.filter(w1 => words2.includes(w1)).length;
    return intersection / Math.max(words1.length, words2.length);
}

function revealAnswers() {
    scoreAnswers();
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        const div = input.parentElement;
        const correct = currentTest.answers[i];
        let span = div.querySelector('span');
        if (!span) {
            span = document.createElement('span');
            div.appendChild(span);
        }
        span.textContent = ` (Correct: ${correct})`;
        span.className = currentAnswers[i] === correctAnswers[i] ? 'correct' : 'incorrect';
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
    timerSection.style.display = "none";
    currentTest = null;
    if (pauseTimer) clearInterval(pauseTimer);
    currentScriptIndex = -1;
    highlightScriptLine(-1);
}

synth.onvoiceschanged = () => {
    loadVoices();
    loadSettings();
};

if (!synth) {
    document.querySelector(".container").innerHTML = '<p class="warning">This browser does not support TTS. Please use a modern browser.</p>';
    startTestButton.disabled = true;
} else {
    loadTests();
    loadVoices();
    loadSettings();
}
