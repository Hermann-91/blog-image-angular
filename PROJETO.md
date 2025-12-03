# 📸 Blog de Imagens - Projeto Angular

Um projeto completo de blog de imagens desenvolvido com **Angular 20** com componentes modulares, gerenciamento de estado com RxJS e design responsivo.

## ✨ Funcionalidades

### 1. **Menu Expandível**
- Menu lateral que se expande/contrai
- Acesso rápido a todas as categorias
- Botão "Todas as Imagens" para resetar filtro
- Design com gradient moderno

### 2. **Cards de Imagens**
- Layout com imagem em destaque
- Badge de categoria
- Sistema de likes em tempo real
- Seção de comentários retrátil
- Campo para adicionar comentários
- Animações suaves

### 3. **Caixa de Pesquisa**
- Busca por título e categoria
- Autocompletar inteligente
- Botão limpar pesquisa
- Pesquisa em tempo real

### 4. **Postar Imagem Favorita**
- Modal para compartilhar nova imagem
- Campos: Título, URL da imagem, Categoria
- Prévia em tempo real da imagem
- Validação de formulário
- Adição imediata à galeria

### 5. **Sistema de Categorias**
- 6 categorias pré-definidas:
  - Natureza
  - Animais
  - Pessoas
  - Tecnologia
  - Alimentos
  - Viagens
- Filtro dinâmico por categoria
- Integração com menu e pesquisa

### 6. **Interatividade**
- Like em imagens (contador em tempo real)
- Comentários com autor e data
- Seção de comentários retrátil
- Todas as ações atualizadas em tempo real

## 🏗️ Arquitetura

```
src/app/
├── models/
│   └── image.model.ts          # Interfaces: Image, Comment, Category
├── services/
│   └── image.service.ts        # Gerenciamento de dados com RxJS
├── components/
│   ├── menu/                   # Menu expandível com categorias
│   ├── search-bar/             # Barra de pesquisa
│   ├── image-card/             # Card individual de imagem
│   └── post-image/             # Modal para postar imagem
├── app.ts                      # Componente raiz
├── app.html                    # Template principal
└── app.scss                    # Estilos da aplicação
```

## 🎨 Design e Styling

- **Cores Principais:**
  - Primária: `#667eea` (Violeta Azulado)
  - Secundária: `#764ba2` (Violeta)
  - Acento: `#f093fb` (Rosa)

- **Componentes:**
  - Botões com gradientes
  - Cards com sombra e hover effects
  - Animações suaves (fade, slide)
  - Responsivo para mobile/tablet/desktop

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Iniciar Servidor de Desenvolvimento
```bash
npm start
```
A aplicação será aberta em `http://localhost:4200/`

### Build para Produção
```bash
npm run build
```

## 📋 Componentes Detalhados

### MenuComponent
**Responsabilidades:**
- Exibir lista de categorias
- Expandir/recolher menu
- Emitir eventos de categoria selecionada

**Props:**
- `@Input() categories: Category[]`
- `@Input() isExpanded: boolean`
- `@Output() categorySelected: EventEmitter<string>`
- `@Output() toggleMenu: EventEmitter<void>`
- `@Output() showAllImages: EventEmitter<void>`

### ImageCardComponent
**Responsabilidades:**
- Exibir imagem com metadados
- Gerenciar likes
- Exibir e adicionar comentários

**Props:**
- `@Input() image: Image`
- `@Output() likeClicked: EventEmitter<string>`
- `@Output() commentAdded: EventEmitter<{imageId, comment}>`

### SearchBarComponent
**Responsabilidades:**
- Capturar input de busca
- Emitir eventos de pesquisa

**Props:**
- `@Output() searchSubmitted: EventEmitter<string>`

### PostImageComponent
**Responsabilidades:**
- Abrir/fechar modal
- Validar formulário
- Emitir nova imagem

**Props:**
- `@Output() imagePosted: EventEmitter<Image>`

## 🔄 Fluxo de Dados (RxJS)

```
ImageService
├── images$ (BehaviorSubject)
│   └── Observable<Image[]>
├── categories$ (BehaviorSubject)
│   └── Observable<Category[]>
├── getImages()
├── getCategories()
├── getImagesByCategory(category)
├── searchImages(query)
├── addImage(image)
├── addComment(imageId, comment)
└── likeImage(imageId)
```

## 🎯 Funcionalidades Futuras

- [ ] Integração com API real
- [ ] Autenticação de usuários
- [ ] Upload de imagens (não apenas URL)
- [ ] Geração de imagens com IA para títulos populares do Google
- [ ] Filtro avançado por data, popularidade
- [ ] Sistema de notificações
- [ ] Tema dark mode
- [ ] Paginação de imagens
- [ ] Persistência de dados (LocalStorage/Backend)

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop:** 1400px+
- **Tablet:** 768px - 1023px
- **Mobile:** < 768px

## 🛠️ Tecnologias Utilizadas

- **Angular 20.3.0** - Framework
- **TypeScript 5.9.2** - Linguagem
- **RxJS 7.8.0** - Reactive Programming
- **SCSS** - Pré-processador CSS
- **Angular Forms** - Gerenciamento de formulários

## 📝 Exemplo de Dados

```typescript
interface Image {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  likes: number;
  comments: Comment[];
  postedBy: string;
  postedAt: Date;
}

interface Comment {
  id: string;
  author: string;
  text: string;
  postedAt: Date;
}

interface Category {
  id: string;
  name: string;
  icon?: string;
}
```

## 🎨 Customização

Para customizar cores, edite as variáveis CSS em `app.scss`:

```scss
:host {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

## 📄 

MIT - Projeto educacional DIO

Desenvolvido como exercício do Bootcamp Formação Angular DIO

**Status:** ✅ Projeto Demostrativo e Funcional.
