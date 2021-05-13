CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."student_attendance"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "student_id" uuid NOT NULL, "lesson_id" uuid NOT NULL, "state" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("lesson_id") REFERENCES "public"."lesson"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("state") REFERENCES "public"."attendance_state"("state") ON UPDATE restrict ON DELETE restrict);
