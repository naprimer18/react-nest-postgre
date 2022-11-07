export const classes = (...args: any[]) => {
  const nextClasses: any[] = [];

  args.forEach(arg => {
    if (!arg) {
      return;
    }
    if (typeof arg === "object") {
      Object.entries(arg || {}).forEach(
        ([key, value]) => !!value && nextClasses.push(key)
      );
    }
    if (typeof arg === "string") {
      nextClasses.push(arg);
    }
  });
  return nextClasses.join(" ");
};
