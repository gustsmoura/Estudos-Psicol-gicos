# Psi em Curso

Portal de estudos de Psicologia publicado no GitHub Pages. A página inicial organiza as trilhas e apresenta Gestão de Pessoas como a primeira disciplina disponível.

## Página inicial do portal

- Catálogo pesquisável das disciplinas disponíveis e futuras.
- Acesso à trilha de Gestão de Pessoas em `gestao-de-pessoas.html`.
- Seções sobre método de estudo, fontes, responsabilidade ética e uma possível IA educacional futura.
- Trilhas marcadas como “em construção” ainda não têm conteúdo publicado.

A proposta de IA é apenas planejada: uma implementação futura exigiria fontes de Psicologia selecionadas, serviço de servidor para proteger a chave e limites explícitos para não oferecer diagnóstico ou terapia.

## As três partes da disciplina

1. **Ler conteúdos:** sínteses, mapa mental e relação dos materiais usados.
2. **Praticar:** estudos de caso, respostas de referência e cartões.
3. **Escrever:** escolha um caso, escreva sua resposta e receba um retorno automático de cobertura de conceitos. Rascunhos são guardados no armazenamento local do navegador.

## Mural coletivo de respostas

O GitHub Pages não oferece banco de dados. Para ativar o mural coletivo, o projeto usa um banco Supabase opcional:

1. O projeto Supabase já está conectado em `supabase-config.js` com a URL e a chave publishable fornecidas para este site.
2. No projeto Supabase, abra o **SQL Editor** e execute o conteúdo de `database/schema.sql`. As políticas RLS permitem leitura e envio anônimo apenas para a tabela de respostas de estudo.
3. Recarregue o site. Ele verifica se a tabela existe e só então libera o envio coletivo.

A chave pública pode aparecer no código do site; nunca coloque uma chave `service_role` nele. O mural é público: respostas enviadas poderão ser lidas por qualquer pessoa que visite o site. O envio é opcional e exige marcar a autorização na tela. Não inclua nome, e-mail ou outros dados pessoais. Enquanto o banco não estiver configurado, os rascunhos continuam apenas no aparelho e o envio coletivo permanece desativado.

## Publicação

O repositório está configurado para GitHub Pages. Envie as alterações para a branch `main`; o Pages publica os arquivos estáticos após a atualização do repositório.
