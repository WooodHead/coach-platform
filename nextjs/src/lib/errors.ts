import { OperationResult } from "@urql/core";
import { Notification } from "../hooks/notification-hook";

export function gqlErrorCheck(
  result: OperationResult<any, any>,
  addNotification: (n: Notification) => void
) {
  if (result?.error.networkError) {
    addNotification({ text: result.error.message, type: "warn", ttl: 20 });
  }
  if (result?.error.graphQLErrors) {
    addNotification({
      text: result.error.graphQLErrors.map((ge) => ge.message).join("\n"),
      type: "warn",
      ttl: 20,
    });
  }
}
