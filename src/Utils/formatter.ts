import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatRelativeDate(date: string | Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}