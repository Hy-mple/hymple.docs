# Diagnóstico - Menu Lateral não Aparece

## ✅ URLs para Testar

1. **Página Principal (MkDocs):** https://hy-mple.github.io/hymple.docs/
2. **Página de Teste HTML:** https://hy-mple.github.io/hymple.docs/test.html
3. **Introduction:** https://hy-mple.github.io/hymple.docs/introduction.html

## 🔍 Verificações no GitHub

### 1. Verificar Settings do Repositório

Acesse: `https://github.com/Hy-mple/hymple.docs/settings/pages`

Deve estar assim:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `root`
- **Custom domain:** (vazio ou seu domínio)

### 2. Verificar Branch gh-pages

Acesse: `https://github.com/Hy-mple/hymple.docs/tree/gh-pages`

Deve conter:
- `index.html`
- `introduction.html`
- Pasta `assets/` com CSS e JS
- Pasta `stylesheets/`

### 3. Verificar Actions/Workflows

Acesse: `https://github.com/Hy-mple/hymple.docs/actions`

- Último workflow deve estar ✅ verde (Success)
- Verificar logs do step "List build output"

## 🐛 Possíveis Causas

### Causa 1: GitHub Pages não habilitado
**Solução:** Ir em Settings > Pages > Enable GitHub Pages

### Causa 2: Branch gh-pages não existe ou está vazia
**Solução:** Verificar se o workflow criou a branch corretamente

### Causa 3: URL errada
**Solução:** A URL correta é `https://hy-mple.github.io/hymple.docs/` (com barra final)

### Causa 4: Cache do navegador
**Solução:** 
- Pressionar Ctrl+Shift+R (hard refresh)
- Ou abrir em aba anônima
- Ou abrir em outro navegador

### Causa 5: Material Theme não carregando
**Sintomas:** Página aparece mas sem estilo, texto plano
**Solução:** Verificar se CSS está sendo carregado (F12 > Network)

## 📊 Como Verificar se Material Theme está Carregando

1. Abra a página: https://hy-mple.github.io/hymple.docs/
2. Pressione F12 (DevTools)
3. Vá em "Network" tab
4. Recarregue a página (F5)
5. Procure por:
   - `stylesheets/main.*.min.css` (deve estar 200 OK)
   - `javascripts/bundle.*.min.js` (deve estar 200 OK)

Se esses arquivos retornarem 404, o Material não foi deployado corretamente.

## 🔧 Teste Manual de Deploy

Se nada funcionar, tente deploy manual:

\`\`\`bash
# Clone o repositório
git clone git@github.com:Hy-mple/hymple.docs.git
cd hymple.docs

# Instale dependências
pip install mkdocs-material

# Build local
mkdocs build

# Verifique o diretório site/
ls -la site/

# Deploy manual
mkdocs gh-deploy
\`\`\`

## 📸 Console do Navegador

Abra o Console (F12 > Console) e veja se há erros:
- ❌ Erros 404 em CSS/JS = arquivos não foram deployados
- ❌ CORS errors = problema de configuração do GitHub Pages
- ✅ Sem erros = Material deveria estar carregando

## 📞 Próximos Passos

Se após todas essas verificações o menu ainda não aparecer:

1. Compartilhe o log do workflow (Actions > último workflow > logs)
2. Compartilhe screenshot da página com F12 > Console aberto
3. Compartilhe screenshot do Settings > Pages

Com essas informações poderemos identificar exatamente o problema!
