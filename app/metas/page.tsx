"use client"

import { useState } from "react"
import { Check, Clock, Plus, Target, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Goal {
  id: string
  title: string
  description: string
  deadline?: string
  progress: number
  category: string
}

interface Reminder {
  id: string
  title: string
  date: string
  time: string
  category: string
  completed: boolean
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "1",
      title: "Ler 12 livros este ano",
      description: "Ler pelo menos um livro por mês para expandir conhecimentos",
      deadline: "2023-12-31",
      progress: 25,
      category: "pessoal",
    },
    {
      id: "2",
      title: "Aprender React Native",
      description: "Desenvolver habilidades em React Native para criar aplicativos móveis",
      deadline: "2023-08-30",
      progress: 40,
      category: "profissional",
    },
  ])

  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Reunião com cliente",
      date: "2023-05-20",
      time: "14:00",
      category: "trabalho",
      completed: false,
    },
    {
      id: "2",
      title: "Pagar conta de luz",
      date: "2023-05-25",
      time: "09:00",
      category: "pessoal",
      completed: false,
    },
  ])

  const [newGoal, setNewGoal] = useState<Partial<Goal>>({
    title: "",
    description: "",
    progress: 0,
    category: "pessoal",
  })

  const [newReminder, setNewReminder] = useState<Partial<Reminder>>({
    title: "",
    date: "",
    time: "",
    category: "pessoal",
    completed: false,
  })

  const [isGoalDialogOpen, setIsGoalDialogOpen] = useState(false)
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false)

  const addGoal = () => {
    if (newGoal.title) {
      const goal: Goal = {
        id: Date.now().toString(),
        title: newGoal.title,
        description: newGoal.description || "",
        deadline: newGoal.deadline,
        progress: newGoal.progress || 0,
        category: newGoal.category || "pessoal",
      }
      setGoals([...goals, goal])
      setNewGoal({ title: "", description: "", progress: 0, category: "pessoal" })
      setIsGoalDialogOpen(false)
    }
  }

  const addReminder = () => {
    if (newReminder.title && newReminder.date) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        title: newReminder.title,
        date: newReminder.date,
        time: newReminder.time || "00:00",
        category: newReminder.category || "pessoal",
        completed: false,
      }
      setReminders([...reminders, reminder])
      setNewReminder({ title: "", date: "", time: "", category: "pessoal", completed: false })
      setIsReminderDialogOpen(false)
    }
  }

  const updateGoalProgress = (id: string, progress: number) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, progress: Math.min(100, progress) } : goal)))
  }

  const toggleReminderCompleted = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder)),
    )
  }

  const deleteGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Metas e Lembretes</h1>

      <Tabs defaultValue="goals">
        <div className="mb-6 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="goals">Metas</TabsTrigger>
            <TabsTrigger value="reminders">Lembretes</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Dialog open={isGoalDialogOpen} onOpenChange={setIsGoalDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-rose-300 hover:bg-rose-400">
                  <Plus className="mr-2 h-4 w-4" /> Nova Meta
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar Meta</DialogTitle>
                  <DialogDescription>Crie uma nova meta para acompanhar seu progresso.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="goal-title">Título</Label>
                    <Input
                      id="goal-title"
                      value={newGoal.title || ""}
                      onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="goal-description">Descrição</Label>
                    <Textarea
                      id="goal-description"
                      value={newGoal.description || ""}
                      onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="goal-deadline">Data Limite</Label>
                    <Input
                      id="goal-deadline"
                      type="date"
                      value={newGoal.deadline || ""}
                      onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="goal-category">Categoria</Label>
                    <Select
                      value={newGoal.category || "pessoal"}
                      onValueChange={(value) => setNewGoal({ ...newGoal, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pessoal">Pessoal</SelectItem>
                        <SelectItem value="profissional">Profissional</SelectItem>
                        <SelectItem value="saúde">Saúde</SelectItem>
                        <SelectItem value="financeiro">Financeiro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={addGoal} className="bg-rose-300 hover:bg-rose-400">
                    Salvar Meta
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" /> Novo Lembrete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar Lembrete</DialogTitle>
                  <DialogDescription>Crie um novo lembrete para não esquecer tarefas importantes.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-title">Título</Label>
                    <Input
                      id="reminder-title"
                      value={newReminder.title || ""}
                      onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-date">Data</Label>
                      <Input
                        id="reminder-date"
                        type="date"
                        value={newReminder.date || ""}
                        onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-time">Hora</Label>
                      <Input
                        id="reminder-time"
                        type="time"
                        value={newReminder.time || ""}
                        onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-category">Categoria</Label>
                    <Select
                      value={newReminder.category || "pessoal"}
                      onValueChange={(value) => setNewReminder({ ...newReminder, category: value })}
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
                  <Button onClick={addReminder} className="bg-rose-300 hover:bg-rose-400">
                    Salvar Lembrete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <TabsContent value="goals" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <Card key={goal.id} className="overflow-hidden">
                <CardHeader
                  className={`${
                    goal.category === "profissional"
                      ? "bg-blue-50"
                      : goal.category === "saúde"
                        ? "bg-green-50"
                        : goal.category === "financeiro"
                          ? "bg-purple-50"
                          : "bg-rose-50"
                  }`}
                >
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {goal.title}
                  </CardTitle>
                  {goal.deadline && (
                    <CardDescription className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> Até {new Date(goal.deadline).toLocaleDateString("pt-BR")}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-sm text-muted-foreground">{goal.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progresso</span>
                      <span className="text-sm font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => updateGoalProgress(goal.id, goal.progress + 10)}>
                      <Plus className="mr-1 h-3 w-3" /> 10%
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateGoalProgress(goal.id, goal.progress - 10)}
                      disabled={goal.progress <= 0}
                    >
                      <Trash2 className="mr-1 h-3 w-3" /> 10%
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteGoal(goal.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {goals.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Target className="mb-2 h-12 w-12 text-muted-foreground" />
                <p className="mb-4 text-center text-muted-foreground">Você ainda não tem metas definidas.</p>
                <Button onClick={() => setIsGoalDialogOpen(true)} className="bg-rose-300 hover:bg-rose-400">
                  <Plus className="mr-2 h-4 w-4" /> Adicionar Meta
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="reminders" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reminders.map((reminder) => (
              <Card key={reminder.id} className={`overflow-hidden ${reminder.completed ? "opacity-60" : ""}`}>
                <CardHeader
                  className={`${
                    reminder.category === "trabalho"
                      ? "bg-blue-50"
                      : reminder.category === "saúde"
                        ? "bg-green-50"
                        : "bg-rose-50"
                  }`}
                >
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {reminder.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    {new Date(`${reminder.date}T${reminder.time}`).toLocaleDateString("pt-BR")} às {reminder.time}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
                  <Button
                    variant={reminder.completed ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleReminderCompleted(reminder.id)}
                    className={reminder.completed ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {reminder.completed ? (
                      <>
                        <Check className="mr-1 h-4 w-4" /> Concluído
                      </>
                    ) : (
                      "Marcar como concluído"
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteReminder(reminder.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {reminders.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Clock className="mb-2 h-12 w-12 text-muted-foreground" />
                <p className="mb-4 text-center text-muted-foreground">Você ainda não tem lembretes definidos.</p>
                <Button onClick={() => setIsReminderDialogOpen(true)} className="bg-rose-300 hover:bg-rose-400">
                  <Plus className="mr-2 h-4 w-4" /> Adicionar Lembrete
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
