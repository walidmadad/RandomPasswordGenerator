///// Random Password Generator

let txtPassword = document.getElementById("Password");

let caracteres = 20;

function generate(){
    // regular expression
    const lowerCaseChars = /[a-z]/;
    const upperCaseChars = /[A-Z]/;
    const allNumbers = /[0-9]/;
    const symbolsChar = /[#$%&()*+,\-./:;<=>?@[\]^_{|}~]/;

    let charsAllowed = "";
    let password = "";
    charsAllowed += allNumbers;
    charsAllowed += lowerCaseChars;
    charsAllowed += upperCaseChars;
    charsAllowed += symbolsChar;

    for(let i=0 ; i<=caracteres; i++){
        indexRandom = Math.floor(Math.random() * charsAllowed.length);
        console.log(indexRandom);
        console.log(charsAllowed[indexRandom]);
        password += charsAllowed[indexRandom];
        if(i === caracteres - 1 && !( password.match(lowerCaseChars) && password.match(upperCaseChars) && password.match(allNumbers) && password.match(symbolsChar))){
            i=0;
            password="";
        }
    }
    txtPassword.textContent = password;
}