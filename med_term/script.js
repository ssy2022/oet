const itemsPerPage = 30;

// 배열 섞기 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// TTS 초기화
const synth = window.speechSynthesis;
let isSpeaking = false;
let voices = [];

// DOM 요소
const modeSelect = document.getElementById("mode-select");
const languageSelect = document.getElementById("language-select");
const voiceSelect = document.getElementById("voice-select");
const repeatCountSelect = document.getElementById("repeat-count");
const termList = document.getElementById("term-list");

// 언어 목록 생성
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

// 화자 목록 생성 및 기본 화자 설정
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

// 용어/문장 목록 렌더링 (페이지당 30개, 번호 추가, 네이버 사전 버튼, 반응형)
function renderTermList(mode, medicalTerms) {
  termList.innerHTML = "";
  const shuffledTerms = shuffleArray([...medicalTerms]);
  const paginatedTerms = shuffledTerms.slice(0, itemsPerPage);
  paginatedTerms.forEach((item, index) => {
    const termDiv = document.createElement("div");
    termDiv.classList.add("term-item");
    termDiv.title = `힌트: ${item.term.slice(0, 3)}...`;

    const termHeader = document.createElement("div");
    termHeader.classList.add("term-header");

    const termNumber = document.createElement("span");
    termNumber.classList.add("term-number");
    termNumber.textContent = `${index + 1}. `;

    const termText = document.createElement("span");
    termText.classList.add(
      "term-text",
      mode === "sentence" ? "sentence-mode" : "word-mode",
      "hidden"
    );
    termText.textContent = mode === "sentence" ? item.sentence : "___________";
    termText.addEventListener("click", () => {
      termText.classList.remove("hidden", "word-mode", "sentence-mode");
      termText.classList.add("revealed");
      termText.textContent =
        mode === "sentence"
          ? `${item.right_sentence} (${item.term} ${item.meaning})`
          : `${item.term}: ${item.meaning}`;
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const playButton = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.innerHTML = "<span>재생</span>";
    playButton.addEventListener("click", () => {
      if (!isSpeaking && voiceSelect.value) {
        playButton.disabled = true;
        const repeatCount = parseInt(repeatCountSelect.value) || 1;
        const textToSpeak =
          mode === "sentence" ? item.right_sentence : item.term;
        speakTerm(textToSpeak, repeatCount);
      } else if (!voiceSelect.value) {
        alert("먼저 언어와 화자를 선택하세요.");
      }
    });

    const naverDictButton = document.createElement("a");
    naverDictButton.classList.add("naver-dict-button");
    naverDictButton.innerHTML = "<span>네이버 사전</span>";
    naverDictButton.href = `https://dict.naver.com/dict.search?dicQuery=${encodeURIComponent(
      item.term
    )}&query=${encodeURIComponent(
      item.term
    )}&target=dic&ie=utf8&query_utf&isOnlyViewEE`;
    naverDictButton.target = "_blank";

    termHeader.appendChild(termNumber);
    termHeader.appendChild(termText);
    buttonContainer.appendChild(playButton);
    buttonContainer.appendChild(naverDictButton);
    termDiv.appendChild(termHeader);
    termDiv.appendChild(buttonContainer);
    termList.appendChild(termDiv);
  });
}

// 음성 재생 후 버튼 활성화
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

// JSON 데이터 로드 및 음성 초기화
async function loadDataAndVoices() {
  try {
    const response = await fetch('medicalTerms.json');
    if (!response.ok) {
      throw new Error('Failed to load medical terms');
    }
    const medicalTerms = await response.json();

    voices = synth.getVoices();
    if (voices.length > 0) {
      populateLanguageSelect();

      const savedMode = localStorage.getItem("mode") || "sentence";
      const savedLang =
        localStorage.getItem("language") ||
        (navigator.platform.includes("Win") ? "en-GB" : "en-AU");
      const savedVoice = localStorage.getItem("voice");
      const savedRepeatCount = localStorage.getItem("repeatCount") || "1";

      modeSelect.value = savedMode;
      repeatCountSelect.value = savedRepeatCount;

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

      document.getElementById(
        "term-count"
      ).textContent = `총 문제 수: ${medicalTerms.length}`;
      renderTermList(modeSelect.value, medicalTerms);
    }
  } catch (error) {
    console.error('Error loading medical terms:', error);
    document.getElementById("term-count").textContent = "데이터 로드 실패";
  }
}

// 음성 비동기 로드 처리
synth.onvoiceschanged = () => {
  loadDataAndVoices();
};

// 언어 변경 시 화자 목록 업데이트 및 저장
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
});

// 화자 변경 시 저장
voiceSelect.addEventListener("change", () => {
  if (voiceSelect.value) {
    localStorage.setItem("voice", voiceSelect.value);
  }
});

// 모드 변경 시 저장 및 목록 갱신
modeSelect.addEventListener("change", async () => {
  localStorage.setItem("mode", modeSelect.value);
  const response = await fetch('medicalTerms.json');
  const medicalTerms = await response.json();
  renderTermList(modeSelect.value, medicalTerms);
});

// 재생 횟수 변경 시 저장
repeatCountSelect.addEventListener("change", () => {
  localStorage.setItem("repeatCount", repeatCountSelect.value);
});

// 새로고침 버튼 이벤트
document.getElementById("refresh-button").addEventListener("click", async () => {
  const response = await fetch('medicalTerms.json');
  const medicalTerms = await response.json();
  renderTermList(modeSelect.value, medicalTerms);
});

// 하단 새로고침 버튼 이벤트 
document.getElementById("refresh-button-bottom").addEventListener("click", async () => {
  const response = await fetch('medicalTerms.json');
  const medicalTerms = await response.json();
  renderTermList(modeSelect.value, medicalTerms);
});

// TTS 지원 여부 확인
if (!synth) {
  const warning = document.createElement("p");
  warning.textContent =
    "이 브라우저는 TTS를 지원하지 않습니다. 최신 브라우저를 사용해 주세요.";
  warning.style.color = "#e53e3e";
  warning.style.textAlign = "center";
  warning.style.marginBottom = "20px";
  document.querySelector(".container").prepend(warning);
  modeSelect.disabled = true;
  languageSelect.disabled = true;
  voiceSelect.disabled = true;
  repeatCountSelect.disabled = true;
} else {
  loadDataAndVoices();
}