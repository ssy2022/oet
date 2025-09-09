const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];
let tests = [];
let pauseTimer = null;
let currentScriptIndex = -1;
let skipIntroduction = false;

const testSelect = document.getElementById("test-select");
const languageSelect = document.getElementById("language-select");
const maleVoiceSelect = document.getElementById("male-voice-select");
const femaleVoiceSelect = document.getElementById("female-voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const startTestButton = document.getElementById("start-test-button");
const skipIntroButton = document.getElementById("skip-intro-button");
const viewScriptButton = document.getElementById("view-script-button");
const scoreButton = document.getElementById("score-button");
const revealAnswersButton = document.getElementById("reveal-answers-button");
const introText = document.getElementById("intro-text");
const notesPreview = document.getElementById("notes-preview");
const notesForm = document.getElementById("notes-form");
const results = document.getElementById("results");
const scoreText = document.getElementById("score-text");
const detailedScores = document.getElementById("detailed-scores");
const scriptDisplay = document.getElementById("script-display");
const scriptLines = document.getElementById("script-lines");
const hideScriptButton = document.getElementById("hide-script-button");
const timerSection = document.getElementById("timer-section");
const timerDisplay = document.getElementById("timer-display");
const skipPauseButton = document.getElementById("skip-pause-button");

let currentTest = null;
let currentAnswers = [];
let correctAnswers = [];

async function loadTests() {
    try {
        const response = await fetch('oet_listening_tests.json');
        if (!response.ok) {
            throw new Error(`Failed to load tests data: ${response.status}`);
        }
        tests = await response.json();
        console.log('Tests loaded:', tests);
        populateTestSelect();
        if (tests.length > 0) {
            testSelect.value = tests[0].id;
            currentTest = tests[0];
            displayQuestions();
            updateButtonStates();
            console.log('Auto-selected first test:', tests[0].id);
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
    console.log('Test select populated');
}

function loadVoices() {
    voices = synth.getVoices();
    console.log('Voices loaded:', voices);
    if (voices.length > 0) {
        setDefaultLanguageAndVoices();
        populateLanguageSelect();
        populateVoiceSelects();
        updateButtonStates();
    } else {
        console.warn('No voices available yet, waiting for onvoiceschanged');
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
                        voices.find(v => v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang.includes("en"))?.name || "";
        femaleVoiceName = voices.find(v => v.name === "Google US English" && v.lang === "en-US")?.name || 
                          voices.find(v => v.lang === "en-US")?.name || 
                          voices.find(v => v.lang.includes("en"))?.name || "";
    } else if (isSafari) {
        maleVoiceName = voices.find(v => v.name === "Daniel" && v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang.includes("en"))?.name || "";
        femaleVoiceName = voices.find(v => v.name === "Samantha" && v.lang === "en-US")?.name || 
                          voices.find(v => v.lang === "en-US")?.name || 
                          voices.find(v => v.lang.includes("en"))?.name || "";
    } else {
        maleVoiceName = voices.find(v => v.lang === "en-GB")?.name || 
                        voices.find(v => v.lang.includes("en"))?.name || "";
        femaleVoiceName = voices.find(v => v.lang === "en-US")?.name || 
                          voices.find(v => v.lang.includes("en"))?.name || "";
    }

    maleVoiceSelect.value = maleVoiceName;
    femaleVoiceSelect.value = femaleVoiceName;

    console.log(`Default voices set: Male=${maleVoiceName}, Female=${femaleVoiceName}`);
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
    console.log('Language select populated');
}

function populateVoiceSelects() {
    maleVoiceSelect.innerHTML = '<option value="">Select Male Voice</option>';
    voices.filter(v => v.lang.includes("en")).forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        maleVoiceSelect.appendChild(option);
    });

    femaleVoiceSelect.innerHTML = '<option value="">Select Female Voice</option>';
    voices.filter(v => v.lang.includes("en")).forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = voice.name;
        femaleVoiceSelect.appendChild(option);
    });

    const savedMaleVoice = localStorage.getItem("maleVoice");
    const savedFemaleVoice = localStorage.getItem("femaleVoice");
    if (savedMaleVoice && voices.find(v => v.name === savedMaleVoice)) {
        maleVoiceSelect.value = savedMaleVoice;
    } else {
        const defaultMale = voices.find(v => v.lang === "en-GB")?.name || 
                           voices.find(v => v.lang.includes("en"))?.name || "";
        maleVoiceSelect.value = defaultMale;
    }
    if (savedFemaleVoice && voices.find(v => v.name === savedFemaleVoice)) {
        femaleVoiceSelect.value = savedFemaleVoice;
    } else {
        const defaultFemale = voices.find(v => v.lang === "en-US")?.name || 
                             voices.find(v => v.lang.includes("en"))?.name || "";
        femaleVoiceSelect.value = defaultFemale;
    }
    console.log('Voice selects populated:', {
        maleVoice: maleVoiceSelect.value,
        femaleVoice: femaleVoiceSelect.value
    });
}

function updateButtonStates() {
    const isReady = currentTest && maleVoiceSelect.value && femaleVoiceSelect.value;
    startTestButton.disabled = !isReady;
    skipIntroButton.disabled = !isReady || !isSpeaking;
    viewScriptButton.disabled = !currentTest;
    scoreButton.disabled = !currentTest;
    revealAnswersButton.disabled = !currentTest;
    console.log('Button states updated:', {
        currentTest: !!currentTest,
        maleVoice: maleVoiceSelect.value,
        femaleVoice: femaleVoiceSelect.value,
        startTestButtonDisabled: startTestButton.disabled,
        skipIntroButtonDisabled: skipIntroButton.disabled
    });
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
    console.log('Test selected:', testId, currentTest);
});

languageSelect.addEventListener("change", () => {
    populateVoiceSelects();
    updateButtonStates();
    saveSettings();
    console.log('Language changed:', languageSelect.value);
});

maleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
    console.log('Male voice changed:', maleVoiceSelect.value);
});

femaleVoiceSelect.addEventListener("change", () => {
    updateButtonStates();
    saveSettings();
    console.log('Female voice changed:', femaleVoiceSelect.value);
});

repeatCountSelect.addEventListener("change", () => saveSettings());

startTestButton.addEventListener("click", startTTS);
skipIntroButton.addEventListener("click", () => {
    skipIntroduction = true;
    synth.cancel();
    startPreviewTimer();
    console.log('Introduction skipped');
});
viewScriptButton.addEventListener("click", toggleScript);
scoreButton.addEventListener("click", scoreAnswers);
revealAnswersButton.addEventListener("click", revealAnswers);
hideScriptButton.addEventListener("click", toggleScript);
skipPauseButton.addEventListener("click", () => {
    if (pauseTimer) {
        clearInterval(pauseTimer);
    }
    timerSection.style.display = "none";
    speakScript();
    console.log('Preview pause skipped');
});

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
    });
}

function loadSettings() {
    languageSelect.value = localStorage.getItem("language") || "en-US";
    maleVoiceSelect.value = localStorage.getItem("maleVoice") || "";
    femaleVoiceSelect.value = localStorage.getItem("femaleVoice") || "";
    repeatCountSelect.value = localStorage.getItem("repeatCount") || "1";
    populateVoiceSelects();
    updateButtonStates();
    console.log('Settings loaded');
}

function displayQuestions() {
    if (!currentTest) return;

    introText.innerHTML = currentTest.introduction;
    introText.style.display = "block";

    notesForm.innerHTML = '';
    let inputIndex = 0;
    currentTest.questions.forEach((questionBlock) => {
        questionBlock.split('\n').forEach((line) => {
            const div = document.createElement('div');
            div.className = 'question-line';
            if (line.includes('________________')) {
                const parts = line.split('________________');
                div.innerHTML = `
                    ${parts[0]}<input type="text" class="note-input" id="ans${inputIndex}" placeholder="Enter answer" data-index="${inputIndex}">${parts[1] || ''}
                `;
                inputIndex++;
            } else {
                div.textContent = line;
            }
            notesForm.appendChild(div);
        });
    });
    notesPreview.style.display = "block";

    document.getElementById("term-count").textContent = `Total Questions: ${currentTest.answers.length}`;
    console.log('Questions displayed for test:', currentTest.id);
}

function getUserAnswers() {
    currentAnswers = [];
    for (let i = 0; i < currentTest.answers.length; i++) {
        const input = document.getElementById(`ans${i}`);
        currentAnswers.push(input ? input.value.trim().toLowerCase() : '');
    }
    console.log('User answers collected:', currentAnswers);
}

function startTTS() {
    if (!currentTest || isSpeaking) {
        console.warn('Cannot start TTS:', { currentTest: !!currentTest, isSpeaking });
        return;
    }
    if (!maleVoiceSelect.value || !femaleVoiceSelect.value) {
        alert("Please select male and female voices.");
        console.warn('Voices not selected:', {
            maleVoice: maleVoiceSelect.value,
            femaleVoice: femaleVoiceSelect.value
        });
        return;
    }

    startTestButton.disabled = true;
    skipIntroButton.disabled = false;
    isSpeaking = true;
    skipIntroduction = false;

    playBeep(() => {
        if (skipIntroduction) {
            startPreviewTimer();
        } else {
            speakText(currentTest.introduction, femaleVoiceSelect.value, () => {
                console.log('Introduction spoken');
                startPreviewTimer();
            });
        }
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
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log(`Speaking with voice: ${voiceName}`);
    } else {
        console.warn(`Voice not found: ${voiceName}, using default`);
    }
    utterance.rate = 0.9;
    utterance.onend = () => {
        console.log('Utterance ended');
        if (callback) callback();
    };
    utterance.onerror = (e) => {
        console.error('SpeechSynthesisUtterance error:', e);
        isSpeaking = false;
        startTestButton.disabled = false;
        skipIntroButton.disabled = true;
    };
    synth.speak(utterance);
}

function speakScript() {
    let index = 0;
    const repeatCount = parseInt(repeatCountSelect.value) || 1;
    currentScriptIndex = 0;
    console.log(`Speaking script with ${repeatCount} repeats`);

    function speakNext() {
        if (index >= currentTest.script.length) {
            isSpeaking = false;
            startTestButton.disabled = false;
            skipIntroButton.disabled = true;
            highlightScriptLine(-1);
            console.log('Script speaking completed');
            return;
        }

        const line = currentTest.script[index];
        const maleLabel = currentTest.maleSpeaker + ':';
        const femaleLabel = currentTest.femaleSpeaker + ':';
        const dialogue = line.replace(new RegExp(`^(${maleLabel}|${femaleLabel})\\s*`, 'i'), '').trim();
        if (!dialogue) {
            index++;
            speakNext();
            return;
        }

        let voiceName = "";
        if (line.toLowerCase().includes(currentTest.maleSpeaker.toLowerCase())) {
            voiceName = maleVoiceSelect.value;
        } else if (line.toLowerCase().includes(currentTest.femaleSpeaker.toLowerCase())) {
            voiceName = femaleVoiceSelect.value;
        }

        currentScriptIndex = index;
        highlightScriptLine(index);
        console.log(`Speaking line ${index + 1}: ${dialogue} (Voice: ${voiceName})`);

        let repeats = 0;
        function repeatUtterance() {
            speakText(dialogue, voiceName, () => {
                repeats++;
                if (repeats < repeatCount) {
                    console.log(`Repeating line ${index + 1}, repeat ${repeats + 1}`);
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
        if (lineElement) {
            lineElement.classList.add('highlight');
            lineElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
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
    console.log(`Script display toggled: ${isVisible ? 'hidden' : 'shown'}`);
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
    if (isSpeaking && currentScriptIndex >= 0) {
        highlightScriptLine(currentScriptIndex);
    }
}

function scoreAnswers() {
    if (!currentTest) {
        console.warn('No test selected for scoring');
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
        const points = similarity >= 0.8 ? 1 : 0;
        totalScore += points;
        scores.push({ index: i + 1, similarity: Math.round(similarity * 100), points });
    }

    scoreText.textContent = `Score: ${totalScore} out of ${currentTest.answers.length}`;
    detailedScores.innerHTML = scores.map(s => `<p>Q${s.index}: ${s.similarity}% (${s.points ? 'Correct' : 'Incorrect'})</p>`).join('');
    results.style.display = "block";
    console.log('Answers scored:', { totalScore, scores });
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
        let span = div.querySelector('span');
        if (!span) {
            span = document.createElement('span');
            div.appendChild(span);
        }
        span.textContent = ` (Correct: ${currentTest.answers[i]})`;
        span.className = currentAnswers[i] === correctAnswers[i] ? 'correct' : 'incorrect';
        input.disabled = true;
    }
    revealAnswersButton.disabled = true;
    console.log('Answers revealed');
}

function resetUI() {
    startTestButton.disabled = true;
    skipIntroButton.disabled = true;
    viewScriptButton.disabled = true;
    scoreButton.disabled = true;
    revealAnswersButton.disabled = true;
    introText.style.display = "none";
    notesPreview.style.display = "none";
    results.style.display = "none";
    scriptDisplay.style.display = "none";
    timerSection.style.display = "none";
    currentTest = null;
    if (pauseTimer) clearInterval(pauseTimer);
    currentScriptIndex = -1;
    highlightScriptLine(-1);
    skipIntroduction = false;
    console.log('UI reset');
}

synth.onvoiceschanged = () => {
    console.log('Voices changed event triggered');
    loadVoices();
    loadSettings();
};

if (!synth) {
    document.querySelector(".container").innerHTML = '<p class="warning">This browser does not support TTS. Please use a modern browser.</p>';
    startTestButton.disabled = true;
    skipIntroButton.disabled = true;
} else {
    loadTests();
    loadVoices();
    loadSettings();
}