import type { Metadata } from "next"
import VacantesClientPage from "./VacantesClientPage"

export const metadata: Metadata = {
  title: "Vacantes | Sistema IA de Selección de Personal",
}

export default function VacantesPage() {
  return <VacantesClientPage />
}
