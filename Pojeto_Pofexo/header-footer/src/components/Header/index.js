import './style.css';

const Header = ({pofexo}) => {

  return(
    <header id="header">
      <h1>{pofexo}</h1>
      <nav>
        <ul>
          <li><a href="#header">Início</a></li>
          <li><a href="#galeria">Imagem</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;