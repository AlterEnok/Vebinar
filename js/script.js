// PRELOADER

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2500); // теперь задержка 2.5 секунды
});



// JS FORM MASK

const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
    initialCountry: "ua",
    separateDialCode: true,
    autoPlaceholder: "off", // <-- это отключит автозаполнение
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
});
