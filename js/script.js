// PRELOADER

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2500);
});





// JS FORM MASK

const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
    initialCountry: "ua",
    separateDialCode: true,
    autoPlaceholder: "off",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
});
