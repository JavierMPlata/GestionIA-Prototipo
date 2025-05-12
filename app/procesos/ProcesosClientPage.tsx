"use client"

import { ArrowUpDown, Calendar, MoreHorizontal, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
const procesos = [
  {
    id: 1,
    vacante: "Desarrollador Frontend Senior",
    departamento: "Tecnología",
    candidato: "Ana García Martínez",
    email: "ana.garcia@ejemplo.com",
    fechaEntrevista: "20/04/2025",
    hora: "10:30",
    estado: "Programada",
    entrevistador: "Carlos Martín (CTO)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    candidato: "Carlos Rodríguez López",
    email: "carlos.rodriguez@ejemplo.com",
    fechaEntrevista: "22/04/2025",
    hora: "12:00",
    estado: "Programada",
    entrevistador: "Laura Vega (Data Lead)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    vacante: "Desarrollador Backend",
    departamento: "Tecnología",
    candidato: "Miguel Fernández Ruiz",
    email: "miguel.fernandez@ejemplo.com",
    fechaEntrevista: "21/04/2025",
    hora: "16:30",
    estado: "Programada",
    entrevistador: "Carlos Martín (CTO)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    candidato: "Elena Torres Gómez",
    email: "elena.torres@ejemplo.com",
    fechaEntrevista: "25/04/2025",
    hora: "11:00",
    estado: "Pendiente",
    entrevistador: "Laura Vega (Data Lead)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    vacante: "Desarrollador Frontend",
    departamento: "Tecnología",
    candidato: "Javier Moreno Sanz",
    email: "javier.moreno@ejemplo.com",
    fechaEntrevista: "23/04/2025",
    hora: "15:00",
    estado: "Programada",
    entrevistador: "Carlos Martín (CTO)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    vacante: "Diseñador UX/UI",
    departamento: "Producto",
    candidato: "Laura Sánchez Pérez",
    email: "laura.sanchez@ejemplo.com",
    fechaEntrevista: "19/04/2025",
    hora: "10:00",
    estado: "Completada",
    entrevistador: "Marta Ruiz (Head of Design)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    vacante: "Gerente de Producto",
    departamento: "Producto",
    candidato: "Sofía Martín Díaz",
    email: "sofia.martin@ejemplo.com",
    fechaEntrevista: "18/04/2025",
    hora: "12:30",
    estado: "Completada",
    entrevistador: "Javier López (CPO)",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    vacante: "DevOps Engineer",
    departamento: "Infraestructura",
    candidato: "Pablo Navarro Ortiz",
    email: "pablo.navarro@ejemplo.com",
    fechaEntrevista: "26/04/2025",
    hora: "14:00",
    estado: "Pendiente",
    entrevistador: "Carlos Martín (CTO)",
    foto: "/placeholder.svg?height=40&width=40",
  },
]

// Estadísticas para el panel superior
const estadisticas = [
  {
    titulo: "Total procesos",
    valor: "42",
    cambio: "+8 respecto a la semana anterior",
  },
  {
    titulo: "Entrevistas programadas",
    valor: "18",
    cambio: "5 para esta semana",
  },
  {
    titulo: "Entrevistas completadas",
    valor: "24",
    cambio: "8 en la última semana",
  },
  {
    titulo: "Tasa de conversión",
    valor: "68%",
    cambio: "+5% respecto al mes anterior",
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
      const proceso = row.original
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={proceso.foto || "/placeholder.svg"} alt={proceso.candidato} />
            <AvatarFallback className="bg-gray-200 text-gray-700">
              {proceso.candidato
                .split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{proceso.candidato}</div>
            <div className="text-sm text-gray-500">{proceso.email}</div>
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
    accessorKey: "fechaEntrevista",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <div>
            <div>{row.original.fechaEntrevista}</div>
            <div className="text-sm text-gray-500">{row.original.hora}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "entrevistador",
    header: "Entrevistador",
    cell: ({ row }) => {
      return <div className="text-sm">{row.original.entrevistador}</div>
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const estado = row.original.estado
      let badgeVariant = "outline"

      if (estado === "Completada") {
        badgeVariant = "default"
      }

      return (
        <Badge
          variant={badgeVariant}
          className={`${
            badgeVariant === "default" ? "bg-gray-900 hover:bg-gray-800" : "text-gray-800 border-gray-300"
          }`}
        >
          {estado}
        </Badge>
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
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem>Editar entrevista</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Enviar recordatorio</DropdownMenuItem>
            <DropdownMenuItem>Añadir evaluación</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Cancelar entrevista</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function ProcesosClientPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Procesos en curso</h1>
          <p className="text-gray-500">Seguimiento de los procesos de selección activos</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Programar entrevista
        </Button>
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

      <DataTable columns={columns} data={procesos} searchPlaceholder="Buscar procesos..." searchColumn="candidato" />
    </div>
  )
}
