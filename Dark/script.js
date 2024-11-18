const btn = document.querySelector("button");
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
  btn.innerHTML = localStorage.getItem("theme");
}
btn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    btn.innerHTML = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    btn.innerHTML = "dark";
    localStorage.setItem("theme", "dark");
  }
});
