
export interface UserOptions {
  displayName?: string;
  username?: string;
  id?: string;
  avatarUrl?: string;
  url?: string;
  email?: string;
  token?: string;
}

/**
 * user class
 */
export class User {

  public displayName?: string
  public username?: string;
  public id?: string;
  public avatarUrl?: string;
  public url?: string;
  public email?: string;
  public token: string;

  constructor(options: UserOptions = {}) {
    Object.assign(this, options);
  }

}
