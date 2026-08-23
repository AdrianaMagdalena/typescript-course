// típusok
class TypeScriptExamples {
  // Primitív típusok
  isLoggedIn: boolean;
  userCount: number;
  userName: string;
  nullableValue: null;
  undefinedValue: undefined;
  uniqueSymbol: symbol;

  // Nem primitív típusok
  userInfo: object;
  favoriteNumbers: number[];
  mixedTuple: [string, number];
  userRole: UserRole;

  // Speciális típusok
  randomValue: any;
  unknownValue: unknown;
  neverFunction: () => never;

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
    this.randomValue = "Anything goes here";
    this.unknownValue = 42; // Kezdetben bármilyen érték lehet
    this.neverFunction = () => {
      throw new Error("This function never returns");
    };
  }

  // Metódus, ami bemutatja az 'any' és 'unknown' típusok használatát
  demonstrateSpecialTypes(): void {
    // 'any' típusú változó használata
    console.log(this.randomValue.length); // Nem biztonságos, mivel bármilyen típusú lehet 'randomValue'
  }
}

//enum
enum UserRole {
  Admin,
  User,
  Guest,
}

// A TypeScriptExamples osztály példányosítása
let example = new TypeScriptExamples();
example.demonstrateSpecialTypes();
