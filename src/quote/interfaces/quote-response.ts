export interface IQuoteResponse {
  client_name: string;
  client_phone?: string;
  client_email?: string;
  client_company?: string;
  description: string;
  price: number;
  width: number;
  height: number;
  length: number;
  created_at: string;
  updated_at: string;
  release_date?: string;
}
