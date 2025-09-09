import { NavBar } from "./NavBar"
import ImgLogo from '../../assets/img/Logo.png'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <a href="">
        <img className="logo" src={ImgLogo} alt="Logo" />
        </a>
        <h1>Geek Cards</h1>
        <NavBar />
        <div className="login-buttons">
          <a href="" className="cart"><i class="bi bi-cart"></i></a>
          <button className="register-btn">Registrarse</button>
          <button className="login-btn">Iniciar Sesion</button>
        </div>
      </div>
        
        <a href="" className="opciones"><b>Inicio</b></a>
        <a href="" className="opciones"><b>Articulos mas vendidos</b></a>
        <a href="" className="opciones"><b>Novedades</b></a>
        <a href="" className="opciones"><b>Ofertas</b></a>
    </header>
  )
}
