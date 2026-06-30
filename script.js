const mailbox = document.getElementById("mailbox");

mailbox.addEventListener("click", () => {
  mailbox.classList.add("open");

  setTimeout(() => {
    alert("Open When Letters はここから始まります");
  }, 500);
});