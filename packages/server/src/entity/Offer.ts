import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from "typeorm";
import { CodeReview } from "./CodeReview";
import { User } from "./User";

@Entity()
export class Offer extends BaseEntity {
  @Column({ type: "text", default: "inprogress" })
  status: string;

  @PrimaryColumn()
  userId: string;
  @PrimaryColumn()
  codeReviewId: string;

  @ManyToOne(() => User, user => user.offers)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @ManyToOne(() => CodeReview, cr => cr.offers)
  @JoinColumn({ name: "codeReviewId" })
  codeReview: Promise<CodeReview>;
}
