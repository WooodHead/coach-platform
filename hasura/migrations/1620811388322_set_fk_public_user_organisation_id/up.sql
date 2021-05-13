alter table "public"."user"
           add constraint "user_organisation_id_fkey"
           foreign key ("organisation_id")
           references "public"."organisation"
           ("id") on update restrict on delete restrict;
