import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChoiceResolver } from './Choice.resolver';
import { ChoiceService } from './Choice.service';
import { Choice } from './entities/choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  providers: [ChoiceResolver, ChoiceService],
})
export class ChoiceModule {}
