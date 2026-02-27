export interface Category {
  id: number;
  parentId: number;
  userId: number;
  name: string | null;
  description: string | null;
  imageId: number | null;
}
