export type TemplateFieldType =
  | 'text'
  | 'long_text'
  | 'integer'
  | 'float'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'time'
  | 'url'
  | 'phone'
  | 'address'
  | 'country'
  | 'select'
  | 'image';

export interface TemplateField {
  id: number;
  templateId: number;
  required: boolean;
  name: string | null;
  type: TemplateFieldType | null;
  updated: string | Date | null;
  created: string | Date;
}
