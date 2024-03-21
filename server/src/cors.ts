import elysiaCors from "@elysiajs/cors";

const ALLOWED_ORIGINS = ["http://localhost:3000"];

function cors() {
  return elysiaCors({
    origin: ({ headers }) => {
      const origin = headers.get("origin");
      if (origin == null) return false;
      return ALLOWED_ORIGINS.includes(origin);
    },
  });
}

export default cors;
