import { format, formatDistanceToNow, getTime } from 'date-fns';
import { es } from 'date-fns/locale';
// ----------------------------------------------------------------------

export function fDate(date: Date | string | number, newFormat: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : ''; // Removed extra semicolon
}

export function fDateTime(
  date: Date | string | number,
  newFormat: string
): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : ''; // Removed extra semicolon
}

export function fTimestamp(date: Date | string | number): number {
  return date ? getTime(new Date(date)) : 0; // Removed extra semicolon
}

export function fToNow(date: Date | string | number): string {
  return date
    ? formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: es, // Corrected key-spacing issue
    }) // Ensured correct indentation
    : ''; // Removed extra semicolon
}
