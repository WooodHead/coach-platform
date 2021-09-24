import { format, setDay } from "date-fns";
import { FC } from "react";
import { groupBy, sortBy } from "lodash";

export type CalendarEvent = {
  id: string | number;
  day: number;
  start_time: string;
  name: string;
  type: string;
};

type Props<EventType extends CalendarEvent> = {
  events: Array<EventType>;
  onClick?: (EventType) => void;
  typeMap?: Record<string,string>;
}

export function  Calendar<EventType extends CalendarEvent>({ events, onClick, typeMap }: Props<EventType>)  {
  const days = [...new Set(events.map((e) => e.day))];
  const eventsGroup = groupBy(events, "day");
  days.sort();

  return (
    <div className="calendar">
      {days.map((d) => (
        <div key={d}>
          <h3>{format(setDay(new Date(), d), "eeee")}</h3>
          {sortBy(eventsGroup[d], "start_time").map((e) => (
            <a
              style={{ backgroundColor: typeMap?.[e.type] }}
              key={e.id}
              className="event"
              onClick={() => onClick?.(e)}
              href={`#${e.id}`}
            >
              {e.start_time.split(':').slice(0,2).join(':')} Uhr - {e.name}
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
          display: block;
        }
      `}</style>
    </div>
  );
};
