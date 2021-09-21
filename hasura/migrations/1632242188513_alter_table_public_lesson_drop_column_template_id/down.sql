ALTER TABLE "public"."lesson" ADD COLUMN "template_id" uuid;
ALTER TABLE "public"."lesson" ALTER COLUMN "template_id" DROP NOT NULL;
ALTER TABLE "public"."lesson" ADD CONSTRAINT lesson_template_id_fkey FOREIGN KEY (template_id) REFERENCES "public"."lesson_template" (id) ON DELETE restrict ON UPDATE restrict;
