import { format, formatDistanceToNow, getTime } from 'date-fns';
import { es } from 'date-fns/locale';

// ----------------------------------------------------------------------

export function fDate(date: Date | string | number, newFormat: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(
  date: Date | string | number,
  newFormat: string
): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Date | string | number): number {
  return date ? getTime(new Date(date)) : 0;
}

export function fToNow(date: Date | string | number): string {
  return date
    ? formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: es,
    })
    : '';
}
