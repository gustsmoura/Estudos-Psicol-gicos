# Estudos Psicológicos

Plataforma de revisão de Gestão de Pessoas publicada como site estático no GitHub Pages.

## As três partes

1. **Ler conteúdos:** sínteses, mapa mental e relação dos materiais usados.
2. **Praticar:** estudos de caso, respostas de referência e cartões.
3. **Escrever:** escolha um caso, escreva sua resposta e receba um retorno automático de cobertura de conceitos. Rascunhos são guardados no armazenamento local do navegador.

## Mural coletivo de respostas

O GitHub Pages não oferece banco de dados. Para ativar o mural coletivo, o projeto usa um banco Supabase opcional:

1. Crie um projeto Supabase e abra o **SQL Editor**.
2. Execute o conteúdo de `database/schema.sql`. As políticas RLS permitem leitura e envio anônimo apenas para a tabela de respostas de estudo.
3. No painel do Supabase, copie a URL do projeto e a chave **anon/publishable**.
4. Preencha `supabase-config.js` com esses dois valores e publique a alteração no GitHub Pages.

A chave pública pode aparecer no código do site; nunca coloque uma chave `service_role` nele. O mural é público: respostas enviadas poderão ser lidas por qualquer pessoa que visite o site. O envio é opcional e exige marcar a autorização na tela. Não inclua nome, e-mail ou outros dados pessoais. Enquanto o banco não estiver configurado, os rascunhos continuam apenas no aparelho e o envio coletivo permanece desativado.

## Publicação

O repositório está configurado para GitHub Pages. Envie as alterações para a branch `main`; o Pages publica os arquivos estáticos após a atualização do repositório.
