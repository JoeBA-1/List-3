const accounts = [['admin01', '123'] , ['admin02',"234"], ['admin03',"345"]]
const loginBtn = document.getElementById("login")
let usernameEl = document.getElementById("username")
let passwordEl = document.getElementById("password")


document.title = "Login Page"

loginBtn.addEventListener("click",function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value 
    let found = false

    // for (let i=0; i<accounts.length; i++){
    for (let i in accounts){
        if(accessUser == accounts[i][0] && accessPass == accounts[i][1]){
            alert(`welcome ${accessUser}`)
            found = true

        }
    }
    if(found == false){
            alert('invalid Username or Password')
        }


})