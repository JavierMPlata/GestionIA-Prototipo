import type { Metadata } from "next"
import CandidatosClientPage from "./CandidatosClientPage"

export const metadata: Metadata = {
  title: "Candidatos | Sistema IA de Selección de Personal",
}

export default function CandidatosPage() {
  return <CandidatosClientPage />
}
