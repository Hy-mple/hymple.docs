# Configuração do ambiente local

Este guia descreve como executar e validar o site de documentação neste
repositório.

## Requisitos

- Python 3
- `pip`

## Instalação

Na raiz do repositório, crie e ative um ambiente virtual:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Instale as dependências utilizadas pelo site:

```bash
python -m pip install --upgrade pip
python -m pip install mkdocs-material mkdocs-glightbox
```

## Executar o site

```bash
mkdocs serve --dev-addr 127.0.0.1:8000
```

Acesse <http://127.0.0.1:8000/>. O MkDocs observa os arquivos e atualiza o site
durante o desenvolvimento.

## Validar o build

Antes de enviar alterações, execute:

```bash
mkdocs build --strict
```

Os arquivos gerados ficam em `site/`. Esse diretório é resultado do build e não
deve ser editado manualmente.

## Organização do conteúdo

- Páginas e recursos publicados: `docs/`.
- Configuração do site e navegação: `mkdocs.yml`.
- Conteúdo Markdown reutilizável: `includes/`.
- Personalizações de template: `overrides/`.

O conteúdo público é mantido em inglês. Preserve os termos definidos no
glossário e diferencie informações disponíveis de itens planejados ou controles
alvo.

## Publicação

A publicação é realizada pelo GitHub Actions, conforme o workflow do repositório.
Não use `mkdocs gh-deploy` como fluxo de publicação deste projeto.
