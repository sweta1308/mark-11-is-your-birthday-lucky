const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector(".btn-check");
const result = document.querySelector(".output");
const outputImage = document.querySelector("#image");

checkBtn.addEventListener('click', checkDobIsLucky);

function checkDobIsLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSum(birthDate);
    if (sum&&birthDate)
    compareValues(sum, luckyNumber.value);
    else result.innerText = "Please enter both the fields 🤔";

}

function calculateSum(birthDate) {
    birthDate = birthDate.replaceAll("-", "");
    let sum = 0;
    for (i = 0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        result.innerText = "Yayy! Your Birthday is lucky 🤩";
        outputImage.src = "/images/happy.svg";
    } else {
        result.innerText = "Oops! Your birthday is not lucky 😢";
        outputImage.src = "/images/sad.svg";
    }
}

