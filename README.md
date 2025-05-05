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

O Organizador Pessoal é uma aplicação web que permite aos usuários gerenciar suas tarefas diárias, visualizar uma agenda, definir metas e criar lembretes. Com uma interface limpa e minimalista, o aplicativo foi projetado para ser intuitivo e fácil de usar, ajudando os usuários a manterem-se organizados de forma eficiente.

## ✨ Funcionalidades

### Gerenciamento de Tarefas
- Criar, editar e excluir tarefas
- Organizar tarefas por categorias (pessoal, trabalho, saúde)
- Marcar tarefas como concluídas
- Arrastar e soltar para reordenar tarefas (drag and drop)

### Calendário
- Visualização mensal, semanal e diária
- Adicionar eventos com data, hora e categoria
- Visualizar eventos por dia
- Preparado para integração com Google Calendar

### Metas e Lembretes
- Definir metas com descrição e prazo
- Acompanhar progresso das metas
- Criar lembretes com data e hora
- Marcar lembretes como concluídos

### Interface
- Design responsivo para desktop e dispositivos móveis
- Paleta de cores suaves (tons pastel)
- Ícones intuitivos
- Animações discretas
- Navegação simples e fluida

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn UI](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
- [Lucide React](https://lucide.dev/) - Ícones
- [React DnD](https://react-dnd.github.io/react-dnd/) - Drag and Drop para React
- [date-fns](https://date-fns.org/) - Biblioteca para manipulação de datas

## 📁 Estrutura do Projeto

```
organizador-pessoal/
├── app/
│   ├── calendario/
│   │   └── page.tsx       # Página de calendário
│   ├── metas/
│   │   └── page.tsx       # Página de metas e lembretes
│   ├── tarefas/
│   │   └── page.tsx       # Página de tarefas
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   └── theme-provider.tsx # Provedor de tema
├── lib/
│   └── utils.ts           # Funções utilitárias
├── public/                # Arquivos estáticos
├── .eslintrc.json         # Configuração ESLint
├── next.config.js         # Configuração Next.js
├── package.json           # Dependências
├── README.md              # Documentação
├── tailwind.config.ts     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript
```

## 🚀 Instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/organizador-pessoal.git
   cd organizador-pessoal
   Vou criar um README.md completo e organizado para o projeto de Organizador Pessoal:
   
```markdown project="Organizador Pessoal" file="README.md"
...

2. Instale as dependências:

npm install
# ou
yarn install
# ou
pnpm install


3. Execute o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev


4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o aplicativo.


## 📖 Uso

### Página Inicial

A página inicial apresenta uma visão geral do aplicativo com acesso rápido às principais funcionalidades: Tarefas, Calendário e Metas.

### Gerenciamento de Tarefas

1. Acesse a página de Tarefas clicando em "Tarefas" no menu de navegação
2. Adicione uma nova tarefa usando o campo de entrada no topo
3. Selecione uma categoria para filtrar suas tarefas
4. Arraste e solte para reordenar suas tarefas
5. Marque as tarefas como concluídas clicando na caixa de seleção
6. Exclua tarefas clicando no ícone de lixeira


### Calendário

1. Acesse a página de Calendário clicando em "Calendário" no menu de navegação
2. Navegue entre os meses usando as setas
3. Clique em um dia para ver os eventos daquele dia
4. Adicione um novo evento clicando no botão "Novo Evento"
5. Preencha os detalhes do evento (título, data, hora e categoria)


### Metas e Lembretes

1. Acesse a página de Metas clicando em "Metas" no menu de navegação
2. Alterne entre as abas "Metas" e "Lembretes"
3. Adicione uma nova meta clicando no botão "Nova Meta"
4. Atualize o progresso da meta usando os botões +10% e -10%
5. Adicione um novo lembrete clicando no botão "Novo Lembrete"
6. Marque os lembretes como concluídos quando finalizados


## 🎨 Personalização

### Cores

O projeto utiliza uma paleta de cores suaves, principalmente tons de rosa. Você pode personalizar as cores editando o arquivo `tailwind.config.ts`:

```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        rose: {
          // Personalize os tons de rosa aqui
        },
        // Adicione outras cores personalizadas
      }
    }
  }
}
```

### Componentes

Os componentes da interface são baseados na biblioteca shadcn/ui. Você pode personalizar os componentes editando os arquivos na pasta `components/ui/`.

### Ícones

O projeto utiliza ícones da biblioteca Lucide React. Você pode trocar os ícones importando diferentes ícones da biblioteca:

```typescript
import { Clock1Icon as Icon1, Link2Icon as Icon2 } from 'lucide-react'
```

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o projeto.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request


## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Felipe (https://github.com/fmelods)