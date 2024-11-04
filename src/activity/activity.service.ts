import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async createActivity(data: Prisma.ActivityCreateInput) {
    return this.prisma.activity.create({ data });
  }

  async getActivities() {
    return this.prisma.activity.findMany();
  }

  async getActivityById(id: number) {
    return this.prisma.activity.findUnique({ where: { id } });
  }

  async updateActivity(id: number, data: Prisma.ActivityUpdateInput) {
    return this.prisma.activity.update({
      where: { id },
      data,
    });
  }

  async deleteActivity(id: number) {
    return this.prisma.activity.delete({ where: { id } });
  }
}
