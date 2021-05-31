import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }
    async get() {
        return await this.usersRepository.find({});
    }
    async find(id: string) {
        return await this.usersRepository.findOne({
            where: [{ id: id }]
        });
    }
    async insert() {
        return await this.usersRepository.find({});
    }
    async update() {
        return await this.usersRepository.find({});
    }
    async delete() {
        return await this.usersRepository.find({});
    }

    // jwt
    async findOne(user: User) {
        return this.usersRepository.findOne({ where: [{ username: user.username, password: user.password }] })
    }
}
