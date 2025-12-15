let firstNameElement = document.getElementById('firstName')
let lastNameElement = document.getElementById('lastName')
let cantBeEmptyFirstName = document.getElementById('cantBeEmptyFirstName')
let button = document.getElementById('button')
let iconError = document.getElementById('iconError')
let cantBeEmptyLastName = document.getElementById('cantBeEmptyLastName')
let iconError2 = document.getElementById('iconError2')
let email = document.getElementById('email')
let iconError3 = document.getElementById('iconError3')
let cantBeEmptyEmail = document.getElementById('cantBeEmptyEmail')
let password = document.getElementById('password')
let iconError4 = document.getElementById('iconError4')
let cantBeEmptyPassword = document.getElementById('cantBeEmptyPassword')

const invalidChars = [' ', ',', '"', "'", '/', '\\']

button.addEventListener('click', enviar)


function enviar(){

   let containsOrDoesntContain = invalidChars.some(checkIfContains)

   function checkIfContains(char){
    return email.value.includes(char)
   }

    if(firstNameElement.value === ""){
    cantBeEmptyFirstName.style.display = 'block'
    iconError.style.display = 'block'
    firstNameElement.style.border = '2px solid #e08d90ff'
    firstNameElement.classList.add('error')
    }else{
    cantBeEmptyFirstName.style.display = 'none'
    iconError.style.display = 'none'
    firstNameElement.style.border = '1px solid gray'
}   
    if(lastNameElement.value === ""){
    cantBeEmptyLastName.style.display = 'block'
    iconError2.style.display = 'block'
    lastNameElement.style.border = '2px solid #e08d90ff'
    lastNameElement.classList.add('error')
    }else{
    cantBeEmptyLastName.style.display = 'none'
    iconError2.style.display = 'none'
    lastNameElement.style.border = '1px solid gray'
}   

    if(email.value === "" || containsOrDoesntContain === true){
    cantBeEmptyEmail.style.display = 'block'
    iconError3.style.display = 'block'
    email.style.border = '2px solid #e08d90ff'
    email.style.color = '#e08d90ff'
    email.style.fontWeight = 'bold'
    email.classList.add('error')
   }else{
    cantBeEmptyEmail.style.display = 'none'
    iconError3.style.display = 'none'
    email.style.border = '1px solid gray'
    email.style.color = 'black'
    email.style.fontWeight = 'normal'
}

    if(password.value === ""){
    cantBeEmptyPassword.style.display = 'block'
    iconError4.style.display = 'block'
    password.style.border = '2px solid #e08d90ff'
    password.classList.add('error')
    }else{
    cantBeEmptyPassword.style.display = 'none'
    iconError4.style.display = 'none'
    password.style.border = '1px solid gray'
}

}
