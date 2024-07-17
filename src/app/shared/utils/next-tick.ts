export const nextTick = (cb: (...args: any[]) => any) => {
  setTimeout(() => {
    cb();
  }, 0);
};
