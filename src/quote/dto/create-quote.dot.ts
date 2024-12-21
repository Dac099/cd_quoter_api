import { ExtraItemDto } from './extra-item.dto';

export class CreateQuoteDto {
  client_name: string;
  client_email?: string;
  client_phone?: string;
  client_company?: string;
  description: string;
  width: number;
  length: number;
  height: number;
  price: number;
  release_date?: string;
  extras: ExtraItemDto[];
}
