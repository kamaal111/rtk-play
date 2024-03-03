export class UserAlreadyExists extends Error {
  constructor() {
    super("User already exists");
  }
}

const errors = {
  UserAlreadyExists,
};

export default errors;
