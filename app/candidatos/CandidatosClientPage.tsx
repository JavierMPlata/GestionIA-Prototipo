"use client"

import { ArrowUpDown, MoreHorizontal, Plus } from "lucide-react"
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
const candidatos = [
  {
    id: 1,
    nombre: "Ana García Martínez",
    email: "ana.garcia@ejemplo.com",
    telefono: "+34 612 345 678",
    vacante: "Desarrollador Frontend Senior",
    departamento: "Tecnología",
    puntajeIA: 92,
    estado: "Entrevista técnica",
    fechaAplicacion: "12/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez López",
    email: "carlos.rodriguez@ejemplo.com",
    telefono: "+34 623 456 789",
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    puntajeIA: 87,
    estado: "Evaluación técnica",
    fechaAplicacion: "10/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    nombre: "Laura Sánchez Pérez",
    email: "laura.sanchez@ejemplo.com",
    telefono: "+34 634 567 890",
    vacante: "Diseñador UX/UI",
    departamento: "Producto",
    puntajeIA: 95,
    estado: "Entrevista final",
    fechaAplicacion: "08/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    nombre: "Miguel Fernández Ruiz",
    email: "miguel.fernandez@ejemplo.com",
    telefono: "+34 645 678 901",
    vacante: "Desarrollador Backend",
    departamento: "Tecnología",
    puntajeIA: 89,
    estado: "Entrevista inicial",
    fechaAplicacion: "05/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    nombre: "Sofía Martín Díaz",
    email: "sofia.martin@ejemplo.com",
    telefono: "+34 656 789 012",
    vacante: "Gerente de Producto",
    departamento: "Producto",
    puntajeIA: 91,
    estado: "Oferta enviada",
    fechaAplicacion: "03/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    nombre: "Javier Moreno Sanz",
    email: "javier.moreno@ejemplo.com",
    telefono: "+34 667 890 123",
    vacante: "Desarrollador Frontend",
    departamento: "Tecnología",
    puntajeIA: 84,
    estado: "Evaluación técnica",
    fechaAplicacion: "01/04/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    nombre: "Elena Torres Gómez",
    email: "elena.torres@ejemplo.com",
    telefono: "+34 678 901 234",
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    puntajeIA: 88,
    estado: "Entrevista técnica",
    fechaAplicacion: "30/03/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    nombre: "Pablo Navarro Ortiz",
    email: "pablo.navarro@ejemplo.com",
    telefono: "+34 689 012 345",
    vacante: "Desarrollador Backend Senior",
    departamento: "Tecnología",
    puntajeIA: 93,
    estado: "Entrevista inicial",
    fechaAplicacion: "28/03/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    nombre: "Lucía Jiménez Vega",
    email: "lucia.jimenez@ejemplo.com",
    telefono: "+34 690 123 456",
    vacante: "Diseñador UX/UI",
    departamento: "Producto",
    puntajeIA: 90,
    estado: "Evaluación técnica",
    fechaAplicacion: "25/03/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    nombre: "Daniel Serrano Blanco",
    email: "daniel.serrano@ejemplo.com",
    telefono: "+34 601 234 567",
    vacante: "Gerente de Producto",
    departamento: "Producto",
    puntajeIA: 86,
    estado: "Entrevista final",
    fechaAplicacion: "22/03/2025",
    foto: "/placeholder.svg?height=40&width=40",
  },
]

// Estadísticas para el panel superior
const estadisticas = [
  {
    titulo: "Total candidatos",
    valor: "128",
    cambio: "+12% respecto al mes anterior",
  },
  {
    titulo: "Candidatos en proceso",
    valor: "42",
    cambio: "8 nuevos esta semana",
  },
  {
    titulo: "Puntaje IA promedio",
    valor: "87.5",
    cambio: "+2.3 puntos respecto al mes anterior",
  },
  {
    titulo: "Tiempo promedio de proceso",
    valor: "18 días",
    cambio: "-2 días respecto al mes anterior",
  },
]

// Definición de columnas para la tabla
const columns = [
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Candidato
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const candidato = row.original
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={candidato.foto || "/placeholder.svg"} alt={candidato.nombre} />
            <AvatarFallback className="bg-gray-200 text-gray-700">
              {candidato.nombre
                .split(" ")
                .slice(0, 2)
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{candidato.nombre}</div>
            <div className="text-sm text-gray-500">{candidato.email}</div>
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
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const estado = row.original.estado
      let badgeVariant = "outline"

      if (estado === "Oferta enviada" || estado === "Entrevista final") {
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
    accessorKey: "puntajeIA",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Puntaje IA
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const puntaje = row.original.puntajeIA
      return (
        <div className="flex items-center gap-2">
          <div className="font-medium">{puntaje}</div>
          <div
            className="h-2 w-12 rounded-full bg-gray-200"
            style={{
              background: `linear-gradient(90deg, rgb(55, 65, 81) ${puntaje}%, rgb(229, 231, 235) ${puntaje}%)`,
            }}
          />
        </div>
      )
    },
  },
  {
    accessorKey: "fechaAplicacion",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
            <DropdownMenuItem>Editar candidato</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Programar entrevista</DropdownMenuItem>
            <DropdownMenuItem>Enviar evaluación</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function CandidatosClientPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Candidatos</h1>
          <p className="text-gray-500">Gestiona los candidatos para las vacantes disponibles</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Nuevo candidato
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

      <DataTable columns={columns} data={candidatos} searchPlaceholder="Buscar candidatos..." searchColumn="nombre" />
    </div>
  )
}
