let fNameEl = document.getElementById('fName');
let lNameEl = document.getElementById('lName');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');

let fNameErrorMsg = document.getElementById('fNameError');
let lNameErrorMsg = document.getElementById('lNameError');
let emailErrorMsg = document.getElementById('emailError');
let passwordErrorMsg = document.getElementById('passwordError');

let formData = {
    fName : '',
    lName : '',
    email : '',
    password : ''
}
function fNameFun(e){
    let val = e.target.value
    if(e.target.value===""){
         fNameErrorMsg.textContent ="First Name Cannot be Empty";
         fNameErrorMsg.style.color = 'red'
        fNameEl.style.border = "1px solid red"
         fNameEl.classList.add('')
    }
    else{
        fNameErrorMsg.textContent =""
    }
    formData.fName = val
    console.log(val)
}

fNameEl.addEventListener('blur',fNameFun)
console.log(formData)


function lNameFun(e){
    let val = e.target.value
    if(e.target.value===""){
        lNameErrorMsg.textContent = "Last Name Cannot be Empty"
    }
    else{
        lNameErrorMsg.textContent = ""
    }
    formData.lName = val
    console.log(val)
}

lNameEl.addEventListener('blur',lNameFun)

function emailFun(e){
    let val = e.target.value
    if(e.target.value===""){
        emailErrorMsg.textContent = "Email Cannot be Empty"
    }
    else{
        emailErrorMsg.textContent = ""
    }
    formData.email = val
    console.log(val)
}

emailEl.addEventListener('blur',emailFun)

function passwordFun(e){
    let val = e.target.value
    if(e.target.value===""){
        passwordErrorMsg.textContent = "Password Cannot be Empty"
    }
    else{
        passwordErrorMsg.textContent = ""
    }
    formData.password = val
    console.log(val)
}

passwordEl.addEventListener('blur',passwordFun)

function formVaidation(){
    if(formData.fName===""){
        fNameErrorMsg.textContent ="First Name cannot be empty";
         fNameErrorMsg.style.color = 'red'
        fNameEl.removeAttribute('placeholder')
         fNameEl.classList.add('border-danger')
    }
    else{
        fNameErrorMsg = ""
        fNameEl.classList.remove('border-danger')
    }
    if(formData.lName===""){
        lNameErrorMsg.textContent ="Last Name cannot be empty";
         lNameErrorMsg.style.color = 'red'
         lNameEl.removeAttribute('placeholder')
         lNameEl.classList.add('border-danger')
    }
    else{
        lNameErrorMsg = ""
        lNameEl.classList.remove('border-danger')
    }
    if(formData.email===""){
        emailErrorMsg.textContent ="Email cannot be empty";
         emailErrorMsg.style.color = 'red'
         emailEl.removeAttribute('placeholder')
         emailEl.classList.add('border-danger')
    }
    
    else{
        emailErrorMsg = ""
        emailEl.classList.remove('border-danger')
    }
    if(formData.password===""){
        passwordErrorMsg.textContent ="Password cannot be empty";
         passwordErrorMsg.style.color = 'red';
         passwordEl.setAttribute('placeholder',)
         passwordEl.classList.add('border-danger',"text-end","bi","bi-exclamation-circle-fill")
         

    }
    else{
        passwordErrorMsg = ""
        passwordEl.classList.remove('border-danger')
    }
}

function buttonFun(){
    console.log(formData)
   
formVaidation()
   

}