const $ = (id) => document.getElementById(id);
const screens = {
  start: $("screen-start"),
  test: $("screen-test"),
  result: $("screen-result"),
};

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
  $("q-dim").textContent = q.dim;
  $("q-counter").textContent = `${current + 1} / ${QUESTIONS.length}`;
  $("progress-fill").style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  $("q-text").textContent = q.text;

  const box = $("options");
  box.innerHTML = "";
  OPTION_LABELS.forEach((label, i) => {
    const value = i + 1;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt";
    if (answers[current] === value) btn.classList.add("selected");
    btn.innerHTML = `<span class="opt-num">${value}</span><span class="opt-label">${label}</span>`;
    btn.addEventListener("click", () => selectOption(value, btn));
    box.appendChild(btn);
  });

  $("btn-prev").disabled = current === 0;
  $("btn-next").textContent = current === QUESTIONS.length - 1 ? "查看结果" : "下一题";
}

function selectOption(value, btn) {
  if (answers[current] === value) return;
  answers[current] = value;
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

function computeType() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  QUESTIONS.forEach((q, i) => {
    if (answers[i] > 0) scores[q.pole] += answers[i];
  });
  const pairs = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];
  const code = pairs.map(([a, b]) => (scores[a] >= scores[b] ? a : b)).join("");
  const pcts = {};
  pairs.forEach(([a, b]) => {
    const total = scores[a] + scores[b] || 1;
    pcts[a] = Math.round((scores[a] / total) * 100);
    pcts[b] = 100 - pcts[a];
  });
  return { code, pcts };
}

function finishTest() {
  const { code, pcts } = computeType();
  const info = TYPES[code];

  const hero = $("result-hero");
  const c1 = LETTER_COLORS[code[0]];
  const c2 = LETTER_COLORS[code[2]];
  hero.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;

  const letters = $("result-letters");
  letters.innerHTML = "";
  code.split("").forEach((ch) => {
    const span = document.createElement("span");
    span.textContent = ch;
    letters.appendChild(span);
  });

  $("result-name").textContent = info.name;
  $("result-en").textContent = info.en;
  $("result-tagline").textContent = info.tagline;
  $("traits").innerHTML = info.traits.map((t) => `<li>${t}</li>`).join("");
  $("chips").innerHTML = info.fields.map((f) => `<span>${f}</span>`).join("");
  $("famous").textContent = info.famous;

  const dimMeta = { E: "外向", I: "内向", S: "实感", N: "直觉", T: "思考", F: "情感", J: "计划", P: "随性" };
  const bars = $("dim-bars");
  bars.innerHTML = "";
  [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]].forEach(([a, b], idx) => {
    const row = document.createElement("div");
    row.className = "dim-row";
    row.innerHTML = `
      <div class="dim-row-head">
        <span>${a} ${dimMeta[a]} <span class="pct">${pcts[a]}%</span></span>
        <span>${pcts[b]}% ${dimMeta[b]} ${b}</span>
      </div>
      <div class="dim-bar"><div class="left" data-w="${pcts[a]}" style="transition-delay:${idx * 0.12}s"></div></div>
    `;
    bars.appendChild(row);
  });

  showScreen("result");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".dim-bar .left").forEach((el) => {
        el.style.width = `${el.dataset.w}%`;
      });
    });
  });
}

function copyResult() {
  const { code } = computeType();
  const info = TYPES[code];
  const text = `我的 MBTI 人格类型是 ${code}「${info.name}」！\n${info.tagline}\n快来测测你是什么人格 →`;
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

$("btn-start").addEventListener("click", startTest);
$("btn-prev").addEventListener("click", prevQuestion);
$("btn-next").addEventListener("click", () => (current === QUESTIONS.length - 1 ? finishTest() : nextQuestion()));
$("btn-restart").addEventListener("click", startTest);
$("btn-copy").addEventListener("click", copyResult);
