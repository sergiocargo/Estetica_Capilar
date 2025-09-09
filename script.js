function mudarTema(cor) {
  document.body.style.backgroundColor = cor;

  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector("footer");

  // Reset classes
  navbar.classList.remove("bg-light", "bg-dark", "bg-primary", "bg-danger", "bg-success", "navbar-dark", "navbar-light");
  footer.style.backgroundColor = cor;

  if (cor === "#ffe6f0") {
    navbar.classList.add("bg-danger");
  } else if (cor === "#e6f0ff") {
    navbar.classList.add("bg-primary");
  } else if (cor === "#d9f7d9") {
    navbar.classList.add("bg-success");
  } else if (cor === "#000000") {
    navbar.classList.add("bg-dark", "navbar-dark");
  } else {
    navbar.classList.add("bg-light", "navbar-light");
  }
}
