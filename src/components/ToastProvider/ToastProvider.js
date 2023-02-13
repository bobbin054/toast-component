import React from "react";
import { useKeyDown } from "../../hooks/UseKeyDown";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const clearToasts = React.useCallback(() => setToasts([]), []);
  const keys = React.useMemo(() => ["Escape"], []);
  useKeyDown(keys, clearToasts);

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const addToast = (variant, message) => {
    setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
  };

  return <ToastContext.Provider value={{ toasts, dismissToast, addToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
