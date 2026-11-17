import { toast } from 'react-toastify';

export class ToastPopups {
  public static notifySuccess(
    message: string,
    theme: 'light' | 'dark' = 'light',
    autoClose = 5000,
  ) {
    return toast.success(message, { autoClose, theme, draggable: true });
  }

  public static notifyError(
    message: string,
    theme: 'light' | 'dark' = 'light',
    autoClose = 5000,
  ) {
    return toast.error(message, { autoClose, theme, draggable: true });
  }
}
