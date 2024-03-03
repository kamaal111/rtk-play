import db from "./db";

export type Decorators = { db: typeof db };

const decorators: Decorators = { db };

export default decorators;
