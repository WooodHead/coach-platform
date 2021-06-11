alter table "public"."student" add constraint "name_length" check (char_length(btrim(name)) > 1);
