# TypeScript 4

Forrás: https://github.com/Pezsi/TS-4/issues/4

## Homework repo:

https://github.com/AdrianaMagdalena/ts-hw-webshop

## Modules

Alapelvei:

- Elkülönítés
- Újrahasználhatóság
- Névtér kezelés
  Nem szennyezik a globális névteret, kisebb lehetőség névütközésekre.

Változót, függvényt, osztályt stb lehet egy fájlból exportálni és importálni egy másikban, lehetőséget adva arra, hogy a másik fájlban használható lehessen.

## Moduláris programozás

Alapelvei:

- Önállóság
- Egységbezárás (elrejti a belső működésüket)
- Újrafelhasználahtóság
- Könnyebb karbantarthatóság
- Hibátűrés (egy hibás modul nem érinti a többit)

## Kompozició

Komponensek használata

Egymástól független classokat hozunk létre. Ezek az classok rendelkeznek saját metodusáival, tulajdonságáival.
Ezeket a classokat egy összefogó classban példányosítünk, alkalmazünk a metodusáit, hogy rajta keresztül tudjuk őket felhasználni.
Kormány - Motor - Auto példa:
https://github.com/Pezsi/TS-4/issues/14

## Namespacek

Példa: https://github.com/Pezsi/TS-4/issues/15
`namespace` kulcsszóval definiálunk.
Namespacen belül definiálunk funkciókat, classokat stb - őket tudunk majd exportálni.
Namespacen kívül, ha szeretnénk hasznáni adott funkciót/classt a namespace nevével tudun hvatkozni rá.
Névtereket lehet egymásba ágyazni.

```typescript
namespace Matematika {
  export function osszead(a: number, b: number): number {
    return a + b;
  }

  export function kivon(a: number, b: number): number {
    return a - b;
  }
}

let eredmeny = Matematika.osszead(5, 3);
console.log(eredmeny); // 8
```
