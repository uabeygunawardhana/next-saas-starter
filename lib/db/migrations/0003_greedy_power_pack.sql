ALTER TABLE "teacher_profiles" ALTER COLUMN "type" SET DEFAULT 'SUMMARY';--> statement-breakpoint
ALTER TABLE "teacher_profiles" ALTER COLUMN "data" DROP NOT NULL;