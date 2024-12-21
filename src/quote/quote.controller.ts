import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dot';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Post()
  saveQuote(
    @Body() payload: CreateQuoteDto,
    @Query('download') download: boolean,
  ): string {
    if (download) {
      return 'Cotización guardada. Enviando PDF';
    }

    return 'Cotización guardada';
  }

  @Get()
  retrieveAll(@Query() params: PaginationDto): string {
    const { limit = 30, offset = 0, order = 'ASC' } = params;
    return `Obteniendo todos los elementos con los datos: limit: ${limit}, offset: ${offset}, order: ${order}`;
  }

  @Get(':quoteId')
  retrieveOne(
    @Param('quoteId') quoteId: string,
    @Query('download') download: boolean,
  ): string {
    if (download) {
      return 'Descargando cotización';
    }
    return `Cotización ${quoteId} encontrada`;
  }
}
