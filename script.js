const wrapper = document.querySelector(".wrapper"), //gets the wrapper css and stores it in the wrapper variable
    qrInput = wrapper.querySelector(".form input"), //gets the form input css and stores it in the qrInput variable
    qrImg = wrapper.querySelector(".qr-code img"), //gets the qr-code img and stores it in the qrImg variable
    generateBtn = wrapper.querySelector(".form button"); //gets the form button css and stores it in the henerateBtn variable

/* This block of code executes when the user clicks on the generate button after entering a value(i.e a valid url or even a text) */
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code....";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});




