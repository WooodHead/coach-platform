CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."lesson"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "start_time" timestamptz NOT NULL, "duration" interval NOT NULL DEFAULT '60 minutes', PRIMARY KEY ("id") );
