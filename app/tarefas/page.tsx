"use client"

import { useState } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Grip, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

interface Task {
  id: string
  text: string
  completed: boolean
  category: string
}

const ItemTypes = {
  TASK: "task",
}

function TaskItem({ task, index, moveTask, completeTask, deleteTask }: any) {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover(item: { id: string; index: number }) {
      if (item.index !== index) {
        moveTask(item.index, index)
        item.index = index
      }
    },
  })

  return (
    <div
      ref={(node) => preview(drop(node))}
      className={`mb-2 flex items-center rounded-lg border p-3 transition-all ${
        isDragging ? "opacity-50" : "opacity-100"
      } ${task.completed ? "bg-muted" : "bg-card"}`}
    >
      <div ref={drag} className="mr-2 cursor-move">
        <Grip className="h-4 w-4 text-muted-foreground" />
      </div>
      <Checkbox checked={task.completed} onCheckedChange={() => completeTask(task.id)} className="mr-2" />
      <span className={`flex-1 ${task.completed ? "text-muted-foreground line-through" : ""}`}>{task.text}</span>
      <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
        <Trash2 className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  )
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Comprar mantimentos", completed: false, category: "pessoal" },
    { id: "2", text: "Preparar apresentação", completed: false, category: "trabalho" },
    { id: "3", text: "Agendar consulta médica", completed: true, category: "saúde" },
    { id: "4", text: "Responder e-mails", completed: false, category: "trabalho" },
    { id: "5", text: "Fazer exercícios", completed: false, category: "saúde" },
  ])
  const [newTask, setNewTask] = useState("")
  const [activeCategory, setActiveCategory] = useState("todos")

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        category: activeCategory === "todos" ? "pessoal" : activeCategory,
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const completeTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const moveTask = (fromIndex: number, toIndex: number) => {
    const updatedTasks = [...tasks]
    const [movedTask] = updatedTasks.splice(fromIndex, 1)
    updatedTasks.splice(toIndex, 0, movedTask)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) => activeCategory === "todos" || task.category === activeCategory)

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Minhas Tarefas</h1>

      <div className="mb-6 flex items-center gap-2">
        <Input
          placeholder="Adicionar nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="flex-1"
        />
        <Button onClick={addTask} className="bg-rose-300 hover:bg-rose-400">
          <Plus className="mr-2 h-4 w-4" /> Adicionar
        </Button>
      </div>

      <Tabs defaultValue="todos" onValueChange={setActiveCategory}>
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="pessoal">Pessoal</TabsTrigger>
          <TabsTrigger value="trabalho">Trabalho</TabsTrigger>
          <TabsTrigger value="saúde">Saúde</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader>
            <CardTitle>{activeCategory === "todos" ? "Todas as Tarefas" : `Tarefas - ${activeCategory}`}</CardTitle>
          </CardHeader>
          <CardContent>
            <DndProvider backend={HTML5Backend}>
              <div>
                {filteredTasks.length === 0 ? (
                  <p className="text-center text-muted-foreground">Nenhuma tarefa encontrada</p>
                ) : (
                  filteredTasks.map((task, index) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      index={index}
                      moveTask={moveTask}
                      completeTask={completeTask}
                      deleteTask={deleteTask}
                    />
                  ))
                )}
              </div>
            </DndProvider>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
