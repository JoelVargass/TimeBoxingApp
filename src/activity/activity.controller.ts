import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Prisma } from '@prisma/client';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  createActivity(@Body() data: Prisma.ActivityCreateInput) {
    return this.activityService.createActivity(data);
  }

  @Get()
  getActivities() {
    return this.activityService.getActivities();
  }

  @Get(':id')
  getActivityById(@Param('id') id: number) {
    return this.activityService.getActivityById(id);
  }

  @Put(':id')
  updateActivity(@Param('id') id: number, @Body() data: Prisma.ActivityUpdateInput) {
    return this.activityService.updateActivity(id, data);
  }

  @Delete(':id')
  deleteActivity(@Param('id') id: number) {
    return this.activityService.deleteActivity(id);
  }
}
