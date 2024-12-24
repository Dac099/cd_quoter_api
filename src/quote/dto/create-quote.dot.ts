export class CreateQuoteDto {
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  clientCompany?: string;
  description: string;
  width: number;
  length: number;
  height: number;
  price: number;
  releaseDate?: string;
}
