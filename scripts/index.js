
console.log("JA PIERDOLE")
const KURWA = "kurwa"
if (KURWA == "fgfgff") {
    console.log("jfff")
}
else {
    console.log("pacany buryu narygav")
}
let text = "some text__"



var testVariableOne = "test1"
let testVariableTwo = "test2"
const testVariableThree = "test3"

// let nameUser, age, surname;
// nameUser = 'John'
// age = 21
// surname = "Doe"

// console.log(nameUser + surname + age)   

// console.log(`Name:${nameUser}, Username${surname}, Age:${age}`)
// console.log(typeof nameUser, typeof age, typeof surname)
// console.log(nameUser.toLowerCase()) // toUpperCase()
// console.log(text.length)

// console.log(text.replaceAll(" ", ""))

// console.log(nameUser[0])

// console.log(56>3)

// let tempArr = [1, 3, 2, 5, 543242, 123, 3425, "test"]
// console.log(tempArr)
// console.log(tempArr.length)
// tempArr.push("new element!!")
// console.log(tempArr)
// tempArr.unshift(" new start element")
// console.log(tempArr)
// tempArr.pop()
// console.log(tempArr)

// tempArr.forEach(element => {
//     console.log(element)
// });

// let index = tempArr.indexOf('test')
// tempArr.splice(index, 1)
// console.log(tempArr)


// let fruits_arr = ['apple', "pineaple", "banana"]
// fruits_arr.forEach((fruit, index)=>{
//     console.log(fruit, index)
// })

// fruits_arr.map((fruit, index)=>{
//     console.log(fruit, index)
// })


// let filteredFruits = fruits_arr.filter((fruit)=>{
//     if( fruit == 'banana'){
//         return fruit
//     }
// })
// console.log(filteredFruits)


// filteredFruits = fruits_arr.filter(fruit => fruit== 'apple')
// console.log(filteredFruits)


// // sort
// let numbersArr = [1,2,33,423,4,24,42,42,32,4,24,35,654,67]
// numbersArr.sort((a, b)=>{
//     return a - b
// })

// console.log(numbersArr)


let tempUser = {
    name: "john",
    age: 21,
    adress: [],
    surname: "doe"
}

console.log(tempUser.name)
// add new element
tempUser.salary = 3000
console.log(tempUser)

const {name, surname, adress} = tempUser
console.log(surname)

delete tempUser.age
console.log(tempUser)