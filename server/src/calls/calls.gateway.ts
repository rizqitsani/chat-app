import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CallsService } from './calls.service';
import { AnswerCallDto } from './dto/answer-call.dto';
import { CallUserDto } from './dto/call-user.dto';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
  },
})
export class CallsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly callsService: CallsService) {}

  handleConnection(client: Socket) {
    this.server.emit('me', client.id);
  }

  @SubscribeMessage('disconnect')
  disconnect(@ConnectedSocket() client: Socket) {
    client.broadcast.emit('callEnded');
  }

  @SubscribeMessage('callUser')
  call(@MessageBody() callUserDto: CallUserDto) {
    this.server.to(callUserDto.to).emit('callUser', {
      signal: callUserDto.signal,
      from: callUserDto.from,
      name: callUserDto.name,
    });
  }

  @SubscribeMessage('answerCall')
  answer(@MessageBody() answerCallDto: AnswerCallDto) {
    this.server.to(answerCallDto.to).emit('callAccepted', answerCallDto.signal);
  }
}
