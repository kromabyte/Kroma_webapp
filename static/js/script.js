// input fields
const Firstname = document.getElementById('Name');
const Lastname = document.getElementById('Lastname');
const Email = document.getElementById('Email');
const Message = document.getElementById('Message');

// FORM
const form = document.getElementById('myform')

//handle form
form.addEventListener('submit', function(event){
    if (
        validateFirstName() && 
        validateLastName() && 
        validateEmail() &&
        validateMessage ()
    ){ 
        ('myform').submit();

    } else {
        event.preventDefault(); 
    }
});



// validation colors
const green = '#4CAF50';
const red = '#F44336';

// VALIDATORS

function validateFirstName (){
    //check is is empty
    if(checkIfEmpty(Firstname)) return;
    // is if it has only letters
    if(!checkIfOnlyLetters(Firstname)) return;
    return true;
}

function validateLastName (){
    //check is is empty
    if(checkIfEmpty(Lastname)) return;
    // is if it has only letters
    if(!checkIfOnlyLetters(Lastname)) return;
    return true;
}

function validateEmail(){
    if(checkIfEmpty(Email)) return;
    if(!containsCharacters(Email,5)) return;
    return true;
}

function validateMessage(){
    if(checkIfEmpty(Message)) return;   
    return true;
}

//UTILITY FUNCTIONS

//check if is empty
function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())) {
        //set field invalid
        setInvalid(field,`${field.name} must not be empty`);
        return true;
    } else {
        // set field valid
        setValid(field);
        return false;
    }
}
function isEmpty(value){
    if(value === '') return true;
    return false;
}

//valid or invalid sign
function setInvalid(field,message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field,message){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
}

//check if only have letters
function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function containsCharacters(field, code){
    let regEx;
    switch(code){
        case 5:
            //email paterns
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx,field,'must be a valid email address')
        default:
        return false;
    }
}

function matchWithRegEx(regEx, field, message){
    if (field.value.match(regEx)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}