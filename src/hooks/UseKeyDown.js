import React from "react";

export function useKeyDown(keyCodes, callback) {
  React.useEffect(() => {
    keyCodes.forEach((keyCode) => {
      if (typeof keyCode !== "string") {
        throw new Error("keyCodes must be an array of strings and keyCode: " + keyCode + " is not a string.");
      }

      window.addEventListener("keydown", (event) => {
        if (event.code === keyCode) {
          callback(event);
        }
      });
    });

    return () => window.removeEventListener("keydown");
  }, [keyCodes, callback]);
}
