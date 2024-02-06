

 const WebClima = () => {


  return (
    <div className="Container">

      <section className="Painel_1">
        <div className="Informaçoes_clima">
          <img src="" alt="" />
          <h2 id="Local">Vitória da Conquista/ES</h2>
          <h2 id="Tempetatura">Temperatura: 35°C</h2>
          <p id="Humidade">Humidade do Ar: 60%</p>
          <p id="Pressão">Pressão Atmosférica: 987 mbar</p>
        </div>

        <div className="Naverga_Barra">
          <nav>
            <ul>
              <li><a href="">Um dia</a></li>
              <li><a href="">Semana</a></li>
              <li><a href="">Mês</a></li>
              <li><a href="">Ano</a></li>
              <li><a href="">Todos os Tempos</a></li>
            </ul>
          </nav>
        </div>

      </section>

      <section className="Painel_2">
        <div>
          <input type="text" placeholder="Digite o nome de um local" />
          <button>Buscar Clima</button>
        </div>
      </section>




    </div>
  )
 }


 export default WebClima