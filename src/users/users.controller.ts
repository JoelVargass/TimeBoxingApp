import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Post()
    async create(@Body() userData: {
    name: string;
    email: string;
    password: string;
    start_time: Date;
    end_time: Date;
    status: number;
    }): Promise<User> {
    try {
        return await this.userService.createUser(userData);
    } catch (error) {
        console.error('Error creating user:', error);
        throw new InternalServerErrorException('Error creating user');
    }
    }


    // @Param es para obtener el parametro "id"
    @Get(':id')
    async getUserByID(@Param('id') id: string) {
        return this.userService.getUserByID(Number(id))
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: User) {
        return this.userService.updateUser(Number(id), data)
    }
    
    @Get(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id))
    }
}
