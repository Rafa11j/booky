import { store } from "react-notifications-component";

interface INotification {
  title: string;
  message: string;
  type?: "warning" | "success" | "danger" | "info" | "default" | undefined;
}

export function addNotification({ title, message, type }: INotification) {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      showIcon: true,
    },
  });
}

export function useNotification() {
  return {
    addNotification
  }
}