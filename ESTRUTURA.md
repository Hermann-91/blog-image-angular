# 📁 Estrutura do Projeto

## Árvore de Arquivos Completa

```
angular-blog-img/
│
├── public/
│   └── image.png                      # Design de referência
│
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── image.model.ts         # Interfaces TypeScript
│   │   │       ├── interface Image
│   │   │       ├── interface Comment
│   │   │       └── interface Category
│   │   │
│   │   ├── services/
│   │   │   └── image.service.ts       # Serviço de gerenciamento de dados
│   │   │       ├── ImageService
│   │   │       ├── RxJS BehaviorSubject
│   │   │       ├── getImages()
│   │   │       ├── getCategories()
│   │   │       ├── searchImages()
│   │   │       ├── getImagesByCategory()
│   │   │       ├── addImage()
│   │   │       ├── addComment()
│   │   │       └── likeImage()
│   │   │
│   │   ├── components/
│   │   │   ├── menu/
│   │   │   │   ├── menu.component.ts       # Lógica do menu
│   │   │   │   ├── menu.component.html     # Template
│   │   │   │   └── menu.component.scss     # Estilos
│   │   │   │
│   │   │   ├── search-bar/
│   │   │   │   ├── search-bar.component.ts
│   │   │   │   ├── search-bar.component.html
│   │   │   │   └── search-bar.component.scss
│   │   │   │
│   │   │   ├── image-card/
│   │   │   │   ├── image-card.component.ts
│   │   │   │   ├── image-card.component.html
│   │   │   │   └── image-card.component.scss
│   │   │   │
│   │   │   └── post-image/
│   │   │       ├── post-image.component.ts
│   │   │       ├── post-image.component.html
│   │   │       └── post-image.component.scss
│   │   │
│   │   ├── app.ts                    # Componente raiz
│   │   ├── app.html                  # Template principal
│   │   ├── app.scss                  # Estilos principais
│   │   ├── app.routes.ts             # Rotas (para futuro)
│   │   ├── app.config.ts             # Configurações
│   │   └── app.spec.ts               # Testes
│   │
│   ├── main.ts                       # Ponto de entrada
│   ├── index.html                    # HTML base
│   └── styles.scss                   # Estilos globais
│
├── .vscode/                          # Configurações VSCode
├── node_modules/                     # Dependências
├── angular.json                      # Configuração Angular
├── package.json                      # Dependências npm
├── package-lock.json
├── tsconfig.json                     # Configuração TypeScript
├── tsconfig.app.json
├── tsconfig.spec.json
├── .editorconfig
├── .gitignore
├── README.md                         # Readme original
├── PROJETO.md                        # 📄 Documentação técnica
├── GUIA_USO.md                       # 📄 Guia do usuário
└── ESTRUTURA.md                      # 📄 Este arquivo
```

## 📊 Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────┐
│                     APP (Componente Raiz)                   │
│  - Gerencia estado das imagens                              │
│  - Coordena comunicação entre componentes                   │
│  - Chama serviços ImageService                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┬──────────────┐
        │              │              │              │
        ▼              ▼              ▼              ▼
    ┌────────┐   ┌──────────┐  ┌──────────┐  ┌─────────────┐
    │ MENU   │   │ SEARCH   │  │ POST IMG │  │ IMAGES GRID │
    │        │   │   BAR    │  │ MODAL    │  │             │
    │ - Exibe│   │          │  │          │  │ - Lista     │
    │  cats  │   │ - Busca  │  │ - Form   │  │   cards     │
    │ - Emit │   │   imgs   │  │ - Valida │  │ - Cada card │
    │  sel   │   │ - Emite  │  │ - POST   │  │   é IMAGE   │
    │        │   │  search  │  │   image  │  │   CARD      │
    └────────┘   └──────────┘  └──────────┘  └─────────────┘
        │              │              │              │
        └──────────────┴──────────────┴──────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
   ┌─────────────┐         ┌──────────────────┐
   │ IMAGE CARD  │         │ IMAGE SERVICE    │
   │ (Repetido)  │         │                  │
   │             │         │ - Images$        │
   │ - Exibe img │         │ - Categories$    │
   │ - Like btn  │         │ - getImages()    │
   │ - Comments  │         │ - search()       │
   │ - Add comet │         │ - filter()       │
   └─────────────┘         │ - add/update()   │
                           └──────────────────┘
```

## 🔄 Fluxo de Dados (RxJS)

```
┌──────────────────────┐
│  ImageService        │
│  - BehaviorSubject   │
│    imagesSubject     │
└────────┬─────────────┘
         │
    Observable<Image[]>
         │
    ┌────┴────┬────────┬──────────┐
    │          │        │          │
    ▼          ▼        ▼          ▼
  APP      MENU    SEARCH   IMAGE-CARD
  (all)   (filtered) (search)  (single)
```

## 🎨 Hierarquia de Componentes

```
App (Standalone)
├── MenuComponent (Standalone)
├── SearchBarComponent (Standalone)
├── PostImageComponent (Standalone)
│   └── Modal interno
└── *ngFor
    └── ImageCardComponent (Standalone) x N
        ├── Imagem
        ├── Botões (Like/Comments)
        └── *ngIf Comments
            ├── Lista de comentários
            └── Formulário de comentário
```

## 📦 Dependências Principais

```json
{
  "@angular/common": "^20.3.0",        // CommonModule, *ngIf, *ngFor
  "@angular/core": "^20.3.0",          // Component, Signal
  "@angular/forms": "^20.3.0",         // FormsModule, ngModel
  "@angular/platform-browser": "^20.3.0",
  "@angular/router": "^20.3.0",        // Para rotas futuras
  "rxjs": "~7.8.0"                     // BehaviorSubject, Observable
}
```

## 🎯 Responsabilidades de Cada Arquivo

### Models
- **image.model.ts**: Define tipos de dados (Image, Comment, Category)

### Services
- **image.service.ts**: 
  - Centraliza lógica de gerenciamento de imagens
  - Usa RxJS Subjects para reatividade
  - Fornece métodos para CRUD e busca

### Components

#### App
- **app.ts**: Orquestra toda a aplicação
- **app.html**: Layout principal com grid
- **app.scss**: Estilos globais e responsividade

#### Menu
- **menu.ts**: Controla expansão e emissão de seleções
- **menu.html**: Lista de categorias
- **menu.scss**: Estilos do menu com gradient

#### SearchBar
- **search-bar.ts**: Captura e emite buscas
- **search-bar.html**: Input e botão
- **search-bar.scss**: Estilo da barra

#### ImageCard
- **image-card.ts**: Gerencia likes e comentários
- **image-card.html**: Estrutura do card
- **image-card.scss**: Animações e hover

#### PostImage
- **post-image.ts**: Controla modal e validação
- **post-image.html**: Modal com formulário
- **post-image.scss**: Animações modal e backdrop

## 🔗 Conexões Entre Componentes

```
App
├─ chama: ImageService.getImages()
├─ chama: ImageService.getCategories()
├─ passa: categories → MenuComponent
├─ passa: filteredImages → ImageCardComponent
├─ escuta: MenuComponent.categorySelected
├─ escuta: SearchBarComponent.searchSubmitted
├─ escuta: PostImageComponent.imagePosted
├─ escuta: ImageCardComponent.likeClicked
└─ escuta: ImageCardComponent.commentAdded
```

## 📈 Padrões Utilizados

### Design Patterns
- **Standalone Components**: Todos os componentes sem módulos
- **Service Injection**: ImageService injetado via constructor
- **Observable Pattern**: RxJS para reatividade
- **Two-Way Binding**: ngModel para formulários
- **Event Emitters**: @Output para comunicação pai-filho

### Angular Features
- **Signal**: signal() para título (futuro upgrade)
- **Control Flow**: @if, @for (Angular 17+)
- **Standalone**: imports dentro do @Component
- **Type Safety**: TypeScript strict mode

## 🎨 Variáveis CSS

```scss
--primary-color: #667eea
--secondary-color: #764ba2
--accent-color: #f093fb
--dark-bg: #f8f9fa
--card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)
--transition: all 0.3s ease
```

## 🧪 Arquivos de Configuração

- **angular.json**: Configuração de build, serve, assets
- **tsconfig.json**: Configuração TypeScript global
- **tsconfig.app.json**: Config TypeScript específica da app
- **package.json**: Scripts: start, build, test, watch
- **.editorconfig**: Formatação de código
- **.gitignore**: Arquivos ignorados pelo git

## 📊 Estatísticas

- **Total de Componentes**: 5 (App + 4 componentes)
- **Total de Serviços**: 1
- **Total de Modelos**: 1 arquivo (3 interfaces)
- **Linhas de TypeScript**: ~500
- **Linhas de HTML**: ~400
- **Linhas de SCSS**: ~800
- **Total do Projeto**: ~1700 linhas

---

**Status da Estrutura:** ✅ Completa e Organizada
