import React from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, isShown, setIsShown }) {
  if (!isShown) return null;
  const Icon = ICONS_BY_VARIANT[variant];
  console.log("Icon: ", Icon);
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24}></Icon>
      </div>
      <p className={styles.content}>
        {variant} - {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={() => setIsShown(false)} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
