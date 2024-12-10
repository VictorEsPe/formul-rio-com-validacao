# Formulário com validação
Este projeto consiste em um formulário simples de cadastro que, antes de enviar os dados, verifica se os campos foram devidamente preenchidos. Este projeto foi proposto como um desafio do curso DevQuest para testar os conhecimentos dos alunos em HTML, CSS e JavaScript em nível intermediário.

## Preview
![overview do projeto](/src/design/design-overview.png)

##  Como é feita a validação
Todos os campos passam por uma verificação para garantir que nenhum campo fique vazio, caso algum campo estiver vazio, sua borda ficará vermelha e a mensagem "Campo obrigatório" aparecerá em baixo do determinado campo.

![Erro de campos vazios](/src/design/empty-field-error.png) 

Os campos "nome", "email", e "telefone" possuem validações personalidas que determinam se as informações inseridas são de fato válidas. Por exemplo: o campo "nome" não aceita números, os campos "email" e "telefone" usam expressões regulares para verificar se as informações passadas correspondem com os padrões estabelecidos.

![Erros individuais de cada campo](/src/design/individual-field-error.png)

Caso o campo estiver com informações válidas, a mensagem de erro (se houver alguma) irá sumir e a borda do input ficará verde.

![Campos válidos](/src/design/success-green-borders.png)

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript