function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
    // Imprime no console para verificar se a seção foi encontrada (para fins de depuração)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    // Itera sobre cada elemento (dado) dentro da lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      // Concatena HTML para criar um novo elemento de resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }
