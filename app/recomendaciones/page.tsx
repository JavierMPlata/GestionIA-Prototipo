import type { Metadata } from "next"
import RecomendacionesClientPage from "./RecomendacionesClientPage"

export const metadata: Metadata = {
  title: "IA: Recomendaciones | Sistema IA de Selección de Personal",
}

export default function RecomendacionesPage() {
  return <RecomendacionesClientPage />
}
