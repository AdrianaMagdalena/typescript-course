"use strict";
// típusok
class TypeScriptExamples {
    constructor() {
        // Primitív típusok inicializálása
        this.isLoggedIn = true;
        this.userCount = 100;
        this.userName = "John Doe";
        this.nullableValue = null;
        this.undefinedValue = undefined;
        this.uniqueSymbol = Symbol("unique");
        // Nem primitív típusok inicializálása
        this.userInfo = { name: "John", age: 30 };
        this.favoriteNumbers = [1, 2, 3];
        this.mixedTuple = ["hello", 10];
        this.userRole = UserRole.Admin;
        // Speciális típusok inicializálása
        this.randomValue = 89;
        this.unknownValue = 42; // Kezdetben bármilyen érték lehet
        this.neverFunction = () => {
            throw new Error("This function never returns");
        };
    }
    // Metódus, ami bemutatja az 'any' és 'unknown' típusok használatát
    demonstrateSpecialTypes() {
        // 'any' típusú változó használata
        console.log(this.randomValue.length); // Nem biztonságos, mivel bármilyen típusú lehet 'randomValue'
    }
}
//enum
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
// A TypeScriptExamples osztály példányosítása
let example = new TypeScriptExamples();
example.demonstrateSpecialTypes();
//# sourceMappingURL=data-types.js.map