import { add, format, set } from "date-fns";
import { isDate } from "lodash";

export function getTimeFromString(time: string): Date {
  const [, hh, mm] = /(\d+):(\d+)/.exec(time);
  return set(new Date(), {
    hours: Number(hh),
    minutes: Number(mm),
    seconds: 0,
    milliseconds: 0,
  });
}

export function durationString(
  start: string | Date,
  duration: string
): [string, string, string] {
  if (!isDate(start)) {
    start = getTimeFromString(start);
  }
  const [, hh, mm] = /(\d+):(\d+)/.exec(duration);
  const end = add(start, {
    hours: Number(hh),
    minutes: Number(mm),
    seconds: 0,
  });

  const fs = format(start, "HH:mm");
  const fe = format(end, "HH:mm");
  return [`${fs} - ${fe}`, fs, fe];
}
