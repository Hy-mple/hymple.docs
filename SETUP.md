# Setup Guide - Hymple Documentation

Este guia explica como instalar e configurar todas as dependências necessárias para o MkDocs.

## Instalação

### 1. Instalar Python e pip

Certifique-se de ter Python 3.8+ instalado:

```bash
python3 --version
```

### 2. Criar ambiente virtual (recomendado)

```bash
cd /home/jeferson/workspace/hymple.docs
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
```

### 3. Instalar dependências

```bash
pip install mkdocs-material
pip install mkdocs-glightbox
pip install mkdocs-git-revision-date-localized-plugin
pip install mkdocs-minify-plugin
```

Ou instale tudo de uma vez:

```bash
pip install mkdocs-material mkdocs-glightbox mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin
```

### 4. Verificar instalação

```bash
mkdocs --version
```

## Comandos Úteis

### Iniciar servidor de desenvolvimento

```bash
mkdocs serve
```

Acesse em: http://127.0.0.1:8000

### Build da documentação

```bash
mkdocs build
```

Os arquivos serão gerados em `site/`

### Deploy no GitHub Pages

```bash
mkdocs gh-deploy
```

## Estrutura de Arquivos

```
hymple.docs/
├── mkdocs.yml                 # Configuração principal
├── docs/                      # Arquivos de documentação
│   ├── index.md              # Página inicial
│   ├── introduction.md       # Introdução
│   ├── examples.md           # Exemplos de recursos
│   ├── assets/               # Imagens e recursos
│   ├── stylesheets/
│   │   └── styles.css        # CSS customizado
│   └── javascripts/
│       └── mathjax.js        # Configuração MathJax
├── includes/
│   └── abbreviations.md      # Abreviações DeFi/Web3
└── site/                      # Build output (gerado)
```

## Personalização

### Cores do Tema

Edite em `mkdocs.yml`:

```yaml
theme:
  palette:
    primary: custom  # Definido em styles.css
    accent: blue
```

### CSS Customizado

Edite `docs/stylesheets/styles.css` para ajustar:
- Cores (variáveis CSS em `:root`)
- Tipografia
- Espaçamentos
- Animações

### Navegação

Edite a seção `nav` em `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - Whitepaper:
    - Introduction: introduction.md
    - Architecture: architecture.md
  - Developer:
    - API: api.md
    - SDK: sdk.md
```

## Recursos Avançados

### Mermaid Diagrams

Já configurado! Use:

\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`

### Fórmulas Matemáticas

Já configurado com MathJax:

- Inline: `\\(formula\\)`
- Display: `\\[formula\\]`

### Admonitions

```markdown
!!! note "Título"
    Conteúdo da nota
```

Tipos: note, tip, warning, danger, success, info

### Tabs

```markdown
=== "Tab 1"
    Conteúdo 1

=== "Tab 2"
    Conteúdo 2
```

## Dicas de Performance

1. Use `mkdocs-minify-plugin` para otimizar HTML/CSS/JS
2. Otimize imagens antes de adicionar em `docs/assets/`
3. Use caching do navegador
4. Configure CDN para assets estáticos

## Troubleshooting

### Erro: Plugin não encontrado

```bash
pip install mkdocs-[plugin-name]
```

### Servidor não inicia

Verifique se a porta 8000 está livre:

```bash
lsof -i :8000
mkdocs serve -a 127.0.0.1:8001  # Use outra porta
```

### Estilos não aplicados

Limpe o cache do navegador ou use Ctrl+Shift+R

## Recursos Adicionais

- [MkDocs Material Documentation](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Mermaid Diagrams](https://mermaid.js.org/)
- [MathJax Documentation](https://www.mathjax.org/)
