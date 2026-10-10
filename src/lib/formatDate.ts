// Pinned to Melbourne so the day shown doesn't depend on the build machine's timezone
export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-AU", { dateStyle: "long", timeZone: "Australia/Melbourne" });
