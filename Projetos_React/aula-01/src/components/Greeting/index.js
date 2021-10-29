import css from './style.css'

function Greeting({user}) {
  const greeting = () => {
    if (user.lastName === '02') {
      return `${user.firstName} ${user.lastName}`
    } 
      return 'Turma Desconhecida'
  }

  return (
    <div>
      <h1>Olá, {greeting()}</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  )

}

export default Greeting;