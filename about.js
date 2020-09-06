$(document).ready(function() {
  document.querySelector("#scroll-button").addEventListener("click", () => {
    document.querySelector("#info").scrollIntoView({ behavior: "smooth" });
  });
});
