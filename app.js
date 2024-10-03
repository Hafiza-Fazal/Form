function registration(event){
    event.defaultPrevented()
    var name = documengt.getElementbyId(name)
    var email = documengt.getElementbyId(email)
    var phoneNumber = documengt.getElementbyId(phoneNumber)
    var password = documengt.getElementbyId(password)
    var cpassword = documengt.getElementbyId(cpassword)
   

var userData = {
    name : name.value,
    email : email.value,
    phoneNumber : phoneNumber.value,
    password : password.value,
    cpassword : cpassword.value,

}
console.log(userData);
localStorage.setItem("userData" , JSON.stringify(userData))
setTimeout(() => {
    window.location.href = "./dashboard.html"
}, 2000);
}
function getLocalDataDiv(){
    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    
    var getLocalDataDiv = document.getElementById("getLocalDataDiv")
    getLocalDataDiv.innerHTML = `
     <ul>
        <li>Name: ${parseData.name}</li>
        <li>Email: ${parseData.email}</li>
        <li>Phone Number: ${parseData.phoneNumber}</li>
     </ul>
    `
}
getLocalDataDiv()
function redirect() {
    window.location.href = "./index.html"
// login form
    
}
function login(event) {
    event.preventDefault()
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    if (parseData.email !== email.value) {
        alert("Invalid Email")
    } else if (parseData.password !== password.value) {
        alert("Incorrect Password")
    } else {
        alert("Login Succussfully")
        window.location.href = "./dashboard.html"
    }
}