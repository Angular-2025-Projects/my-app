/* // ------Type explicite------
let firstName: string = "Serigne";

// ------Type implicite------
let firstName1 = "Serigne";
firstName1 = 33; // Erreur : le type attendu est une chaîne, pas un nombre.

// ------Types Spéciaux en TypeScript------
const json = JSON.parse("55");  
console.log(typeof json); // Peut être n'importe quel type.  

//----------any----------------
let v: any = true;  
v = "string"; // Aucun problème  
Math.round(v); // Pas d'erreur  

//----------unknown---------------
let w: unknown = 1;  
w = "string"; // Pas d'erreur  
if (typeof w === 'object' && w !== null) {  
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();  
}  

//--------never-----------
let x: never = true; // Erreur : Type 'boolean' n'est pas assignable à 'never'. 

//----Undefined & null
let y: undefined = undefined;  
let z: null = null;  

// ------Les Tableaux ------
const names: string[] = [];  
names.push("Dylan"); // Pas d'erreur  
// names.push(3); // Erreur : 'number' n'est pas assignable à 'string'.  

//------Readonly------------
const names1: readonly string[] = ["Dylan"];  
names1.push("Jack"); // Erreur : 'push' n'existe pas sur 'readonly string[]'.

//----------Inférénce de type ------------------
const numbers = [1, 2, 3]; // Inféré comme 'number[]'  
numbers.push(4); // Pas d'erreur  
numbers.push("2"); // Erreur : 'string' n'est pas assignable à 'number'.  
let head: number = numbers[0]; // Pas d'erreur  

// ------Tuples ------
let ourTuple: [number, boolean, string];  
ourTuple = [5, false, 'Coding God was here']; // Correct  
ourTuple = [false, 'Wrong Order', 5]; // Erreur : l'ordre des types est important  

// ------Tuples readonly------
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];  
ourReadonlyTuple.push('Error'); // Erreur : impossible de modifier un tuple readonly  

// ------Tuples nommés------
const graph: [x: number, y: number] = [55.2, 41.3];  
const graph1: [number, number] = [55.2, 41.3];  
const [x1, y1] = graph1;

// ------Les Tableaux d'objets ------
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Yaris",
    year: 2010
};

// ------Inférence des Types-----------
const car1 = { type: "Toyota" };
car1.type = "Ford"; // Aucun problème
car1.type = 2;      // Erreur : Type 'number' non assignable à 'string'

//--------Propriétés Optionnelles-----------
const car2: { type: string, mileage?: number } = { type: "Toyota" }; // Pas d'erreur
car2.mileage = 2000; // Ajout possible

//--------Signatures d'Index------
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap['Jack'] = 25;      // Pas d'erreur
nameAgeMap['Mark'] = "Fifty"; // Erreur : Type 'string' non assignable à 'number'

//--------Enum------
enum CardinalDirections {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
}
console.log(CardinalDirections.North); // Affiche : 0
const currentDirection = CardinalDirections.North; // Erreur : non assignable à 'CardinalDirections'

enum CardinalDirections1 {
    North = 1, // 1
    East,      // 2
    South,     // 3
    West       // 4
}
console.log(CardinalDirections1.West); // Affiche : 4

//--------Enum nitialisé------
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCodes.NotFound); // Affiche : 404

enum CardinalDirections2 {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
}
console.log(CardinalDirections2.North); // Affiche : "North"

///----Type Alias-------
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car3 = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const car3: Car3 = {
  year: 2001,
  type: "Toyota",
  model: "Corolla",
};

//-----Interfaces--------------
interface Rectangle {
    height: number;
    width: number;
}
  
const rectangle: Rectangle = {
    height: 20,
    width: 10,
};

// -------------Extension des Interfaces----  
interface ColoredRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
};
  
// ------Union Types ------
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`);
}
  
printStatusCode(404);      // OK : number
printStatusCode('404');    // OK : string

function printStatusCode1(code: string | number) {
    console.log(code.toUpperCase()); 
    // Erreur : La méthode 'toUpperCase()' n'existe pas pour le type 'number'.
}
  
function printStatusCode2(code: string | number) {
    if (typeof code === 'string') {
      console.log(code.toUpperCase()); // OK : code est une chaîne
    } else {
      console.log(code); // OK : code est un nombre
    }
}

//----------------Les Fonctions-----------
function getTime(): number {
    return new Date().getTime();  // Retourne un nombre
}

//-----Retour de type void-----
function printHello(): void {
    console.log('Hello!');
}

//----------Paramètres de Fonction----------
function multiply(a: number, b: number): number {
    return a * b;
}

//----------Paramètres de Fonction----------
function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}

//---------Paramètres par Défaut-----------
function pow(value: number, exponent: number = 10): number {
    return value ** exponent;
}

//--------Paramètres Nommés-------
function divide({ dividend, divisor }: { dividend: number, divisor: number }): number {
    return dividend / divisor;
}

//--------Paramètres Rest-------
function add1(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

//---------Alias de Type pour FoncƟons----------
type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;

///---------Casting--------------
let x2: unknown = 'hello';
console.log((x as string).length); // Affiche la longueur de la chaîne

let x3: unknown = 4;
console.log((x as string).length); // Affiche `undefined` car un nombre n'a pas de longueur

console.log((4 as string).length); // Erreur : Conversion du type 'number' en 'string' est probablement une erreur

let x4: unknown = 'hello';
console.log((<string>x).length); // Affiche la longueur de la chaîne

let x5 = 'hello';
console.log(((x5 as unknown) as number).length); // Retourne undefined car x n'est pas réellement un nombre

//---------Classes-------------
class Person {
    name!: string;
}
  
const person = new Person();
person.name = "Jane"; // Définition du type string pour `name`

//---------Visibilité des membres--------
class Person1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
}
  
const person1 = new Person1("Jane");
console.log(person1.getName()); // `name` est privé, donc non accessible directement.

//-------------Propriétés de Paramètres-------------
class Person2 {
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
}
  
const person2 = new Person2("Jane");
console.log(person2.getName()); // `name` est privé mais directement initialisé dans le constructeur.

//--------------Readonly---------------
class Person3 {
    private readonly name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
}
  
const person3 = new Person3("Jane");
console.log(person3.getName()); // `name` est en lecture seule.

//--------------Héritage : Implements----------------
interface Shape {
    getArea: () => number;
}
  
class Rectangle1 implements Shape {
    public constructor(protected readonly width1: number, protected readonly height1: number) {}

    public getArea(): number {
        return this.width1 * this.height1;
    }
}

class Square extends Rectangle1 {
    public constructor(width: number) {
      super(width, width); // Appel du constructeur de Rectangle
    }
}

const s= new Square(2);
//--------------Héritage : Extends-----------------
class Rectangle2 {
    public constructor(protected readonly width2: number, protected readonly height2: number) {}
    public toString(): string {
      return `Rectangle[width=${this.width2}, height=${this.height2}]`;
    }
}
  
const r2= new Rectangle2(2,5);

class Square2 extends Rectangle2 {
    public override toString(): string {
      return `Square[width=${this.width2}]`; // Remplacement de `toString` de Rectangle
    }
}

const s2= new Square2(2);
//--------------Surcharge-----------------
abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
}

//--------------Classes Abstraites------------------
class Rectangle3 extends Polygon {
    public constructor(protected readonly width3: number, protected readonly height3: number) {
      super();
    }
  
    public getArea(): number {
      return this.width3 * this.height3;
    }
}

//--------------Generics dans les fonctions------------
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
  
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

//------------------Generics dans les classes------------------
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
}
  
const value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

//--------------Generics dans les alias de types-------------
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

//--------------Valeur par défaut----------
class NamedValue1<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
}
  
const value1 = new NamedValue1('myNumber1'); // T est inféré comme string par défaut
value1.setValue('myValue');
console.log(value1.toString()); // myNumber: myValue

//-------------------Contraintes avec extends--------------
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}

//--------------------Utility Types-----------

//---Partial
interface Point {
    x: number;
    y: number;
}
  
let pointPart: Partial<Point> = {}; // `x` et `y` sont facultatifs
pointPart.x = 10;

//----------------Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}
  
let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `mileage` devient obligatoire
};

//-------------------Record
const nameAgeMap1: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

//------------------Omit
interface Person4 {
    name: string;
    age: number;
    location?: string;
}
  
const bob: Omit<Person4, 'age' | 'location'> = {
    name: 'Bob'
};

//-----------Pick
interface Person5 {
    name: string;
    age: number;
    location?: string;
}
  
const bob1: Pick<Person5, 'name'> = {
    name: 'Bob'
};

//-------------Exclude
type Primitive = string | number | boolean;
const value2: Exclude<Primitive, string> = true; // `string` est exclu

//-----------------
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

//------------Parameters
type PointPrinter = (p: { x: number; y: number }) => void;
const point1: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
};

//----------------Readonly
interface Person5 {
    name: string;
    age: number;
}
  
const person5: Readonly<Person5> = {
name: "Dylan",
age: 35,
};
  
person5.name = "Israel"; // Erreur : Propriété readonly

//---------------keyof
interface Person6 {
    name: string;
    age: number;
}
  
// `keyof Person` crée un type union "name" | "age"
function printPersonProperty(person6: Person6, property: keyof Person6) {
    console.log(`Printing person property ${property}: "${person6[property]}"`);
}
  
let person6 = {
    name: "Max",
    age: 27,
};
  
printPersonProperty(person6, "name"); // Printing person property name: "Max"
printPersonProperty(person6, "age");  // Printing person property age: "27"
  
// Erreur : la propriété doit être "name" ou "age"
// printPersonProperty(person6, "address");
  
//------------
type StringMap = { [key: string]: unknown };

// `keyof StringMap` résout le type `string`
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

const pair = createStringPair("keyName", "value");
console.log(pair); // { keyName: "value" }

//--------------ypes null et undefined
let value3: string | undefined | null = null;
value3 = 'hello';       // Assignation d'une chaîne
value3 = undefined;     // Assignation de `undefined`

//-------Optional Chaining
interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  
function printYardSize(house: House) {
    const yardSize = house.yard?.sqft; // Vérifie si `yard` existe avant d'accéder à `sqft`
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
}
  
let home: House = { sqft: 500 };
printYardSize(home); // Prints 'No yard'

//-----------Nullish Coalescence
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
  
printMileage(null);   // Prints 'Mileage: Not Available'
printMileage(0);      // Prints 'Mileage: 0'

//------------Null Assertion
function getValue(): string | undefined {
    return 'hello';
}
  
let value4 = getValue();
console.log('value length: ' + value4!.length); // Assertion que `value` n'est pas null/undefined

//----------------estion des limites des tableaux
let array: number[] = [1, 2, 3];
let value6 = array[0]; // Type `number | undefined` avec `noUncheckedIndexedAccess`

//--------------------types littéraux de template
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage :
let myColor: HexColor<"blue"> = "#0000FF"; // Valide
//let invalidColor: HexColor<"yellow"> = "#FFFF00"; // Erreur : "yellow" n'est pas un type valide  */