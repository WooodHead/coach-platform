CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."student"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "birthday" date, PRIMARY KEY ("id") );
