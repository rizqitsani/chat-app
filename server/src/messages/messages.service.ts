import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [
    {
      text: 'Hello World!',
      name: 'John Doe',
      createdAt: new Date().toISOString(),
    },
  ];

  clients: Record<string, string> = {};

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message: Message = {
      name: this.clients[clientId],
      text: createMessageDto.text,
      createdAt: new Date().toISOString(),
    };

    this.messages.push(message);

    return message;
  }

  findAll() {
    return this.messages;
  }

  join(name: string, clientId: string) {
    this.clients[clientId] = name;

    return Object.values(this.clients);
  }
}
