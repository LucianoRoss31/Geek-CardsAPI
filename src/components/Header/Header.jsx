import { NavBar } from "./NavBar"
import ImgLogo from "./Img/logo.png"
import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1>Geek Cards</h1>
        <NavBar />
        <a href=""><b>Inicio</b></a>
        <a href=""><b>Articulos mas vendidos</b></a>
        <a href=""><b>Novedades</b></a>
        <a href=""><b>Ofertas</b></a>
        <a href=""><b>Opcion 1</b></a>
        <a href=""><b>Opcion 2</b></a>
    </header>
  )
}
