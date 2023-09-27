function togglePasswordVisibility(selector) {
    // Get the password input element and image element
    const passwordInput = document.querySelector(selector);
    const imageElement = document.querySelector(".form__input_showPassword_1"); // Replace with the actual ID or selector of your image element

    // Check if the element is an input with type "password"
    if (passwordInput && passwordInput.type === "password") {
        // Change the input type to "text" to reveal the password
        passwordInput.type = "text";
        imageElement.src = "/img/Group.png"; // Change the image source to show.png
    } else {
        // Change the input type back to "password" to hide the password
        passwordInput.type = "password";
        imageElement.src = "/img/show.png"; // Change the image source back to Group.png
    }
}

function togglePasswordVisibilitySecond(selector) {
    // Get the password input element and image element
    const passwordInput = document.querySelector(selector);
    const imageElement = document.querySelector(".form__input_showPassword_2"); // Replace with the actual ID or selector of your image element

    // Check if the element is an input with type "password"
    if (passwordInput && passwordInput.type === "password") {
        // Change the input type to "text" to reveal the password
        passwordInput.type = "text";
        imageElement.src = "/img/Group.png"; // Change the image source to show.png
    } else {
        // Change the input type back to "password" to hide the password
        passwordInput.type = "password";
        imageElement.src = "/img/show.png"; // Change the image source back to Group.png
    }
}


const getUserRole = (element) => {
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    return DATA
}

const getUserDataFromField = (element) => {
    const VALUE =  element.value;
    const TYPE = element.getAttribute("name")
    if (TYPE == "last_name"){
        if(VALUE.length >= 3){
            return VALUE
        }else{
            return null
        }
    }
    // need delete element production
    return VALUE
}


// start point
document.addEventListener("DOMContentLoaded", () => {
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock");
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock");
    const LF_BLOCK = document.querySelector(".form__top_LFor");
    const CHECK_BOX = document.querySelector(".form__input_checkbox");
    const SUBMIT_BTN = document.querySelector(".form__input_sumbit");
    const REGISTER_FORM = document.querySelector(".form");
    // get input user data
    const INPUT_NAME = document.querySelector(".form__input_first_name")
    const INPUT_LAST_NAME = document.querySelector(".form__input_second_name");
    const INPUT_EMAIL = document.querySelector(".form__input_email")
    const INPUT_PASSWORD = document.querySelector(".form__input_password")
    const INPUT_CONFIRM_PASSWORD = document.querySelector(".form__input_password_reat")

    
    
    
    // switch user role
    LF_BLOCK.addEventListener("click", () => {
        LEFT_BLOCK.classList.toggle('active');
        RIGHT_BLOCK.classList.toggle('active');
    })
    // get value form checkbox on click
    CHECK_BOX.addEventListener("click", function (e) {
        const CHECK_BOX_VALUE = CHECK_BOX.checked
        // CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = !CHECK_BOX_VALUE : SUBMIT_BTN.disabled = !CHECK_BOX_VALUE;
        CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = false : SUBMIT_BTN.disabled = true;
    })
    // submit form
    REGISTER_FORM.addEventListener("submit", (e)=>{
        e.preventDefault();
        // get user data element 
        
        let role = getUserRole(LF_BLOCK);
        let lastUserName = getUserDataFromField(INPUT_LAST_NAME);
        let firstUserNAme = getUserDataFromField(INPUT_NAME)
        let userEmail = getUserDataFromField(INPUT_EMAIL)
        let userPassword = getUserDataFromField(INPUT_PASSWORD)
        let userPasswordRepeat= getUserDataFromField(INPUT_CONFIRM_PASSWORD)
        // check passwords equality
        if (userPassword === userPasswordRepeat){
            // create data frame
            const USER_DATA = {
                role,
                firstUserNAme,
                lastUserName,
                userEmail,
                userPassword
            }
            console.log("USER_DATA", USER_DATA)
        }
        else{ // send message about not equality passwords
            alert("Паролі не співпадають")
        }
        
    })
})