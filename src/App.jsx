import '../src/styles/App.css';
import borderCollie from '../src/media/borderCollie.jpg'
import rhodesian from '../src/media/rhodesian.jpg'
import logo from '../src/media/logo.png'

function App() {
  return (
    <div className="App">
    <header>
      <ul className="navbar">
        <li>
          <img src={logo} alt="imagen" className="logo" />
        </li>
        <li>
          <button className="botonGenerico mainButton">Nuevo post</button>
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar una raza" />
            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
          </div>
        </li>
        <li><button className="botonGenerico secondaryButton">Login</button></li>
        <li><button className="botonGenerico mainButton">Registro</button></li>
      </ul>
    </header>
    <main>
      <section>
        <h1>Razas de Perros</h1>
        <ul class="breedCardContainer">
          <CardDePerros nombreRaza="Rhodesian" imagen={rhodesian}/>
          <CardDePerros nombreRaza="Border Collie" imagen={borderCollie}/>
        </ul>
      </section>
      <section></section>
    </main>
    <footer>
    </footer>
  </div>
  );
}

function CardDePerros({nombreRaza, imagen}) {
  return(
    <li class="breedCard">
            <div class="contenedorImagen">
              <img src={imagen} alt="Border Collie" />
            </div>
            <span class="breedTitle">{nombreRaza}</span>
          </li>
  )
}

export default App;
