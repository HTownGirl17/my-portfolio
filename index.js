// Form validation
$.validator.addMethod(
  "customphone",
  function (value, element) {
    return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
  },
  "Please enter the phone number in the format shown above"
);

$.validator.addClassRules("customphone", {
  customphone: true,
});

$(document).ready(function () {
  // To make sure only letters in name field are entered
  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-z ]+$/i.test(value);
    },
    "Letters and spaces only please"
  );

  $('form[id="contact_form"]').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        lettersonly: true,
      },
      phone: {
        required: true,
        phoneUS: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Name is required.",
        minlength: "Please enter at least 2 characters.",
      },
      email: "Please enter a valid email address.",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});

// For Nav Bar
const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Scroll to the top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
