declare global {
  /** this formats a date value to human readable format */
  function formatDate(date: Date): string;

  interface Window {
    My_VAR: string;
  }
}
export {};
