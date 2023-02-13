import React from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { dismissToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24}></Icon>
      </div>
      <p className={styles.content}>
          {variant} - {children}
        <VisuallyHidden>
         {variant} - {children}
        </VisuallyHidden>
      </p>
      <button className={styles.closeButton}
      aria-label="Dismiss message"
      aria-live="off">
        <X
          size={24}
          onClick={() => {
            return dismissToast(id);
          }}
        />
      </button>
    </div>
  );
}

export default Toast;
