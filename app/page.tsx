import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import { Brain, Users, Briefcase, Clock, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const stats = [
    {
      title: "Candidatos activos",
      value: "128",
      description: "+12% respecto al mes anterior",
      icon: Users,
      href: "/candidatos",
    },
    {
      title: "Vacantes abiertas",
      value: "24",
      description: "5 nuevas esta semana",
      icon: Briefcase,
      href: "/vacantes",
    },
    {
      title: "Procesos en curso",
      value: "42",
      description: "8 finalizados este mes",
      icon: Clock,
      href: "/procesos",
    },
    {
      title: "Contrataciones",
      value: "18",
      description: "En los últimos 30 días",
      icon: BarChart3,
      href: "/reportes",
    },
  ]

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border">
        <div className="container py-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
              Sistema IA de Selección de Personal
            </h1>
            <p className="text-lg text-gray-500">
              Optimiza tu proceso de selección con inteligencia artificial y análisis avanzado
            </p>
          </div>
        </div>
      </header>

      <div className="container flex-1 py-10">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </CardContent>
                <div className="bg-gray-50 px-4 py-2">
                  <Link href={stat.href} className="text-xs font-medium text-gray-900 hover:underline">
                    Ver detalles →
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Recomendaciones de IA</h2>
                <p className="text-sm text-gray-500">Candidatos destacados para tus vacantes activas</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/recomendaciones">Ver todas</Link>
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  candidato: "Carlos Rodríguez López",
                  vacante: "Desarrollador Frontend Senior",
                  match: 95,
                  foto: "/placeholder.svg?height=40&width=40",
                },
                {
                  candidato: "Laura Sánchez Pérez",
                  vacante: "Diseñador UX/UI",
                  match: 92,
                  foto: "/placeholder.svg?height=40&width=40",
                },
                {
                  candidato: "Miguel Fernández Ruiz",
                  vacante: "Analista de Datos",
                  match: 89,
                  foto: "/placeholder.svg?height=40&width=40",
                },
              ].map((item) => (
                <div
                  key={item.candidato}
                  className="flex items-center justify-between rounded-md border border-border p-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={item.foto || "/placeholder.svg"} alt={item.candidato} />
                      <AvatarFallback className="bg-gray-200 text-gray-700">
                        {item.candidato
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.candidato}</h3>
                      <p className="text-sm text-gray-500">{item.vacante}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-gray-900">{item.match}%</div>
                    <div
                      className="h-2 w-16 rounded-full bg-gray-200"
                      style={{
                        background: `linear-gradient(90deg, rgb(55, 65, 81) ${item.match}%, rgb(229, 231, 235) ${item.match}%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Procesos recientes</CardTitle>
                <CardDescription>Últimas actualizaciones de procesos de selección</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    candidato: "Ana García Martínez",
                    vacante: "Desarrollador Frontend",
                    estado: "Entrevista técnica",
                    fecha: "Hoy, 10:30",
                  },
                  {
                    candidato: "Javier Moreno Sanz",
                    vacante: "Gerente de Producto",
                    estado: "Oferta enviada",
                    fecha: "Ayer, 15:45",
                  },
                  {
                    candidato: "Elena Torres Gómez",
                    vacante: "Analista de Datos",
                    estado: "Evaluación técnica",
                    fecha: "Hace 2 días",
                  },
                ].map((item) => (
                  <div
                    key={item.candidato}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{item.candidato}</h3>
                      <p className="text-sm text-gray-500">
                        {item.vacante} • {item.estado}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500">{item.fecha}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vacantes destacadas</CardTitle>
                <CardDescription>Posiciones con mayor demanda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    vacante: "Desarrollador Frontend Senior",
                    departamento: "Tecnología",
                    candidatos: 24,
                    dias: 5,
                  },
                  {
                    vacante: "Analista de Datos",
                    departamento: "Business Intelligence",
                    candidatos: 18,
                    dias: 7,
                  },
                  {
                    vacante: "Diseñador UX/UI",
                    departamento: "Producto",
                    candidatos: 15,
                    dias: 3,
                  },
                ].map((item) => (
                  <div
                    key={item.vacante}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{item.vacante}</h3>
                      <p className="text-sm text-gray-500">{item.departamento}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{item.candidatos} candidatos</div>
                      <p className="text-xs text-gray-500">Hace {item.dias} días</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
