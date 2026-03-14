# 🟦 TypeScript Basics

## What is TypeScript?
TypeScript is a **strongly typed superset of JavaScript** that compiles to plain JS. It adds static types, interfaces, and powerful tooling.

## Why Use TypeScript?
- Catch errors at **compile time** rather than runtime
- Better IDE autocomplete & refactoring
- Self-documenting code via types
- Scales better in large codebases

---

## 1. Primitive Types

```ts
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
```

## 2. Arrays & Tuples

```ts
let scores: number[] = [10, 20, 30];
let tags: Array<string> = ["ts", "js"];

// Tuple — fixed-length, fixed-type array
let user: [string, number] = ["Alice", 30];
```

## 3. Interfaces

```ts
interface User {
  id: number;
  name: string;
  email?: string; // optional
  readonly createdAt: Date; // immutable after creation
}

const user: User = { id: 1, name: "Alice", createdAt: new Date() };
```

## 4. Type Aliases

```ts
type ID = string | number;
type Status = "active" | "inactive" | "pending";
type Callback = (error: Error | null, result?: string) => void;
```

## 5. Functions

```ts
// Named function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Optional & default params
function createUser(name: string, role: string = "user", bio?: string) {}

// Rest params
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

## 6. Generics

```ts
function identity<T>(value: T): T {
  return value;
}

// Constrained generics
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const response: ApiResponse<User[]> = {
  data: [],
  status: 200,
  message: "OK",
};
```

## 7. Enums

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Const enum (compiled away, more efficient)
const enum Status {
  Active,
  Inactive,
  Pending,
}
```

## 8. Union & Intersection Types

```ts
// Union — one or the other
type StringOrNumber = string | number;

// Intersection — both combined
type AdminUser = User & { permissions: string[] };

// Discriminated union
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

## 9. Utility Types

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PartialUser = Partial<User>;           // all fields optional
type RequiredUser = Required<User>;         // all fields required
type ReadonlyUser = Readonly<User>;         // all fields readonly
type PublicUser = Omit<User, "password">;  // exclude field
type LoginUser = Pick<User, "email" | "password">; // include subset
type UserMap = Record<string, User>;       // key-value map
```

## 10. Type Guards

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(obj: unknown): obj is User {
  return typeof obj === "object" && obj !== null && "id" in obj;
}
```

## 11. Classes

```ts
class Animal {
  constructor(
    private name: string,
    protected sound: string,
  ) {}

  speak(): string {
    return `${this.name} says ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "woof");
  }

  fetch(): void {
    console.log(`${this.name} fetches the ball!`);
  }
}
```

## 12. as const & satisfies

```ts
// as const — deeply readonly literal type
const COLOURS = ["red", "green", "blue"] as const;
type Colour = (typeof COLOURS)[number]; // "red" | "green" | "blue"

// satisfies — validate type without widening
const config = {
  port: 3000,
  host: "localhost",
} satisfies Record<string, string | number>;
```
