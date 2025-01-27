const buttons = document.querySelectorAll("#image-picker li");
const images = document.querySelectorAll(".prduto-img");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remover a classe 'selector' de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selector");
        });

        // Adicionar a classe 'selector' ao botão clicado
        const button = e.currentTarget; // Garantir que seja o <li>
        button.querySelector(".color").classList.add("selector");

        // Pegar o ID do botão clicado
        const id = button.getAttribute("id");

        // Atualizar as imagens associadas
        images.forEach((image) => {
            // Adicionar classe 'changing' para animação
            image.classList.add("changing");

            // Alterar o atributo 'src' da imagem com base no ID
            image.setAttribute("src", `img/iphone_${id}.jpg`);

            // Remover a classe 'changing' após 200ms
            setTimeout(() => {
                image.classList.remove("changing");
            }, 200);
        });
    });
});
