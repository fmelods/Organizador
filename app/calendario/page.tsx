"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { ptBR } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Event {
  id: string
  title: string
  date: Date
  category: string
  time?: string
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>([
    { id: "1", title: "Reunião de equipe", date: new Date(2023, 4, 15), category: "trabalho", time: "14:00" },
    { id: "2", title: "Consulta médica", date: new Date(2023, 4, 18), category: "saúde", time: "10:30" },
    { id: "3", title: "Aniversário de Ana", date: new Date(2023, 4, 22), category: "pessoal" },
  ])
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: "",
    date: new Date(),
    category: "pessoal",
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setNewEvent({ ...newEvent, date })
  }

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: newEvent.date,
        category: newEvent.category || "pessoal",
        time: newEvent.time,
      }
      setEvents([...events, event])
      setNewEvent({ title: "", date: new Date(), category: "pessoal" })
      setIsDialogOpen(false)
    }
  }

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => isSameDay(event.date, date))
  }

  const getDayClass = (day: Date) => {
    let className = "h-10 w-10 rounded-full flex items-center justify-center"

    if (!isSameMonth(day, currentDate)) {
      className += " text-muted-foreground"
    } else if (isToday(day)) {
      className += " bg-rose-100 text-rose-600 font-bold"
    } else if (selectedDate && isSameDay(day, selectedDate)) {
      className += " bg-rose-300 text-white"
    } else {
      className += " hover:bg-muted"
    }

    return className
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Meu Calendário</h1>

      <Tabs defaultValue="month">
        <div className="mb-6 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="month">Mês</TabsTrigger>
            <TabsTrigger value="week">Semana</TabsTrigger>
            <TabsTrigger value="day">Dia</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-medium">{format(currentDate, "MMMM yyyy", { locale: ptBR })}</h2>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-rose-300 hover:bg-rose-400">
                <Plus className="mr-2 h-4 w-4" /> Novo Evento
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Evento</DialogTitle>
                <DialogDescription>Crie um novo evento no seu calendário.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={newEvent.title || ""}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Data</Label>
                  <div className="flex gap-2">
                    <Input
                      id="date"
                      type="date"
                      value={newEvent.date ? format(newEvent.date, "yyyy-MM-dd") : ""}
                      onChange={(e) => {
                        const date = e.target.value ? new Date(e.target.value) : new Date()
                        setNewEvent({ ...newEvent, date })
                      }}
                    />
                    <Input
                      id="time"
                      type="time"
                      placeholder="Hora"
                      value={newEvent.time || ""}
                      onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={newEvent.category || "pessoal"}
                    onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pessoal">Pessoal</SelectItem>
                      <SelectItem value="trabalho">Trabalho</SelectItem>
                      <SelectItem value="saúde">Saúde</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={addEvent} className="bg-rose-300 hover:bg-rose-400">
                  Salvar Evento
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="month" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-1 text-center">
                {weekdays.map((day) => (
                  <div key={day} className="font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {daysInMonth.map((day, i) => (
                  <div key={i} className="p-1">
                    <button className={getDayClass(day)} onClick={() => handleDateClick(day)}>
                      {format(day, "d")}
                    </button>
                    <div className="mt-1">
                      {getEventsForDate(day)
                        .slice(0, 2)
                        .map((event, index) => (
                          <div
                            key={event.id}
                            className={`mb-1 truncate rounded px-1 py-0.5 text-xs ${
                              event.category === "trabalho"
                                ? "bg-blue-100 text-blue-800"
                                : event.category === "saúde"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-rose-100 text-rose-800"
                            }`}
                            title={event.title}
                          >
                            {event.time && `${event.time} `}
                            {event.title}
                          </div>
                        ))}
                      {getEventsForDate(day).length > 2 && (
                        <div className="text-xs text-muted-foreground">+{getEventsForDate(day).length - 2} mais</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week">
          <Card>
            <CardHeader>
              <CardTitle>Visualização Semanal</CardTitle>
              <CardDescription>Esta visualização será implementada em breve.</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="day">
          <Card>
            <CardHeader>
              <CardTitle>Visualização Diária</CardTitle>
              <CardDescription>Esta visualização será implementada em breve.</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedDate && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Eventos para {format(selectedDate, "dd 'de' MMMM, yyyy", { locale: ptBR })}</CardTitle>
          </CardHeader>
          <CardContent>
            {getEventsForDate(selectedDate).length === 0 ? (
              <p className="text-muted-foreground">Nenhum evento para este dia.</p>
            ) : (
              <div className="space-y-2">
                {getEventsForDate(selectedDate).map((event) => (
                  <div
                    key={event.id}
                    className={`rounded-lg p-3 ${
                      event.category === "trabalho"
                        ? "bg-blue-50"
                        : event.category === "saúde"
                          ? "bg-green-50"
                          : "bg-rose-50"
                    }`}
                  >
                    <div className="font-medium">{event.title}</div>
                    {event.time && <div className="text-sm text-muted-foreground">{event.time}</div>}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
