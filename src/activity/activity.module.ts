import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { PrismaService } from '../prisma/prisma.service';
import { TasksModule } from '../tasks/tasks.module'; 

@Module({
  imports: [TasksModule], 
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService], 
  exports: [ActivityService], 
})
export class ActivityModule {}
