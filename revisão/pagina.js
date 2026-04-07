function pagina(){
    
    const div = document.getElementById("container");

    const h2 = document.createElement("h2");
    h2.innerHTML = "Lista de Tarefas"
    div.appendChild(h2);
    
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Digite uma tarefa");
    div.appendChild(input);
    
    const botao = document.createElement("button");
    botao.innerHTML = "Adicionar";
    div.appendChild(botao);

    const lista = document.createElement("ul");
    div.appendChild(lista);

    //const input = document.getElementById("tarefaInput");
    //const botao = document.getElementById("btnAdicionar");
    //const lista = document.getElementById("listaTarefas");

    botao.addEventListener("click", ()=>{
        //Criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if(texto === ""){
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto; //adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque');//adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());//adiciona atributo personalizado
        novaTarefa.style.color = "#333"; //muda a cor do texto

        lista.appendChild(novaTarefa);//adiciona elemento 

        //Evento para remover item ao clicar
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque");//remove a classe html destaque
            novaTarefa.classList.add("removido");//acrescenta a classe html removido
            novaTarefa.innerHTML += " (removida)";//acrescenta o texto (removida) ao texto da tarefa
            setTimeout(()=>{lista.removeChild(novaTarefa);}, 1000); //remove tarefa depois de 1 segundo
            
            input.value = "";

        })

    });

}