import './App.css';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';

function App() {

  return (
    <>
      <section className='section'>
        <div className="container is-max-tablet">
          <h1 className="title has-text-centered">Minecraft ST</h1>
          <h2 className='subtitle has-text-centered'>Por favor, descargue el launcher y los mods. <br />
            Si ya tiene el launcher pues no lo descargue, bruto.</h2>
          <div className="buttons is-centered">
            <a className="button"><i className="bi bi-square pr-2"></i> Launcher</a>
            <a className="button"><i className="bi bi-download pr-2"></i>Mods</a>
          </div>
        </div>
      </section>

      <section className='section'>
        <h1 className="title has-text-centered">Mini guia</h1>
        <h2 className='subtitle has-text-centered'>Son pasos sencillos, no se complique <br /></h2>
        <div className="container is-max-tablet">
          <div className='box'>
            <p className='has-text-centered py-2'>Ejecute el <a href="/SKlauncher.jar">launcher</a>, este es portable. <br />Luego de abrirlo, seleccione el simbolo mas a la izquierda</p>
            <img src={step1} alt="" />
          </div>

          <div className='box'>
            <p className='has-text-centered py-2'>
              Coloquele un nombre a la instalación. <br />
              Seleccione NeoForge. <br />
              Seleccione la version 26.2 7-beta. <br />
              Click en guardar.
            </p>
            <img src={step2} alt="" />
          </div>

          <div className='box'>
            <p className='has-text-centered py-2'>
              Una vez instalado, abra el directorio de instalacion de NeoForge.
            </p>
            <img src={step3} alt="" />
          </div>

          <div className='box'>
            <p className='has-text-centered py-2'>Busque la carpeta mods, aquí deberá poner todos los <a href="/mods.zip">mods</a>, descomprima y listo.</p>
            <img src={step4} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
