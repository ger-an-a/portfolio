import Popup from "../Popup/Popup";

function PopupWithCard(props) {
  return (
    <Popup closePopup={props.closePopup} isVisible={props.isVisible} theme={props.theme} children={
      <>
        <h2 className={`popup__title popup__title_theme_${props.theme}`}>{props.cardData.title}</h2>
        <img className="popup__img" src={props.cardData.img} alt={`Изображение проекта ${props.cardData.title}`} />
        <p className="popup__about">{props.cardData.about}</p>
        <p className="popup__stack">{props.cardData.stack}</p>
        {props.cardData.link ?
          <a onClick={props.cardData.target ? props.closePopup : ''} className={`link popup__link popup__link_theme_${props.theme} popup__link_type_project`} href={props.cardData.link} target={props.cardData.target ? props.cardData.target : '__blank'} rel="noreferrer">Посмотреть проект</a>
          : <p className={`popup__link popup__link_theme_${props.theme} popup__link_type_disabled`} >Проект не размещен</p>}
        <a className="link popup__link popup__link_type_repository" href={props.cardData.repository} target="_blank" rel="noreferrer">Открыть репозиторий</a>
      </>
    } />
  )
}
export default PopupWithCard;