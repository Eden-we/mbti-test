const $ = (id) => document.getElementById(id);
const screens = {
  start: $("screen-start"),
  test: $("screen-test"),
  result: $("screen-result"),
};
const OPT_PREFIXES = ["A", "B", "C", "D"];
const CHARACTER_MAP = Object.fromEntries(CHARACTERS.map((character) => [character.name, character]));

let answers = [];
let current = 0;

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0 });
}

function startTest() {
  answers = new Array(QUESTIONS.length).fill(-1);
  current = 0;
  showScreen("test");
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[current];
  $("q-counter").textContent = `${current + 1} / ${QUESTIONS.length}`;
  $("progress-fill").style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  $("q-text").textContent = q.text;

  const box = $("options");
  box.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt";
    if (answers[current] === i) btn.classList.add("selected");
    btn.innerHTML = `<span class="opt-num">${OPT_PREFIXES[i]}</span><span class="opt-label">${opt.label}</span>`;
    btn.addEventListener("click", () => selectOption(i, btn));
    box.appendChild(btn);
  });

  $("btn-prev").disabled = current === 0;
  $("btn-next").textContent = current === QUESTIONS.length - 1 ? "查看结果" : "下一题";
}

function selectOption(index, btn) {
  if (answers[current] === index) return;
  answers[current] = index;
  document.querySelectorAll(".opt").forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  setTimeout(() => {
    if (current < QUESTIONS.length - 1) nextQuestion();
    else finishTest();
  }, 300);
}

function nextQuestion() {
  if (current < QUESTIONS.length - 1) {
    current += 1;
    renderQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
}

function computeScores() {
  const scores = {};
  const counts = [0, 0, 0, 0];

  QUESTIONS.forEach((q, i) => {
    const idx = answers[i];
    if (idx < 0 || !q.options[idx]) return;
    counts[idx] += 1;
  });

  CHARACTERS.forEach((character) => {
    const target = CHARACTER_TARGETS[character.name];
    if (!target) {
      scores[character.name] = 0;
      return;
    }

    const distance =
      Math.abs(counts[0] - target[0]) +
      Math.abs(counts[1] - target[1]) +
      Math.abs(counts[2] - target[2]) +
      Math.abs(counts[3] - target[3]);
    scores[character.name] = 100 - distance;
  });

  return scores;
}

function pickWinner(scores) {
  const max = Math.max(...Object.values(scores));
  return WIN_PRIORITY.map((name) => CHARACTER_MAP[name]).find((c) => scores[c.name] === max) || CHARACTERS[0];
}

function finishTest() {
  const scores = computeScores();
  const winner = pickWinner(scores);

  const hero = $("result-hero");
  hero.style.background = `linear-gradient(135deg, ${winner.color}, ${winner.color2})`;

  const avatar = $("result-avatar");
  avatar.textContent = winner.name.charAt(0);
  avatar.classList.remove("has-image");
  avatar.style.background = `linear-gradient(135deg, ${winner.color}, ${winner.color2})`;

  const portrait = new Image();
  portrait.alt = winner.name;
  portrait.loading = "eager";
  portrait.decoding = "async";
  portrait.addEventListener(
    "load",
    () => {
      avatar.classList.add("has-image");
      avatar.replaceChildren(portrait);
    },
    { once: true }
  );
  portrait.addEventListener(
    "error",
    () => {
      avatar.classList.remove("has-image");
    },
    { once: true }
  );
  portrait.src = winner.image;

  $("result-name").textContent = winner.name;
  $("result-tagline").textContent = winner.tagline;
  $("traits").innerHTML = winner.traits.map((t) => `<li>${t}</li>`).join("");

  showScreen("result");
}

function copyResult() {
  const scores = computeScores();
  const winner = pickWinner(scores);
  const text = `我在 Black Souls 2 伴侣测试中，测出的灵魂伴侣是「${winner.name}」！\n${winner.tagline}\n快来测测你的灵魂伴侣是谁 →`;
  const done = () => showToast("结果已复制，去分享吧");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); done(); } catch (e) { showToast("复制失败，请手动复制"); }
  document.body.removeChild(ta);
}

let toastTimer = null;
function showToast(msg) {
  const toast = $("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderRoster() {
  const roster = $("roster");
  if (!roster) return;
  roster.innerHTML = "";
  const fragment = document.createDocumentFragment();

  ROSTER_ORDER.forEach((name, index) => {
    const c = CHARACTER_MAP[name];
    if (!c) return;

    const card = document.createElement("article");
    card.className = "char-card";
    card.dataset.depth = String(Math.floor(index / 4));
    card.style.setProperty("--accent", c.color);
    card.style.setProperty("--accent2", c.color2);
    card.title = c.name;
    card.innerHTML = `
      <img class="char-image" src="${c.image}" alt="${c.name}" loading="${index < 4 ? "eager" : "lazy"}" decoding="async" />
      <div class="char-overlay"></div>
      <div class="char-badge">${String(index + 1).padStart(2, "0")}</div>
      <div class="char-label">${c.name}</div>
    `;
    fragment.appendChild(card);
  });

  roster.appendChild(fragment);
}

renderRoster();

$("btn-start").addEventListener("click", startTest);
$("btn-prev").addEventListener("click", prevQuestion);
$("btn-next").addEventListener("click", () => (current === QUESTIONS.length - 1 ? finishTest() : nextQuestion()));
$("btn-restart").addEventListener("click", startTest);
$("btn-copy").addEventListener("click", copyResult);
