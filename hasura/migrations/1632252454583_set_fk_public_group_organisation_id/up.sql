alter table "public"."group"
           add constraint "group_organisation_id_fkey"
           foreign key ("organisation_id")
           references "public"."organisation"
           ("id") on update cascade on delete cascade;
