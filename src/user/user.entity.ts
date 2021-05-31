import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
    @Column({ type: "varchar", length: 200, nullable: true })
    @ApiProperty()
    code: string;
    @Column({ type: "varchar", length: 100, nullable: false })
    @ApiProperty()
    fullname: string;
    @Column({ type: "date", nullable: false })
    @ApiProperty()
    birthday: Date | null;
    @Column({ type: 'date', nullable: false })
    @ApiProperty()
    createddate!: Date;
    @Column({ type: "varchar", length: 13, nullable: false, unique: true })
    @ApiProperty()
    cardid!: string;
    @Column({ type: "varchar", length: 10, nullable: false, unique: true })
    @ApiProperty()
    phone!: string;
    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    @ApiProperty()
    email!: string;
    @Column({ type: "varchar", length: 200, nullable: false })
    @ApiProperty()
    address!: string;
    @Column({ type: "varchar", length: 6, nullable: true })
    @ApiProperty()
    indentificationnumber!: string;
    @Column({ type: "varchar", length: 50, nullable: false, select: false, unique: true })
    @ApiProperty()
    username!: string;
    @Column({ type: "varchar", length: 400, nullable: false, select: false })
    @ApiProperty()
    password!: string;
    @Column({ type: "int", nullable: true })
    @ApiProperty()
    type: number;
}
