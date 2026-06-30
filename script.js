const mailbox = document.getElementById("mailbox");

mailbox.addEventListener("click", () => {
  mailbox.classList.add("open");

  setTimeout(() => {
    alert("Open When Letters はここから始まります");
  }, 500);
});
const mailbox = document.getElementById("mailbox");
const scene = document.querySelector(".scene");

mailbox.addEventListener("click", () => {
  mailbox.classList.add("open");

  setTimeout(() => {
    showLetters();
  }, 600);
});

function showLetters() {
  scene.innerHTML = `
    <h1 class="title">Open When Letters</h1>
    <p class="subtitle">Choose a moment</p>

    <div class="letters">
      ${createLetter("喧嘩したとき")}
      ${createLetter("初めての旅行")}
      ${createLetter("子どもが生まれたとき")}
      ${createLetter("家を買うとき")}
      ${createLetter("仕事で落ち込んだとき")}
      ${createLetter("10周年")}
    </div>
  `;
}

function createLetter(text) {
  return `<div class="letter">${text}</div>`;
}
function createLetter(text) {
  return `<div class="letter" onclick="selectLetter('${text}')">${text}</div>`;
}

function selectLetter(theme) {
  scene.innerHTML = `
    <h1 class="title">Who is it for?</h1>
    <p class="subtitle">${theme}</p>

    <div class="recipients">
      <div class="recipient" onclick="openLetter('${theme}', 'ひろと')">ひろと</div>
      <div class="recipient" onclick="openLetter('${theme}', 'ゆり')">ゆり</div>
    </div>
  `;
}

function openLetter(theme, name) {
  scene.innerHTML = `
    <h1 class="title">${theme}</h1>
    <p class="subtitle">To ${name}</p>

    <div class="paper">
      <p class="message">
        ここにメッセージが入ります。<br><br>
        この瞬間のために書かれた手紙です。
      </p>

      <p class="from">From ○○</p>

      <button class="back" onclick="location.reload()">Back</button>
    </div>
  `;
}