import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schema/client.schema';
import { Model, Types } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async create(createClient: CreateClientDto): Promise<Types.ObjectId> {
    try {
      const client = new this.clientModel({
        name: createClient.clientName,
        company: createClient.clientCompany,
        email: createClient.clientEmail,
        phone: createClient.clientPhone,
      });
      await client.save();
      return client._id;
    } catch (error) {
      if (error.code === 11000) {
        //This code stands for duplicate element
        const clientId = await this.findByEmail(createClient.clientEmail);

        if (clientId) return clientId;
      }

      const messageError =
        error.message ?? 'An error occurred while creating client';

      console.log(Object.entries(error));
      throw new Error(messageError);
    }
  }

  async findByEmail(email: string): Promise<Types.ObjectId | null> {
    try {
      return (await this.clientModel.findOne({ email }).exec())._id;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
