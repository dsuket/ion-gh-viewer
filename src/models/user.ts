
export interface UserOptions {
  username?: string;
  id?: string;
  avatar_url?: string;
  url?: string;
  email?: string;
  token?: string;
}

/**
 * user class
 */
export class User {

  public username?: string;
  public id?: string;
  public avatar_url?: string;
  public url?: string;
  public email?: string;
  public token: string;

  constructor(options: UserOptions = {}) {
    Object.assign(this, options);
  }

}
