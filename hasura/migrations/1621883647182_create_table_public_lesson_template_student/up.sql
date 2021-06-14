CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."lesson_template_student"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "lesson_template_id" uuid NOT NULL, "student_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("lesson_template_id") REFERENCES "public"."lesson_template"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON UPDATE restrict ON DELETE restrict);