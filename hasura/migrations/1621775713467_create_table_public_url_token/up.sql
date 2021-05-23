CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."url_token"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL, "data" jsonb, PRIMARY KEY ("id") );
