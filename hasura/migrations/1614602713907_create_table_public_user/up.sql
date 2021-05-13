CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."user"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "email" text NOT NULL, "last_online" timestamptz, PRIMARY KEY ("id") );
