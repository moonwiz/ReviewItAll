export interface Template {
  id: number;
  userId: number;
  name: string | null;
  updated: string | Date | null;
  created: string | Date;
}
