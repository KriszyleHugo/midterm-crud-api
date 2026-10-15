// src/entities/User.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('users') // Maps to 'users' tablein MySQL
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'varchar', unique: true, length: 100 })
    email!: string;

    @Column({ type: 'varchar', length: 255, select: false})
    password!: string;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}