import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  isActive: boolean;

  @OneToOne(() => Profile, {
    cascade: true, // return profile relation with user by default
    onDelete: 'CASCADE', // delete user if profile is deleted
  })
  @JoinColumn()
  profile: Profile;
}
