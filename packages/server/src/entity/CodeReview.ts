import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";

@Entity()
export class CodeReview extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int", nullable: true })
  numDays: number;

  @Column({ type: "text" })
  codeUrl: string;

  @Column({ type: "text", array: true })
  techTags: string[];

  @Column({ type: "text" })
  notes: string;

  @Column()
  ownerId: string;

  @ManyToOne(() => User, user => user.codeReviews)
  @JoinColumn({ name: "owner" })
  user: Promise<User>;
}
