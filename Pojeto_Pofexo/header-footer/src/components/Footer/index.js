import './style.css';

const Footer = ({siteDoPofexo}) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }

  return(
    <footer id="footer">
      <h3>{siteDoPofexo}. &copy;Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;