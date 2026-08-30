// Advanced Types

// Union Types (Unió Típusok)
let mixedType: string | number;
mixedType = "Hello"; // Elfogadja a string típust
mixedType = 42; // Elfogadja a number típust

// Type Guards (Típus Őrök)
function isString(value: string | number): value is string {
  return typeof value === "string";
}

console.log(isString(mixedType));

if (isString(mixedType)) {
  console.log("Ez egy string.");
} else {
  console.log("Ez egy szám.");
}
