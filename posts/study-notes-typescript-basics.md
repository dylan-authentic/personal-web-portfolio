---
title: 'Learning TypeScript Basics'
date: '2021-01-21'
tag: Study Notes
---

# TypeScript
(Reference)[https://2ality.com/2018/04/type-notation-typescript.html]

Typescript creates static typing in JavaScript, which is a dynamically typed language.
- This means that type-checking occurs when the code is compiled, so you'll get errors without having to actually execute your code.
- Variables and properties expect the value stored within them to match the specified type when the variable or property was created

**Type Annotations**
- A colon after a variable starts a __type annotation__ - the __type expression__ that comes after the colon describes what values the variable can hold
`let x: number;`
This says that the value of variable x can only be a number
> (So, you use types in Typescript by defining a type annotion on a variable or object and then a type expression that defines what types that variable or object can have)

__In the code example above, x being initialized with undefined doesn't cause an error because typescript won't allow you to access the value of x before assigning a value to it__

**Type Inference**
If you don't specify a type annotation on a variable, typescript will infer it
`let num = 456 // Typescript infers that the type of variable num is number`

**Type Expressions**
- Static types for JavaScript's dynamic types
    1. undefined, null
    2. boolean, number, string
    3. symbol
    4. object
- Typescript-specific types
    1. Array (not technically a type in JS)
    2. any (the type of all values)

**Type Aliases**
With `type` we can create an alias for an existing type:
```
type Age = number;
const age: Age = 42;
```
> (So, you can create your own types to be used within type expressions by using the **type** keyword -- this is called a **Type Alias**)

**Arrays**
- As Lists (all values in the array have the same type, length of the array can vary)
There are two type expressions that can be used with Arrays:
```
let arr: number[] = [];
// or
let arr: Array<number> = [];
```
- As Tuple (all values may not be the same time, length is fixed)

**Functions**
- Example of function type -> `(num: number) => string`
> this type expression can be used when creating a function, it defines the parameter type(s) of the functions and the return type of the function. So you can define a type annotation on a function and use the function type expression as well
`const func: (num: number) => string = (num: number) => String(num);`
- BUT, because TypeScript is good at inferring types, you don't have to specify the type expression
`const func = (num: number) => String(num); // TypeScript infers the return type and the parameter definition for the function`

- You should specicify all types of a function, including all the parameters and the return type of the function
```
function stringify123(callback: (num: number) => string): string {
    return callback(123)
}
```

__void__
- void is a special return type for functions that says the function doesn't return anything (undefined), either explicitly or implicitly

__Optional Parameters__
- A question mark after a parameter means that parameter is optional
```
function stringify123(callback?: (num: number) => string) {
    if(callback === undefined) callback = String;
    return callback(123);
}
```

__Parameter Default Values__
- Default values on parameters makes parameters optional
- You can omit type annotations on default values and use type inference or you could include the type annotions if need be
```
function myFunc(x=0, y=0): [number, number] {
    return [x, y];
}

function myFuncWithTypeAnnotions(x:number = 0, y:number = 0): [number, number] {
    return [x, y];
}
```

__Rest Parameters__
- You can also use rest parameters in typescript in which the type expression must be an array
```
function createNumsCombination(...nums: number[]): string{
    ...
}
```

**Union Types**
- A union type allows the type of a variable to be one of the specified options
- You specificy a union type using the | operator
`function getScore(numberOrString: number|string): number { ... } `

__Null / Undefined Types__
- TypeScript will throw an error if you set a variable to null or undefined without specifying null or undefined as a union type when you declare the variable
```
let myVar: string = 'abc';
myVar = null; // error

let myVar2: string|null = 'abc';
myVar2 = null; // no error
```

__Making Omissions Explicit__
- If you want to make a parameter required but allow it to be null instead of making the parameter optional to be passed, you can do so by specifying a union type with null on the parameter
`function funcA(callback: null | ((num: number) => string)) { ... }`
- This forces the caller of the function to pass in null if they don't want to specify a callback

**Optional vs Default Parameters vs undefined|T**
- Parameter is optional: x?: number
- Parameter has default parameter: x:number = 0
- Parameter has undefined union type: x: undefined|number

- An optional parameter can be completely ommitted, that means the parameter is undefined
- A parameter with a default value uses the default value when the parameter is omitted or set to undefined
- If a parameter has a union type, it must be specified as either the available type or as undefined

**Using Types with Objects**
- Interfaces
```
interface Point {
    x: number;
    y: number;
}
```
(You can also use commas instead of semicolons)

- Object-literal Types
```
type Point = {
    x: number;
    y: number;
}
```
(You can use object-literal types in-line)

Interfaces are typically used to describe a data shape, and Types are typically used to define a type of data

__Optional Parameters__
You can use the ? on a parameter in a type or interface to make it optional

__Methods__
Interfaces can also contain methods and not just values

**Type Variables and Generic Types**
With static typing, there are two levels where data exists
- Values exist at the "base-level"
- Types exist at the "meta-level"

- Parameterized Types
> In the same way that a function exists at the "base level", act as factories that create a value, and accept parameters that represent values... a Parameterized Type exists at the "meta level", acts as a factory that creates a type, and accepts parameters that represent types.
- Parameters are declared between angle brackets

```
type TypeFactory<X> = X;
type MyType = TypeFactory<string>;
// this returns a string type to MyType variable
```

Example:
```
interface ValueContainer<Value> {
    value: Value;
}

type StringContainer = ValueContainer<string>;
// this creates a type who's value is a string
```

**Parameterized Class**
```
class SimpleStack<T> {
    #data: Array<T> = [];
    push(x: T): void {
        this.#data.push(x);
    }
    pop(): T {
        const result = this.#data.pop();
        if(result === undefined) {
            throw new Error();
        }
        return result;
    }
    get length() {
        return this.#data.length
    }
}

const myStack = new SimpleStack<string>();
```

__Type variables for functions__
```
function id<T>(x: T): T {
    return x;
}
```
