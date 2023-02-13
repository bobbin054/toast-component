import React from "react";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const addToast = (variant, message) => {
    setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
  };

  const [toasts, setToasts] = React.useState([]);
  return <ToastContext.Provider value={{ toasts, dismissToast, addToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
