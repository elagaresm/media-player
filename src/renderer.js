const audio = document.querySelector("audio");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  audio.setAttribute("src", filePath);
});
