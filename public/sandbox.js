"use strict";
let func = () => {
    console.log('mooses');
};
// GENERICS - tut18 - reusable blocks of code with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); // spread operator: '...x'
};
let docOne = addUID({ name: 'stormy', age: 3 });
console.log(docOne); // does not know about docOne.name or docOne.age without the '<T>' in the addUID function
console.log(docOne.name);
// ENUMS - tut19
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {})); //zero based list, see output 
const docThree = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 33,
};
const docFour = {
    uid: 3,
    resourceType: ResourceType.PERSON,
    data: 'whiskers'
};
console.log(docThree, docFour);
// touples -- python!
let arr = ['one', 28, true];
arr[0] = false;
arr[1] = 'stormy';
arr = [3, 'two', 33];
let tup = ['one', 3, true];
tup[0] = 'stormy';
tup[1] = false; // wrong!
