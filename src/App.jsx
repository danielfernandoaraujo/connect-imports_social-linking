
import { Main } from './AppStyled';
import banner from './imgs/1.png'
import logo from "./imgs/2.jpg";

function App() {

  return (
    <Main>
      <div className="img-banner-top">
        <img src={banner} alt="banner" />
      </div>
      <div className="img-icon">
        <img src={logo} alt="icon" />
      </div>
      <dir className="title-text"></dir>
      <div className="bottons"></div>
    </Main>
  );
}

export default App
