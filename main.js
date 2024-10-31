const cursor = document.querySelector(".cursor");
var timeout;
// cursor movement
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // stop Animation
  function moseStopped() {
    cursor.style.display = "none";
  }

  // Hide Animation
  clearTimeout(timeout);
  timeout = setTimeout(moseStopped, 2000);
});

// Stop Animation off the screen
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
