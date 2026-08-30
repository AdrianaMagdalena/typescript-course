# TypeScript 3

## Design Patterns

(tervezési minták)

- nem kell megtanulni egyes szerkezeti mintákat
- fontos, hogy értsuk az elvet mögöttük

Majd legfeljebb tanfolyam után utánanézni kicsit pontosabban.
Vizsgán nem lesz. HF-ben nem lesz.

## Singleton minta

Ezzel meg kel ismerkedni!

- Egyetlen egy példány létezik egy időben
- Hasznos, ha közös szolgáltatásokhoz/erőforrásokhoz hozzáférni kell, (pl. adatbázis kapcsolat, konfigurációs beállítások).
- Konstruktora **privát**, ezért nem lehet `new` kulcsszóval példányosítani
- Metódusa statikus - `static` kulcsszóval kell ellátni
- Csak metódus használatával példányosítjuk, ha nem létezik még példány. Ha példány létezik, visszaadjuk azt.

Példa:

```typescript
class Singleton {
  private static instance: Singleton;

  // A konstruktor privát, hogy megakadályozza a közvetlen példányosítást.
  private constructor() {}

  // Statikus metódus az egyetlen példány eléréséhez.
  public static getInstance(): Singleton {
    // Ha még nem létezik példány, akkor létrehozzuk.
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    // Visszaadjuk a létező vagy az újonnan létrehozott példányt.
    return Singleton.instance;
  }

  public someMethod() {
    // Példa metódus, amit a Singleton példányon lehet meghívni.
    console.log("Ez egy példa metódus a Singleton osztályban.");
  }
}

// Használat
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, mindkettő ugyanaz a példány

instance1.someMethod(); // Ez egy példa metódus a Singleton osztályban.
```

Forrás és több infó:
https://github.com/Pezsi/TS-3/issues/13

## Típusok létrehozása

TS ad lehetőséget arra, hogy saját típusokat hozzuk létre
lehetnekilyenkor paraméterei is `type` kulcsszóval

`typeof` - ha nem tudjuk valaminek mi a típusa (pl API-ból, külső könyvtárből jön az adat) - azt futásidőben ellenőrzi

`readonly` - lehetővé teszi, hogy a típus definicióban megadott értékeket, az e típusú változóban, az iniciálizása után ne tudjuk megváltoztatni.

Példa:

```typescript
// itt definiálunk a Person nevű típust
// Person típus name és age tulajdonságokkal rendelkezik
type Person = {
  // itt adunk meg neki tulajdonságokat
  readonly name: string;
  readonly age: number;
};

// létrehozunk és iniciálizálunk egy adatot - person változó alatt
// aminek Person típusa van,
// ergo name és age tulajdonságokkal kell rendelkeznie:
const person: Person = {
  name: "Jane",
  age: 25,
};

// ez nem fog működni - mivel a name tulajdonság readonly,
// nem lehet módosítani utólagosan:
person.name = "John"; // fordítási hiba
```

## Generics

```typescript
function getFirstElement<ElementType>(array: ElementType[]) {
    retun array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement<number>(numbers);
const firstNum = getFirstElement(numbers);

const strings = ["bjhbfdvb", "chddgcv"];
const firstString = getFirstElement<string>(strings);
const firstString = getFirstElement(strings);
```

```typescript
// egy általános Api válasz adat leírása
// tudom hogy valami adatot fogok kapni, de még nem tudni mit pontosan
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

// itt definiálhatjuk különböző adat resposokat
// pontosítjuk, hogy a Data alatt pontosan milyen adatokat várjuk:
type UserResponse: ApiResponse<{name: string; age: number}>;
type BlogResponse: ApiResponse<{title: string}>;
type StatusResponse: ApiResponse<{status: number}>;

// itt használjuk a pontosított response típust
const responseUser: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "Lorem ipsum"
  },
  isError: false,
}

const responseStatus: StatusResponse = {
  data: {
    status: 200
  },
  isError: false,
}
```

tbc

## Advanced Types

Apart from the "conventional" ts types (like boolean, string, number, void, _array_[] etc) there are advanced ways of indicating the types.
They are used to handle more complicated data structures, because of their flexibility.

1. Union Types
   Written with | ("or") symbol:

```typescript
let data: string | number;
let data: string | number;

data = "Profession";
data = 42;
```

2. Intersection Types
   Used to combine separate types. It then holds porperties of both types.
   Written with "&" (and) symbol:

```typescript
tbc;
```

3. Type Guards
   Used to check the variable's type.

```typescript
const data: number = 45;

function isString(param: string | number): param is string {
  return typeof param === "string";
}

if (isString(data)) {
  // do sth if data is a string
} else {
  // do sth if data is a number
}
```

4. Nullable Type
   Egy adott típus mellé fogadja a null-t is.

```typescript
let nullableVal: string | null = null;
nullableVal = "String";
```

5. Type Alias
   Egy custom típust le lehet menteni egy custom type név alatt:

```typescript
type StringOrNumber = string | number;
let sonVal: StringOrNumber = "bsjdgbcj";
sonVal = 78;
```

6. Conditional Types

```typescript
tbc;
```

## Map

Van kulcs-érték párja (pl kártyaID - kártyaszám)
