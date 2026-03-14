// TypeScript Basics — runnable examples
// Run with: npx ts-node examples/typescript/basics.ts

// 1. Interfaces
interface User {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

// 2. Generics
function identity<T>(value: T): T {
  return value;
}

// 3. Utility types
type PublicUser = Omit<User, "createdAt">;
type PartialUser = Partial<User>;

// 4. Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// 5. Discriminated union
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function parseJSON<T>(json: string): Result<T> {
  try {
    return { success: true, data: JSON.parse(json) as T };
  } catch {
    return { success: false, error: "Invalid JSON" };
  }
}

// Usage
const result = parseJSON<User[]>('{"bad": json}');
if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
