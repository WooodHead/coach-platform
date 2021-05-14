alter table "public"."lesson"
           add constraint "lesson_template_id_fkey"
           foreign key ("template_id")
           references "public"."lesson_template"
           ("id") on update restrict on delete restrict;
