import type { Metadata } from "next"
import ProcesosClientPage from "./ProcesosClientPage"

export const metadata: Metadata = {
  title: "Procesos en curso | Sistema IA de Selección de Personal",
}

export default function ProcesosPage() {
  return <ProcesosClientPage />
}
