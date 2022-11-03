import './FuncionariosPagInicial.css';
import Img from "./images/person.png";
import ImgMenu from "./images/menu.png";
import ImgLogOut from "./images/logout.png";
import ImgHome from "./images/home.png";
import ImgClient from "./images/client.png";
import ImgWork from "./images/work.png";

function FuncionariosPagInicial() {
  return (
    <div className="FuncionariosBack">
      <div className='navbarleft'>
        <img class="imgMenu" src={ImgMenu} />
        <img class="imgfuncionario" src={Img} />
        <div className='nomefuncionario'>Nome Funcionário</div> 
        <div className='buttons'><img class="imghome" src={ImgHome} />Página Inicial</div>
        <div className='buttons'><img class="imgclient" src={ImgClient} />Clientes</div>
        <div className='buttons'><img class="imgwork" src={ImgWork} />Trabalhos</div> 
      </div>
      <img class="imgLogOut" src={ImgLogOut} />
      <img class="imgBemVindo" src={Img} />
      <div className='textBemVindo'>Bem-Vindo ao Trabalho</div>
    </div>
  );
}

export default FuncionariosPagInicial;
