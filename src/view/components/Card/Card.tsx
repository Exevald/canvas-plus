import styles from "./Card.module.css"
import { Button } from "../Button/Button";
import { AppDispatch } from "../../../model/store";
import { setCurrentSeason } from "../../../model/actionCreators";
import { connect, ConnectedProps } from "react-redux";

type CardType = {
    viewStyle: 'seasonCard' | 'gameCard', // CR enum
    season: string,
    imageSrc?: string,
}

function mapDispatchToProps(dispatcher: AppDispatch) { // CR После компонента
    return {
        setCurrentSeason: (newSeason: string) => dispatcher(setCurrentSeason(newSeason)),
    }
}
  
const connector = connect(null, mapDispatchToProps);
type CardProps = ConnectedProps<typeof connector>

type CardMergedProps = CardType & CardProps; 

// CR Тег img — одинарный
// Вместо изображения можно использовать React компоненты с SVG кодом, надо пересерчить что будет предпочтительнее
const Card = ({
    season,
    imageSrc,
    setCurrentSeason,
}: CardMergedProps) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.titleArea}`}>
                <p>Сезон {season}</p>
            </div>
            <div className={`${styles.imageWrapper}`}>
                <img src={imageSrc} alt={"PreviewImage"} className={styles.image}></img>
            </div>
            <Button onClick={() => setCurrentSeason(season)} to={"/game_collection"} pos={"seasonCard"}
                viewStyle={"default"} text={"Поиграть!"}></Button> 
        </div>
    ) // CR форматирование полетело
}

export default connect(null, mapDispatchToProps)(Card)