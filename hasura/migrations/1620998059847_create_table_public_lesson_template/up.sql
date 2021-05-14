CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."lesson_template"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "organisation_id" uuid NOT NULL, "day" integer NOT NULL, "name" text NOT NULL, "start_time" Time NOT NULL, "duration" interval NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("organisation_id") REFERENCES "public"."organisation"("id") ON UPDATE restrict ON DELETE restrict);
