function myTime() {
  let hour = new Date().getHours();
  let greeting;

  if (hour < 10) {
    document.getElementById("greet").innerHTML = "Good morning";
  } else if (hour < 12) {
    document.getElementById("greet").innerHTML = "Good day";
  } else {
    document.getElementById("greet").innerHTML = "Good evening";
  }
}

myTime();

const navSlide = () => {
  const navBar = document.querySelector(".toggle-button");
  const hideNav = document.querySelector(".nav-links");

  navBar.addEventListener("click", () => {
    hideNav.classList.toggle("show");
  });
};

navSlide();
