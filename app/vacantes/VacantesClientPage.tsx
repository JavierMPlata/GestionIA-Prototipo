"use client"

import { ArrowUpDown, MoreHorizontal, Plus } from "lucide-react"
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
const vacantes = [
  {
    id: 1,
    vacante: "Desarrollador Frontend Senior",
    departamento: "Tecnología",
    ubicacion: "Madrid (Híbrido)",
    fechaPublicacion: "15/04/2025",
    fechaCierre: "15/05/2025",
    estado: "Abierta",
    candidatos: 24,
    salario: "45.000€ - 55.000€",
  },
  {
    id: 2,
    vacante: "Analista de Datos",
    departamento: "Business Intelligence",
    ubicacion: "Barcelona (Remoto)",
    fechaPublicacion: "10/04/2025",
    fechaCierre: "10/05/2025",
    estado: "Abierta",
    candidatos: 18,
    salario: "40.000€ - 50.000€",
  },
  {
    id: 3,
    vacante: "Diseñador UX/UI",
    departamento: "Producto",
    ubicacion: "Madrid (Presencial)",
    fechaPublicacion: "05/04/2025",
    fechaCierre: "05/05/2025",
    estado: "Cerrada",
    candidatos: 32,
    salario: "38.000€ - 48.000€",
  },
  {
    id: 4,
    vacante: "Desarrollador Backend",
    departamento: "Tecnología",
    ubicacion: "Valencia (Híbrido)",
    fechaPublicacion: "01/04/2025",
    fechaCierre: "01/05/2025",
    estado: "Abierta",
    candidatos: 15,
    salario: "42.000€ - 52.000€",
  },
  {
    id: 5,
    vacante: "Gerente de Producto",
    departamento: "Producto",
    ubicacion: "Madrid (Presencial)",
    fechaPublicacion: "25/03/2025",
    fechaCierre: "25/04/2025",
    estado: "Cerrada",
    candidatos: 28,
    salario: "55.000€ - 65.000€",
  },
  {
    id: 6,
    vacante: "DevOps Engineer",
    departamento: "Infraestructura",
    ubicacion: "Barcelona (Remoto)",
    fechaPublicacion: "20/03/2025",
    fechaCierre: "20/04/2025",
    estado: "Abierta",
    candidatos: 12,
    salario: "48.000€ - 58.000€",
  },
  {
    id: 7,
    vacante: "Data Scientist",
    departamento: "Business Intelligence",
    ubicacion: "Madrid (Híbrido)",
    fechaPublicacion: "15/03/2025",
    fechaCierre: "15/04/2025",
    estado: "Abierta",
    candidatos: 20,
    salario: "50.000€ - 60.000€",
  },
  {
    id: 8,
    vacante: "Product Owner",
    departamento: "Producto",
    ubicacion: "Sevilla (Presencial)",
    fechaPublicacion: "10/03/2025",
    fechaCierre: "10/04/2025",
    estado: "Cerrada",
    candidatos: 22,
    salario: "45.000€ - 55.000€",
  },
]

// Estadísticas para el panel superior
const estadisticas = [
  {
    titulo: "Total vacantes",
    valor: "24",
    cambio: "+3 respecto al mes anterior",
  },
  {
    titulo: "Vacantes abiertas",
    valor: "18",
    cambio: "5 nuevas esta semana",
  },
  {
    titulo: "Candidatos promedio",
    valor: "21",
    cambio: "+15% respecto al mes anterior",
  },
  {
    titulo: "Tiempo promedio de cierre",
    valor: "32 días",
    cambio: "-4 días respecto al mes anterior",
  },
]

// Definición de columnas para la tabla
const columns = [
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
    accessorKey: "ubicacion",
    header: "Ubicación",
  },
  {
    accessorKey: "fechaPublicacion",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Publicación
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div>
          <div>{row.original.fechaPublicacion}</div>
          <div className="text-sm text-gray-500">Cierre: {row.original.fechaCierre}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "candidatos",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Candidatos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.candidatos}</div>
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const estado = row.original.estado
      return (
        <Badge
          variant={estado === "Abierta" ? "default" : "outline"}
          className={`${estado === "Abierta" ? "bg-gray-900 hover:bg-gray-800" : "text-gray-800 border-gray-300"}`}
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
            <DropdownMenuItem>Editar vacante</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver candidatos</DropdownMenuItem>
            <DropdownMenuItem>Publicar en portales</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {row.original.estado === "Abierta" ? "Cerrar vacante" : "Reabrir vacante"}
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function VacantesClientPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Vacantes</h1>
          <p className="text-gray-500">Gestiona las vacantes disponibles en la empresa</p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Nueva vacante
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

      <DataTable columns={columns} data={vacantes} searchPlaceholder="Buscar vacantes..." searchColumn="vacante" />
    </div>
  )
}
