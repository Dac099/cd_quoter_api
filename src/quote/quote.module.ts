import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from './schema/quote.schema';
import { Client, ClientSchema } from './schema/client.schema';
import { ClientService } from './client.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Quote.name, schema: QuoteSchema },
      { name: Client.name, schema: ClientSchema },
    ]),
  ],
  controllers: [QuoteController],
  providers: [QuoteService, ClientService],
})
export class QuoteModule {}
