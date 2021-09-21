CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."student_group"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "student_id" uuid NOT NULL, "group_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE cascade ON DELETE cascade);
