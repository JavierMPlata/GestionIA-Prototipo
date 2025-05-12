"use client"

import { ArrowUpDown, Brain, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/data-table"

// Datos de ejemplo más realistas
const recomendaciones = [
  {
    id: 1,
    vacante: "Desarrollador Frontend Senior",
    departamento: "Tecnología",
    candidato: "Ana García Martínez",
    email: "ana.garcia@ejemplo.com",
    match: 95,
    habilidades: ["React", "TypeScript", "UI/UX", "Testing"],
    razonamiento:
      "Experiencia sólida en React y TypeScript. Proyectos previos con interfaces de usuario complejas. Buena comprensión de principios de diseño.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    candidato: "Carlos Rodríguez López",
    email: "carlos.rodriguez@ejemplo.com",
    match: 87,
    habilidades: ["SQL", "Python", "Power BI", "Estadística"],
    razonamiento: "Experiencia en análisis de datos y visualización. Conocimientos sólidos de SQL y Python.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    vacante: "Diseñador UX/UI",
    departamento: "Producto",
    candidato: "Laura Sánchez Pérez",
    email: "laura.sanchez@ejemplo.com",
    match: 92,
    habilidades: ["Figma", "Adobe XD", "Investigación de usuarios", "Prototipado"],
    razonamiento:
      "Portafolio impresionante con proyectos de diseño centrado en el usuario. Experiencia en investigación.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    vacante: "Desarrollador Backend",
    departamento: "Tecnología",
    candidato: "Miguel Fernández Ruiz",
    email: "miguel.fernandez@ejemplo.com",
    match: 89,
    habilidades: ["Node.js", "Express", "MongoDB", "API REST"],
    razonamiento:
      "Experiencia en desarrollo de APIs y arquitecturas escalables. Conocimientos de bases de datos NoSQL.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    vacante: "Gerente de Producto",
    departamento: "Producto",
    candidato: "Sofía Martín Díaz",
    email: "sofia.martin@ejemplo.com",
    match: 91,
    habilidades: ["Gestión de producto", "Agile", "Análisis de mercado", "Roadmapping"],
    razonamiento: "Experiencia liderando equipos de producto y lanzamientos exitosos. Enfoque orientado a datos.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    vacante: "DevOps Engineer",
    departamento: "Infraestructura",
    candidato: "Pablo Navarro Ortiz",
    email: "pablo.navarro@ejemplo.com",
    match: 93,
    habilidades: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    razonamiento: "Amplia experiencia en automatización y despliegue continuo. Conocimientos avanzados de cloud.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    vacante: "Data Scientist",
    departamento: "Business Intelligence",
    candidato: "Elena Torres Gómez",
    email: "elena.torres@ejemplo.com",
    match: 88,
    habilidades: ["Python", "Machine Learning", "R", "Visualización de datos"],
    razonamiento: "Experiencia en modelos predictivos y análisis estadístico. Proyectos de ML aplicados a negocio.",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    vacante: "Product Owner",
    departamento: "Producto",
    candidato: "Javier Moreno Sanz",
    email: "javier.moreno@ejemplo.com",
    match: 84,
    habilidades: ["Scrum", "Gestión de backlog", "Análisis de requisitos", "Stakeholder management"],
    razonamiento: "Experiencia como PO en entornos ágiles. Buena capacidad de comunicación y priorización.",
    foto: "/placeholder.svg?height=40&width=40",
  },
]

// Estadísticas para el panel superior
const estadisticas = [
  {
    titulo: "Match promedio",
    valor: "89.8%",
    cambio: "+2.3% respecto al mes anterior",
  },
  {
    titulo: "Recomendaciones",
    valor: "42",
    cambio: "12 nuevas esta semana",
  },
  {
    titulo: "Tasa de aceptación",
    valor: "78%",
    cambio: "+5% respecto al mes anterior",
  },
  {
    titulo: "Tiempo de contratación",
    valor: "18 días",
    cambio: "-3 días respecto al mes anterior",
  },
]

// Definición de columnas para la tabla
const columns = [
  {
    accessorKey: "candidato",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Candidato
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const recomendacion = row.original
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={recomendacion.foto || "/placeholder.svg"} alt={recomendacion.candidato} />
            <AvatarFallback className="bg-gray-200 text-gray-700">
              {recomendacion.candidato
                .split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{recomendacion.candidato}</div>
            <div className="text-sm text-gray-500">{recomendacion.email}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "vacante",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Vacante
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div>
          <div className="font-medium">{row.original.vacante}</div>
          <div className="text-sm text-gray-500">{row.original.departamento}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "habilidades",
    header: "Habilidades clave",
    cell: ({ row }) => {
      const habilidades = row.original.habilidades
      return (
        <div className="flex flex-wrap gap-1">
          {habilidades.slice(0, 3).map((habilidad) => (
            <Badge key={habilidad} variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
              {habilidad}
            </Badge>
          ))}
          {habilidades.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
              +{habilidades.length - 3}
            </Badge>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "match",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Match IA
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const match = row.original.match
      return (
        <div className="flex items-center gap-2">
          <div className="font-medium">{match}%</div>
          <div
            className="h-2 w-16 rounded-full bg-gray-200"
            style={{
              background: `linear-gradient(90deg, rgb(55, 65, 81) ${match}%, rgb(229, 231, 235) ${match}%)`,
            }}
          />
        </div>
      )
    },
  },
  {
    id: "acciones",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>Ver perfil completo</DropdownMenuItem>
            <DropdownMenuItem>Ver razonamiento IA</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Programar entrevista</DropdownMenuItem>
            <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Descartar recomendación</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function RecomendacionesClientPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">IA: Recomendaciones</h1>
          <p className="text-gray-500">Recomendaciones de candidatos generadas por IA</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {estadisticas.map((stat) => (
          <Card key={stat.titulo}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.valor}</div>
              <p className="text-xs text-gray-500">{stat.cambio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-gray-200 bg-gray-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-gray-700" />
            <CardTitle>Cómo funciona el sistema de recomendación</CardTitle>
          </div>
          <CardDescription>
            Nuestro algoritmo de IA analiza los perfiles de los candidatos y los requisitos de las vacantes para
            encontrar las mejores coincidencias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 font-medium text-gray-900">1. Análisis de CV</div>
              <p className="text-sm text-gray-500">
                El sistema extrae habilidades, experiencia y formación de los CVs de los candidatos.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 font-medium text-gray-900">2. Matching de requisitos</div>
              <p className="text-sm text-gray-500">
                Compara las habilidades y experiencia con los requisitos de cada vacante.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="mb-2 font-medium text-gray-900">3. Puntuación y ranking</div>
              <p className="text-sm text-gray-500">
                Asigna una puntuación de compatibilidad y ordena los candidatos para cada vacante.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <DataTable
        columns={columns}
        data={recomendaciones}
        searchPlaceholder="Buscar recomendaciones..."
        searchColumn="candidato"
      />
    </div>
  )
}
