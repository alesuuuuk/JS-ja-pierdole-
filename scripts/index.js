// exception

// try{
//     result = 1/1
//     alert(result)
// }catch(e){
//     alert(e)
// }finally{
//     alert('final')
// }

// // loops
// let a = 10
// while(a>5){
//     console.log(a)
//     a--
// }
// a=  5
// console.log("_____", a)
// do{
//     console.log(a)
//     a--
// }while(a>5)

// for(i = 0; i<= 10; i++){
//     console.log(i)
// }

// let arr = [1, 2, "map"]
// arr.map((item)=>{
//     console.log(item)
// })
// console.log('____')
// arr.forEach((item)=>{
//     console.log(item)
// })

// consitional
// let a = prompt()
// if(a>=10){
//     alert("taplo")
// }else if(a< 10 && a >0){
//     alert("norma")
// }else{
//     alert("cjolodno")
// }

// let salary = 100

// salary >= 150 ? alert("pracuyete") : alert("ne pracuyete")

// select condition
// a = 4

// switch(a){
//     case 2:
//         alert(2)
//         break
//     case 4:
//     case 6:
//         alert("curent")
//         break
//     default:
//         alert("else value")
// }


// listeners


// start point

document.addEventListener("DOMContentLoaded", ()=>{
    const BODY = document.querySelector("body")
    const RED_BTN =  document.querySelector("#red")
    RED_BTN.addEventListener("click", (e)=>{
        e.preventDefault();
        BODY.style.backgroundImage = "../rick.png"


    })
})
