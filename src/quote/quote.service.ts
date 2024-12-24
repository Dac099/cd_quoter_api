import { Injectable } from '@nestjs/common';
import { Quote } from './schema/quote.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuoteDto } from './dto/create-quote.dot';
import { ClientService } from './client.service';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<Quote>,
    private clientService: ClientService,
  ) {}

  async create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    try {
      const {
        clientName,
        clientCompany,
        clientEmail,
        clientPhone,
        description,
        height,
        length,
        price,
        width,
        releaseDate,
      } = createQuoteDto;

      const clientId = await this.clientService.create({
        clientName,
        clientCompany,
        clientEmail,
        clientPhone,
      });

      const createdQuote = new this.quoteModel({
        client: clientId,
        description,
        width,
        height,
        length,
        price,
        releaseDate,
      });

      return createdQuote.save();
    } catch (error) {
      console.error(Object.values(error));
    }
  }
}
