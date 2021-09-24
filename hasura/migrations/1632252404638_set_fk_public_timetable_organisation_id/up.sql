alter table "public"."timetable"
           add constraint "timetable_organisation_id_fkey"
           foreign key ("organisation_id")
           references "public"."organisation"
           ("id") on update cascade on delete cascade;
