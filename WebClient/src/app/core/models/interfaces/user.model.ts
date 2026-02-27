export interface User {
  id: number;
  username: string;
  password: string | null;
  active: boolean;
  lastLogin: string | Date | null;
  loginAttempts: number;
  modified: string | Date | null;
  created: string | Date | null;
}
