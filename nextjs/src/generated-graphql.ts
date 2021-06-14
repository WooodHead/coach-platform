import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  interval: any;
  jsonb: any;
  time: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "attendance_state" */
export type Attendance_State = {
  __typename?: "attendance_state";
  description: Scalars["String"];
  state: Scalars["String"];
};

/** aggregated selection of "attendance_state" */
export type Attendance_State_Aggregate = {
  __typename?: "attendance_state_aggregate";
  aggregate?: Maybe<Attendance_State_Aggregate_Fields>;
  nodes: Array<Attendance_State>;
};

/** aggregate fields of "attendance_state" */
export type Attendance_State_Aggregate_Fields = {
  __typename?: "attendance_state_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Attendance_State_Max_Fields>;
  min?: Maybe<Attendance_State_Min_Fields>;
};

/** aggregate fields of "attendance_state" */
export type Attendance_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Attendance_State_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "attendance_state" */
export type Attendance_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Attendance_State_Max_Order_By>;
  min?: Maybe<Attendance_State_Min_Order_By>;
};

/** input type for inserting array relation for remote table "attendance_state" */
export type Attendance_State_Arr_Rel_Insert_Input = {
  data: Array<Attendance_State_Insert_Input>;
  on_conflict?: Maybe<Attendance_State_On_Conflict>;
};

/** Boolean expression to filter rows from the table "attendance_state". All fields are combined with a logical 'AND'. */
export type Attendance_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Attendance_State_Bool_Exp>>>;
  _not?: Maybe<Attendance_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Attendance_State_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "attendance_state" */
export enum Attendance_State_Constraint {
  /** unique or primary key constraint */
  AttendanceStatePkey = "attendance_state_pkey",
}

export enum Attendance_State_Enum {
  /** Abwesend */
  Absent = "absent",
  /** Entschuldigt */
  Excused = "excused",
  /** Anwesend */
  Present = "present",
}

/** expression to compare columns of type attendance_state_enum. All fields are combined with logical 'AND'. */
export type Attendance_State_Enum_Comparison_Exp = {
  _eq?: Maybe<Attendance_State_Enum>;
  _in?: Maybe<Array<Attendance_State_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Attendance_State_Enum>;
  _nin?: Maybe<Array<Attendance_State_Enum>>;
};

/** input type for inserting data into table "attendance_state" */
export type Attendance_State_Insert_Input = {
  description?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Attendance_State_Max_Fields = {
  __typename?: "attendance_state_max_fields";
  description?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "attendance_state" */
export type Attendance_State_Max_Order_By = {
  description?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Attendance_State_Min_Fields = {
  __typename?: "attendance_state_min_fields";
  description?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "attendance_state" */
export type Attendance_State_Min_Order_By = {
  description?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** response of any mutation on the table "attendance_state" */
export type Attendance_State_Mutation_Response = {
  __typename?: "attendance_state_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Attendance_State>;
};

/** input type for inserting object relation for remote table "attendance_state" */
export type Attendance_State_Obj_Rel_Insert_Input = {
  data: Attendance_State_Insert_Input;
  on_conflict?: Maybe<Attendance_State_On_Conflict>;
};

/** on conflict condition type for table "attendance_state" */
export type Attendance_State_On_Conflict = {
  constraint: Attendance_State_Constraint;
  update_columns: Array<Attendance_State_Update_Column>;
  where?: Maybe<Attendance_State_Bool_Exp>;
};

/** ordering options when selecting data from "attendance_state" */
export type Attendance_State_Order_By = {
  description?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
};

/** primary key columns input for table: "attendance_state" */
export type Attendance_State_Pk_Columns_Input = {
  state: Scalars["String"];
};

/** select columns of table "attendance_state" */
export enum Attendance_State_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  State = "state",
}

/** input type for updating data in table "attendance_state" */
export type Attendance_State_Set_Input = {
  description?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
};

/** update columns of table "attendance_state" */
export enum Attendance_State_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  State = "state",
}

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

/** expression to compare columns of type interval. All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars["interval"]>;
  _gt?: Maybe<Scalars["interval"]>;
  _gte?: Maybe<Scalars["interval"]>;
  _in?: Maybe<Array<Scalars["interval"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["interval"]>;
  _lte?: Maybe<Scalars["interval"]>;
  _neq?: Maybe<Scalars["interval"]>;
  _nin?: Maybe<Array<Scalars["interval"]>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** columns and relationships of "lesson" */
export type Lesson = {
  __typename?: "lesson";
  duration: Scalars["interval"];
  id: Scalars["uuid"];
  /** An object relationship */
  lesson_template?: Maybe<Lesson_Template>;
  name: Scalars["String"];
  /** An object relationship */
  organisation: Organisation;
  organisation_id: Scalars["uuid"];
  plan?: Maybe<Scalars["String"]>;
  start_time: Scalars["timestamptz"];
  /** An array relationship */
  student_attendances: Array<Student_Attendance>;
  /** An aggregated array relationship */
  student_attendances_aggregate: Student_Attendance_Aggregate;
  template_id?: Maybe<Scalars["uuid"]>;
};

/** columns and relationships of "lesson" */
export type LessonStudent_AttendancesArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** columns and relationships of "lesson" */
export type LessonStudent_Attendances_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** aggregated selection of "lesson" */
export type Lesson_Aggregate = {
  __typename?: "lesson_aggregate";
  aggregate?: Maybe<Lesson_Aggregate_Fields>;
  nodes: Array<Lesson>;
};

/** aggregate fields of "lesson" */
export type Lesson_Aggregate_Fields = {
  __typename?: "lesson_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Lesson_Max_Fields>;
  min?: Maybe<Lesson_Min_Fields>;
};

/** aggregate fields of "lesson" */
export type Lesson_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lesson_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lesson" */
export type Lesson_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Lesson_Max_Order_By>;
  min?: Maybe<Lesson_Min_Order_By>;
};

/** input type for inserting array relation for remote table "lesson" */
export type Lesson_Arr_Rel_Insert_Input = {
  data: Array<Lesson_Insert_Input>;
  on_conflict?: Maybe<Lesson_On_Conflict>;
};

/** Boolean expression to filter rows from the table "lesson". All fields are combined with a logical 'AND'. */
export type Lesson_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lesson_Bool_Exp>>>;
  _not?: Maybe<Lesson_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lesson_Bool_Exp>>>;
  duration?: Maybe<Interval_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lesson_template?: Maybe<Lesson_Template_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisation?: Maybe<Organisation_Bool_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
  plan?: Maybe<String_Comparison_Exp>;
  start_time?: Maybe<Timestamptz_Comparison_Exp>;
  student_attendances?: Maybe<Student_Attendance_Bool_Exp>;
  template_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "lesson" */
export enum Lesson_Constraint {
  /** unique or primary key constraint */
  LessonPkey = "lesson_pkey",
}

/** input type for inserting data into table "lesson" */
export type Lesson_Insert_Input = {
  duration?: Maybe<Scalars["interval"]>;
  id?: Maybe<Scalars["uuid"]>;
  lesson_template?: Maybe<Lesson_Template_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<Organisation_Obj_Rel_Insert_Input>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  plan?: Maybe<Scalars["String"]>;
  start_time?: Maybe<Scalars["timestamptz"]>;
  student_attendances?: Maybe<Student_Attendance_Arr_Rel_Insert_Input>;
  template_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Lesson_Max_Fields = {
  __typename?: "lesson_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  plan?: Maybe<Scalars["String"]>;
  start_time?: Maybe<Scalars["timestamptz"]>;
  template_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "lesson" */
export type Lesson_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  plan?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lesson_Min_Fields = {
  __typename?: "lesson_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  plan?: Maybe<Scalars["String"]>;
  start_time?: Maybe<Scalars["timestamptz"]>;
  template_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "lesson" */
export type Lesson_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  plan?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  template_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "lesson" */
export type Lesson_Mutation_Response = {
  __typename?: "lesson_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Lesson>;
};

/** input type for inserting object relation for remote table "lesson" */
export type Lesson_Obj_Rel_Insert_Input = {
  data: Lesson_Insert_Input;
  on_conflict?: Maybe<Lesson_On_Conflict>;
};

/** on conflict condition type for table "lesson" */
export type Lesson_On_Conflict = {
  constraint: Lesson_Constraint;
  update_columns: Array<Lesson_Update_Column>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** ordering options when selecting data from "lesson" */
export type Lesson_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lesson_template?: Maybe<Lesson_Template_Order_By>;
  name?: Maybe<Order_By>;
  organisation?: Maybe<Organisation_Order_By>;
  organisation_id?: Maybe<Order_By>;
  plan?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  student_attendances_aggregate?: Maybe<Student_Attendance_Aggregate_Order_By>;
  template_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "lesson" */
export type Lesson_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "lesson" */
export enum Lesson_Select_Column {
  /** column name */
  Duration = "duration",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
  /** column name */
  Plan = "plan",
  /** column name */
  StartTime = "start_time",
  /** column name */
  TemplateId = "template_id",
}

/** input type for updating data in table "lesson" */
export type Lesson_Set_Input = {
  duration?: Maybe<Scalars["interval"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  plan?: Maybe<Scalars["String"]>;
  start_time?: Maybe<Scalars["timestamptz"]>;
  template_id?: Maybe<Scalars["uuid"]>;
};

/** columns and relationships of "lesson_template" */
export type Lesson_Template = {
  __typename?: "lesson_template";
  day: Scalars["Int"];
  duration: Scalars["interval"];
  id: Scalars["uuid"];
  /** An array relationship */
  lessons: Array<Lesson>;
  /** An aggregated array relationship */
  lessons_aggregate: Lesson_Aggregate;
  name: Scalars["String"];
  organisation_id: Scalars["uuid"];
  start_time: Scalars["time"];
  /** An array relationship */
  template_students: Array<Lesson_Template_Student>;
  /** An aggregated array relationship */
  template_students_aggregate: Lesson_Template_Student_Aggregate;
};

/** columns and relationships of "lesson_template" */
export type Lesson_TemplateLessonsArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "lesson_template" */
export type Lesson_TemplateLessons_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "lesson_template" */
export type Lesson_TemplateTemplate_StudentsArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** columns and relationships of "lesson_template" */
export type Lesson_TemplateTemplate_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** aggregated selection of "lesson_template" */
export type Lesson_Template_Aggregate = {
  __typename?: "lesson_template_aggregate";
  aggregate?: Maybe<Lesson_Template_Aggregate_Fields>;
  nodes: Array<Lesson_Template>;
};

/** aggregate fields of "lesson_template" */
export type Lesson_Template_Aggregate_Fields = {
  __typename?: "lesson_template_aggregate_fields";
  avg?: Maybe<Lesson_Template_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Lesson_Template_Max_Fields>;
  min?: Maybe<Lesson_Template_Min_Fields>;
  stddev?: Maybe<Lesson_Template_Stddev_Fields>;
  stddev_pop?: Maybe<Lesson_Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lesson_Template_Stddev_Samp_Fields>;
  sum?: Maybe<Lesson_Template_Sum_Fields>;
  var_pop?: Maybe<Lesson_Template_Var_Pop_Fields>;
  var_samp?: Maybe<Lesson_Template_Var_Samp_Fields>;
  variance?: Maybe<Lesson_Template_Variance_Fields>;
};

/** aggregate fields of "lesson_template" */
export type Lesson_Template_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lesson_Template_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lesson_template" */
export type Lesson_Template_Aggregate_Order_By = {
  avg?: Maybe<Lesson_Template_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lesson_Template_Max_Order_By>;
  min?: Maybe<Lesson_Template_Min_Order_By>;
  stddev?: Maybe<Lesson_Template_Stddev_Order_By>;
  stddev_pop?: Maybe<Lesson_Template_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lesson_Template_Stddev_Samp_Order_By>;
  sum?: Maybe<Lesson_Template_Sum_Order_By>;
  var_pop?: Maybe<Lesson_Template_Var_Pop_Order_By>;
  var_samp?: Maybe<Lesson_Template_Var_Samp_Order_By>;
  variance?: Maybe<Lesson_Template_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lesson_template" */
export type Lesson_Template_Arr_Rel_Insert_Input = {
  data: Array<Lesson_Template_Insert_Input>;
  on_conflict?: Maybe<Lesson_Template_On_Conflict>;
};

/** aggregate avg on columns */
export type Lesson_Template_Avg_Fields = {
  __typename?: "lesson_template_avg_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "lesson_template" */
export type Lesson_Template_Avg_Order_By = {
  day?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lesson_template". All fields are combined with a logical 'AND'. */
export type Lesson_Template_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lesson_Template_Bool_Exp>>>;
  _not?: Maybe<Lesson_Template_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lesson_Template_Bool_Exp>>>;
  day?: Maybe<Int_Comparison_Exp>;
  duration?: Maybe<Interval_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lessons?: Maybe<Lesson_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
  start_time?: Maybe<Time_Comparison_Exp>;
  template_students?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** unique or primary key constraints on table "lesson_template" */
export enum Lesson_Template_Constraint {
  /** unique or primary key constraint */
  LessonTemplatePkey = "lesson_template_pkey",
}

/** input type for incrementing integer column in table "lesson_template" */
export type Lesson_Template_Inc_Input = {
  day?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lesson_template" */
export type Lesson_Template_Insert_Input = {
  day?: Maybe<Scalars["Int"]>;
  duration?: Maybe<Scalars["interval"]>;
  id?: Maybe<Scalars["uuid"]>;
  lessons?: Maybe<Lesson_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  start_time?: Maybe<Scalars["time"]>;
  template_students?: Maybe<Lesson_Template_Student_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Lesson_Template_Max_Fields = {
  __typename?: "lesson_template_max_fields";
  day?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "lesson_template" */
export type Lesson_Template_Max_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lesson_Template_Min_Fields = {
  __typename?: "lesson_template_min_fields";
  day?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "lesson_template" */
export type Lesson_Template_Min_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "lesson_template" */
export type Lesson_Template_Mutation_Response = {
  __typename?: "lesson_template_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Lesson_Template>;
};

/** input type for inserting object relation for remote table "lesson_template" */
export type Lesson_Template_Obj_Rel_Insert_Input = {
  data: Lesson_Template_Insert_Input;
  on_conflict?: Maybe<Lesson_Template_On_Conflict>;
};

/** on conflict condition type for table "lesson_template" */
export type Lesson_Template_On_Conflict = {
  constraint: Lesson_Template_Constraint;
  update_columns: Array<Lesson_Template_Update_Column>;
  where?: Maybe<Lesson_Template_Bool_Exp>;
};

/** ordering options when selecting data from "lesson_template" */
export type Lesson_Template_Order_By = {
  day?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lessons_aggregate?: Maybe<Lesson_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  template_students_aggregate?: Maybe<Lesson_Template_Student_Aggregate_Order_By>;
};

/** primary key columns input for table: "lesson_template" */
export type Lesson_Template_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "lesson_template" */
export enum Lesson_Template_Select_Column {
  /** column name */
  Day = "day",
  /** column name */
  Duration = "duration",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
  /** column name */
  StartTime = "start_time",
}

/** input type for updating data in table "lesson_template" */
export type Lesson_Template_Set_Input = {
  day?: Maybe<Scalars["Int"]>;
  duration?: Maybe<Scalars["interval"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  start_time?: Maybe<Scalars["time"]>;
};

/** aggregate stddev on columns */
export type Lesson_Template_Stddev_Fields = {
  __typename?: "lesson_template_stddev_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "lesson_template" */
export type Lesson_Template_Stddev_Order_By = {
  day?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lesson_Template_Stddev_Pop_Fields = {
  __typename?: "lesson_template_stddev_pop_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "lesson_template" */
export type Lesson_Template_Stddev_Pop_Order_By = {
  day?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lesson_Template_Stddev_Samp_Fields = {
  __typename?: "lesson_template_stddev_samp_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "lesson_template" */
export type Lesson_Template_Stddev_Samp_Order_By = {
  day?: Maybe<Order_By>;
};

/** columns and relationships of "lesson_template_student" */
export type Lesson_Template_Student = {
  __typename?: "lesson_template_student";
  id: Scalars["uuid"];
  /** An object relationship */
  lesson_template: Lesson_Template;
  lesson_template_id: Scalars["uuid"];
  /** An object relationship */
  student: Student;
  student_id: Scalars["uuid"];
};

/** aggregated selection of "lesson_template_student" */
export type Lesson_Template_Student_Aggregate = {
  __typename?: "lesson_template_student_aggregate";
  aggregate?: Maybe<Lesson_Template_Student_Aggregate_Fields>;
  nodes: Array<Lesson_Template_Student>;
};

/** aggregate fields of "lesson_template_student" */
export type Lesson_Template_Student_Aggregate_Fields = {
  __typename?: "lesson_template_student_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Lesson_Template_Student_Max_Fields>;
  min?: Maybe<Lesson_Template_Student_Min_Fields>;
};

/** aggregate fields of "lesson_template_student" */
export type Lesson_Template_Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lesson_template_student" */
export type Lesson_Template_Student_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Lesson_Template_Student_Max_Order_By>;
  min?: Maybe<Lesson_Template_Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "lesson_template_student" */
export type Lesson_Template_Student_Arr_Rel_Insert_Input = {
  data: Array<Lesson_Template_Student_Insert_Input>;
  on_conflict?: Maybe<Lesson_Template_Student_On_Conflict>;
};

/** Boolean expression to filter rows from the table "lesson_template_student". All fields are combined with a logical 'AND'. */
export type Lesson_Template_Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lesson_Template_Student_Bool_Exp>>>;
  _not?: Maybe<Lesson_Template_Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Lesson_Template_Student_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lesson_template?: Maybe<Lesson_Template_Bool_Exp>;
  lesson_template_id?: Maybe<Uuid_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "lesson_template_student" */
export enum Lesson_Template_Student_Constraint {
  /** unique or primary key constraint */
  LessonTemplateStudentLessonTemplateIdStudentIdKey = "lesson_template_student_lesson_template_id_student_id_key",
  /** unique or primary key constraint */
  LessonTemplateStudentPkey = "lesson_template_student_pkey",
}

/** input type for inserting data into table "lesson_template_student" */
export type Lesson_Template_Student_Insert_Input = {
  id?: Maybe<Scalars["uuid"]>;
  lesson_template?: Maybe<Lesson_Template_Obj_Rel_Insert_Input>;
  lesson_template_id?: Maybe<Scalars["uuid"]>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Lesson_Template_Student_Max_Fields = {
  __typename?: "lesson_template_student_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  lesson_template_id?: Maybe<Scalars["uuid"]>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "lesson_template_student" */
export type Lesson_Template_Student_Max_Order_By = {
  id?: Maybe<Order_By>;
  lesson_template_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lesson_Template_Student_Min_Fields = {
  __typename?: "lesson_template_student_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  lesson_template_id?: Maybe<Scalars["uuid"]>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "lesson_template_student" */
export type Lesson_Template_Student_Min_Order_By = {
  id?: Maybe<Order_By>;
  lesson_template_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "lesson_template_student" */
export type Lesson_Template_Student_Mutation_Response = {
  __typename?: "lesson_template_student_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Lesson_Template_Student>;
};

/** input type for inserting object relation for remote table "lesson_template_student" */
export type Lesson_Template_Student_Obj_Rel_Insert_Input = {
  data: Lesson_Template_Student_Insert_Input;
  on_conflict?: Maybe<Lesson_Template_Student_On_Conflict>;
};

/** on conflict condition type for table "lesson_template_student" */
export type Lesson_Template_Student_On_Conflict = {
  constraint: Lesson_Template_Student_Constraint;
  update_columns: Array<Lesson_Template_Student_Update_Column>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** ordering options when selecting data from "lesson_template_student" */
export type Lesson_Template_Student_Order_By = {
  id?: Maybe<Order_By>;
  lesson_template?: Maybe<Lesson_Template_Order_By>;
  lesson_template_id?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "lesson_template_student" */
export type Lesson_Template_Student_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "lesson_template_student" */
export enum Lesson_Template_Student_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  LessonTemplateId = "lesson_template_id",
  /** column name */
  StudentId = "student_id",
}

/** input type for updating data in table "lesson_template_student" */
export type Lesson_Template_Student_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  lesson_template_id?: Maybe<Scalars["uuid"]>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "lesson_template_student" */
export enum Lesson_Template_Student_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  LessonTemplateId = "lesson_template_id",
  /** column name */
  StudentId = "student_id",
}

/** aggregate sum on columns */
export type Lesson_Template_Sum_Fields = {
  __typename?: "lesson_template_sum_fields";
  day?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "lesson_template" */
export type Lesson_Template_Sum_Order_By = {
  day?: Maybe<Order_By>;
};

/** update columns of table "lesson_template" */
export enum Lesson_Template_Update_Column {
  /** column name */
  Day = "day",
  /** column name */
  Duration = "duration",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
  /** column name */
  StartTime = "start_time",
}

/** aggregate var_pop on columns */
export type Lesson_Template_Var_Pop_Fields = {
  __typename?: "lesson_template_var_pop_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "lesson_template" */
export type Lesson_Template_Var_Pop_Order_By = {
  day?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lesson_Template_Var_Samp_Fields = {
  __typename?: "lesson_template_var_samp_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "lesson_template" */
export type Lesson_Template_Var_Samp_Order_By = {
  day?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lesson_Template_Variance_Fields = {
  __typename?: "lesson_template_variance_fields";
  day?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "lesson_template" */
export type Lesson_Template_Variance_Order_By = {
  day?: Maybe<Order_By>;
};

/** update columns of table "lesson" */
export enum Lesson_Update_Column {
  /** column name */
  Duration = "duration",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
  /** column name */
  Plan = "plan",
  /** column name */
  StartTime = "start_time",
  /** column name */
  TemplateId = "template_id",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "attendance_state" */
  delete_attendance_state?: Maybe<Attendance_State_Mutation_Response>;
  /** delete single row from the table: "attendance_state" */
  delete_attendance_state_by_pk?: Maybe<Attendance_State>;
  /** delete data from the table: "lesson" */
  delete_lesson?: Maybe<Lesson_Mutation_Response>;
  /** delete single row from the table: "lesson" */
  delete_lesson_by_pk?: Maybe<Lesson>;
  /** delete data from the table: "lesson_template" */
  delete_lesson_template?: Maybe<Lesson_Template_Mutation_Response>;
  /** delete single row from the table: "lesson_template" */
  delete_lesson_template_by_pk?: Maybe<Lesson_Template>;
  /** delete data from the table: "lesson_template_student" */
  delete_lesson_template_student?: Maybe<Lesson_Template_Student_Mutation_Response>;
  /** delete single row from the table: "lesson_template_student" */
  delete_lesson_template_student_by_pk?: Maybe<Lesson_Template_Student>;
  /** delete data from the table: "organisation" */
  delete_organisation?: Maybe<Organisation_Mutation_Response>;
  /** delete single row from the table: "organisation" */
  delete_organisation_by_pk?: Maybe<Organisation>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete data from the table: "student_attendance" */
  delete_student_attendance?: Maybe<Student_Attendance_Mutation_Response>;
  /** delete single row from the table: "student_attendance" */
  delete_student_attendance_by_pk?: Maybe<Student_Attendance>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "url_token" */
  delete_url_token?: Maybe<Url_Token_Mutation_Response>;
  /** delete single row from the table: "url_token" */
  delete_url_token_by_pk?: Maybe<Url_Token>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_account" */
  delete_user_account?: Maybe<User_Account_Mutation_Response>;
  /** delete single row from the table: "user_account" */
  delete_user_account_by_pk?: Maybe<User_Account>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "attendance_state" */
  insert_attendance_state?: Maybe<Attendance_State_Mutation_Response>;
  /** insert a single row into the table: "attendance_state" */
  insert_attendance_state_one?: Maybe<Attendance_State>;
  /** insert data into the table: "lesson" */
  insert_lesson?: Maybe<Lesson_Mutation_Response>;
  /** insert a single row into the table: "lesson" */
  insert_lesson_one?: Maybe<Lesson>;
  /** insert data into the table: "lesson_template" */
  insert_lesson_template?: Maybe<Lesson_Template_Mutation_Response>;
  /** insert a single row into the table: "lesson_template" */
  insert_lesson_template_one?: Maybe<Lesson_Template>;
  /** insert data into the table: "lesson_template_student" */
  insert_lesson_template_student?: Maybe<Lesson_Template_Student_Mutation_Response>;
  /** insert a single row into the table: "lesson_template_student" */
  insert_lesson_template_student_one?: Maybe<Lesson_Template_Student>;
  /** insert data into the table: "organisation" */
  insert_organisation?: Maybe<Organisation_Mutation_Response>;
  /** insert a single row into the table: "organisation" */
  insert_organisation_one?: Maybe<Organisation>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert data into the table: "student_attendance" */
  insert_student_attendance?: Maybe<Student_Attendance_Mutation_Response>;
  /** insert a single row into the table: "student_attendance" */
  insert_student_attendance_one?: Maybe<Student_Attendance>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "url_token" */
  insert_url_token?: Maybe<Url_Token_Mutation_Response>;
  /** insert a single row into the table: "url_token" */
  insert_url_token_one?: Maybe<Url_Token>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_account" */
  insert_user_account?: Maybe<User_Account_Mutation_Response>;
  /** insert a single row into the table: "user_account" */
  insert_user_account_one?: Maybe<User_Account>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "attendance_state" */
  update_attendance_state?: Maybe<Attendance_State_Mutation_Response>;
  /** update single row of the table: "attendance_state" */
  update_attendance_state_by_pk?: Maybe<Attendance_State>;
  /** update data of the table: "lesson" */
  update_lesson?: Maybe<Lesson_Mutation_Response>;
  /** update single row of the table: "lesson" */
  update_lesson_by_pk?: Maybe<Lesson>;
  /** update data of the table: "lesson_template" */
  update_lesson_template?: Maybe<Lesson_Template_Mutation_Response>;
  /** update single row of the table: "lesson_template" */
  update_lesson_template_by_pk?: Maybe<Lesson_Template>;
  /** update data of the table: "lesson_template_student" */
  update_lesson_template_student?: Maybe<Lesson_Template_Student_Mutation_Response>;
  /** update single row of the table: "lesson_template_student" */
  update_lesson_template_student_by_pk?: Maybe<Lesson_Template_Student>;
  /** update data of the table: "organisation" */
  update_organisation?: Maybe<Organisation_Mutation_Response>;
  /** update single row of the table: "organisation" */
  update_organisation_by_pk?: Maybe<Organisation>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update data of the table: "student_attendance" */
  update_student_attendance?: Maybe<Student_Attendance_Mutation_Response>;
  /** update single row of the table: "student_attendance" */
  update_student_attendance_by_pk?: Maybe<Student_Attendance>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "url_token" */
  update_url_token?: Maybe<Url_Token_Mutation_Response>;
  /** update single row of the table: "url_token" */
  update_url_token_by_pk?: Maybe<Url_Token>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_account" */
  update_user_account?: Maybe<User_Account_Mutation_Response>;
  /** update single row of the table: "user_account" */
  update_user_account_by_pk?: Maybe<User_Account>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};

/** mutation root */
export type Mutation_RootDelete_Attendance_StateArgs = {
  where: Attendance_State_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Attendance_State_By_PkArgs = {
  state: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_LessonArgs = {
  where: Lesson_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lesson_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Lesson_TemplateArgs = {
  where: Lesson_Template_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lesson_Template_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Lesson_Template_StudentArgs = {
  where: Lesson_Template_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lesson_Template_Student_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_OrganisationArgs = {
  where: Organisation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Organisation_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_AttendanceArgs = {
  where: Student_Attendance_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_Attendance_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Url_TokenArgs = {
  where: Url_Token_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Url_Token_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_AccountArgs = {
  where: User_Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Account_By_PkArgs = {
  user_token: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_Attendance_StateArgs = {
  objects: Array<Attendance_State_Insert_Input>;
  on_conflict?: Maybe<Attendance_State_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Attendance_State_OneArgs = {
  object: Attendance_State_Insert_Input;
  on_conflict?: Maybe<Attendance_State_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LessonArgs = {
  objects: Array<Lesson_Insert_Input>;
  on_conflict?: Maybe<Lesson_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lesson_OneArgs = {
  object: Lesson_Insert_Input;
  on_conflict?: Maybe<Lesson_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lesson_TemplateArgs = {
  objects: Array<Lesson_Template_Insert_Input>;
  on_conflict?: Maybe<Lesson_Template_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lesson_Template_OneArgs = {
  object: Lesson_Template_Insert_Input;
  on_conflict?: Maybe<Lesson_Template_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lesson_Template_StudentArgs = {
  objects: Array<Lesson_Template_Student_Insert_Input>;
  on_conflict?: Maybe<Lesson_Template_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lesson_Template_Student_OneArgs = {
  object: Lesson_Template_Student_Insert_Input;
  on_conflict?: Maybe<Lesson_Template_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganisationArgs = {
  objects: Array<Organisation_Insert_Input>;
  on_conflict?: Maybe<Organisation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Organisation_OneArgs = {
  object: Organisation_Insert_Input;
  on_conflict?: Maybe<Organisation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_AttendanceArgs = {
  objects: Array<Student_Attendance_Insert_Input>;
  on_conflict?: Maybe<Student_Attendance_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_Attendance_OneArgs = {
  object: Student_Attendance_Insert_Input;
  on_conflict?: Maybe<Student_Attendance_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Url_TokenArgs = {
  objects: Array<Url_Token_Insert_Input>;
  on_conflict?: Maybe<Url_Token_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Url_Token_OneArgs = {
  object: Url_Token_Insert_Input;
  on_conflict?: Maybe<Url_Token_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_AccountArgs = {
  objects: Array<User_Account_Insert_Input>;
  on_conflict?: Maybe<User_Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Account_OneArgs = {
  object: User_Account_Insert_Input;
  on_conflict?: Maybe<User_Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Attendance_StateArgs = {
  _set?: Maybe<Attendance_State_Set_Input>;
  where: Attendance_State_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Attendance_State_By_PkArgs = {
  _set?: Maybe<Attendance_State_Set_Input>;
  pk_columns: Attendance_State_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LessonArgs = {
  _set?: Maybe<Lesson_Set_Input>;
  where: Lesson_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lesson_By_PkArgs = {
  _set?: Maybe<Lesson_Set_Input>;
  pk_columns: Lesson_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Lesson_TemplateArgs = {
  _inc?: Maybe<Lesson_Template_Inc_Input>;
  _set?: Maybe<Lesson_Template_Set_Input>;
  where: Lesson_Template_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lesson_Template_By_PkArgs = {
  _inc?: Maybe<Lesson_Template_Inc_Input>;
  _set?: Maybe<Lesson_Template_Set_Input>;
  pk_columns: Lesson_Template_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Lesson_Template_StudentArgs = {
  _set?: Maybe<Lesson_Template_Student_Set_Input>;
  where: Lesson_Template_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lesson_Template_Student_By_PkArgs = {
  _set?: Maybe<Lesson_Template_Student_Set_Input>;
  pk_columns: Lesson_Template_Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrganisationArgs = {
  _set?: Maybe<Organisation_Set_Input>;
  where: Organisation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Organisation_By_PkArgs = {
  _set?: Maybe<Organisation_Set_Input>;
  pk_columns: Organisation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _set?: Maybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_AttendanceArgs = {
  _set?: Maybe<Student_Attendance_Set_Input>;
  where: Student_Attendance_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_Attendance_By_PkArgs = {
  _set?: Maybe<Student_Attendance_Set_Input>;
  pk_columns: Student_Attendance_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _set?: Maybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Url_TokenArgs = {
  _append?: Maybe<Url_Token_Append_Input>;
  _delete_at_path?: Maybe<Url_Token_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Url_Token_Delete_Elem_Input>;
  _delete_key?: Maybe<Url_Token_Delete_Key_Input>;
  _prepend?: Maybe<Url_Token_Prepend_Input>;
  _set?: Maybe<Url_Token_Set_Input>;
  where: Url_Token_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Url_Token_By_PkArgs = {
  _append?: Maybe<Url_Token_Append_Input>;
  _delete_at_path?: Maybe<Url_Token_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Url_Token_Delete_Elem_Input>;
  _delete_key?: Maybe<Url_Token_Delete_Key_Input>;
  _prepend?: Maybe<Url_Token_Prepend_Input>;
  _set?: Maybe<Url_Token_Set_Input>;
  pk_columns: Url_Token_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_AccountArgs = {
  _append?: Maybe<User_Account_Append_Input>;
  _delete_at_path?: Maybe<User_Account_Delete_At_Path_Input>;
  _delete_elem?: Maybe<User_Account_Delete_Elem_Input>;
  _delete_key?: Maybe<User_Account_Delete_Key_Input>;
  _prepend?: Maybe<User_Account_Prepend_Input>;
  _set?: Maybe<User_Account_Set_Input>;
  where: User_Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Account_By_PkArgs = {
  _append?: Maybe<User_Account_Append_Input>;
  _delete_at_path?: Maybe<User_Account_Delete_At_Path_Input>;
  _delete_elem?: Maybe<User_Account_Delete_Elem_Input>;
  _delete_key?: Maybe<User_Account_Delete_Key_Input>;
  _prepend?: Maybe<User_Account_Prepend_Input>;
  _set?: Maybe<User_Account_Set_Input>;
  pk_columns: User_Account_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "organisation" */
export type Organisation = {
  __typename?: "organisation";
  id: Scalars["uuid"];
  /** An array relationship */
  lessons: Array<Lesson>;
  /** An aggregated array relationship */
  lessons_aggregate: Lesson_Aggregate;
  name: Scalars["String"];
  /** An array relationship */
  students: Array<Student>;
  /** An aggregated array relationship */
  students_aggregate: Student_Aggregate;
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};

/** columns and relationships of "organisation" */
export type OrganisationLessonsArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "organisation" */
export type OrganisationLessons_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "organisation" */
export type OrganisationStudentsArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** columns and relationships of "organisation" */
export type OrganisationStudents_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** columns and relationships of "organisation" */
export type OrganisationUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "organisation" */
export type OrganisationUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "organisation" */
export type Organisation_Aggregate = {
  __typename?: "organisation_aggregate";
  aggregate?: Maybe<Organisation_Aggregate_Fields>;
  nodes: Array<Organisation>;
};

/** aggregate fields of "organisation" */
export type Organisation_Aggregate_Fields = {
  __typename?: "organisation_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Organisation_Max_Fields>;
  min?: Maybe<Organisation_Min_Fields>;
};

/** aggregate fields of "organisation" */
export type Organisation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisation_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "organisation" */
export type Organisation_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Organisation_Max_Order_By>;
  min?: Maybe<Organisation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organisation" */
export type Organisation_Arr_Rel_Insert_Input = {
  data: Array<Organisation_Insert_Input>;
  on_conflict?: Maybe<Organisation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organisation". All fields are combined with a logical 'AND'. */
export type Organisation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisation_Bool_Exp>>>;
  _not?: Maybe<Organisation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisation_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lessons?: Maybe<Lesson_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  students?: Maybe<Student_Bool_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "organisation" */
export enum Organisation_Constraint {
  /** unique or primary key constraint */
  OrganisationPkey = "organisation_pkey",
}

/** input type for inserting data into table "organisation" */
export type Organisation_Insert_Input = {
  id?: Maybe<Scalars["uuid"]>;
  lessons?: Maybe<Lesson_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  students?: Maybe<Student_Arr_Rel_Insert_Input>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organisation_Max_Fields = {
  __typename?: "organisation_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "organisation" */
export type Organisation_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisation_Min_Fields = {
  __typename?: "organisation_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "organisation" */
export type Organisation_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisation" */
export type Organisation_Mutation_Response = {
  __typename?: "organisation_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Organisation>;
};

/** input type for inserting object relation for remote table "organisation" */
export type Organisation_Obj_Rel_Insert_Input = {
  data: Organisation_Insert_Input;
  on_conflict?: Maybe<Organisation_On_Conflict>;
};

/** on conflict condition type for table "organisation" */
export type Organisation_On_Conflict = {
  constraint: Organisation_Constraint;
  update_columns: Array<Organisation_Update_Column>;
  where?: Maybe<Organisation_Bool_Exp>;
};

/** ordering options when selecting data from "organisation" */
export type Organisation_Order_By = {
  id?: Maybe<Order_By>;
  lessons_aggregate?: Maybe<Lesson_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  students_aggregate?: Maybe<Student_Aggregate_Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: "organisation" */
export type Organisation_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "organisation" */
export enum Organisation_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "organisation" */
export type Organisation_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "organisation" */
export enum Organisation_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "attendance_state" */
  attendance_state: Array<Attendance_State>;
  /** fetch aggregated fields from the table: "attendance_state" */
  attendance_state_aggregate: Attendance_State_Aggregate;
  /** fetch data from the table: "attendance_state" using primary key columns */
  attendance_state_by_pk?: Maybe<Attendance_State>;
  /** fetch data from the table: "lesson" */
  lesson: Array<Lesson>;
  /** fetch aggregated fields from the table: "lesson" */
  lesson_aggregate: Lesson_Aggregate;
  /** fetch data from the table: "lesson" using primary key columns */
  lesson_by_pk?: Maybe<Lesson>;
  /** fetch data from the table: "lesson_template" */
  lesson_template: Array<Lesson_Template>;
  /** fetch aggregated fields from the table: "lesson_template" */
  lesson_template_aggregate: Lesson_Template_Aggregate;
  /** fetch data from the table: "lesson_template" using primary key columns */
  lesson_template_by_pk?: Maybe<Lesson_Template>;
  /** fetch data from the table: "lesson_template_student" */
  lesson_template_student: Array<Lesson_Template_Student>;
  /** fetch aggregated fields from the table: "lesson_template_student" */
  lesson_template_student_aggregate: Lesson_Template_Student_Aggregate;
  /** fetch data from the table: "lesson_template_student" using primary key columns */
  lesson_template_student_by_pk?: Maybe<Lesson_Template_Student>;
  /** fetch data from the table: "organisation" */
  organisation: Array<Organisation>;
  /** fetch aggregated fields from the table: "organisation" */
  organisation_aggregate: Organisation_Aggregate;
  /** fetch data from the table: "organisation" using primary key columns */
  organisation_by_pk?: Maybe<Organisation>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student_attendance" */
  student_attendance: Array<Student_Attendance>;
  /** fetch aggregated fields from the table: "student_attendance" */
  student_attendance_aggregate: Student_Attendance_Aggregate;
  /** fetch data from the table: "student_attendance" using primary key columns */
  student_attendance_by_pk?: Maybe<Student_Attendance>;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "url_token" */
  url_token: Array<Url_Token>;
  /** fetch aggregated fields from the table: "url_token" */
  url_token_aggregate: Url_Token_Aggregate;
  /** fetch data from the table: "url_token" using primary key columns */
  url_token_by_pk?: Maybe<Url_Token>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_account" */
  user_account: Array<User_Account>;
  /** fetch aggregated fields from the table: "user_account" */
  user_account_aggregate: User_Account_Aggregate;
  /** fetch data from the table: "user_account" using primary key columns */
  user_account_by_pk?: Maybe<User_Account>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** query root */
export type Query_RootAttendance_StateArgs = {
  distinct_on?: Maybe<Array<Attendance_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Attendance_State_Order_By>>;
  where?: Maybe<Attendance_State_Bool_Exp>;
};

/** query root */
export type Query_RootAttendance_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Attendance_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Attendance_State_Order_By>>;
  where?: Maybe<Attendance_State_Bool_Exp>;
};

/** query root */
export type Query_RootAttendance_State_By_PkArgs = {
  state: Scalars["String"];
};

/** query root */
export type Query_RootLessonArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootLesson_TemplateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Order_By>>;
  where?: Maybe<Lesson_Template_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Order_By>>;
  where?: Maybe<Lesson_Template_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_Template_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootLesson_Template_StudentArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_Template_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** query root */
export type Query_RootLesson_Template_Student_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootOrganisationArgs = {
  distinct_on?: Maybe<Array<Organisation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organisation_Order_By>>;
  where?: Maybe<Organisation_Bool_Exp>;
};

/** query root */
export type Query_RootOrganisation_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organisation_Order_By>>;
  where?: Maybe<Organisation_Bool_Exp>;
};

/** query root */
export type Query_RootOrganisation_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_AttendanceArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_Attendance_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_Attendance_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootStudent_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUrl_TokenArgs = {
  distinct_on?: Maybe<Array<Url_Token_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Url_Token_Order_By>>;
  where?: Maybe<Url_Token_Bool_Exp>;
};

/** query root */
export type Query_RootUrl_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Url_Token_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Url_Token_Order_By>>;
  where?: Maybe<Url_Token_Bool_Exp>;
};

/** query root */
export type Query_RootUrl_Token_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_AccountArgs = {
  distinct_on?: Maybe<Array<User_Account_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Account_Order_By>>;
  where?: Maybe<User_Account_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Account_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Account_Order_By>>;
  where?: Maybe<User_Account_Bool_Exp>;
};

/** query root */
export type Query_RootUser_Account_By_PkArgs = {
  user_token: Scalars["String"];
};

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "student" */
export type Student = {
  __typename?: "student";
  birthday?: Maybe<Scalars["date"]>;
  id: Scalars["uuid"];
  name: Scalars["String"];
  /** An object relationship */
  organisation: Organisation;
  organisation_id: Scalars["uuid"];
  /** An array relationship */
  student_attendances: Array<Student_Attendance>;
  /** An aggregated array relationship */
  student_attendances_aggregate: Student_Attendance_Aggregate;
};

/** columns and relationships of "student" */
export type StudentStudent_AttendancesArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_Attendances_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: "student_aggregate";
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: "student_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "student" */
export type Student_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Max_Order_By>;
  min?: Maybe<Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student" */
export type Student_Arr_Rel_Insert_Input = {
  data: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** columns and relationships of "student_attendance" */
export type Student_Attendance = {
  __typename?: "student_attendance";
  /** An object relationship */
  attendance_state: Attendance_State;
  id: Scalars["uuid"];
  /** An object relationship */
  lesson: Lesson;
  lesson_id: Scalars["uuid"];
  state: Attendance_State_Enum;
  /** An object relationship */
  student: Student;
  student_id: Scalars["uuid"];
};

/** aggregated selection of "student_attendance" */
export type Student_Attendance_Aggregate = {
  __typename?: "student_attendance_aggregate";
  aggregate?: Maybe<Student_Attendance_Aggregate_Fields>;
  nodes: Array<Student_Attendance>;
};

/** aggregate fields of "student_attendance" */
export type Student_Attendance_Aggregate_Fields = {
  __typename?: "student_attendance_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Student_Attendance_Max_Fields>;
  min?: Maybe<Student_Attendance_Min_Fields>;
};

/** aggregate fields of "student_attendance" */
export type Student_Attendance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Attendance_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "student_attendance" */
export type Student_Attendance_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Attendance_Max_Order_By>;
  min?: Maybe<Student_Attendance_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_attendance" */
export type Student_Attendance_Arr_Rel_Insert_Input = {
  data: Array<Student_Attendance_Insert_Input>;
  on_conflict?: Maybe<Student_Attendance_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student_attendance". All fields are combined with a logical 'AND'. */
export type Student_Attendance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Attendance_Bool_Exp>>>;
  _not?: Maybe<Student_Attendance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Attendance_Bool_Exp>>>;
  attendance_state?: Maybe<Attendance_State_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lesson?: Maybe<Lesson_Bool_Exp>;
  lesson_id?: Maybe<Uuid_Comparison_Exp>;
  state?: Maybe<Attendance_State_Enum_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_attendance" */
export enum Student_Attendance_Constraint {
  /** unique or primary key constraint */
  StudentAttendancePkey = "student_attendance_pkey",
  /** unique or primary key constraint */
  StudentAttendanceStudentIdLessonIdKey = "student_attendance_student_id_lesson_id_key",
}

/** input type for inserting data into table "student_attendance" */
export type Student_Attendance_Insert_Input = {
  attendance_state?: Maybe<Attendance_State_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  lesson?: Maybe<Lesson_Obj_Rel_Insert_Input>;
  lesson_id?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Attendance_State_Enum>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Student_Attendance_Max_Fields = {
  __typename?: "student_attendance_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  lesson_id?: Maybe<Scalars["uuid"]>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "student_attendance" */
export type Student_Attendance_Max_Order_By = {
  id?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Attendance_Min_Fields = {
  __typename?: "student_attendance_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  lesson_id?: Maybe<Scalars["uuid"]>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "student_attendance" */
export type Student_Attendance_Min_Order_By = {
  id?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_attendance" */
export type Student_Attendance_Mutation_Response = {
  __typename?: "student_attendance_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Student_Attendance>;
};

/** input type for inserting object relation for remote table "student_attendance" */
export type Student_Attendance_Obj_Rel_Insert_Input = {
  data: Student_Attendance_Insert_Input;
  on_conflict?: Maybe<Student_Attendance_On_Conflict>;
};

/** on conflict condition type for table "student_attendance" */
export type Student_Attendance_On_Conflict = {
  constraint: Student_Attendance_Constraint;
  update_columns: Array<Student_Attendance_Update_Column>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** ordering options when selecting data from "student_attendance" */
export type Student_Attendance_Order_By = {
  attendance_state?: Maybe<Attendance_State_Order_By>;
  id?: Maybe<Order_By>;
  lesson?: Maybe<Lesson_Order_By>;
  lesson_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_attendance" */
export type Student_Attendance_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "student_attendance" */
export enum Student_Attendance_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  LessonId = "lesson_id",
  /** column name */
  State = "state",
  /** column name */
  StudentId = "student_id",
}

/** input type for updating data in table "student_attendance" */
export type Student_Attendance_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  lesson_id?: Maybe<Scalars["uuid"]>;
  state?: Maybe<Attendance_State_Enum>;
  student_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "student_attendance" */
export enum Student_Attendance_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  LessonId = "lesson_id",
  /** column name */
  State = "state",
  /** column name */
  StudentId = "student_id",
}

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  _not?: Maybe<Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisation?: Maybe<Organisation_Bool_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
  student_attendances?: Maybe<Student_Attendance_Bool_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint */
  StudentNameBirthdayKey = "student_name_birthday_key",
  /** unique or primary key constraint */
  StudentPkey = "student_pkey",
}

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  birthday?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<Organisation_Obj_Rel_Insert_Input>;
  organisation_id?: Maybe<Scalars["uuid"]>;
  student_attendances?: Maybe<Student_Attendance_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: "student_max_fields";
  birthday?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "student" */
export type Student_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: "student_min_fields";
  birthday?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "student" */
export type Student_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: "student_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type Student_Obj_Rel_Insert_Input = {
  data: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** on conflict condition type for table "student" */
export type Student_On_Conflict = {
  constraint: Student_Constraint;
  update_columns: Array<Student_Update_Column>;
  where?: Maybe<Student_Bool_Exp>;
};

/** ordering options when selecting data from "student" */
export type Student_Order_By = {
  birthday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation?: Maybe<Organisation_Order_By>;
  organisation_id?: Maybe<Order_By>;
  student_attendances_aggregate?: Maybe<Student_Attendance_Aggregate_Order_By>;
};

/** primary key columns input for table: "student" */
export type Student_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  Birthday = "birthday",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  birthday?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  Birthday = "birthday",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
}

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "attendance_state" */
  attendance_state: Array<Attendance_State>;
  /** fetch aggregated fields from the table: "attendance_state" */
  attendance_state_aggregate: Attendance_State_Aggregate;
  /** fetch data from the table: "attendance_state" using primary key columns */
  attendance_state_by_pk?: Maybe<Attendance_State>;
  /** fetch data from the table: "lesson" */
  lesson: Array<Lesson>;
  /** fetch aggregated fields from the table: "lesson" */
  lesson_aggregate: Lesson_Aggregate;
  /** fetch data from the table: "lesson" using primary key columns */
  lesson_by_pk?: Maybe<Lesson>;
  /** fetch data from the table: "lesson_template" */
  lesson_template: Array<Lesson_Template>;
  /** fetch aggregated fields from the table: "lesson_template" */
  lesson_template_aggregate: Lesson_Template_Aggregate;
  /** fetch data from the table: "lesson_template" using primary key columns */
  lesson_template_by_pk?: Maybe<Lesson_Template>;
  /** fetch data from the table: "lesson_template_student" */
  lesson_template_student: Array<Lesson_Template_Student>;
  /** fetch aggregated fields from the table: "lesson_template_student" */
  lesson_template_student_aggregate: Lesson_Template_Student_Aggregate;
  /** fetch data from the table: "lesson_template_student" using primary key columns */
  lesson_template_student_by_pk?: Maybe<Lesson_Template_Student>;
  /** fetch data from the table: "organisation" */
  organisation: Array<Organisation>;
  /** fetch aggregated fields from the table: "organisation" */
  organisation_aggregate: Organisation_Aggregate;
  /** fetch data from the table: "organisation" using primary key columns */
  organisation_by_pk?: Maybe<Organisation>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student_attendance" */
  student_attendance: Array<Student_Attendance>;
  /** fetch aggregated fields from the table: "student_attendance" */
  student_attendance_aggregate: Student_Attendance_Aggregate;
  /** fetch data from the table: "student_attendance" using primary key columns */
  student_attendance_by_pk?: Maybe<Student_Attendance>;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "url_token" */
  url_token: Array<Url_Token>;
  /** fetch aggregated fields from the table: "url_token" */
  url_token_aggregate: Url_Token_Aggregate;
  /** fetch data from the table: "url_token" using primary key columns */
  url_token_by_pk?: Maybe<Url_Token>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_account" */
  user_account: Array<User_Account>;
  /** fetch aggregated fields from the table: "user_account" */
  user_account_aggregate: User_Account_Aggregate;
  /** fetch data from the table: "user_account" using primary key columns */
  user_account_by_pk?: Maybe<User_Account>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootAttendance_StateArgs = {
  distinct_on?: Maybe<Array<Attendance_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Attendance_State_Order_By>>;
  where?: Maybe<Attendance_State_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAttendance_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Attendance_State_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Attendance_State_Order_By>>;
  where?: Maybe<Attendance_State_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAttendance_State_By_PkArgs = {
  state: Scalars["String"];
};

/** subscription root */
export type Subscription_RootLessonArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Order_By>>;
  where?: Maybe<Lesson_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootLesson_TemplateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Order_By>>;
  where?: Maybe<Lesson_Template_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Order_By>>;
  where?: Maybe<Lesson_Template_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_Template_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootLesson_Template_StudentArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_Template_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Lesson_Template_Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lesson_Template_Student_Order_By>>;
  where?: Maybe<Lesson_Template_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLesson_Template_Student_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootOrganisationArgs = {
  distinct_on?: Maybe<Array<Organisation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organisation_Order_By>>;
  where?: Maybe<Organisation_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganisation_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organisation_Order_By>>;
  where?: Maybe<Organisation_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganisation_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_AttendanceArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_Attendance_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Attendance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Attendance_Order_By>>;
  where?: Maybe<Student_Attendance_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_Attendance_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUrl_TokenArgs = {
  distinct_on?: Maybe<Array<Url_Token_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Url_Token_Order_By>>;
  where?: Maybe<Url_Token_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUrl_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Url_Token_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Url_Token_Order_By>>;
  where?: Maybe<Url_Token_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUrl_Token_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_AccountArgs = {
  distinct_on?: Maybe<Array<User_Account_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Account_Order_By>>;
  where?: Maybe<User_Account_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Account_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Account_Order_By>>;
  where?: Maybe<User_Account_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_Account_By_PkArgs = {
  user_token: Scalars["String"];
};

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["uuid"];
};

/** expression to compare columns of type time. All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: Maybe<Scalars["time"]>;
  _gt?: Maybe<Scalars["time"]>;
  _gte?: Maybe<Scalars["time"]>;
  _in?: Maybe<Array<Scalars["time"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["time"]>;
  _lte?: Maybe<Scalars["time"]>;
  _neq?: Maybe<Scalars["time"]>;
  _nin?: Maybe<Array<Scalars["time"]>>;
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamp"]>;
  _gt?: Maybe<Scalars["timestamp"]>;
  _gte?: Maybe<Scalars["timestamp"]>;
  _in?: Maybe<Array<Scalars["timestamp"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamp"]>;
  _lte?: Maybe<Scalars["timestamp"]>;
  _neq?: Maybe<Scalars["timestamp"]>;
  _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "url_token" */
export type Url_Token = {
  __typename?: "url_token";
  data?: Maybe<Scalars["jsonb"]>;
  expire: Scalars["timestamp"];
  id: Scalars["uuid"];
  type: Scalars["String"];
};

/** columns and relationships of "url_token" */
export type Url_TokenDataArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "url_token" */
export type Url_Token_Aggregate = {
  __typename?: "url_token_aggregate";
  aggregate?: Maybe<Url_Token_Aggregate_Fields>;
  nodes: Array<Url_Token>;
};

/** aggregate fields of "url_token" */
export type Url_Token_Aggregate_Fields = {
  __typename?: "url_token_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Url_Token_Max_Fields>;
  min?: Maybe<Url_Token_Min_Fields>;
};

/** aggregate fields of "url_token" */
export type Url_Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Url_Token_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "url_token" */
export type Url_Token_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Url_Token_Max_Order_By>;
  min?: Maybe<Url_Token_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Url_Token_Append_Input = {
  data?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "url_token" */
export type Url_Token_Arr_Rel_Insert_Input = {
  data: Array<Url_Token_Insert_Input>;
  on_conflict?: Maybe<Url_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "url_token". All fields are combined with a logical 'AND'. */
export type Url_Token_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Url_Token_Bool_Exp>>>;
  _not?: Maybe<Url_Token_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Url_Token_Bool_Exp>>>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  expire?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "url_token" */
export enum Url_Token_Constraint {
  /** unique or primary key constraint */
  UrlTokenPkey = "url_token_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Url_Token_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Url_Token_Delete_Elem_Input = {
  data?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Url_Token_Delete_Key_Input = {
  data?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "url_token" */
export type Url_Token_Insert_Input = {
  data?: Maybe<Scalars["jsonb"]>;
  expire?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Url_Token_Max_Fields = {
  __typename?: "url_token_max_fields";
  expire?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "url_token" */
export type Url_Token_Max_Order_By = {
  expire?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Url_Token_Min_Fields = {
  __typename?: "url_token_min_fields";
  expire?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "url_token" */
export type Url_Token_Min_Order_By = {
  expire?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "url_token" */
export type Url_Token_Mutation_Response = {
  __typename?: "url_token_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Url_Token>;
};

/** input type for inserting object relation for remote table "url_token" */
export type Url_Token_Obj_Rel_Insert_Input = {
  data: Url_Token_Insert_Input;
  on_conflict?: Maybe<Url_Token_On_Conflict>;
};

/** on conflict condition type for table "url_token" */
export type Url_Token_On_Conflict = {
  constraint: Url_Token_Constraint;
  update_columns: Array<Url_Token_Update_Column>;
  where?: Maybe<Url_Token_Bool_Exp>;
};

/** ordering options when selecting data from "url_token" */
export type Url_Token_Order_By = {
  data?: Maybe<Order_By>;
  expire?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "url_token" */
export type Url_Token_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Url_Token_Prepend_Input = {
  data?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "url_token" */
export enum Url_Token_Select_Column {
  /** column name */
  Data = "data",
  /** column name */
  Expire = "expire",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "url_token" */
export type Url_Token_Set_Input = {
  data?: Maybe<Scalars["jsonb"]>;
  expire?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
};

/** update columns of table "url_token" */
export enum Url_Token_Update_Column {
  /** column name */
  Data = "data",
  /** column name */
  Expire = "expire",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
}

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  email: Scalars["String"];
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  last_online?: Maybe<Scalars["timestamptz"]>;
  manager: Scalars["Boolean"];
  name: Scalars["String"];
  /** An object relationship */
  organisation?: Maybe<Organisation>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** columns and relationships of "user_account" */
export type User_Account = {
  __typename?: "user_account";
  data?: Maybe<Scalars["jsonb"]>;
  /** An object relationship */
  user: User;
  user_id: Scalars["uuid"];
  user_token: Scalars["String"];
};

/** columns and relationships of "user_account" */
export type User_AccountDataArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "user_account" */
export type User_Account_Aggregate = {
  __typename?: "user_account_aggregate";
  aggregate?: Maybe<User_Account_Aggregate_Fields>;
  nodes: Array<User_Account>;
};

/** aggregate fields of "user_account" */
export type User_Account_Aggregate_Fields = {
  __typename?: "user_account_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Account_Max_Fields>;
  min?: Maybe<User_Account_Min_Fields>;
};

/** aggregate fields of "user_account" */
export type User_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Account_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_account" */
export type User_Account_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Account_Max_Order_By>;
  min?: Maybe<User_Account_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Account_Append_Input = {
  data?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "user_account" */
export type User_Account_Arr_Rel_Insert_Input = {
  data: Array<User_Account_Insert_Input>;
  on_conflict?: Maybe<User_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_account". All fields are combined with a logical 'AND'. */
export type User_Account_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Account_Bool_Exp>>>;
  _not?: Maybe<User_Account_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Account_Bool_Exp>>>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  user_token?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_account" */
export enum User_Account_Constraint {
  /** unique or primary key constraint */
  UserAccountPkey = "user_account_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Account_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Account_Delete_Elem_Input = {
  data?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Account_Delete_Key_Input = {
  data?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "user_account" */
export type User_Account_Insert_Input = {
  data?: Maybe<Scalars["jsonb"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["uuid"]>;
  user_token?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type User_Account_Max_Fields = {
  __typename?: "user_account_max_fields";
  user_id?: Maybe<Scalars["uuid"]>;
  user_token?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user_account" */
export type User_Account_Max_Order_By = {
  user_id?: Maybe<Order_By>;
  user_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Account_Min_Fields = {
  __typename?: "user_account_min_fields";
  user_id?: Maybe<Scalars["uuid"]>;
  user_token?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user_account" */
export type User_Account_Min_Order_By = {
  user_id?: Maybe<Order_By>;
  user_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_account" */
export type User_Account_Mutation_Response = {
  __typename?: "user_account_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User_Account>;
};

/** input type for inserting object relation for remote table "user_account" */
export type User_Account_Obj_Rel_Insert_Input = {
  data: User_Account_Insert_Input;
  on_conflict?: Maybe<User_Account_On_Conflict>;
};

/** on conflict condition type for table "user_account" */
export type User_Account_On_Conflict = {
  constraint: User_Account_Constraint;
  update_columns: Array<User_Account_Update_Column>;
  where?: Maybe<User_Account_Bool_Exp>;
};

/** ordering options when selecting data from "user_account" */
export type User_Account_Order_By = {
  data?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
  user_token?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_account" */
export type User_Account_Pk_Columns_Input = {
  user_token: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Account_Prepend_Input = {
  data?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "user_account" */
export enum User_Account_Select_Column {
  /** column name */
  Data = "data",
  /** column name */
  UserId = "user_id",
  /** column name */
  UserToken = "user_token",
}

/** input type for updating data in table "user_account" */
export type User_Account_Set_Input = {
  data?: Maybe<Scalars["jsonb"]>;
  user_id?: Maybe<Scalars["uuid"]>;
  user_token?: Maybe<Scalars["String"]>;
};

/** update columns of table "user_account" */
export enum User_Account_Update_Column {
  /** column name */
  Data = "data",
  /** column name */
  UserId = "user_id",
  /** column name */
  UserToken = "user_token",
}

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  last_online?: Maybe<Timestamptz_Comparison_Exp>;
  manager?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisation?: Maybe<Organisation_Bool_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  last_online?: Maybe<Scalars["timestamptz"]>;
  manager?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<Organisation_Obj_Rel_Insert_Input>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  last_online?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_online?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  last_online?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_online?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_online?: Maybe<Order_By>;
  manager?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation?: Maybe<Organisation_Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  LastOnline = "last_online",
  /** column name */
  Manager = "manager",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  last_online?: Maybe<Scalars["timestamptz"]>;
  manager?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  organisation_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  LastOnline = "last_online",
  /** column name */
  Manager = "manager",
  /** column name */
  Name = "name",
  /** column name */
  OrganisationId = "organisation_id",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type GetLessonByIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetLessonByIdQuery = { __typename?: "query_root" } & {
  lesson_by_pk?: Maybe<
    { __typename?: "lesson" } & Pick<
      Lesson,
      "id" | "name" | "duration" | "plan" | "start_time"
    > & {
        student_attendances: Array<
          { __typename?: "student_attendance" } & Pick<
            Student_Attendance,
            "id" | "state"
          > & {
              student: { __typename?: "student" } & Pick<
                Student,
                "id" | "name" | "birthday"
              >;
            }
        >;
      }
  >;
};

export type SetLessonNameMutationVariables = Exact<{
  id: Scalars["uuid"];
  name: Scalars["String"];
}>;

export type SetLessonNameMutation = { __typename?: "mutation_root" } & {
  update_lesson_by_pk?: Maybe<
    { __typename?: "lesson" } & Pick<Lesson, "id" | "name">
  >;
};

export type SetLessonDateMutationVariables = Exact<{
  id: Scalars["uuid"];
  date: Scalars["timestamptz"];
}>;

export type SetLessonDateMutation = { __typename?: "mutation_root" } & {
  update_lesson_by_pk?: Maybe<
    { __typename?: "lesson" } & Pick<Lesson, "id" | "start_time">
  >;
};

export type SetLessonDurationMutationVariables = Exact<{
  id: Scalars["uuid"];
  duration: Scalars["interval"];
}>;

export type SetLessonDurationMutation = { __typename?: "mutation_root" } & {
  update_lesson_by_pk?: Maybe<
    { __typename?: "lesson" } & Pick<Lesson, "id" | "duration">
  >;
};

export type GetLessonsSmallQueryVariables = Exact<{ [key: string]: never }>;

export type GetLessonsSmallQuery = { __typename?: "query_root" } & {
  lesson: Array<
    { __typename?: "lesson" } & Pick<
      Lesson,
      "id" | "name" | "duration" | "start_time"
    >
  >;
};

export type AddLessonMutationVariables = Exact<{
  name: Scalars["String"];
  start_time: Scalars["timestamptz"];
  duration: Scalars["interval"];
}>;

export type AddLessonMutation = { __typename?: "mutation_root" } & {
  insert_lesson_one?: Maybe<{ __typename?: "lesson" } & Pick<Lesson, "id">>;
};

export type GetLessonTemplateByIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetLessonTemplateByIdQuery = { __typename?: "query_root" } & {
  lesson_template_by_pk?: Maybe<
    { __typename?: "lesson_template" } & Pick<
      Lesson_Template,
      "id" | "name" | "duration" | "start_time" | "day"
    > & {
        template_students: Array<
          { __typename?: "lesson_template_student" } & Pick<
            Lesson_Template_Student,
            "id"
          > & {
              student: { __typename?: "student" } & Pick<
                Student,
                "id" | "name"
              >;
            }
        >;
      }
  >;
};

export type UpdateLessonTemplateNameMutationVariables = Exact<{
  id: Scalars["uuid"];
  name: Scalars["String"];
}>;

export type UpdateLessonTemplateNameMutation = {
  __typename?: "mutation_root";
} & {
  update_lesson_template_by_pk?: Maybe<
    { __typename?: "lesson_template" } & Pick<Lesson_Template, "name" | "id">
  >;
};

export type UpdateLessonTemplateDayMutationVariables = Exact<{
  id: Scalars["uuid"];
  day: Scalars["Int"];
}>;

export type UpdateLessonTemplateDayMutation = {
  __typename?: "mutation_root";
} & {
  update_lesson_template_by_pk?: Maybe<
    { __typename?: "lesson_template" } & Pick<Lesson_Template, "name" | "id">
  >;
};

export type UpdateLessonTemplateTimeMutationVariables = Exact<{
  id: Scalars["uuid"];
  time: Scalars["time"];
}>;

export type UpdateLessonTemplateTimeMutation = {
  __typename?: "mutation_root";
} & {
  update_lesson_template_by_pk?: Maybe<
    { __typename?: "lesson_template" } & Pick<Lesson_Template, "name" | "id">
  >;
};

export type UpdateLessonTemplateDurationMutationVariables = Exact<{
  id: Scalars["uuid"];
  duration: Scalars["interval"];
}>;

export type UpdateLessonTemplateDurationMutation = {
  __typename?: "mutation_root";
} & {
  update_lesson_template_by_pk?: Maybe<
    { __typename?: "lesson_template" } & Pick<Lesson_Template, "name" | "id">
  >;
};

export type AddLessonTemplateStudentMutationVariables = Exact<{
  template_id: Scalars["uuid"];
  student_id: Scalars["uuid"];
}>;

export type AddLessonTemplateStudentMutation = {
  __typename?: "mutation_root";
} & {
  insert_lesson_template_student_one?: Maybe<
    { __typename?: "lesson_template_student" } & Pick<
      Lesson_Template_Student,
      "id" | "lesson_template_id" | "student_id"
    >
  >;
};

export type RemoveLessonTemplateStudentMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type RemoveLessonTemplateStudentMutation = {
  __typename?: "mutation_root";
} & {
  delete_lesson_template_student_by_pk?: Maybe<
    { __typename?: "lesson_template_student" } & Pick<
      Lesson_Template_Student,
      "id" | "student_id" | "lesson_template_id"
    >
  >;
};

export type GetLessonTemplatesQueryVariables = Exact<{ [key: string]: never }>;

export type GetLessonTemplatesQuery = { __typename?: "query_root" } & {
  lesson_template: Array<
    { __typename?: "lesson_template" } & Pick<
      Lesson_Template,
      "id" | "duration" | "day" | "name" | "start_time"
    >
  >;
};

export type AddLessonTemplateMutationVariables = Exact<{
  name: Scalars["String"];
  time: Scalars["time"];
  duration: Scalars["interval"];
  day: Scalars["Int"];
}>;

export type AddLessonTemplateMutation = { __typename?: "mutation_root" } & {
  insert_lesson_template_one?: Maybe<
    { __typename?: "lesson_template" } & Pick<Lesson_Template, "id">
  >;
};

export type LessonsTodayQueryVariables = Exact<{
  start: Scalars["timestamptz"];
  end: Scalars["timestamptz"];
}>;

export type LessonsTodayQuery = { __typename?: "query_root" } & {
  lesson: Array<
    { __typename?: "lesson" } & Pick<Lesson, "id" | "name" | "start_time">
  >;
};

export type AllLessonsInWeekQueryVariables = Exact<{
  weekStart: Scalars["timestamptz"];
  weekEnd: Scalars["timestamptz"];
}>;

export type AllLessonsInWeekQuery = { __typename?: "query_root" } & {
  lesson_template: Array<
    { __typename?: "lesson_template" } & Pick<
      Lesson_Template,
      "id" | "day" | "duration" | "name"
    > & { time: Lesson_Template["start_time"] } & {
        template_students: Array<
          { __typename?: "lesson_template_student" } & Pick<
            Lesson_Template_Student,
            "id"
          > & {
              student: { __typename?: "student" } & Pick<
                Student,
                "id" | "name"
              >;
            }
        >;
      }
  >;
  lesson: Array<
    { __typename?: "lesson" } & Pick<
      Lesson,
      "id" | "name" | "start_time" | "duration" | "template_id"
    >
  >;
};

export type CreateLessonMutationVariables = Exact<{
  template_id: Scalars["uuid"];
  start_time: Scalars["timestamptz"];
  name: Scalars["String"];
  duration: Scalars["interval"];
  student_attendances: Student_Attendance_Arr_Rel_Insert_Input;
}>;

export type CreateLessonMutation = { __typename?: "mutation_root" } & {
  insert_lesson_one?: Maybe<{ __typename?: "lesson" } & Pick<Lesson, "id">>;
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetStudentsQuery = { __typename?: "query_root" } & {
  student: Array<
    { __typename?: "student" } & Pick<Student, "id" | "name" | "birthday">
  >;
};

export type GetStudentByIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetStudentByIdQuery = { __typename?: "query_root" } & {
  student_by_pk?: Maybe<
    { __typename?: "student" } & Pick<Student, "id" | "name" | "birthday"> & {
        student_attendances: Array<
          { __typename?: "student_attendance" } & Pick<
            Student_Attendance,
            "id" | "state"
          > & {
              lesson: { __typename?: "lesson" } & Pick<
                Lesson,
                "name" | "start_time" | "id"
              >;
            }
        >;
        student_attendances_aggregate: {
          __typename?: "student_attendance_aggregate";
        } & {
          aggregate?: Maybe<
            { __typename?: "student_attendance_aggregate_fields" } & Pick<
              Student_Attendance_Aggregate_Fields,
              "count"
            >
          >;
        };
      }
  >;
};

export type SetStudentNameMutationVariables = Exact<{
  id: Scalars["uuid"];
  name: Scalars["String"];
}>;

export type SetStudentNameMutation = { __typename?: "mutation_root" } & {
  update_student_by_pk?: Maybe<
    { __typename?: "student" } & Pick<Student, "id" | "name">
  >;
};

export type SetStudentBirthdayMutationVariables = Exact<{
  id: Scalars["uuid"];
  birthday: Scalars["date"];
}>;

export type SetStudentBirthdayMutation = { __typename?: "mutation_root" } & {
  update_student_by_pk?: Maybe<
    { __typename?: "student" } & Pick<Student, "id" | "birthday">
  >;
};

export type AddStudentMutationVariables = Exact<{
  birthday?: Maybe<Scalars["date"]>;
  name: Scalars["String"];
}>;

export type AddStudentMutation = { __typename?: "mutation_root" } & {
  insert_student_one?: Maybe<
    { __typename?: "student" } & Pick<Student, "id" | "name" | "birthday">
  >;
};

export type SetStudentAttendanceMutationVariables = Exact<{
  id: Scalars["uuid"];
  state: Attendance_State_Enum;
}>;

export type SetStudentAttendanceMutation = { __typename?: "mutation_root" } & {
  update_student_attendance_by_pk?: Maybe<
    { __typename?: "student_attendance" } & Pick<
      Student_Attendance,
      "id" | "state" | "student_id"
    >
  >;
};

export type AddStudentAttendanceMutationVariables = Exact<{
  state: Attendance_State_Enum;
  lesson_id: Scalars["uuid"];
  student_id: Scalars["uuid"];
}>;

export type AddStudentAttendanceMutation = { __typename?: "mutation_root" } & {
  insert_student_attendance_one?: Maybe<
    { __typename?: "student_attendance" } & Pick<
      Student_Attendance,
      "id" | "lesson_id" | "state" | "student_id"
    >
  >;
};

export type DeleteStudentAttendanceMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteStudentAttendanceMutation = {
  __typename?: "mutation_root";
} & {
  delete_student_attendance_by_pk?: Maybe<
    { __typename?: "student_attendance" } & Pick<Student_Attendance, "id">
  >;
};

export type SearchStudentQueryVariables = Exact<{
  name?: Maybe<Scalars["String"]>;
}>;

export type SearchStudentQuery = { __typename?: "query_root" } & {
  student: Array<
    { __typename?: "student" } & Pick<Student, "id" | "name" | "birthday">
  >;
};

export const GetLessonById = gql`
  query GetLessonById($id: uuid!) {
    lesson_by_pk(id: $id) {
      id
      name
      duration
      plan
      start_time
      student_attendances(order_by: { student: { name: asc } }) {
        id
        state
        student {
          id
          name
          birthday
        }
      }
    }
  }
`;
export const SetLessonName = gql`
  mutation SetLessonName($id: uuid!, $name: String!) {
    update_lesson_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
    }
  }
`;
export const SetLessonDate = gql`
  mutation SetLessonDate($id: uuid!, $date: timestamptz!) {
    update_lesson_by_pk(pk_columns: { id: $id }, _set: { start_time: $date }) {
      id
      start_time
    }
  }
`;
export const SetLessonDuration = gql`
  mutation SetLessonDuration($id: uuid!, $duration: interval!) {
    update_lesson_by_pk(
      pk_columns: { id: $id }
      _set: { duration: $duration }
    ) {
      id
      duration
    }
  }
`;
export const GetLessonsSmall = gql`
  query GetLessonsSmall {
    lesson(order_by: { start_time: desc }) {
      id
      name
      duration
      start_time
    }
  }
`;
export const AddLesson = gql`
  mutation AddLesson(
    $name: String!
    $start_time: timestamptz!
    $duration: interval!
  ) {
    insert_lesson_one(
      object: { name: $name, start_time: $start_time, duration: $duration }
    ) {
      id
    }
  }
`;
export const GetLessonTemplateById = gql`
  query GetLessonTemplateById($id: uuid!) {
    lesson_template_by_pk(id: $id) {
      id
      name
      duration
      start_time
      day
      template_students {
        id
        student {
          id
          name
        }
      }
    }
  }
`;
export const UpdateLessonTemplateName = gql`
  mutation UpdateLessonTemplateName($id: uuid!, $name: String!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name }
    ) {
      name
      id
    }
  }
`;
export const UpdateLessonTemplateDay = gql`
  mutation UpdateLessonTemplateDay($id: uuid!, $day: Int!) {
    update_lesson_template_by_pk(pk_columns: { id: $id }, _set: { day: $day }) {
      name
      id
    }
  }
`;
export const UpdateLessonTemplateTime = gql`
  mutation UpdateLessonTemplateTime($id: uuid!, $time: time!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { start_time: $time }
    ) {
      name
      id
    }
  }
`;
export const UpdateLessonTemplateDuration = gql`
  mutation UpdateLessonTemplateDuration($id: uuid!, $duration: interval!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { duration: $duration }
    ) {
      name
      id
    }
  }
`;
export const AddLessonTemplateStudent = gql`
  mutation AddLessonTemplateStudent($template_id: uuid!, $student_id: uuid!) {
    insert_lesson_template_student_one(
      object: { lesson_template_id: $template_id, student_id: $student_id }
    ) {
      id
      lesson_template_id
      student_id
    }
  }
`;
export const RemoveLessonTemplateStudent = gql`
  mutation RemoveLessonTemplateStudent($id: uuid!) {
    delete_lesson_template_student_by_pk(id: $id) {
      id
      student_id
      lesson_template_id
    }
  }
`;
export const GetLessonTemplates = gql`
  query GetLessonTemplates {
    lesson_template {
      id
      duration
      day
      name
      start_time
    }
  }
`;
export const AddLessonTemplate = gql`
  mutation AddLessonTemplate(
    $name: String!
    $time: time!
    $duration: interval!
    $day: Int!
  ) {
    insert_lesson_template_one(
      object: { name: $name, start_time: $time, duration: $duration, day: $day }
    ) {
      id
    }
  }
`;
export const LessonsToday = gql`
  query LessonsToday($start: timestamptz!, $end: timestamptz!) {
    lesson(
      where: { start_time: { _gte: $start, _lte: $end } }
      order_by: { start_time: asc }
    ) {
      id
      name
      start_time
    }
  }
`;
export const AllLessonsInWeek = gql`
  query AllLessonsInWeek($weekStart: timestamptz!, $weekEnd: timestamptz!) {
    lesson_template(
      where: {
        _not: { lessons: { start_time: { _gte: $weekStart, _lte: $weekEnd } } }
      }
    ) {
      id
      day
      duration
      name
      time: start_time
      template_students(order_by: { student: { name: asc } }) {
        id
        student {
          id
          name
        }
      }
    }
    lesson(where: { start_time: { _gte: $weekStart, _lte: $weekEnd } }) {
      id
      name
      start_time
      duration
      template_id
    }
  }
`;
export const CreateLesson = gql`
  mutation CreateLesson(
    $template_id: uuid!
    $start_time: timestamptz!
    $name: String!
    $duration: interval!
    $student_attendances: student_attendance_arr_rel_insert_input!
  ) {
    insert_lesson_one(
      object: {
        duration: $duration
        name: $name
        start_time: $start_time
        template_id: $template_id
        student_attendances: $student_attendances
      }
    ) {
      id
    }
  }
`;
export const GetStudents = gql`
  query GetStudents {
    student(order_by: { name: asc }) {
      id
      name
      birthday
    }
  }
`;
export const GetStudentById = gql`
  query GetStudentById($id: uuid!) {
    student_by_pk(id: $id) {
      id
      name
      birthday
      student_attendances(
        order_by: { lesson: { start_time: desc } }
        limit: 365
      ) {
        id
        lesson {
          name
          start_time
          id
        }
        state
      }
      student_attendances_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
export const SetStudentName = gql`
  mutation SetStudentName($id: uuid!, $name: String!) {
    update_student_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
    }
  }
`;
export const SetStudentBirthday = gql`
  mutation SetStudentBirthday($id: uuid!, $birthday: date!) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: { birthday: $birthday }
    ) {
      id
      birthday
    }
  }
`;
export const AddStudent = gql`
  mutation AddStudent($birthday: date, $name: String!) {
    insert_student_one(object: { birthday: $birthday, name: $name }) {
      id
      name
      birthday
    }
  }
`;
export const SetStudentAttendance = gql`
  mutation SetStudentAttendance($id: uuid!, $state: attendance_state_enum!) {
    update_student_attendance_by_pk(
      pk_columns: { id: $id }
      _set: { state: $state }
    ) {
      id
      state
      student_id
    }
  }
`;
export const AddStudentAttendance = gql`
  mutation AddStudentAttendance(
    $state: attendance_state_enum!
    $lesson_id: uuid!
    $student_id: uuid!
  ) {
    insert_student_attendance_one(
      object: { lesson_id: $lesson_id, student_id: $student_id, state: $state }
    ) {
      id
      lesson_id
      state
      student_id
    }
  }
`;
export const DeleteStudentAttendance = gql`
  mutation DeleteStudentAttendance($id: uuid!) {
    delete_student_attendance_by_pk(id: $id) {
      id
    }
  }
`;
export const SearchStudent = gql`
  query SearchStudent($name: String = "") {
    student(
      where: { name: { _ilike: $name } }
      limit: 5
      order_by: { name: asc }
    ) {
      id
      name
      birthday
    }
  }
`;
import { IntrospectionQuery } from "graphql";
export default ({
  __schema: {
    queryType: {
      name: "query_root",
    },
    mutationType: {
      name: "mutation_root",
    },
    subscriptionType: {
      name: "subscription_root",
    },
    types: [
      {
        kind: "OBJECT",
        name: "attendance_state",
        fields: [
          {
            name: "description",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "state",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "attendance_state_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "attendance_state_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "attendance_state",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "attendance_state_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "attendance_state_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "attendance_state_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "attendance_state_max_fields",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "state",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "attendance_state_min_fields",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "state",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "attendance_state_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "attendance_state",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson",
        fields: [
          {
            name: "duration",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lesson_template",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "organisation",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "organisation",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "plan",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "start_time",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "student_attendances",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendances_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_attendance_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "template_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "lesson_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "lesson_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "lesson_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_max_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "plan",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "start_time",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "template_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_min_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "plan",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "start_time",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "template_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template",
        fields: [
          {
            name: "day",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "duration",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lessons",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lessons_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "start_time",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "template_students",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template_student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "template_students_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template_student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "lesson_template_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_aggregate_fields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "lesson_template_avg_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "lesson_template_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "lesson_template_min_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "lesson_template_stddev_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev_pop",
            type: {
              kind: "OBJECT",
              name: "lesson_template_stddev_pop_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev_samp",
            type: {
              kind: "OBJECT",
              name: "lesson_template_stddev_samp_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "lesson_template_sum_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "var_pop",
            type: {
              kind: "OBJECT",
              name: "lesson_template_var_pop_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "var_samp",
            type: {
              kind: "OBJECT",
              name: "lesson_template_var_samp_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "lesson_template_variance_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_avg_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_max_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_min_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_stddev_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_stddev_pop_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_stddev_samp_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lesson_template",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "lesson_template_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template_student",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student_max_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lesson_template_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student_min_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lesson_template_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_student_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template_student",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_sum_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_var_pop_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_var_samp_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "lesson_template_variance_fields",
        fields: [
          {
            name: "day",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "mutation_root",
        fields: [
          {
            name: "delete_attendance_state",
            type: {
              kind: "OBJECT",
              name: "attendance_state_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_attendance_state_by_pk",
            type: {
              kind: "OBJECT",
              name: "attendance_state",
              ofType: null,
            },
            args: [
              {
                name: "state",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson",
            type: {
              kind: "OBJECT",
              name: "lesson_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson_template",
            type: {
              kind: "OBJECT",
              name: "lesson_template_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson_template_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson_template_student",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_lesson_template_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_organisation",
            type: {
              kind: "OBJECT",
              name: "organisation_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_organisation_by_pk",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_student",
            type: {
              kind: "OBJECT",
              name: "student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_student_attendance",
            type: {
              kind: "OBJECT",
              name: "student_attendance_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_student_attendance_by_pk",
            type: {
              kind: "OBJECT",
              name: "student_attendance",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_url_token",
            type: {
              kind: "OBJECT",
              name: "url_token_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_url_token_by_pk",
            type: {
              kind: "OBJECT",
              name: "url_token",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_user",
            type: {
              kind: "OBJECT",
              name: "user_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_user_account",
            type: {
              kind: "OBJECT",
              name: "user_account_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_user_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "user_account",
              ofType: null,
            },
            args: [
              {
                name: "user_token",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "delete_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "user",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "insert_attendance_state",
            type: {
              kind: "OBJECT",
              name: "attendance_state_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_attendance_state_one",
            type: {
              kind: "OBJECT",
              name: "attendance_state",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson",
            type: {
              kind: "OBJECT",
              name: "lesson_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson_one",
            type: {
              kind: "OBJECT",
              name: "lesson",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson_template",
            type: {
              kind: "OBJECT",
              name: "lesson_template_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson_template_one",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson_template_student",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_lesson_template_student_one",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_organisation",
            type: {
              kind: "OBJECT",
              name: "organisation_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_organisation_one",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_student",
            type: {
              kind: "OBJECT",
              name: "student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_student_attendance",
            type: {
              kind: "OBJECT",
              name: "student_attendance_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_student_attendance_one",
            type: {
              kind: "OBJECT",
              name: "student_attendance",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_student_one",
            type: {
              kind: "OBJECT",
              name: "student",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_url_token",
            type: {
              kind: "OBJECT",
              name: "url_token_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_url_token_one",
            type: {
              kind: "OBJECT",
              name: "url_token",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_user",
            type: {
              kind: "OBJECT",
              name: "user_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_user_account",
            type: {
              kind: "OBJECT",
              name: "user_account_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_user_account_one",
            type: {
              kind: "OBJECT",
              name: "user_account",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insert_user_one",
            type: {
              kind: "OBJECT",
              name: "user",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "update_attendance_state",
            type: {
              kind: "OBJECT",
              name: "attendance_state_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_attendance_state_by_pk",
            type: {
              kind: "OBJECT",
              name: "attendance_state",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson",
            type: {
              kind: "OBJECT",
              name: "lesson_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson_template",
            type: {
              kind: "OBJECT",
              name: "lesson_template_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson_template_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson_template_student",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_lesson_template_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_organisation",
            type: {
              kind: "OBJECT",
              name: "organisation_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_organisation_by_pk",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_student",
            type: {
              kind: "OBJECT",
              name: "student_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_student_attendance",
            type: {
              kind: "OBJECT",
              name: "student_attendance_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_student_attendance_by_pk",
            type: {
              kind: "OBJECT",
              name: "student_attendance",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "student",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_url_token",
            type: {
              kind: "OBJECT",
              name: "url_token_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_append",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_at_path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_elem",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_key",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_prepend",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_url_token_by_pk",
            type: {
              kind: "OBJECT",
              name: "url_token",
              ofType: null,
            },
            args: [
              {
                name: "_append",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_at_path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_elem",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_key",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_prepend",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_user",
            type: {
              kind: "OBJECT",
              name: "user_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_user_account",
            type: {
              kind: "OBJECT",
              name: "user_account_mutation_response",
              ofType: null,
            },
            args: [
              {
                name: "_append",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_at_path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_elem",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_key",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_prepend",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_user_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "user_account",
              ofType: null,
            },
            args: [
              {
                name: "_append",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_at_path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_elem",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_delete_key",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_prepend",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "update_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "user",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lessons",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lessons_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "students",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "students_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "users",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "users_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "organisation_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "organisation",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "organisation_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "organisation_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation_max_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation_min_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "organisation_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "organisation",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "query_root",
        fields: [
          {
            name: "attendance_state",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "attendance_state",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "attendance_state_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "attendance_state_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "attendance_state_by_pk",
            type: {
              kind: "OBJECT",
              name: "attendance_state",
              ofType: null,
            },
            args: [
              {
                name: "state",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson_template",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson_template_student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template_student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_student_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template_student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "organisation",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "organisation",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "organisation_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "organisation_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "organisation_by_pk",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_attendance_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance_by_pk",
            type: {
              kind: "OBJECT",
              name: "student_attendance",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "student_by_pk",
            type: {
              kind: "OBJECT",
              name: "student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "url_token",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "url_token",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "url_token_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "url_token_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "url_token_by_pk",
            type: {
              kind: "OBJECT",
              name: "url_token",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user_account",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user_account_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "user_account",
              ofType: null,
            },
            args: [
              {
                name: "user_token",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "user_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_by_pk",
            type: {
              kind: "OBJECT",
              name: "user",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student",
        fields: [
          {
            name: "birthday",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "organisation",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "organisation",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "student_attendances",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendances_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_attendance_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "student_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "student_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "student_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance",
        fields: [
          {
            name: "attendance_state",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "attendance_state",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lesson",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "lesson_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "state",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "student_attendance_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "student_attendance_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "student_attendance_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance_max_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lesson_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance_min_fields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lesson_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "student_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_attendance_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_max_fields",
        fields: [
          {
            name: "birthday",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_min_fields",
        fields: [
          {
            name: "birthday",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "student_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "subscription_root",
        fields: [
          {
            name: "attendance_state",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "attendance_state",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "attendance_state_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "attendance_state_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "attendance_state_by_pk",
            type: {
              kind: "OBJECT",
              name: "attendance_state",
              ofType: null,
            },
            args: [
              {
                name: "state",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson_template",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "lesson_template_student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "lesson_template_student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_student_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "lesson_template_student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "lesson_template_student_by_pk",
            type: {
              kind: "OBJECT",
              name: "lesson_template_student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "organisation",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "organisation",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "organisation_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "organisation_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "organisation_by_pk",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "student",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "student_attendance",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "student_attendance_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "student_attendance_by_pk",
            type: {
              kind: "OBJECT",
              name: "student_attendance",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "student_by_pk",
            type: {
              kind: "OBJECT",
              name: "student",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "url_token",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "url_token",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "url_token_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "url_token_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "url_token_by_pk",
            type: {
              kind: "OBJECT",
              name: "url_token",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user_account",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user_account_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "user_account",
              ofType: null,
            },
            args: [
              {
                name: "user_token",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "user_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user_aggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_by_pk",
            type: {
              kind: "OBJECT",
              name: "user",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token",
        fields: [
          {
            name: "data",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "expire",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "url_token_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "url_token",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "url_token_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "url_token_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token_max_fields",
        fields: [
          {
            name: "expire",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token_min_fields",
        fields: [
          {
            name: "expire",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "url_token_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "url_token",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user",
        fields: [
          {
            name: "email",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "last_online",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "manager",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "organisation",
            type: {
              kind: "OBJECT",
              name: "organisation",
              ofType: null,
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account",
        fields: [
          {
            name: "data",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "path",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "user",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "user_id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "user_token",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "user_account_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user_account",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "user_account_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "user_account_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account_max_fields",
        fields: [
          {
            name: "user_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "user_token",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account_min_fields",
        fields: [
          {
            name: "user_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "user_token",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_account_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user_account",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "user_aggregate_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "user_max_fields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "user_min_fields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_max_fields",
        fields: [
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "last_online",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_min_fields",
        fields: [
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "last_online",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "organisation_id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "user_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "user",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "SCALAR",
        name: "Any",
      },
    ],
    directives: [],
  },
} as unknown) as IntrospectionQuery;

export const GetLessonByIdDocument = gql`
  query GetLessonById($id: uuid!) {
    lesson_by_pk(id: $id) {
      id
      name
      duration
      plan
      start_time
      student_attendances(order_by: { student: { name: asc } }) {
        id
        state
        student {
          id
          name
          birthday
        }
      }
    }
  }
`;

export function useGetLessonByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetLessonByIdQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetLessonByIdQuery>({
    query: GetLessonByIdDocument,
    ...options,
  });
}
export const SetLessonNameDocument = gql`
  mutation SetLessonName($id: uuid!, $name: String!) {
    update_lesson_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
    }
  }
`;

export function useSetLessonNameMutation() {
  return Urql.useMutation<
    SetLessonNameMutation,
    SetLessonNameMutationVariables
  >(SetLessonNameDocument);
}
export const SetLessonDateDocument = gql`
  mutation SetLessonDate($id: uuid!, $date: timestamptz!) {
    update_lesson_by_pk(pk_columns: { id: $id }, _set: { start_time: $date }) {
      id
      start_time
    }
  }
`;

export function useSetLessonDateMutation() {
  return Urql.useMutation<
    SetLessonDateMutation,
    SetLessonDateMutationVariables
  >(SetLessonDateDocument);
}
export const SetLessonDurationDocument = gql`
  mutation SetLessonDuration($id: uuid!, $duration: interval!) {
    update_lesson_by_pk(
      pk_columns: { id: $id }
      _set: { duration: $duration }
    ) {
      id
      duration
    }
  }
`;

export function useSetLessonDurationMutation() {
  return Urql.useMutation<
    SetLessonDurationMutation,
    SetLessonDurationMutationVariables
  >(SetLessonDurationDocument);
}
export const GetLessonsSmallDocument = gql`
  query GetLessonsSmall {
    lesson(order_by: { start_time: desc }) {
      id
      name
      duration
      start_time
    }
  }
`;

export function useGetLessonsSmallQuery(
  options: Omit<Urql.UseQueryArgs<GetLessonsSmallQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetLessonsSmallQuery>({
    query: GetLessonsSmallDocument,
    ...options,
  });
}
export const AddLessonDocument = gql`
  mutation AddLesson(
    $name: String!
    $start_time: timestamptz!
    $duration: interval!
  ) {
    insert_lesson_one(
      object: { name: $name, start_time: $start_time, duration: $duration }
    ) {
      id
    }
  }
`;

export function useAddLessonMutation() {
  return Urql.useMutation<AddLessonMutation, AddLessonMutationVariables>(
    AddLessonDocument
  );
}
export const GetLessonTemplateByIdDocument = gql`
  query GetLessonTemplateById($id: uuid!) {
    lesson_template_by_pk(id: $id) {
      id
      name
      duration
      start_time
      day
      template_students {
        id
        student {
          id
          name
        }
      }
    }
  }
`;

export function useGetLessonTemplateByIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetLessonTemplateByIdQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<GetLessonTemplateByIdQuery>({
    query: GetLessonTemplateByIdDocument,
    ...options,
  });
}
export const UpdateLessonTemplateNameDocument = gql`
  mutation UpdateLessonTemplateName($id: uuid!, $name: String!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name }
    ) {
      name
      id
    }
  }
`;

export function useUpdateLessonTemplateNameMutation() {
  return Urql.useMutation<
    UpdateLessonTemplateNameMutation,
    UpdateLessonTemplateNameMutationVariables
  >(UpdateLessonTemplateNameDocument);
}
export const UpdateLessonTemplateDayDocument = gql`
  mutation UpdateLessonTemplateDay($id: uuid!, $day: Int!) {
    update_lesson_template_by_pk(pk_columns: { id: $id }, _set: { day: $day }) {
      name
      id
    }
  }
`;

export function useUpdateLessonTemplateDayMutation() {
  return Urql.useMutation<
    UpdateLessonTemplateDayMutation,
    UpdateLessonTemplateDayMutationVariables
  >(UpdateLessonTemplateDayDocument);
}
export const UpdateLessonTemplateTimeDocument = gql`
  mutation UpdateLessonTemplateTime($id: uuid!, $time: time!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { start_time: $time }
    ) {
      name
      id
    }
  }
`;

export function useUpdateLessonTemplateTimeMutation() {
  return Urql.useMutation<
    UpdateLessonTemplateTimeMutation,
    UpdateLessonTemplateTimeMutationVariables
  >(UpdateLessonTemplateTimeDocument);
}
export const UpdateLessonTemplateDurationDocument = gql`
  mutation UpdateLessonTemplateDuration($id: uuid!, $duration: interval!) {
    update_lesson_template_by_pk(
      pk_columns: { id: $id }
      _set: { duration: $duration }
    ) {
      name
      id
    }
  }
`;

export function useUpdateLessonTemplateDurationMutation() {
  return Urql.useMutation<
    UpdateLessonTemplateDurationMutation,
    UpdateLessonTemplateDurationMutationVariables
  >(UpdateLessonTemplateDurationDocument);
}
export const AddLessonTemplateStudentDocument = gql`
  mutation AddLessonTemplateStudent($template_id: uuid!, $student_id: uuid!) {
    insert_lesson_template_student_one(
      object: { lesson_template_id: $template_id, student_id: $student_id }
    ) {
      id
      lesson_template_id
      student_id
    }
  }
`;

export function useAddLessonTemplateStudentMutation() {
  return Urql.useMutation<
    AddLessonTemplateStudentMutation,
    AddLessonTemplateStudentMutationVariables
  >(AddLessonTemplateStudentDocument);
}
export const RemoveLessonTemplateStudentDocument = gql`
  mutation RemoveLessonTemplateStudent($id: uuid!) {
    delete_lesson_template_student_by_pk(id: $id) {
      id
      student_id
      lesson_template_id
    }
  }
`;

export function useRemoveLessonTemplateStudentMutation() {
  return Urql.useMutation<
    RemoveLessonTemplateStudentMutation,
    RemoveLessonTemplateStudentMutationVariables
  >(RemoveLessonTemplateStudentDocument);
}
export const GetLessonTemplatesDocument = gql`
  query GetLessonTemplates {
    lesson_template {
      id
      duration
      day
      name
      start_time
    }
  }
`;

export function useGetLessonTemplatesQuery(
  options: Omit<
    Urql.UseQueryArgs<GetLessonTemplatesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<GetLessonTemplatesQuery>({
    query: GetLessonTemplatesDocument,
    ...options,
  });
}
export const AddLessonTemplateDocument = gql`
  mutation AddLessonTemplate(
    $name: String!
    $time: time!
    $duration: interval!
    $day: Int!
  ) {
    insert_lesson_template_one(
      object: { name: $name, start_time: $time, duration: $duration, day: $day }
    ) {
      id
    }
  }
`;

export function useAddLessonTemplateMutation() {
  return Urql.useMutation<
    AddLessonTemplateMutation,
    AddLessonTemplateMutationVariables
  >(AddLessonTemplateDocument);
}
export const LessonsTodayDocument = gql`
  query LessonsToday($start: timestamptz!, $end: timestamptz!) {
    lesson(
      where: { start_time: { _gte: $start, _lte: $end } }
      order_by: { start_time: asc }
    ) {
      id
      name
      start_time
    }
  }
`;

export function useLessonsTodayQuery(
  options: Omit<Urql.UseQueryArgs<LessonsTodayQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<LessonsTodayQuery>({
    query: LessonsTodayDocument,
    ...options,
  });
}
export const AllLessonsInWeekDocument = gql`
  query AllLessonsInWeek($weekStart: timestamptz!, $weekEnd: timestamptz!) {
    lesson_template(
      where: {
        _not: { lessons: { start_time: { _gte: $weekStart, _lte: $weekEnd } } }
      }
    ) {
      id
      day
      duration
      name
      time: start_time
      template_students(order_by: { student: { name: asc } }) {
        id
        student {
          id
          name
        }
      }
    }
    lesson(where: { start_time: { _gte: $weekStart, _lte: $weekEnd } }) {
      id
      name
      start_time
      duration
      template_id
    }
  }
`;

export function useAllLessonsInWeekQuery(
  options: Omit<Urql.UseQueryArgs<AllLessonsInWeekQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<AllLessonsInWeekQuery>({
    query: AllLessonsInWeekDocument,
    ...options,
  });
}
export const CreateLessonDocument = gql`
  mutation CreateLesson(
    $template_id: uuid!
    $start_time: timestamptz!
    $name: String!
    $duration: interval!
    $student_attendances: student_attendance_arr_rel_insert_input!
  ) {
    insert_lesson_one(
      object: {
        duration: $duration
        name: $name
        start_time: $start_time
        template_id: $template_id
        student_attendances: $student_attendances
      }
    ) {
      id
    }
  }
`;

export function useCreateLessonMutation() {
  return Urql.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(
    CreateLessonDocument
  );
}
export const GetStudentsDocument = gql`
  query GetStudents {
    student(order_by: { name: asc }) {
      id
      name
      birthday
    }
  }
`;

export function useGetStudentsQuery(
  options: Omit<Urql.UseQueryArgs<GetStudentsQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetStudentsQuery>({
    query: GetStudentsDocument,
    ...options,
  });
}
export const GetStudentByIdDocument = gql`
  query GetStudentById($id: uuid!) {
    student_by_pk(id: $id) {
      id
      name
      birthday
      student_attendances(
        order_by: { lesson: { start_time: desc } }
        limit: 365
      ) {
        id
        lesson {
          name
          start_time
          id
        }
        state
      }
      student_attendances_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export function useGetStudentByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetStudentByIdQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetStudentByIdQuery>({
    query: GetStudentByIdDocument,
    ...options,
  });
}
export const SetStudentNameDocument = gql`
  mutation SetStudentName($id: uuid!, $name: String!) {
    update_student_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
    }
  }
`;

export function useSetStudentNameMutation() {
  return Urql.useMutation<
    SetStudentNameMutation,
    SetStudentNameMutationVariables
  >(SetStudentNameDocument);
}
export const SetStudentBirthdayDocument = gql`
  mutation SetStudentBirthday($id: uuid!, $birthday: date!) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: { birthday: $birthday }
    ) {
      id
      birthday
    }
  }
`;

export function useSetStudentBirthdayMutation() {
  return Urql.useMutation<
    SetStudentBirthdayMutation,
    SetStudentBirthdayMutationVariables
  >(SetStudentBirthdayDocument);
}
export const AddStudentDocument = gql`
  mutation AddStudent($birthday: date, $name: String!) {
    insert_student_one(object: { birthday: $birthday, name: $name }) {
      id
      name
      birthday
    }
  }
`;

export function useAddStudentMutation() {
  return Urql.useMutation<AddStudentMutation, AddStudentMutationVariables>(
    AddStudentDocument
  );
}
export const SetStudentAttendanceDocument = gql`
  mutation SetStudentAttendance($id: uuid!, $state: attendance_state_enum!) {
    update_student_attendance_by_pk(
      pk_columns: { id: $id }
      _set: { state: $state }
    ) {
      id
      state
      student_id
    }
  }
`;

export function useSetStudentAttendanceMutation() {
  return Urql.useMutation<
    SetStudentAttendanceMutation,
    SetStudentAttendanceMutationVariables
  >(SetStudentAttendanceDocument);
}
export const AddStudentAttendanceDocument = gql`
  mutation AddStudentAttendance(
    $state: attendance_state_enum!
    $lesson_id: uuid!
    $student_id: uuid!
  ) {
    insert_student_attendance_one(
      object: { lesson_id: $lesson_id, student_id: $student_id, state: $state }
    ) {
      id
      lesson_id
      state
      student_id
    }
  }
`;

export function useAddStudentAttendanceMutation() {
  return Urql.useMutation<
    AddStudentAttendanceMutation,
    AddStudentAttendanceMutationVariables
  >(AddStudentAttendanceDocument);
}
export const DeleteStudentAttendanceDocument = gql`
  mutation DeleteStudentAttendance($id: uuid!) {
    delete_student_attendance_by_pk(id: $id) {
      id
    }
  }
`;

export function useDeleteStudentAttendanceMutation() {
  return Urql.useMutation<
    DeleteStudentAttendanceMutation,
    DeleteStudentAttendanceMutationVariables
  >(DeleteStudentAttendanceDocument);
}
export const SearchStudentDocument = gql`
  query SearchStudent($name: String = "") {
    student(
      where: { name: { _ilike: $name } }
      limit: 5
      order_by: { name: asc }
    ) {
      id
      name
      birthday
    }
  }
`;

export function useSearchStudentQuery(
  options: Omit<Urql.UseQueryArgs<SearchStudentQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<SearchStudentQuery>({
    query: SearchStudentDocument,
    ...options,
  });
}
