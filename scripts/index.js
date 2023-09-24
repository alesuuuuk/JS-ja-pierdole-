document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("DOMContentLoaded", ()=>{
    const FORM = document.querySelector("#form")
    FORM.addEventListener("submit", (e)=>{
        e.preventDefault()
        const USER_NAME = document.getElementById("userName").value
        const USER_SURNAME = document.getElementById("userSurname").value
        const USER_EMAIL  =  document.getElementById("userMail").value
        console.log(USER_NAME, "____", USER_SURNAME, "____", USER_EMAIL )
                        
    })

})
})

