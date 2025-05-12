"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportesPageClient() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(2025, 3, 1), // 1 de abril de 2025
    to: new Date(2025, 3, 30), // 30 de abril de 2025
  })

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Reportes</h1>
          <p className="text-gray-500">Análisis y estadísticas del proceso de selección</p>
        </div>
        <Button variant="outline">Exportar datos</Button>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
        <div className="text-sm text-gray-500">Periodo de análisis</div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-auto justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "d 'de' MMMM", { locale: es })} -{" "}
                    {format(dateRange.to, "d 'de' MMMM, yyyy", { locale: es })}
                  </>
                ) : (
                  format(dateRange.from, "d 'de' MMMM, yyyy", { locale: es })
                )
              ) : (
                <span>Seleccionar rango de fechas</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(range) => setDateRange(range as any)}
              initialFocus
              locale={es}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Candidatos por vacante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <svg className="mr-1 h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+12% respecto al mes anterior</span>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-gray-500">Desarrollador Frontend</span>
                <span className="font-medium text-gray-900">32</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div className="h-1.5 rounded-full bg-gray-700" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="mt-2">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-gray-500">Analista de Datos</span>
                <span className="font-medium text-gray-900">18</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div className="h-1.5 rounded-full bg-gray-700" style={{ width: "45%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Calificaciones promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5</div>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <svg className="mr-1 h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+3.2 puntos respecto al mes anterior</span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-1">
              {[65, 72, 78, 85, 92].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="h-16 w-4 rounded-full bg-gray-200"
                    style={{
                      background: `linear-gradient(to top, rgb(55, 65, 81) ${value - 50}%, rgb(229, 231, 235) ${
                        value - 50
                      }%)`,
                    }}
                  />
                  <span className="mt-1 text-xs text-gray-500">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estado de procesos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 activos</div>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <span>5 finalizados este mes</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-900" />
                  <span className="text-xs text-gray-500">Entrevista inicial</span>
                </div>
                <span className="text-xs font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-700" />
                  <span className="text-xs text-gray-500">Evaluación técnica</span>
                </div>
                <span className="text-xs font-medium">6</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gray-500" />
                  <span className="text-xs text-gray-500">Entrevista final</span>
                </div>
                <span className="text-xs font-medium">4</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Contrataciones por mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <svg className="mr-1 h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+2 respecto al mes anterior</span>
            </div>
            <div className="mt-4 flex h-16 items-end gap-1">
              {[3, 5, 4, 6, 7].map((value, i) => (
                <div key={i} className="flex-1 rounded-t bg-gray-700" style={{ height: `${(value / 7) * 100}%` }} />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>Ene</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>May</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <Tabs defaultValue="candidatos" className="w-full">
          <div className="border-b border-gray-200 px-4">
            <TabsList className="h-12">
              <TabsTrigger
                value="candidatos"
                className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900"
              >
                Candidatos
              </TabsTrigger>
              <TabsTrigger
                value="vacantes"
                className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900"
              >
                Vacantes
              </TabsTrigger>
              <TabsTrigger
                value="entrevistas"
                className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900"
              >
                Entrevistas
              </TabsTrigger>
              <TabsTrigger
                value="contrataciones"
                className="data-[state=active]:border-b-2 data-[state=active]:border-gray-900"
              >
                Contrataciones
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="candidatos" className="p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Candidatos por departamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { departamento: "Tecnología", valor: 48, porcentaje: 40 },
                      { departamento: "Producto", valor: 32, porcentaje: 25 },
                      { departamento: "Business Intelligence", valor: 24, porcentaje: 20 },
                      { departamento: "Marketing", valor: 16, porcentaje: 15 },
                    ].map((item) => (
                      <div key={item.departamento}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.departamento}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Fuentes de candidatos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { fuente: "LinkedIn", valor: 52, porcentaje: 45 },
                      { fuente: "Referidos", valor: 28, porcentaje: 25 },
                      { fuente: "Web corporativa", valor: 18, porcentaje: 15 },
                      { fuente: "Portales de empleo", valor: 16, porcentaje: 15 },
                    ].map((item) => (
                      <div key={item.fuente}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.fuente}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="vacantes" className="p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Vacantes por estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { estado: "Abiertas", valor: 18, porcentaje: 75 },
                      { estado: "Cerradas", valor: 6, porcentaje: 25 },
                    ].map((item) => (
                      <div key={item.estado}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.estado}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Tiempo promedio para cubrir vacantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { departamento: "Tecnología", valor: "28 días", porcentaje: 70 },
                      { departamento: "Producto", valor: "32 días", porcentaje: 80 },
                      { departamento: "Business Intelligence", valor: "25 días", porcentaje: 62 },
                      { departamento: "Marketing", valor: "22 días", porcentaje: 55 },
                    ].map((item) => (
                      <div key={item.departamento}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.departamento}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="entrevistas" className="p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Entrevistas por etapa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { etapa: "Entrevista inicial", valor: 32, porcentaje: 40 },
                      { etapa: "Evaluación técnica", valor: 24, porcentaje: 30 },
                      { etapa: "Entrevista con equipo", valor: 16, porcentaje: 20 },
                      { etapa: "Entrevista final", valor: 8, porcentaje: 10 },
                    ].map((item) => (
                      <div key={item.etapa}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.etapa}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Tasa de conversión por etapa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { etapa: "Inicial → Técnica", valor: "75%", porcentaje: 75 },
                      { etapa: "Técnica → Equipo", valor: "67%", porcentaje: 67 },
                      { etapa: "Equipo → Final", valor: "50%", porcentaje: 50 },
                      { etapa: "Final → Oferta", valor: "85%", porcentaje: 85 },
                    ].map((item) => (
                      <div key={item.etapa}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.etapa}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="contrataciones" className="p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Contrataciones por departamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { departamento: "Tecnología", valor: 12, porcentaje: 50 },
                      { departamento: "Producto", valor: 6, porcentaje: 25 },
                      { departamento: "Business Intelligence", valor: 4, porcentaje: 17 },
                      { departamento: "Marketing", valor: 2, porcentaje: 8 },
                    ].map((item) => (
                      <div key={item.departamento}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.departamento}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Aceptación de ofertas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { estado: "Aceptadas", valor: 18, porcentaje: 75 },
                      { estado: "Rechazadas", valor: 4, porcentaje: 17 },
                      { estado: "Pendientes", valor: 2, porcentaje: 8 },
                    ].map((item) => (
                      <div key={item.estado}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.estado}</span>
                          <span className="text-sm font-medium">{item.valor}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-2 rounded-full bg-gray-700" style={{ width: `${item.porcentaje}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
