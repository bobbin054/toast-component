import React from "react";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setToasts([]);
      }
    });
    return () => window.removeEventListener("keydown");
  }, []);

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
