//install as dev dependency typescript and then you can use npx tsc to compile and run it

let someName: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[]; //array
let role: [number, string]; //tuple

age = 5;
age = '5'

type Person = {
	name: string;
	age?: number; //age is optional
}

//Object
let person: Person = {
	name: "Piyush"
}

let lotsOfPeople: Person[];

let printName = (name: string) => {
	console.log(name);
}

let functionName : (parameter1: string, parameter2: number) => void | never ;

printName("rahul dhar");

let personName: unknown;

personName = '4q';
personName = 34;