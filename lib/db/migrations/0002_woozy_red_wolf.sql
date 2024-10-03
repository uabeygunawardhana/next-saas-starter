ALTER TABLE "teacher_profiles" ADD COLUMN "type" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher_profiles" ADD COLUMN "data" jsonb NOT NULL;