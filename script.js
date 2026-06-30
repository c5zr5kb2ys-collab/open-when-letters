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