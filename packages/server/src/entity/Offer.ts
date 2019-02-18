import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { CodeReview } from "./CodeReview";
import { User } from "./User";

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  accepted: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => User, user => user.offers)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @Column()
  codeReviewId: string;

  @ManyToOne(() => CodeReview, cr => cr.offers)
  @JoinColumn({ name: "codeReviewId" })
  codeReview: Promise<CodeReview>;
}
