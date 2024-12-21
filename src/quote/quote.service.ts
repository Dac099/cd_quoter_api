import { Injectable } from '@nestjs/common';
import { IQuoteStore } from './interfaces/quote-store';
import { IQuoteResponse } from './interfaces/quote-response';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class QuoteService {
  private readonly quoteResponse: IQuoteResponse[] = [];
  private readonly quoteStore: IQuoteStore[] = [];

  create(quote: IQuoteStore) {
    this.quoteStore.push(quote);
  }

  findAll(parameters: PaginationDto): IQuoteResponse[] {
    const { offset, limit, order } = parameters;

    return this.quoteResponse;
  }
}
