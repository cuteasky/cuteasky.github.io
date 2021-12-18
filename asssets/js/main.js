// Humbuger Menu
const icons = document.querySelectorAll(".icon");
const menuHum = document.getElementById("overlay");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
    if (open) {
      menuHum.classList.toggle("open");
    }
  });
});

// Header Scrolled
const header = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

// Show More About Modal
function showAbout() {
  const goMore = document.getElementById("goMore");
  goMore.click();
}

// Show Detail Img
const capSatu = document.getElementById("captionSatu").textContent;
const capDua = document.getElementById("captionDua").textContent;
const capTiga = document.getElementById("captionTiga").textContent;
const captionText = document.getElementById("caption");
const modal = document.getElementById("modalImg");
const image = document.getElementById("imagenya");
function detailImg(img, id) {
  image.src = img;
  modal.style.display = "block";
  if (id == "satu") {
    captionText.innerHTML = capSatu;
  }
  if (id == "dua") {
    captionText.innerHTML = capDua;
  }
  if (id == "tiga") {
    captionText.innerHTML = capTiga;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
