import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ActivityModule } from './activity/activity.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, TasksModule, ActivityModule, PrismaModule],
})
export class AppModule {}
