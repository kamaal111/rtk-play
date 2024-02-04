import type { ZodType, z } from "zod";

export function loadFromLocalStorage<T>(key: string): T | null {
  let value: string | null;
  try {
    value = localStorage.getItem(key);
  } catch (error) {
    return null;
  }
  if (value == null) return null;

  return JSON.parse(value);
}

export function loadValidatedValueFromStorage<T extends ZodType>(
  key: string,
  validator: T
): z.infer<T> | null {
  const value = loadFromLocalStorage(key);
  if (value == null) return null;

  const result = validator.safeParse(value);
  if (!result.success) return null;

  return result.data;
}

export function storeInLocalStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    //
  }
}
