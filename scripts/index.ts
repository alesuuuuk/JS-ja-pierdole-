const displayProducts = (user_name: string, age: number): void => {
    alert(`Hello ${userName}, you're ${age}`);
};

// introducing syntax and main types
let userName: string | number = "John";
let age: number = 15;
displayProducts(userName, age);
let answer_for_all_questions_about_TS: string = "мати рідна то піздєц";
let isAdult: boolean = age > 18;
alert(answer_for_all_questions_about_TS);
console.log(age + "12");
// console.log(age - "12") // error 

// one test)))))

// let num_one:  = "213" // dont work

// let num_one: any = "213"; // work 
// let num_two = 312;
// console.log(num_two - num_one); 



// some special types for TS
let test2: unknown = 12; // same as any 
// let test3: never = true; // not usable
let test4: null = null; 
let test5: undefined = undefined;
// let bignumber: bigint = 0b11111111111111111111111111111111111111111111111111111; // i dont know how this shit works
let symbol_oop: symbol = Symbol("key");

// _________ ARRAYES__________________
let fruits: string[] = []
fruits.push("apple") // normal 
// fruits.push(12) // error
let massive: readonly string[] = [] // cant add new element

// _________ OBJECTS____________
// it could be but not
let object1: {
    name: string,
    age: number
} = {
    name: "john",
    age: 12
};


// how its normally shoul look 
interface userDataTypes {
    name: string,
    age: number
};

let object: userDataTypes=  {
    name: "john",
    age: 12
};


// i need to instal node.js and instal TS then with cmd: cd "path to folder"; cd scripts; tsc index.ts