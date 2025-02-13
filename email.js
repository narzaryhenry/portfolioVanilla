(function () {
  emailjs.init("PoE882wXxml4nhUNO");
})();

const contactForm = document.getElementById("contact-form");
const popup = document.getElementById("popup");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_cc4nkcb", "template_cbs5x9y", this).then(
    function () {
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
      contactForm.reset();
    },
    function (error) {
      console.error("FAILED...", error);
      alert("Oops, something went wrong. Please try again.");
    }
  );
});
