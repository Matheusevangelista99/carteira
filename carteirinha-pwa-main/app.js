const menu = document.getElementById("menu");
const btn = document.getElementById("menuBtn");

if (btn) {
  btn.onclick = () => {
    menu.classList.toggle("open");
  };
}

function irCarteira() {
  window.location.href = "carteira.html";
}
