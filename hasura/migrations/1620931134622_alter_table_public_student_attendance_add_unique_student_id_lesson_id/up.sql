alter table "public"."student_attendance" add constraint "student_attendance_student_id_lesson_id_key" unique ("student_id", "lesson_id");
