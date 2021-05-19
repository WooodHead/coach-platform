import { format, setDay } from "date-fns";
import { FC } from "react";
import { groupBy, sortBy } from "lodash";

export type CalendarEvent = {
  id: string | number;
  day: number;
  time?: string;
  duration: string;
  name: string;
  type?: string;
};

export const Calendar: FC<{
  events: Array<CalendarEvent>;
  onClick?: (CalendarEvent) => void;
  typeMap?: Record<string, string>;
}> = ({ events, onClick, typeMap }) => {
  const days = [...new Set(events.map((e) => e.day))];
  const eventsGroup = groupBy(events, "day");
  days.sort();

  return (
    <div className="calendar">
      {days.map((d) => (
        <div key={d}>
          <h3>{format(setDay(new Date(), d), "eeee")}</h3>
          {sortBy(eventsGroup[d], "time").map((e) => (
            <a
              style={{ backgroundColor: typeMap?.[e.type] }}
              key={e.id}
              className="event"
              onClick={() => onClick?.(e)}
              href={`#${e.id}`}
            >
              {e.time.substr(0, e.time.length - 3)} {e.name}
            </a>
          ))}
        </div>
      ))}
      <style jsx>{`
        .calendar {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .event {
          margin: 0.3rem;
          padding: 0.6rem;
          background-color: #f2f2f2;
          border-radius: var(--input-radius);
          text-decoration: none;
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
};
