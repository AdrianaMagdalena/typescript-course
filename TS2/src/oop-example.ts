// Inheritance és encapsulation egyben :

// =====================================
// access-modifiers-demo.ts
// =====================================

class Parent {
  public publicValue: string = "PUBLIC";
  protected protectedValue: string = "PROTECTED";
  private privateValue: string = "PRIVATE";

  public insideParent(): void {
    console.log(this.publicValue);
    console.log(this.protectedValue);
    console.log(this.privateValue);
  }
}

class Child extends Parent {
  public insideChild(): void {
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
