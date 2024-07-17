export const calculateDuration = (start: number, end: number) => {
  const diff = (end - start) / 1000;
  const minutes = Math.floor(diff / 60);
  const seconds = (diff % 60);

  return {
    minutes,
    seconds,
  };
};
