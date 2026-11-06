# Hymple Docs

Documentação pública da Hymple, publicada em [docs.hymple.exchange](https://docs.hymple.exchange/).

O site é construído com MkDocs Material. O conteúdo público está em inglês; este
README e o guia de desenvolvimento estão em português para quem contribui com o
repositório.

## Executar localmente

Requisitos: Python 3 e `pip`.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install mkdocs-material mkdocs-glightbox
mkdocs serve --dev-addr 127.0.0.1:8000
```

Abra <http://127.0.0.1:8000/>. O servidor recompila o site quando os arquivos
são alterados.

Para validar a documentação como no fluxo de publicação:

```bash
mkdocs build --strict
```

## Estrutura

- `mkdocs.yml`: configuração do site, tema e navegação.
- `docs/`: páginas e recursos publicados.
- `includes/`: conteúdo Markdown reutilizável.
- `overrides/`: personalizações dos templates do tema.

## Publicação

O GitHub Actions constrói e publica o site no GitHub Pages após atualizações nas
branches configuradas no workflow. A publicação deve ocorrer pelo fluxo do
repositório; `mkdocs gh-deploy` não é o processo documentado para este projeto.

## Contribuições

Antes de enviar alterações, execute `mkdocs build --strict` e verifique a
renderização local, os links e a navegação. Mantenha os textos públicos em
inglês, siga os termos existentes no glossário e indique claramente quando uma
funcionalidade ou controle é planejado, em vez de estar disponível.
