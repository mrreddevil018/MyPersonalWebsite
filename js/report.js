$(function () {
  function setHeight() {
    $(".response").each(function (index, element) {
      var target = $(element);
      target.removeClass("fixed-height");
      var height = target.innerHeight();
      target.attr("data-height", height).addClass("fixed-height");
    });
  }

  $("input[name=question]").on("change", function () {
    $("p.response").removeAttr("style");

    var target = $(this)
      .next()
      .next();
    target.height(target.attr("data-height"));
  });

  setHeight();
});


$(document).ready(function () {

  document.querySelector("#termOne").addEventListener("click", () => {
    document.querySelector("#wtOne").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#termTwo").addEventListener("click", () => {
    document.querySelector("#wtTwo").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#termThree").addEventListener("click", () => {
    document.querySelector("#wtThree").scrollIntoView({ behavior: "smooth" });
  });
});