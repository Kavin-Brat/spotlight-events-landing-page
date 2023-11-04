//nav-bar
const menuIcon = document.querySelector(".hamburgur-menu");
const navBar = document.querySelector(".nav-bar");
menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("change");
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("change");
  });
});

// to view gallery img
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImgBox.style.opacity = 1;
  fullImg.src = pic;
}
function closeFullImg() {
  fullImgBox.style.display = "none";
  fullImgBox.style.opacity = 0;
}

// slide-show
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//Submit form
function SendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "spotlightevents.hosur@gmail.com",
    Password: "31606C6A02E1F2F6E93847E41E9B55F547ED",
    To: "spotlightevents.hosur@gmail.com",
    From: "spotlightevents.hosur@gmail.com",
    Subject: "Enquiry Mail From Customer",
    Body: "From &nbsp;" + document.getElementById("fullname").value + "," + "<br><br><br><br>Message : " + document.getElementById("message").value + "<br><br>Mobile No: " + document.getElementById("mobileNo").value + "<br><br><br><br>Thanks," + "<br><br>The Supppot Team," + "<br>spotlightevents@hosur",
  })
    .then((message) => {
      if (message === "OK") {
        alert("Thank you for reaching out to us.\nWe will get back to you as soon as we can.");
      } else {
        alert("Unable to send the mail contact support team via phone.\nCheck the mobile number in the contact page.");
      }
    })
    .catch((message) => {
      alert("Unable to send the mail contact support team via phone.\nCheck the mobile number in the contact page.");
    });
}
