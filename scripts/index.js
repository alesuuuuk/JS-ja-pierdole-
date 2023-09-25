
document.addEventListener("DOMContentLoaded", ()=>{
    const FORM = document.getElementById("form")
    FORM.addEventListener("submit", (e)=>{
        e.preventDefault()
        const USER_NAME = document.querySelector("#userName").value
        const USER_SURNAME = document.querySelector("#userSurname").value
        const USER_EMAIL = document.querySelector("#userEmail").value
        const USER_PASSWORD = document.querySelector("#userPasswordOne").value
        const USER_PASSWORD_REPEAT = document.querySelector("#userPasswordTwo").value
        if(USER_PASSWORD===USER_PASSWORD_REPEAT){
            console.log(USER_NAME, USER_SURNAME, USER_EMAIL, USER_PASSWORD)
        }else{
            alert("Паролі не збігаються")
        }
    })
})


