export interface Review {
  id: number;
  userId: number;
  categoryId: number;
  templateId: number;
  name: string | null;
  content: string | null;
  rating: number;
  containsSpoilers: boolean;
  updated: string | Date | null;
  created: string | Date;
}
