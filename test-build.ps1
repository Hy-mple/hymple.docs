# Script para testar o build do MkDocs localmente
Write-Host "Testando configuracao do MkDocs..." -ForegroundColor Cyan

# Verificar estrutura de arquivos
Write-Host "`nArquivos encontrados:" -ForegroundColor Yellow
Get-ChildItem -Path docs -Recurse -File | Select-Object FullName

# Verificar conteudo do mkdocs.yml
Write-Host "`n=== mkdocs.yml ===" -ForegroundColor Yellow
Get-Content mkdocs.yml

Write-Host "`n=== Teste concluido ===" -ForegroundColor Green
