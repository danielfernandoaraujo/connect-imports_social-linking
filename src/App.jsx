
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
        <Button text="Whatsapp" color="blue" icon="💾"></Button>
        <Button text=" Localização" color="blue" icon="💾"></Button>
        <Button text="Instagram" color="blue" icon="💾"></Button>
        <Button text="Telefone" color="blue" icon="💾"></Button>
      </div>
    </Main>
  );
}

export default App
