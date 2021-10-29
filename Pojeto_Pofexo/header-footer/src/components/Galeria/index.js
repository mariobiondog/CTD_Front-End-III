import './style.css';

const Galeria = ({buttonInscrever}) => {
  return(
    <section id="galeria">
      <div>
        <img src="https://img.r7.com/images/2014/05/12/knvo17l5v_5akv3vxpc4_file.jpg?dimensions=702x431" alt="pofexo"></img>
        <button>{buttonInscrever}</button>
      </div>
    </section>
  )
}

export default Galeria;