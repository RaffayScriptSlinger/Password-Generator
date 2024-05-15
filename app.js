const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacter = "!@#$%^&*()||";
const upperLetters = document.getElementById('capitalLetter');
const lowerLetters = document.getElementById('lowerLetter');
const Symbols = document.getElementById('specialCharacter');
const passBox = document.getElementById('input00');
const numberInput = document.getElementById('number');
const passLength = document.getElementById('inputBox');
const charLengthSpan = document.getElementById('charLength');

charLengthSpan.textContent = passLength.value;

passLength.addEventListener('input', function() {
    charLengthSpan.textContent = this.value;
});

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const allCheckboxesChecked = () => {
    return upperLetters.checked || lowerLetters.checked || Symbols.checked || numberInput.checked;
}

const evaluatePasswordStrength = () => {
    if (allCheckboxesChecked()) {
        return "Strong Password";
    }

    else {
        return "Weak Password - At least one checkbox must be checked";
    }
}




const generatePassword = () => {
    if (!allCheckboxesChecked()) {
        passBox.value = "Please check at least one checkbox";
        return;
    }
    
    let password = "";
    const selectedLength = parseInt(passLength.value);
    
    while (password.length < selectedLength) {
        if (upperLetters.checked) {
            password += getRandomData(upperSet);
        }
        if (lowerLetters.checked) {
            password += getRandomData(LowerSet);
        }
        if (Symbols.checked) {
            password += getRandomData(specialCharacter);
        }
        if (numberInput.checked) {
            password += getRandomData(number)
        }
    }
    
    passBox.value = password;
    
    // Evaluate and display password strength
    const passwordStrength = evaluatePasswordStrength();
    document.getElementById('qualification').textContent = passwordStrength;
}

document.getElementById("generateBtn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
);
