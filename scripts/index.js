const getUserData = () => {
    //     let userName = prompt("Enter your name:");
    //     // console.log(userName);
    // //     let test3 = 24

    // //     let test = true || alert("test")
    // //     let test2 = false || alert("test2")
    //  let dataServer = undefined;
    //  some code
    // let localData = dataServer || "Дані не знайдено"
    // console.log(localData)
    // let userAge = prompt("enter your age")
    // // userAge > 18 || alert("Ви не повнолітні")
    // userAge < 18 && alert('Ви не повнолітні')
    // let userName = prompt("Enter your name:") || alert("u don't entered name");
   


    // get user data
    let userName = document.querySelector(".form__name").value
    userName ? hideErrorStatus(".form__name", ".form__name_error") : displayErrorStatus(".form__name", ".form__name_error", "u don't wrote name")
   
}

const displayErrorStatus = (selector, selector_msg, msc_text)=>{
    document.querySelector(selector).classList.add("error");
    document.querySelector(selector_msg).classList.add("error")
    document.querySelector(selector_msg).innerHTML = msc_text

};

const hideErrorStatus = (selector, selector_msg, )=>{
    document.querySelector(selector).classList.remove("error");
    document.querySelector(selector_msg).classList.remove("error")

}

// start point
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", (e)=>{
        e.preventDefault();
        getUserData();
    });
});

