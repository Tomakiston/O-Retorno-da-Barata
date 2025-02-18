function choice(option) {
    let title = document.getElementById("title");
    let image = document.getElementById("scene-img");
    let story = document.getElementById("story");

    let buttons = document.querySelectorAll(".choice");

    if (option === "confront") {
        title.innerText = "Escolha de Armas";
        image.src = "armas-antibarata.png";
        story.innerText = "Tem um Baygon e uma Havaiana na dispensa. Qual vai usar?"
        buttons[0].innerText = "Pegar o Baygon";
        buttons[0].setAttribute("onclick", "choice('baygon')");
        buttons[1].innerText = "Pegar a Havaiana";
        buttons[1].setAttribute("onclick", "choice('havaina')")
    }
    else if (option === "run") {
        title.innerText = "A Decisão";
        image.src = "escolha-casa.png";
        story.innerText = "Vai chamar os dedetizadores ou... Dar um jeito sozinho?"
        buttons[0].innerText = "Ligar para os dedetizadores";
        buttons[0].setAttribute("onclick", "choice('call')");
        buttons[1].innerText = "Queimar a casa";
        buttons[1].setAttribute("onclick", "choice('fire')")
    }
    else if (option === "baygon") {
        title.innerText = "Lentidão Mortal";
        image.src = "lentidao.png";
        story.innerText = "A barata era voadora e você demorou de mais pra pegar o Baygon. Você morreu!"
        buttons.forEach(button => button.style.display = "none");
    }
    else if (option === "havaina") {
        title.innerText = "A Lendária Havaiana";
        image.src = "morte-barata.png";
        story.innerText = "A barata não teve nem chance, foi completamente aniquilada pela Havaiana. Você viveu!"
        buttons.forEach(button => button.style.display = "none");
    }
    else if (option === "call") {
        title.innerText = "Chamada Interceptada";
        image.src = "barata-alien.png";
        story.innerText = "O FBI interceptou sua chamada e foi até sua casa pegar a barata gigante. Você viveu?"
        buttons.forEach(button => button.style.display = "none");
    }
    else if (option === "fire") {
        title.innerText = "Erro Mortal";
        image.src = "barataflamejante.png";
        story.innerText = "A barata era resistente ao fogo e está indo te pegar. Você morreu!"
        buttons.forEach(button => button.style.display = "none");
    }

}