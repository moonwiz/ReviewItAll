export interface Category {
  id: number;
  parentId: number;
  userId: number;
  name: string;
  description: string | null;
  filename: string | null;
}
