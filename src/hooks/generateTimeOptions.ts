export function generateTimeOptions() {
  const times = [];
  for (let i = 0; i < 24; i++) {
    // Formats the hour for display
    const hour = i < 10 ? `0${i}` : i;
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  return times;
}
