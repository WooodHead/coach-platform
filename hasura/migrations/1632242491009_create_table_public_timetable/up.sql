CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."timetable"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "day" integer NOT NULL, "time_start" timetz NOT NULL, "duration" interval NOT NULL, "group_id" uuid, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE cascade ON DELETE set null);
