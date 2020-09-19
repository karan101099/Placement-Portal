const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.replace(
    "portfolio/index.html?name=" +
      document.getElementById("name").value +
      "&title=" +
      document.getElementById("title").value +
      "&photo_link=" +
      document.getElementById("photo_link").value +
      "&resume_link=" +
      document.getElementById("resume_link").value +
      "&introduction=" +
      document.getElementById("introduction").value +
      "&achievement1=" +
      document.getElementById("achievement1").value +
      "&achievement2=" +
      document.getElementById("achievement2").value +
      "&achievement3=" +
      document.getElementById("achievement3").value
  );
});
