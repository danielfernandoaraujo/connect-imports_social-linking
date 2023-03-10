
import { Main } from './AppStyled';
import Button from './components/buttons/buttons';
import banner from './imgs/1.png'
import logo from "./imgs/2.jpg";

function App() {

  return (
    <Main>
      <div className="banner-icon">
        <div className="img-banner-top">
          <img src={banner} alt="banner" />
        </div>
        <div className="img-icon">
          <img src={logo} alt="icon" />
        </div>
      </div>
      <dir className="title-text">
        <h2>Assistência técnica de celulares e acessórios</h2>
      </dir>
      <div className="buttons">
        <Button text="Nosso whatsapp" color="blue" icon="💾"></Button>
        <Button text="Nossa localização" color="blue" icon="💾"></Button>
        <Button text="Salvar" color="blue" icon="💾"></Button>
        <Button text="Salvar" color="blue" icon="💾"></Button>
      </div>
    </Main>
  );
}

export default App
