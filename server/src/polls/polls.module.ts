import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { redisModule, jwtModule } from '../modules.config'
import { PollsRepository } from './polls.repository';

@Module({
    imports: [ConfigModule, redisModule, jwtModule],
    controllers: [PollsController],
    providers: [PollsService, PollsRepository],
})
export class PollsModule { }