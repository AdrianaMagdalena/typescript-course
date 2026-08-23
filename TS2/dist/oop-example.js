"use strict";
// Inheritance és encapsulation egyben :
// =====================================
// access-modifiers-demo.ts
// =====================================
class Parent {
    constructor() {
        this.publicValue = "PUBLIC";
        this.protectedValue = "PROTECTED";
        this.privateValue = "PRIVATE";
    }
    insideParent() {
        console.log(this.publicValue);
        console.log(this.protectedValue);
        console.log(this.privateValue);
    }
}
class Child extends Parent {
    insideChild() {
        console.log(this.publicValue); // OK
        console.log(this.protectedValue); // OK
        // console.log(this.privateValue); // HIBA
    }
}
const parentObj = new Parent();
const childObj = new Child();
console.log(parentObj.publicValue); // OK (public)
// console.log(parentObj.protectedValue); // HIBA
// console.log(parentObj.privateValue); // HIBA
parentObj.insideParent(); // OK
childObj.insideChild(); // OK
