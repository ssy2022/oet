const itemsPerPage = 30;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];
let oetWritingPhrases = [];

const languageSelect = document.getElementById("language-select");
const voiceSelect = document.getElementById("voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const categorySelect = document.getElementById("category-select");
const hintLengthSelect = document.getElementById("hint-length-select");
const termList = document.getElementById("term-list");

async function loadPhrases() {
  try {
    const response = await fetch('oet_writing_phrases.json');
    if (!response.ok) {
      throw new Error('Failed to load phrases data');
    }
    oetWritingPhrases = await response.json();
    loadVoices();
  } catch (error) {
    console.error('Error loading phrases:', error);
    termList.innerHTML = '<p style="text-align: center; color: #e53e3e;">데이터를 불러오는 데 실패했습니다.</p>';
  }
}

function populateCategorySelect() {
  const categories = [
    ...new Set(oetWritingPhrases.map((item) => item.category)),
  ].sort();
  categorySelect.innerHTML = '<option value="">모든 카테고리</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function populateLanguageSelect() {
  const languages = [...new Set(voices.map((voice) => voice.lang))].sort();
  languageSelect.innerHTML = '<option value="">언어를 선택하세요</option>';
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang;
    languageSelect.appendChild(option);
  });
}

function populateVoiceSelect(selectedLang) {
  voiceSelect.innerHTML = '<option value="">화자를 선택하세요</option>';
  const filteredVoices = voices.filter((voice) => voice.lang === selectedLang);
  filteredVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  voiceSelect.disabled = filteredVoices.length === 0;
}

function renderTermList() {
  termList.innerHTML = "";
  const selectedCategory = categorySelect.value;
  let filteredTerms = selectedCategory
    ? oetWritingPhrases.filter((item) => item.category === selectedCategory)
    : oetWritingPhrases;

  if (filteredTerms.length === 0) {
    termList.innerHTML =
      '<p style="text-align: center; color: #e53e3e;">선택한 카테고리에 해당하는 표현이 없습니다.</p>';
    return;
  }

  const shuffledTerms = shuffleArray([...filteredTerms]);
  const paginatedTerms = shuffledTerms.slice(0, itemsPerPage);
  const hintLength = parseInt(hintLengthSelect.value) || 3;

  paginatedTerms.forEach((item, index) => {
    const termDiv = document.createElement("div");
    termDiv.classList.add("term-item");
    termDiv.title = `${item.term.slice(0, hintLength)}...`;

    const termHeader = document.createElement("div");
    termHeader.classList.add("term-header");

    const termNumber = document.createElement("span");
    termNumber.classList.add("term-number");
    termNumber.textContent = `${index + 1}. `;

    const termText = document.createElement("span");
    termText.classList.add("term-text");
    termText.textContent = item.meaning;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const playButton = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.innerHTML = "<span>재생</span>";
    playButton.addEventListener("click", () => {
      if (!isSpeaking && voiceSelect.value) {
        playButton.disabled = true;
        const repeatCount = parseInt(repeatCountSelect.value) || 1;
        const textToSpeak = item.term;
        speakTerm(textToSpeak, repeatCount);
      } else if (!voiceSelect.value) {
        alert("먼저 언어와 화자를 선택하세요.");
      }
    });

    const hintButton = document.createElement("button");
    hintButton.classList.add("hint-button");
    hintButton.innerHTML = "<span>힌트 보기</span>";
    hintButton.addEventListener("click", () => {
      alert(`힌트: ${item.term.slice(0, hintLength)}...`);
    });

    const revealButton = document.createElement("button");
    revealButton.classList.add("reveal-button");
    revealButton.innerHTML = "<span>정답 보기</span>";
    revealButton.addEventListener("click", () => {
      termText.classList.add("revealed");
      termText.innerHTML = `${item.meaning} <br><span class="english-answer">${item.term}</span> <br><span class="category">${item.category}</span>`;
      revealButton.disabled = true;
    });

    termHeader.appendChild(termNumber);
    termHeader.appendChild(termText);
    buttonContainer.appendChild(playButton);
    buttonContainer.appendChild(hintButton);
    buttonContainer.appendChild(revealButton);
    termDiv.appendChild(termHeader);
    termDiv.appendChild(buttonContainer);
    termList.appendChild(termDiv);
  });

  document.getElementById(
    "term-count"
  ).textContent = `총 문제 수: ${filteredTerms.length}`;
}

function speakTerm(text, repeatCount) {
  let currentCount = 0;
  isSpeaking = true;
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = speechSynthesis
    .getVoices()
    .find((voice) => voice.name === voiceSelect.value);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  utterance.lang = languageSelect.value;
  utterance.onend = () => {
    currentCount++;
    if (currentCount < repeatCount) {
      speechSynthesis.speak(utterance);
    } else {
      isSpeaking = false;
      document
        .querySelectorAll(".play-button")
        .forEach((btn) => (btn.disabled = false));
    }
  };
  speechSynthesis.speak(utterance);
}

function loadVoices() {
  voices = synth.getVoices();
  if (voices.length > 0) {
    populateLanguageSelect();
    populateCategorySelect();

    const savedLang =
      localStorage.getItem("language") ||
      (navigator.platform.includes("Win") ? "en-GB" : "en-AU");
    const savedVoice = localStorage.getItem("voice");
    const savedRepeatCount = localStorage.getItem("repeatCount") || "1";
    const savedCategory = localStorage.getItem("category") || "";
    const savedHintLength = localStorage.getItem("hintLength") || "3";

    repeatCountSelect.value = savedRepeatCount;
    categorySelect.value = savedCategory;
    hintLengthSelect.value = savedHintLength;

    if (voices.find((voice) => voice.lang === savedLang)) {
      languageSelect.value = savedLang;
    } else {
      languageSelect.value =
        navigator.platform.includes("Win") &&
        voices.find((voice) => voice.lang === "en-GB")
          ? "en-GB"
          : voices.find((voice) => voice.lang === "en-AU")
          ? "en-AU"
          : voices[0]?.lang || "";
    }

    if (languageSelect.value) {
      populateVoiceSelect(languageSelect.value);
      if (
        savedVoice &&
        voices.find(
          (voice) =>
            voice.name === savedVoice && voice.lang === languageSelect.value
        )
      ) {
        voiceSelect.value = savedVoice;
      } else if (
        navigator.platform.includes("Win") &&
        voices.find(
          (voice) =>
            voice.name === "Google UK English Female" && voice.lang === "en-GB"
        )
      ) {
        voiceSelect.value = "Google UK English Female";
      } else {
        const gordonVoice = voices.find(
          (voice) =>
            voice.name.toLowerCase().includes("gordon") &&
            voice.lang === "en-AU"
        );
        voiceSelect.value = gordonVoice
          ? gordonVoice.name
          : voices.find((voice) => voice.lang === languageSelect.value)?.name ||
            "";
      }
    }

    renderTermList();
  }
}

synth.onvoiceschanged = () => {
  loadVoices();
};

languageSelect.addEventListener("change", () => {
  const selectedLang = languageSelect.value;
  if (selectedLang) {
    populateVoiceSelect(selectedLang);
    localStorage.setItem("language", selectedLang);
    if (voiceSelect.value) {
      localStorage.setItem("voice", voiceSelect.value);
    }
  } else {
    voiceSelect.innerHTML = '<option value="">먼저 언어를 선택하세요</option>';
    voiceSelect.disabled = true;
  }
  renderTermList();
});

voiceSelect.addEventListener("change", () => {
  if (voiceSelect.value) {
    localStorage.setItem("voice", voiceSelect.value);
  }
});

repeatCountSelect.addEventListener("change", () => {
  localStorage.setItem("repeatCount", repeatCountSelect.value);
});

categorySelect.addEventListener("change", () => {
  localStorage.setItem("category", categorySelect.value);
  renderTermList();
});

hintLengthSelect.addEventListener("change", () => {
  localStorage.setItem("hintLength", hintLengthSelect.value);
  renderTermList();
});

document.getElementById("refresh-button").addEventListener("click", () => {
  renderTermList();
});

document
  .getElementById("refresh-button-bottom")
  .addEventListener("click", () => {
    renderTermList();
  });

if (!synth) {
  const warning = document.createElement("p");
  warning.textContent =
    "이 브라우저는 TTS를 지원하지 않습니다. 최신 브라우저를 사용해 주세요.";
  warning.style.color = "#e53e3e";
  warning.style.textAlign = "center";
  warning.style.marginBottom = "20px";
  document.querySelector(".container").prepend(warning);
  languageSelect.disabled = true;
  voiceSelect.disabled = true;
  repeatCountSelect.disabled = true;
  categorySelect.disabled = true;
  hintLengthSelect.disabled = true;
} else {
  loadPhrases();
}