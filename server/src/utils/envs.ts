export function loadEnvs() {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("No JWT secret found");

  return { JWT_SECRET };
}
