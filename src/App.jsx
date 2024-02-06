

 const WebClima = () => {




  return (
    <div className="Container">

      <section className="Painel_1">
        <div className="Informaçoes_clima">
          <img src="" alt="" />
          <h2 id="Local">Vitória da Conquista/ES</h2>
          <h2 id="Tempetatura">Temperatura: 35°C</h2>
          <p id="Humidade">Humidade do Ar: 60%</p>
        </div>

          <nav className="Naverga_Barra">
            <ul>
              <li><a href="">UM DIA</a></li>
              <li><a href="">SEMANA</a></li>
              <li><a href="">MÊS</a></li>
              <li><a href="">ANO</a></li>
              <li><a href="">TODOS OS TEMPOS</a></li>
            </ul>
          </nav>
      </section>

      <section className="Painel_2">

        <div>
          <input id="cidadeInput" type="text" placeholder="Digite o nome de um local" />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>


        <div className="Grafico">
        </div>
      </section>
    </div>
  )
 }


 export default WebClima