// const changeBgColor = (selector, color) => {
//     const element = document.querySelector(selector)
//     element.style.backgroundColor = color;
// }

// // start point
// document.addEventListener("DOMContentLoaded", ()=>{
//     // get elements
//     const RED_BTN = document.querySelector("#red");
//     // const NAME = document.querySelectorAll(".form__name")
//     // const NAME = document.getElementsByClassName("form__name")[0]
    
//     const FORM = document.querySelector(".form")
    
    
//     // add listeners
//     FORM.addEventListener("submit", (e)=>{
//         e.preventDefault()
//         const COLOR = document.getElementById("form__color")
//         const NAME = document.querySelector(".form__name")
//         const USER_NAME = NAME.value;
//         const USER_COLOR = COLOR.value
//         console.log(USER_NAME, USER_COLOR)
//         changeBgColor("body", USER_COLOR)
//         NAME.value = ""
        
        
//     })
//     // RED_BTN.addEventListener("click", (e)=>{
//     //     e.preventDefault();
//     //     changeBgColor("body", "#f00");
//     // })
// })
    


//     // NAME.addEventListener("change", ()=>{
//     //     alert("work")
//     // })
// //     // RED_BTN.addEventListener("click", (e)=>{
// //     //     e.preventDefault();
// //     //     changeBgColor("body", "#f00")
// //     })


// document.addEventListener("DOMContentLoaded", ()=>{
//     const FORM = document.querySelector("#form")
//     FORM.addEventListener("submit", (e)=>{
//         e.preventDefault()
//         const USER_NAME = document.getElementById("userName").value
        
//         const USER_SURNAME = document.getElementById("userSurname").value
//         const USER_FATHER_NAME = document.getElementById("userFathersname").value
//         const USER_PHONE_NUMBER  =  document.getElementById("userPhoneNumber").value
//         const USER_EMAIL  =  document.getElementById("userMail").value
//         const USER_QUINTUTACY  =  document.getElementById("userQuintutaty").value
//         const USER_DATE  =  document.getElementById("userDate").value
//         const USER_TIME  =  document.getElementById("userTime").value
//         const USER_COMMENT  =  document.getElementById("userComment").value
//         console.log(USER_NAME, "____", USER_SURNAME, "____", USER_FATHER_NAME, "____", USER_PHONE_NUMBER, "____", USER_EMAIL, "____", USER_QUINTUTACY, "____", USER_DATE, "____", USER_TIME, "____", USER_COMMENT)
                        
//     })

// })

// const changeBgColor = (selector, color) => {
//     const element = document.querySelector(selector)
//     element.style.backgroundColor = color;
// }

// // start point
// document.addEventListener("DOMContentLoaded", () => {
//     // get elements
//     const RED_BTN = document.querySelector("#red");
//     // const NAME = document.querySelectorAll(".form__name")
//     // const NAME = document.getElementsByClassName("form__name")[0]
//     const FORM = document.querySelector(".form")
//     const SHOW_ELEMENT_BTN = document.querySelector(".show__element")


//     // add listeners
//     // NAME.addEventListener("change", (e)=>{
//     //     const USER_NAME = e.target.value;
//     // })
//     FORM.addEventListener("submit", (e) => {
//         e.preventDefault();
//         // get elements
//         const NAME = document.querySelector(".form__name");
//         const COLOR = document.getElementById("form__color");
//         // get value
//         const USER_NAME = NAME.value;
//         const USER_COLOR = COLOR.value;
//         // display result
//         changeBgColor("body", USER_COLOR)

//         // clear form
//         NAME.value = "";

//         // display status request


//     })
//     // RED_BTN.addEventListener("click", (e)=>{
//     //     e.preventDefault();
//     //     changeBgColor("body", "#f00");
//     // })
//     SHOW_ELEMENT_BTN.addEventListener("click", (e) => {
//         // generate html
//         let html = `
//             <h1>Test Insert Element</h1>
//             <div class="conntent__area_box">
//                 test
//             </div>
//         `
//         // get insert area
//         const AREA = document.querySelector('.conntent__area')
//         // put html in area
//         AREA.innerHTML = html;
//     })
// })


const clearHTMLElement = (selector) =>{
    const TARGET = document.querySelector(selector)
    TARGET.inner = ''
}