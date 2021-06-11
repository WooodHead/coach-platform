import { createContext, FC, useContext, useState } from "react";

type Notification = {
  text: string;
  type: "info" | "warn" | "error";
  ttl?: number;
};

type NotificationFull = Notification & {
  ts: number;
};

type NotificationMods = {
  notifications: Array<NotificationFull>;
  setNotifications: (nots: Array<NotificationFull>) => void;
};

export const NotificationContext = createContext<NotificationMods>({
  notifications: [],
  setNotifications: () => void 0,
});
NotificationContext.displayName = "NotificationContext";

export const NotificationContextProvider: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<Array<NotificationFull>>(
    []
  );
  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export function useNotification(): [
  (n: Notification) => void,
  Array<NotificationFull>,
  (n: NotificationFull) => void
] {
  const { notifications, setNotifications } = useContext(NotificationContext);

  const removeNotification = (n: NotificationFull) => {
    setNotifications(notifications.filter((fn) => fn.ts !== n.ts));
  };

  const addNotification = (n: Notification) => {
    const ts = new Date().getTime();
    const newNotification = { ...n, ts };
    setNotifications([...notifications, newNotification]);

    if (n.ttl) {
      setTimeout(() => removeNotification(newNotification), n.ttl * 1000);
    }
  };

  return [addNotification, notifications, removeNotification];
}
