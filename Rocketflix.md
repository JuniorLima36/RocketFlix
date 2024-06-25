># Sobre o desafio
- Neste desafio você deverá utilizar a API do themoviedb.org para exibir um filme aleatório sempre que clicar em Encontrar Filme.

## [Layout](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F02793526-22bd-4086-a90a-4c79f4b5a754%2FUntitled.png?id=19123e90-8d59-46ce-9377-5c1ddd135a7e&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

># 💡**Como começar?**

1 - Use o link do Figma como base para o projeto. Também disponibilizamos para download todos os assets necessários (imagens e ícones), para fazer o download basta clicar no [link acima.](https://www.notion.so/Desafio-Rocketflix-5ca1c56b5e52473eb12e8b2bc3ab1b8d?pvs=21)  

2 - Crie uma conta no https://www.themoviedb.org/signup

3 - Após verificar o e-mail, faça o login e [acesse este link](https://www.themoviedb.org/settings/api/request)

4 - Clique em Criar e escolha a opção Developer  
[Instruções](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Facd70876-b5c9-433a-ac4c-30fda77c907e%2FUntitled.png?id=efef7909-d847-47b0-aadf-7d48fe40c9c4&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

5 - Aceite os termos de uso da API

6 - Preencha os dados necessários e clique em Enviar.  
[Instruções](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53fde663-8cda-4481-a0f0-d979c085fd25%2FUntitled.png?id=accd9903-9243-4dd0-bd2d-372985e85e7e&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

7 - Após clicar em enviar você terá acesso a sua API Key  
[Instrução](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F533f3ea6-2537-49fb-ae5c-417d699d17d8%2FUntitled.png?id=54349baf-bc25-4659-b825-27115646dcd7&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

8 - Após baixar o template terá um arquivo chamado `api.example`, cole a sua API KEY gerada no arquivo e renomeie o arquivo para `api.js`

9 - Adicione a lógica do desafio no arquivo `main.js`

10 - Bora codar! Lembre-se que você pode usar as tecnologias que se sentir mais confortável, mas também pode se desafiar usando novas techs, fazendo modificações e/ou adicionando funcionalidades no projeto como preferir. 🚀

11 - Compartilhe seu resultado ou tire suas dúvidas na nossa

># ✅ Requisitos

Neste desafio você vai construir uma página que exiba aleatóriamente um filme para o usuário. 

**Requisitos para o desafio:**

- Consumir a API do https://www.themoviedb.org/
- Ter um botão que traga um filme aleatório com poster e descrição do filme.

  [Como deve ficar](https://file.notion.so/f/s/f35a907f-c404-4e99-9de0-9e513e24df49/Kapture_2021-11-16_at_15.31.34.gif?id=0fb22d3b-a0e6-49f3-a713-9fe68ace944a&table=block&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&expirationTimestamp=1689379200000&signature=xF2jR4hpq1tDrwSUgWcqZYm25BMHhuycbI_O00IeLXY)

- Se o filme não existir, apresente uma mensagem e imagem informando que o filme não está disponível.

***Se desafie também:***

- Tornando o site responsivo
- Exibindo mais informações sobre os filmes que vem da API (Data de lançamento, atores...)

  [Video 1](https://youtu.be/vYlz3SmNXQQ)  
  [Video 2](https://youtu.be/UftSB4DaRU4)  
  [Video 3](https://youtu.be/VM4e37DaskU)  

># 🎨 Style Guide
```
:root {
  --title: #fffcf9;
  --subtitle: #b3b3b3;
  --bg-button: #e9e6e3;
  --background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);
}
```

## **Tipo de fonte:**
font-family: Poppins   
font-weight: 300, 400 e 500   
Você pode encontrar a fonte no google fonts