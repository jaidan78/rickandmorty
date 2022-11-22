import style from './Card.module.css'

export default function Card(props) {
  return (
    <div className={`${style.divCard}`}>
      <div className={`${style.position}`}>
        <img className={`${style.pin}`} src='../images/pinBlack2.png' />
        <button className={`${style.boton}`} 
        onClick={props.onClose}>X</button>
      </div>
      <div>
        <img className={`${style.image}`} src={props.image} alt={props.name} />
        <h6 className={`${style.nombre}`} >{props.name}</h6>
      </div>
      <div>
        <span className={`${style.span}`}>{props.species}</span>
        <span className={`${style.span}`}>{props.gender}</span>
      </div>
    </div>
  );
}
