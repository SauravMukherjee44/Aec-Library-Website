window.onload = function () {
    document.getElementById('loading').style.display = "none";
    document.getElementById('container').style.display = "block";
  }
  particlesJS.load("particles-js", "../assets/js/config.json", function () {
    console.log("callback - particles.js config loaded");
  });