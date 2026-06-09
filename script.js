function showHearts() {
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
