import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, CheckCircle, ListTodo, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Organizador Pessoal",
  description: "Um site minimalista para organização pessoal",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <CheckCircle className="h-5 w-5 text-rose-300" />
            <span>Organizador Pessoal</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="/tarefas">
              <Button variant="ghost" size="sm">
                Tarefas
              </Button>
            </Link>
            <Link href="/calendario">
              <Button variant="ghost" size="sm">
                Calendário
              </Button>
            </Link>
            <Link href="/metas">
              <Button variant="ghost" size="sm">
                Metas
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Organize sua vida com simplicidade
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Gerencie suas tarefas, visualize sua agenda e defina metas em uma interface limpa e intuitiva.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tarefas">
                <Button size="lg" className="bg-rose-300 hover:bg-rose-400">
                  Começar agora
                </Button>
              </Link>
              <Link href="#recursos">
                <Button variant="outline" size="lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="recursos" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <ListTodo className="h-10 w-10 text-rose-300" />
                <CardTitle className="mt-4">Listas de Tarefas</CardTitle>
                <CardDescription>
                  Crie e gerencie suas tarefas com facilidade. Organize por categorias e prioridades.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tarefas">
                  <Button variant="ghost" className="w-full justify-start p-0 text-rose-500">
                    Ver tarefas
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CalendarDays className="h-10 w-10 text-rose-300" />
                <CardTitle className="mt-4">Calendário</CardTitle>
                <CardDescription>
                  Visualize sua agenda semanal e mensal. Integre com o Google Calendar para sincronizar seus eventos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calendario">
                  <Button variant="ghost" className="w-full justify-start p-0 text-rose-500">
                    Ver calendário
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Target className="h-10 w-10 text-rose-300" />
                <CardTitle className="mt-4">Metas e Lembretes</CardTitle>
                <CardDescription>
                  Defina metas e receba lembretes para manter o foco no que é importante para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/metas">
                  <Button variant="ghost" className="w-full justify-start p-0 text-rose-500">
                    Ver metas
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Organizador Pessoal. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/termos" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Termos
            </Link>
            <Link href="/privacidade" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
