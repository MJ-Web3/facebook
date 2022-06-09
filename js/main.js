
// form1
let emailHelp = document.querySelector('#emailHelp');
let passHelp = document.querySelector('#passHelp');
let inputEmail = document.querySelector('#inputEmail'); // email input (log in)
let inputPassword = document.querySelector('#inputPassword'); // password input (log in)
let logInForm = document.querySelector('#logInForm'); // form

// form2
let closeBtn = document.querySelector('.btn-close'); // close button 
let CreateNewAccount = document.querySelector('#CreateNewAccount'); // create new account button
let NewAccount = document.querySelector('.new-account'); // new account page
let firstNameForm2 = document.querySelector('#firstNameForm2'); // first name 
let surNameForm2 = document.querySelector('#surNameForm2'); // last name
let emailForm2 = document.querySelector('#emailForm2'); // email
let inputPasswordForm2 = document.querySelector('#inputPasswordForm2'); // password
let passwordWarning = document.querySelector('.password-warning'); // if password less than 6 char (div)
let form2 = document.querySelector('#form2'); // create new account form
let rejexName = /[a-zA-Z]+/g; // username rejex
let rejexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //email rejex




// the username and password to log in
let email = "exambel@email.com";
let passwd = "mypassword";


// log in form start
logInForm.addEventListener('submit',() =>{

    if(inputEmail.value.toLowerCase() == email && inputPassword.value == passwd){

        window.location.href('user.html');

    }else if(inputEmail.value.toLowerCase() != email){

        emailHelp.classList.add('non-hidden');
        logInForm.action = "#";

    }else if(inputEmail.value.toLowerCase() == email && inputPassword.value != passwd){

        emailHelp.classList.remove('non-hidden');
        passHelp.classList.add('non-hidden');
        logInForm.action = '#';

    }else{
        emailHelp.classList.add('non-hidden');
        logInForm.action = "#";
    }
})
// log in form end


// click create new account 
CreateNewAccount.addEventListener('click',() =>{
    NewAccount.classList.add('non-hidden');
})

// click close button (create new account form)
closeBtn.addEventListener('click',() =>{
    NewAccount.classList.remove('non-hidden');
})



// checking first name
let firstNameChecking = ()=>{
    if(firstNameForm2.value == ""){
        firstNameForm2.classList.add('is-invalid');
    }else if(firstNameForm2.value.match(rejexName)){
        firstNameForm2.classList.remove('is-invalid');
        firstNameForm2.classList.add('is-valid');
    }else{
        firstNameForm2.classList.remove('is-invalid');
        firstNameForm2.classList.remove('is-valid');
    }
}


// checking last name
let lastNameChecking = ()=>{
    if(surNameForm2.value == ""){
        surNameForm2.classList.add('is-invalid');
    }else if(surNameForm2.value.match(rejexName)){
        surNameForm2.classList.remove('is-invalid');
        surNameForm2.classList.add('is-valid');
    }else{
        surNameForm2.classList.remove('is-invalid');
        surNameForm2.classList.remove('is-valid');
    }
}


// checking email 
let emailChecking = ()=>{
    if(emailForm2.value == "" || !emailForm2.value.match(rejexemail)){
        emailForm2.classList.add('is-invalid');
    }else if(emailForm2.value.match(rejexemail)){
        emailForm2.classList.remove('is-invalid');
        emailForm2.classList.add('is-valid');
    }else{
        emailForm2.classList.remove('is-invalid');
        emailForm2.classList.remove('is-valid');
    }
}

// checking password
let passwordChecking = ()=>{
    if(inputPasswordForm2.value == ''){
        inputPasswordForm2.classList.add('is-invalid');
    }else if(inputPasswordForm2.value.length <= 6){
        inputPasswordForm2.classList.add('is-invalid');
        passwordWarning.classList.add('non-hidden');
    }else if(inputPasswordForm2.value.length > 6){
        inputPasswordForm2.classList.remove('is-invalid');
        passwordWarning.classList.remove('non-hidden');
        inputPasswordForm2.classList.add('is-valid');
    }else{
        inputPasswordForm2.classList.remove('is-invalid');
        passwordWarning.classList.remove('non-hidden');
        inputPasswordForm2.classList.remove('is-valid');
    }
}


// create new account form start
form2.addEventListener('submit',() =>{
    if((firstNameForm2.value != "" && firstNameForm2.value.match(rejexName) && (surNameForm2.value != "" && surNameForm2.value.match(rejexName))
    && (inputPasswordForm2.value != "" && inputPasswordForm2.value.length > 6)
    )){
        window.location.href('theNewAccount.html');
    }else{
        form2.action = "#";
        NewAccount.classList.add('non-hidden');
        firstNameForm2.classList.add('is-invalid');
        surNameForm2.classList.add('is-invalid');
        emailForm2.classList.add('is-invalid');
        inputPasswordForm2.classList.add('is-invalid');
    }


})
// create new account form end


firstNameForm2.addEventListener('focusout',firstNameChecking);
surNameForm2.addEventListener('focusout', lastNameChecking);
emailForm2.addEventListener('focusout', emailChecking);
inputPasswordForm2.addEventListener('focusout',passwordChecking);





