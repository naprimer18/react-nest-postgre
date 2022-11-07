import React from "react";

export const handleEnterDown = (
  e: React.KeyboardEvent,
  handleCallback: (() => void) | (() => void)[]
) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    Array.isArray(handleCallback)
      ? handleCallback.map(c => c())
      : handleCallback();
  }
};
