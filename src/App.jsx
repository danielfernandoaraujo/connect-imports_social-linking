
import { Main } from './AppStyled';
import Button from './components/buttons/buttons';
import TypingText from './components/typingText/TypingText';
import banner from './imgs/1.png'
import logo from "./imgs/2.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillPhone,
  AiOutlineShopping,
} from "react-icons/ai";
import { Link } from "react-router-dom";


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
      <div className="title-text">
        <TypingText />
      </div>
      <div className="buttons">
        <Button
          text="Nosso Whatsapp"
          color="#FF0059"
          link={
            "https://api.whatsapp.com/send/?phone=5579991228309&text=Olá,+CONECT+IMPORTS+gostaria+de&type=phone_number&app_absent=0"
          }
          icon={<RiWhatsappFill size={"1.2em"} />}
        ></Button>
        <Button
          text="Localização"
          color="#FF0059"
          link={
            "https://www.google.com/maps/place/Conect+Imports+cell+Assistência+Técnica+-+Av.+Augusto+Franco,+3321+-+Ponto+Novo,+Aracaju+-+SE,+49047-040/data=!4m2!3m1!1s0x71ab3b93d3d73f9:0x24f070cb07093130?utm_source=mstt_1&entry=gps&lucs=47062708&g_ep=CAESCTExLjY2LjYwMhgAIIgnKgg0NzA2MjcwOEICQlI%3D"
          }
          icon={<FaMapMarkerAlt size={"1.2em"} />}
        ></Button>
        <Button
          text="Siga-nós no Instagram"
          color="#FF0059"
          link={"https://www.instagram.com/conectt_imports/"}
          icon={<AiFillInstagram size={"1.2em"} />}
        ></Button>
        <Button
          text="Compre online"
          color="#FF0059"
          link={"https://www.olx.com.br/perfil/conect-imports-08ff7a57"}
          icon={<AiOutlineShopping size={"1.2em"} />}
        ></Button>
      </div>
    </Main>
  );
}

export default App
