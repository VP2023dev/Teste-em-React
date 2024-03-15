import logo from './logo.svg';
import logo1 from './betlogo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div>
        <header class="betlogoo">
          <div class="logomexer">
            <img src={logo1} alt="Logo" style={{width: '150px', height: 'auto', padding: '0px 110px'  }} />
            <div>
              <ul class="menudois">
                <li><a href="extanche.html">Extanche</a></li>
                <li><a href="cassinos.html">Cassinos</a></li>
                <li><a href="poker.html">Poker</a></li>
                <li><a href="extancheplays.html">Jogos Extanches</a></li>
              </ul>
            </div>
          </div>
        </header>
        <nav>
          <ul class="menu"> 
           <li><a href="esportes.html">Esportes</a></li>
           <li><a href="tabelas.html">Tabeças</a></li>
           <li><a href="planilhas.html">Planilhas</a></li>
           <li><a href="estatisticas.html">Estatisticas</a></li>
           <li><a href="opnioes.html">Opções</a></li>
          </ul>
        </nav>
      </div>
    </body>
  );
}

export default App;
