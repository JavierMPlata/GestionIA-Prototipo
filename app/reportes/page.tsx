import type { Metadata } from "next"
import ReportesPageClient from "./ReportesPageClient"

export const metadata: Metadata = {
  title: "Reportes | Sistema IA de Selección de Personal",
}

export default function ReportesPage() {
  return <ReportesPageClient />
}
