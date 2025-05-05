# 📝 Organizador Pessoal

Um aplicativo web minimalista e responsivo para organização pessoal, desenvolvido com Next.js e Tailwind CSS.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Personalização](#personalização)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 👀 Visão Geral

O **Organizador Pessoal** é uma aplicação web que permite aos usuários gerenciar tarefas diárias, visualizar uma agenda, definir metas e criar lembretes. Com uma interface limpa e minimalista, o aplicativo foi projetado para ser intuitivo e fácil de usar, ajudando os usuários a manterem-se organizados de forma eficiente.

## ✨ Funcionalidades

### Gerenciamento de Tarefas

- Criar, editar e excluir tarefas  
- Organizar tarefas por categorias (pessoal, trabalho, saúde)  
- Marcar tarefas como concluídas  
- Reordenar tarefas com recurso de arrastar e soltar (drag and drop)

### Calendário

- Visualização mensal, semanal e diária  
- Adicionar eventos com data, hora e categoria  
- Visualizar eventos por dia  
- Preparado para integração com Google Calendar

### Metas e Lembretes

- Definir metas com descrição e prazo  
- Acompanhar o progresso das metas  
- Criar lembretes com data e hora  
- Marcar lembretes como concluídos

### Interface

- Design responsivo para desktop e dispositivos móveis  
- Paleta de cores suaves (tons pastel)  
- Ícones intuitivos  
- Animações discretas  
- Navegação simples e fluida

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) — Framework React com App Router  
- [React 18](https://reactjs.org/) — Biblioteca JavaScript para interfaces  
- [TypeScript](https://www.typescriptlang.org/) — Superset tipado de JavaScript  
- [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitário  
- [Shadcn UI](https://ui.shadcn.com/) — Componentes de UI reutilizáveis  
- [Lucide React](https://lucide.dev/) — Ícones  
- [React DnD](https://react-dnd.github.io/react-dnd/) — Drag and Drop para React  
- [date-fns](https://date-fns.org/) — Biblioteca para manipulação de datas

## 📁 Estrutura do Projeto

```
organizador-pessoal/
├── app/
│   ├── calendario/
│   │   └── page.tsx           # Página de calendário
│   ├── metas/
│   │   └── page.tsx           # Página de metas e lembretes
│   ├── tarefas/
│   │   └── page.tsx           # Página de tarefas
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página inicial
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   └── theme-provider.tsx     # Provedor de tema
├── lib/
│   └── utils.ts               # Funções utilitárias
├── public/                    # Arquivos estáticos
├── .eslintrc.json             # Configuração ESLint
├── next.config.js             # Configuração Next.js
├── package.json               # Dependências
├── README.md                  # Documentação
├── tailwind.config.ts         # Configuração Tailwind
└── tsconfig.json              # Configuração TypeScript
```

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/organizador-pessoal.git
cd organizador-pessoal
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o aplicativo.

## 📖 Uso

### Página Inicial

Apresenta uma visão geral do aplicativo com acesso rápido às funcionalidades principais: Tarefas, Calendário e Metas.

### Gerenciamento de Tarefas

1. Acesse a aba "Tarefas" no menu de navegação  
2. Adicione uma nova tarefa usando o campo de entrada  
3. Filtre tarefas por categoria  
4. Reordene tarefas com drag and drop  
5. Marque tarefas como concluídas  
6. Exclua tarefas clicando no ícone de lixeira

### Calendário

1. Acesse a aba "Calendário" no menu de navegação  
2. Navegue entre os meses usando as setas  
3. Clique em um dia para ver os eventos correspondentes  
4. Adicione eventos clicando em "Novo Evento"  
5. Preencha os detalhes do evento

### Metas e Lembretes

1. Acesse a aba "Metas" no menu de navegação  
2. Alterne entre as abas "Metas" e "Lembretes"  
3. Adicione novas metas ou lembretes  
4. Atualize o progresso das metas com os botões +10% e -10%  
5. Marque lembretes como concluídos

## 🎨 Personalização

### Cores

Personalize as cores no arquivo `tailwind.config.ts`:

```ts
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        rose: {
          // Defina os tons personalizados de rosa aqui
        },
        // Outras cores personalizadas
      }
    }
  }
}
```

### Componentes

Os componentes estão em `components/ui/` e podem ser ajustados conforme o estilo desejado.

### Ícones

Ícones são importados da biblioteca Lucide React:

```ts
import { Clock1Icon as Icon1, Link2Icon as Icon2 } from 'lucide-react'
```

## 👥 Contribuição

Contribuições são bem-vindas! Para colaborar:

1. Faça um fork do projeto  
2. Crie uma branch (`git checkout -b feature/nova-feature`)  
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`)  
4. Faça push da branch (`git push origin feature/nova-feature`)  
5. Abra um Pull Request

---

Desenvolvido com ❤️ por [Felipe](https://github.com/fmelods)