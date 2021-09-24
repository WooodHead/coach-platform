alter table "public"."lesson"
           add constraint "lesson_timetable_id_fkey"
           foreign key ("timetable_id")
           references "public"."timetable"
           ("id") on update cascade on delete set null;
