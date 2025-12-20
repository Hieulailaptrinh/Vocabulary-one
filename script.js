// --- DỮ LIỆU TỪ VỰNG MỚI (80 TỪ - Đợt 4) ---
const vocabularyData = [
  {
    id: 1,
    word: "wait in line",
    ipa: "/weɪt ɪn laɪn/",
    meaning: "xếp hàng",
    example: "We had to wait in line for hours.",
  },
  {
    id: 2,
    word: "wipe off",
    ipa: "/waɪp ɒf/",
    meaning: "loại bỏ, lau sạch",
    example: "Please wipe the dirt off your shoes.",
  },
  {
    id: 3,
    word: "throw away",
    ipa: "/θrəʊ əˈweɪ/",
    meaning: "vứt bỏ",
    example: "Don't throw away recyclable items.",
  },
  {
    id: 4,
    word: "shovel",
    ipa: "/ˈʃʌv.əl/",
    meaning: "cái xẻng / xúc (đất/tuyết)",
    example: "He used a shovel to clear the snow.",
  },
  {
    id: 5,
    word: "rearrange",
    ipa: "/ˌriː.əˈreɪndʒ/",
    meaning: "sắp xếp lại",
    example: "Let's rearrange the furniture in the living room.",
  },
  {
    id: 6,
    word: "vehicle",
    ipa: "/ˈvɪə.kəl/",
    meaning: "phương tiện",
    example: "This vehicle is electric.",
  },
  {
    id: 7,
    word: "rack",
    ipa: "/ræk/",
    meaning: "giá đỡ",
    example: "Place the magazines on the rack.",
  },
  {
    id: 8,
    word: "stack",
    ipa: "/stæk/",
    meaning: "chồng, đống",
    example: "There is a stack of books on the desk.",
  },
  {
    id: 9,
    word: "sweep",
    ipa: "/swiːp/",
    meaning: "quét",
    example: "She sweeps the floor every morning.",
  },
  {
    id: 10,
    word: "material",
    ipa: "/məˈtɪə.ri.əl/",
    meaning: "vật liệu",
    example: "The material is soft and durable.",
  },
  {
    id: 11,
    word: "mostly",
    ipa: "/ˈməʊst.li/",
    meaning: "đa số, hầu hết",
    example: "The guests were mostly friends of the bride.",
  },
  {
    id: 12,
    word: "tenant",
    ipa: "/ˈten.ənt/",
    meaning: "khách thuê",
    example: "The tenant complained about the noise.",
  },
  {
    id: 13,
    word: "vendor",
    ipa: "/ˈven.dər/",
    meaning: "người bán, nhà cung cấp",
    example: "We bought food from a street vendor.",
  },
  {
    id: 14,
    word: "maintenance",
    ipa: "/ˈmeɪn.tən.əns/",
    meaning: "sự bảo trì",
    example: "The machine needs regular maintenance.",
  },
  {
    id: 15,
    word: "personnel",
    ipa: "/ˌpɜː.sənˈel/",
    meaning: "nhân sự",
    example: "All personnel must wear ID badges.",
  },
  {
    id: 16,
    word: "division",
    ipa: "/dɪˈvɪʒ.ən/",
    meaning: "bộ phận, sự phân chia",
    example: "He works in the sales division.",
  },
  {
    id: 17,
    word: "corridor",
    ipa: "/ˈkɒr.ɪ.dɔːr/",
    meaning: "hành lang",
    example: "Her office is at the end of the corridor.",
  },
  {
    id: 18,
    word: "achieve",
    ipa: "/əˈtʃiːv/",
    meaning: "đạt được",
    example: "She worked hard to achieve her goals.",
  },
  {
    id: 19,
    word: "turn out",
    ipa: "/tɜːn aʊt/",
    meaning: "hoá ra / tham dự",
    example: "It turned out to be a nice day.",
  },
  {
    id: 20,
    word: "available",
    ipa: "/əˈveɪ.lə.bəl/",
    meaning: "có sẵn",
    example: "Is this seat available?",
  },
  {
    id: 21,
    word: "prototype",
    ipa: "/ˈprəʊ.tə.taɪp/",
    meaning: "nguyên mẫu",
    example: "They tested the prototype of the new car.",
  },
  {
    id: 22,
    word: "nominate",
    ipa: "/ˈnɒm.ɪ.neɪt/",
    meaning: "đề cử",
    example: "He was nominated for the award.",
  },
  {
    id: 23,
    word: "organize",
    ipa: "/ˈɔː.ɡən.aɪz/",
    meaning: "tổ chức",
    example: "Who will organize the party?",
  },
  {
    id: 24,
    word: "prescription",
    ipa: "/prɪˈskrɪp.ʃən/",
    meaning: "đơn thuốc",
    example: "The doctor gave me a prescription.",
  },
  {
    id: 25,
    word: "fundraiser",
    ipa: "/ˈfʌndˌreɪ.zər/",
    meaning: "sự kiện/người gây quỹ",
    example: "We are holding a fundraiser for the school.",
  },
  {
    id: 26,
    word: "merchandise",
    ipa: "/ˈmɜː.tʃən.daɪz/",
    meaning: "hàng hóa",
    example: "The shop displays its merchandise well.",
  },
  {
    id: 27,
    word: "accounting",
    ipa: "/əˈkaʊn.tɪŋ/",
    meaning: "kế toán",
    example: "She is studying accounting.",
  },
  {
    id: 28,
    word: "invoice",
    ipa: "/ˈɪn.vɔɪs/",
    meaning: "hóa đơn",
    example: "Please send the invoice to my email.",
  },
  {
    id: 29,
    word: "authorize",
    ipa: "/ˈɔː.θər.aɪz/",
    meaning: "cấp quyền, cho phép",
    example: "Who authorized this payment?",
  },
  {
    id: 30,
    word: "uneventful",
    ipa: "/ˌʌn.ɪˈvent.fəl/",
    meaning: "không có gì đặc biệt/yên bình",
    example: "The flight was smooth and uneventful.",
  },
  {
    id: 31,
    word: "behind schedule",
    ipa: "/bɪˈhaɪnd ˈʃed.juːl/",
    meaning: "chậm tiến độ",
    example: "The project is two weeks behind schedule.",
  },
  {
    id: 32,
    word: "hospitality",
    ipa: "/ˌhɒs.pɪˈtæl.ə.ti/",
    meaning: "sự hiếu khách / ngành dịch vụ",
    example: "Thank you for your hospitality.",
  },
  {
    id: 33,
    word: "meteorology",
    ipa: "/ˌmiː.ti.əˈrɒl.ə.dʒi/",
    meaning: "khí tượng học",
    example: "He is interested in meteorology and weather.",
  },
  {
    id: 34,
    word: "absent",
    ipa: "/ˈæb.sənt/",
    meaning: "vắng mặt",
    example: "He was absent from work yesterday.",
  },
  {
    id: 35,
    word: "stamp",
    ipa: "/stæmp/",
    meaning: "con tem",
    example: "Put a stamp on the envelope.",
  },
  {
    id: 36,
    word: "retirement",
    ipa: "/rɪˈtaɪə.mənt/",
    meaning: "sự nghỉ hưu",
    example: "He is enjoying his retirement.",
  },
  {
    id: 37,
    word: "demonstrate",
    ipa: "/ˈdem.ən.streɪt/",
    meaning: "chứng minh, minh hoạ",
    example: "Let me demonstrate how it works.",
  },
  {
    id: 38,
    word: "compact",
    ipa: "/kəmˈpækt/",
    meaning: "nhỏ gọn",
    example: "This camera is very compact.",
  },
  {
    id: 39,
    word: "registration",
    ipa: "/ˌredʒ.ɪˈstreɪ.ʃən/",
    meaning: "sự đăng ký",
    example: "Complete the registration form online.",
  },
  {
    id: 40,
    word: "reduction",
    ipa: "/rɪˈdʌk.ʃən/",
    meaning: "sự giảm",
    example: "There was a reduction in price.",
  },
  {
    id: 41,
    word: "ingredient",
    ipa: "/ɪnˈɡriː.di.ənt/",
    meaning: "nguyên liệu, thành phần",
    example: "Mix all the ingredients together.",
  },
  {
    id: 42,
    word: "entirely",
    ipa: "/ɪnˈtaɪə.li/",
    meaning: "toàn bộ, hoàn toàn",
    example: "I entirely agree with you.",
  },
  {
    id: 43,
    word: "investigation",
    ipa: "/ɪnˌves.tɪˈɡeɪ.ʃən/",
    meaning: "sự điều tra",
    example: "The police started an investigation.",
  },
  {
    id: 44,
    word: "lack",
    ipa: "/læk/",
    meaning: "thiếu",
    example: "The plant died from a lack of water.",
  },
  {
    id: 45,
    word: "qualified",
    ipa: "/ˈkwɒl.ɪ.faɪd/",
    meaning: "đủ điều kiện",
    example: "She is highly qualified for the job.",
  },
  {
    id: 46,
    word: "preference",
    ipa: "/ˈpref.ər.əns/",
    meaning: "sở thích, sự ưu tiên",
    example: "Do you have a preference for tea or coffee?",
  },
  {
    id: 47,
    word: "negotiate",
    ipa: "/nəˈɡəʊ.ʃi.eɪt/",
    meaning: "đàm phán",
    example: "We need to negotiate the price.",
  },
  {
    id: 48,
    word: "oversee",
    ipa: "/ˌəʊ.vəˈsiː/",
    meaning: "giám sát",
    example: "He oversees the production process.",
  },
  {
    id: 49,
    word: "merger",
    ipa: "/ˈmɜː.dʒər/",
    meaning: "sự sáp nhập",
    example: "The merger created a new giant company.",
  },
  {
    id: 50,
    word: "assignment",
    ipa: "/əˈsaɪn.mənt/",
    meaning: "nhiệm vụ được giao",
    example: "This is a difficult assignment.",
  },
  {
    id: 51,
    word: "mention",
    ipa: "/ˈmen.ʃən/",
    meaning: "nhắc đến",
    example: "Did he mention my name?",
  },
  {
    id: 52,
    word: "out of service",
    ipa: "/aʊt əv ˈsɜː.vɪs/",
    meaning: "không hoạt động",
    example: "The elevator is out of service.",
  },
  {
    id: 53,
    word: "initiative",
    ipa: "/ɪˈnɪʃ.ə.tɪv/",
    meaning: "sáng kiến",
    example: "He showed great initiative at work.",
  },
  {
    id: 54,
    word: "avoid",
    ipa: "/əˈvɔɪd/",
    meaning: "tránh",
    example: "Try to avoid eating too much sugar.",
  },
  {
    id: 55,
    word: "certification",
    ipa: "/ˌsɜː.tɪ.fɪˈkeɪ.ʃən/",
    meaning: "giấy chứng nhận",
    example: "You need certification to practice law.",
  },
  {
    id: 56,
    word: "annual",
    ipa: "/ˈæn.ju.əl/",
    meaning: "thường niên, hàng năm",
    example: "We have an annual meeting in June.",
  },
  {
    id: 57,
    word: "donor",
    ipa: "/ˈdəʊ.nər/",
    meaning: "người hiến tặng",
    example: "The organ donor saved a life.",
  },
  {
    id: 58,
    word: "unfortunately",
    ipa: "/ʌnˈfɔː.tʃən.ət.li/",
    meaning: "không may là",
    example: "Unfortunately, I missed the bus.",
  },
  {
    id: 59,
    word: "remove",
    ipa: "/rɪˈmuːv/",
    meaning: "gỡ bỏ, loại bỏ",
    example: "Please remove your shoes.",
  },
  {
    id: 60,
    word: "glance",
    ipa: "/ɡlɑːns/",
    meaning: "cái liếc nhìn",
    example: "He took a quick glance at the clock.",
  },
  {
    id: 61,
    word: "assign",
    ipa: "/əˈsaɪn/",
    meaning: "phân công",
    example: "The teacher assigned homework.",
  },
  {
    id: 62,
    word: "press conference",
    ipa: "/ˈpres ˌkɒn.fər.əns/",
    meaning: "họp báo",
    example: "The mayor held a press conference.",
  },
  {
    id: 63,
    word: "crucial",
    ipa: "/ˈkruː.ʃəl/",
    meaning: "quan trọng, cốt yếu",
    example: "Water is crucial for survival.",
  },
  {
    id: 64,
    word: "assemble",
    ipa: "/əˈsem.bəl/",
    meaning: "tập hợp, lắp ráp",
    example: "All students assembled in the hall.",
  },
  {
    id: 65,
    word: "opportunity",
    ipa: "/ˌɒp.əˈtʃuː.nə.ti/",
    meaning: "cơ hội",
    example: "This is a great opportunity for you.",
  },
  {
    id: 66,
    word: "capacity",
    ipa: "/kəˈpæs.ə.ti/",
    meaning: "sức chứa",
    example: "The stadium has a large capacity.",
  },
  {
    id: 67,
    word: "adjacent",
    ipa: "/əˈdʒeɪ.sənt/",
    meaning: "liền kề",
    example: "We stayed in adjacent rooms.",
  },
  {
    id: 68,
    word: "adjacent to",
    ipa: "/əˈdʒeɪ.sənt tuː/",
    meaning: "liền kề với",
    example: "The bank is adjacent to the post office.",
  },
  {
    id: 69,
    word: "designate",
    ipa: "/ˈdez.ɪɡ.neɪt/",
    meaning: "chỉ định",
    example: "This area is designated for smoking.",
  },
  {
    id: 70,
    word: "alternate",
    ipa: "/ˈɒl.tə.neɪt/",
    meaning: "luân phiên, xen kẽ",
    example: "We meet on alternate Sundays.",
  },
  {
    id: 71,
    word: "feature",
    ipa: "/ˈfiː.tʃər/",
    meaning: "đặc điểm, tính năng",
    example: "The car has many safety features.",
  },
  {
    id: 72,
    word: "proceeds",
    ipa: "/ˈprəʊ.siːdz/",
    meaning: "tiền thu được (để làm từ thiện/kinh doanh)",
    example: "Proceeds will go to charity.",
  },
  {
    id: 73,
    word: "refreshments",
    ipa: "/rɪˈfreʃ.mənts/",
    meaning: "đồ ăn thức uống nhẹ",
    example: "Refreshments will be served during the break.",
  },
  {
    id: 74,
    word: "refer",
    ipa: "/rɪˈfɜːr/",
    meaning: "ám chỉ, tham khảo",
    example: "Please refer to the manual for help.",
  },
  {
    id: 75,
    word: "guest speaker",
    ipa: "/ɡest ˈspiː.kər/",
    meaning: "diễn giả khách mời",
    example: "We invited a famous guest speaker.",
  },
  {
    id: 76,
    word: "uncover",
    ipa: "/ʌnˈkʌv.ər/",
    meaning: "khám phá, phát hiện",
    example: "They uncovered a hidden treasure.",
  },
  {
    id: 77,
    word: "intricate",
    ipa: "/ˈɪn.trɪ.kət/",
    meaning: "phức tạp, tinh xảo",
    example: "The design is very intricate.",
  },
  {
    id: 78,
    word: "revise",
    ipa: "/rɪˈvaɪz/",
    meaning: "sửa đổi, ôn tập",
    example: "Revise your essay before submitting it.",
  },
  {
    id: 79,
    word: "commemorate",
    ipa: "/kəˈmem.ə.reɪt/",
    meaning: "tưởng nhớ, kỷ niệm",
    example: "This statue commemorates the war heroes.",
  },
  {
    id: 80,
    word: "association",
    ipa: "/əˌsəʊ.siˈeɪ.ʃən/",
    meaning: "hiệp hội, sự liên kết",
    example: "He is a member of the football association.",
  },
];

// --- QUẢN LÝ TRẠNG THÁI (STATE) ---
let currentVocabList = [...vocabularyData];
let learnedIds = JSON.parse(localStorage.getItem("learnedWords")) || [];
let currentIndex = 0; // Index Flashcard

// Biến cho phần Practice Quiz
let quizIndex = 0;
let wrongAnswers = [];
let isReviewMode = false;

// Biến cho phần Context Quiz
let contextIndex = 0;

// --- DOM ELEMENTS ---
// Navigation
const navItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

// Flashcard
const flashcard = document.getElementById("flashcard");
const elWord = document.getElementById("vocab-word");
const elIpa = document.getElementById("vocab-ipa");
const elMeaning = document.getElementById("vocab-meaning");
const elExample = document.getElementById("vocab-example");
const elCounter = document.getElementById("card-counter");
const btnSpeak = document.getElementById("btn-speak");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnShuffle = document.getElementById("btn-shuffle");
const btnMarkLearned = document.getElementById("btn-mark-learned");
const inputJump = document.getElementById("jump-input");
const btnJump = document.getElementById("btn-jump");

// Practice Quiz
const quizWordEl = document.getElementById("quiz-word");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const btnNextQuiz = document.getElementById("btn-next-quiz");
const wrongCountEl = document.getElementById("wrong-count");
const btnReviewMistakes = document.getElementById("btn-review-mistakes");
const quizModeLabel = document.getElementById("quiz-mode-label");

// Context Quiz (ĐIỀN TỪ) - CẬP NHẬT BIẾN
const contextSentenceEl = document.getElementById("context-sentence");
const contextOptionsEl = document.getElementById("context-options");
const contextFeedbackEl = document.getElementById("context-feedback");
const contextCounterEl = document.getElementById("context-counter");
const btnNextContextAuto = document.getElementById("btn-next-context-auto");
const btnRestartContext = document.getElementById("btn-restart-context");
// Các nút mới thêm
const btnContextPrev = document.getElementById("btn-context-prev");
const btnContextNext = document.getElementById("btn-context-next");

// Progress
const progressPercentEl = document.getElementById("progress-percent");
const learnedCountEl = document.getElementById("learned-count");
const totalCountEl = document.getElementById("total-count");
const btnViewLearned = document.getElementById("btn-view-learned");
const learnedListBox = document.getElementById("learned-list-container");
const learnedListContent = document.getElementById("learned-list-content");
const btnCloseList = document.getElementById("btn-close-list");
const btnReset = document.getElementById("btn-reset");
const circularProgress = document.querySelector(".circular-progress");

// --- KHỞI TẠO ---
window.addEventListener("DOMContentLoaded", () => {
  loadFlashcard(currentIndex);
  updateProgressUI();

  // Khởi tạo các bài tập
  loadPracticeQuiz();
  loadContextQuiz();
});

// --- CHỨC NĂNG 1: NAVIGATION (CHUYỂN TAB) ---
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    const targetId = item.getAttribute("data-target");
    sections.forEach((sec) => sec.classList.remove("active-section"));
    document.getElementById(targetId).classList.add("active-section");

    if (targetId === "home") window.scrollTo(0, 0);
    // Nếu chuyển sang tab writing thì load lại để đảm bảo cập nhật
    if (targetId === "writing") loadContextQuiz();
  });
});

window.navigateTo = (targetId) => {
  document.querySelector(`nav ul li[data-target="${targetId}"]`).click();
};

// --- CHỨC NĂNG 2: FLASHCARD ---
function loadFlashcard(index) {
  const data = currentVocabList[index];
  flashcard.classList.remove("flipped");
  elWord.textContent = data.word;
  elIpa.textContent = data.ipa;
  elMeaning.textContent = data.meaning;
  elExample.textContent = `"${data.example}"`;
  elCounter.textContent = `${index + 1}/${currentVocabList.length}`;

  if (learnedIds.includes(data.id)) {
    btnMarkLearned.textContent = "🎉 Đã thuộc từ này";
    btnMarkLearned.disabled = true;
    btnMarkLearned.classList.replace("btn-success", "btn-secondary");
  } else {
    btnMarkLearned.textContent = "✅ Đã thuộc từ này";
    btnMarkLearned.disabled = false;
    btnMarkLearned.classList.replace("btn-secondary", "btn-success");
  }
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

btnSpeak.addEventListener("click", (e) => {
  e.stopPropagation();
  const utterance = new SpeechSynthesisUtterance(
    currentVocabList[currentIndex].word
  );
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < currentVocabList.length - 1) {
    currentIndex++;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = 0;
    loadFlashcard(currentIndex);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = currentVocabList.length - 1;
    loadFlashcard(currentIndex);
  }
});

btnJump.addEventListener("click", () => {
  const val = parseInt(inputJump.value);
  if (val >= 1 && val <= currentVocabList.length) {
    currentIndex = val - 1;
    loadFlashcard(currentIndex);
    inputJump.value = "";
  } else {
    alert(`Vui lòng nhập số từ 1 đến ${currentVocabList.length}`);
  }
});

btnShuffle.addEventListener("click", () => {
  for (let i = currentVocabList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentVocabList[i], currentVocabList[j]] = [
      currentVocabList[j],
      currentVocabList[i],
    ];
  }
  currentIndex = 0;
  loadFlashcard(currentIndex);

  const originalText = btnShuffle.innerHTML;
  btnShuffle.innerHTML = "Đã trộn!";
  setTimeout(() => (btnShuffle.innerHTML = originalText), 1000);
});

btnMarkLearned.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentItem = currentVocabList[currentIndex];
  if (!learnedIds.includes(currentItem.id)) {
    learnedIds.push(currentItem.id);
    localStorage.setItem("learnedWords", JSON.stringify(learnedIds));
    updateProgressUI();
    loadFlashcard(currentIndex);
  }
});

// --- CHỨC NĂNG 3: PRACTICE QUIZ ---
function loadPracticeQuiz() {
  quizFeedbackEl.textContent = "";
  quizOptionsEl.innerHTML = "";
  btnNextQuiz.style.display = "none";

  let sourceList = isReviewMode ? wrongAnswers : vocabularyData;
  if (isReviewMode && wrongAnswers.length === 0) {
    isReviewMode = false;
    quizModeLabel.style.display = "none";
    alert("Bạn đã hoàn thành các câu sai!");
    loadPracticeQuiz();
    return;
  }

  if (quizIndex >= sourceList.length) quizIndex = 0;

  const questionData = sourceList[quizIndex];
  quizWordEl.textContent = questionData.word;

  let options = [questionData];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.meaning;
    btn.onclick = () => checkQuizAnswer(opt, questionData, btn);
    quizOptionsEl.appendChild(btn);
  });
}

function checkQuizAnswer(selected, correct, btnElement) {
  const allBtns = quizOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selected.id === correct.id) {
    btnElement.classList.add("correct");
    quizFeedbackEl.textContent = "Chính xác! 🎉";
    quizFeedbackEl.style.color = "var(--success)";

    if (isReviewMode) {
      wrongAnswers = wrongAnswers.filter((w) => w.id !== correct.id);
      updateWrongCount();
    }
  } else {
    btnElement.classList.add("wrong");
    quizFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correct.meaning}`;
    quizFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correct.meaning) b.classList.add("correct");
    });
    if (!wrongAnswers.some((w) => w.id === correct.id)) {
      wrongAnswers.push(correct);
      updateWrongCount();
    }
  }
  btnNextQuiz.style.display = "inline-block";
}

btnNextQuiz.addEventListener("click", () => {
  if (!isReviewMode) {
    quizIndex = Math.floor(Math.random() * vocabularyData.length);
  } else {
    quizIndex = 0;
  }
  loadPracticeQuiz();
});

function updateWrongCount() {
  wrongCountEl.textContent = wrongAnswers.length;
  btnReviewMistakes.disabled = wrongAnswers.length === 0;
}

btnReviewMistakes.addEventListener("click", () => {
  isReviewMode = true;
  quizModeLabel.style.display = "inline-block";
  quizIndex = 0;
  loadPracticeQuiz();
});

// --- CHỨC NĂNG 4: CONTEXT QUIZ (ĐIỀN TỪ) ---
function loadContextQuiz() {
  // Reset UI
  contextFeedbackEl.textContent = "";
  contextOptionsEl.innerHTML = "";
  btnNextContextAuto.style.display = "none";
  btnRestartContext.style.display = "none";
  contextSentenceEl.style.display = "block";

  // 1. Logic nút điều hướng (CẬP NHẬT)
  // Khóa nút Previous nếu ở câu đầu
  btnContextPrev.disabled = contextIndex === 0;
  // Khóa nút Next nếu ở câu cuối
  btnContextNext.disabled = contextIndex === vocabularyData.length - 1;

  // 2. Kiểm tra hoàn thành (nếu đi quá số lượng)
  if (contextIndex >= vocabularyData.length) {
    contextSentenceEl.innerHTML = "🎉 Bạn đã hoàn thành hết danh sách.";
    contextCounterEl.textContent = `${vocabularyData.length}/${vocabularyData.length}`;
    btnRestartContext.style.display = "inline-block";
    return;
  }

  const data = vocabularyData[contextIndex];
  contextCounterEl.textContent = `${contextIndex + 1}/${vocabularyData.length}`;

  // Regex thay thế từ
  const regex = new RegExp(`\\b${data.word}\\b`, "gi");
  if (!data.example.match(regex)) {
    // Nếu câu lỗi không tìm thấy từ, tự động next
    console.log("Skipping sentence due to mismatch:", data.word);
    if (contextIndex < vocabularyData.length - 1) {
      contextIndex++;
      loadContextQuiz();
    }
    return;
  }

  const hiddenSentence = data.example.replace(
    regex,
    `<span class="blank-highlight">_____</span>`
  );
  contextSentenceEl.innerHTML = hiddenSentence;

  // Tạo đáp án
  let options = [data];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.word;
    btn.onclick = () => checkContextAnswer(opt.id, data.id, data.word, btn);
    contextOptionsEl.appendChild(btn);
  });
}

function checkContextAnswer(selectedId, correctId, correctWord, btnElement) {
  const allBtns = contextOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (selectedId === correctId) {
    btnElement.classList.add("correct");
    contextFeedbackEl.textContent = "Chính xác!";
    contextFeedbackEl.style.color = "var(--success)";

    // Điền từ vào chỗ trống
    const blank = contextSentenceEl.querySelector(".blank-highlight");
    if (blank) {
      blank.textContent = correctWord;
      blank.classList.add("filled");
    }

    // Hiện nút Next (nếu muốn next thủ công)
    if (contextIndex < vocabularyData.length - 1) {
      btnNextContextAuto.style.display = "inline-block";
    }
  } else {
    btnElement.classList.add("wrong");
    contextFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correctWord}`;
    contextFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correctWord) b.classList.add("correct");
    });
  }
}

// Event Listeners cho Context
btnNextContextAuto.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

btnRestartContext.addEventListener("click", () => {
  contextIndex = 0;
  loadContextQuiz();
});

// --- SỰ KIỆN MỚI CHO NÚT ĐIỀU HƯỚNG CONTEXT ---
btnContextPrev.addEventListener("click", () => {
  if (contextIndex > 0) {
    contextIndex--;
    loadContextQuiz();
  }
});

btnContextNext.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

// --- CHỨC NĂNG 5: PROGRESS ---
function updateProgressUI() {
  const learnedCount = learnedIds.length;
  const total = vocabularyData.length;
  learnedCountEl.textContent = learnedCount;
  totalCountEl.textContent = total;

  const percent = Math.round((learnedCount / total) * 100);
  progressPercentEl.textContent = `${percent}%`;

  circularProgress.style.background = `conic-gradient(
    var(--success) ${percent * 3.6}deg,
    #cadcff ${percent * 3.6}deg
  )`;
}

btnViewLearned.addEventListener("click", () => {
  learnedListContent.innerHTML = "";
  if (learnedIds.length === 0) {
    learnedListContent.innerHTML =
      "<p style='padding:10px; text-align:center'>Chưa có từ nào.</p>";
  } else {
    learnedIds.forEach((id) => {
      const item = vocabularyData.find((v) => v.id === id);
      if (item) {
        const li = document.createElement("li");
        li.className = "learned-item";
        li.innerHTML = `
          <span class="learned-word">${item.word}</span>
          <span class="learned-meaning">${item.meaning}</span>
        `;
        learnedListContent.appendChild(li);
      }
    });
  }
  learnedListBox.style.display = "block";
});

btnCloseList.addEventListener("click", () => {
  learnedListBox.style.display = "none";
});

btnReset.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ tiến độ?")) {
    learnedIds = [];
    localStorage.removeItem("learnedWords");
    updateProgressUI();
    loadFlashcard(currentIndex);
    alert("Đã reset!");
  }
});
