import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { CodeReview } from "./CodeReview";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CodeReview, cr => cr.ownerId)
  codeReviews: CodeReview[];
}
