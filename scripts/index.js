var displayProducts = function (user_name, age) {
    alert("Hello ".concat(userName, ", you're ").concat(age));
};
// introducing syntax and main types
var userName = "John";
var age = 15;
displayProducts(userName, age);
var answer_for_all_questions_about_TS = "мати рідна то піздєц";
var isAdult = age > 18;
alert(answer_for_all_questions_about_TS);
console.log(age + "12");
// console.log(age - "12") // error 
// one test)))))
// let num_one:  = "213" // dont work
// let num_one: any = "213"; // work 
// let num_two = 312;
// console.log(num_two - num_one); 
// some special types for TS
var test2 = 12;
// let test3: never = true;
var test4 = null;
var test5 = undefined;
// let bignumber: bigint = 0b11111111111111111111111111111111111111111111111111111; // i dont know how this shit works
var symbol_oop = Symbol("key");
// _________ ARRAYES__________________
var fruits = [];
fruits.push("apple"); // normal 
// fruits.push(12) // error
var massive = []; // cant add new element
// _________ OBJECTS____________
// it could be but not
var object1 = {
    name: "john",
    age: 12
};
;
var object = {
    name: "john",
    age: 12
};
