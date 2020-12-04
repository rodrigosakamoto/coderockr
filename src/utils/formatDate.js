import { format, parseISO } from 'date-fns';

export function formatDateWithDate(date) {
  return format(parseISO(date), 'MMM d, y');
}
