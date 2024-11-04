import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los usuarios
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Obtener usuario por ID
  async getUserByID(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Crear usuario
  async createUser(data: {
    name: string;
    email: string;
    password: string;
    start_time: Date;
    end_time: Date;
    status: number;
  }): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        start_time: data.start_time,
        end_time: data.end_time,
        status: data.status,
      },
    });
  }

  // Actualizar usuario
  async updateUser(id: number, data: User): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Eliminar usuario
  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
