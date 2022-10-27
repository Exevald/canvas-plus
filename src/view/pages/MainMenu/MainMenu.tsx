import styles from "./MainMenu.module.css"
import Season2021Image from "../../images/main-menu/season2021_preview.svg"
import Season2022Image from "../../images/main-menu/season2022_preview.svg"
import Season2023Image from "../../images/main-menu/season2023_preview.svg"
import {TopPanel} from "../../components/TopPanel/TopPanel";

import {Card} from "../../components/Card/Card";


const MainMenu = () => {
    return (
        <div>
            <TopPanel></TopPanel>
            <div className={`${styles.mainMenu}`}>
                <div className={`${styles.mainMenu__cardsWrapper}`}>
                    <Card viewStyle={"seasonCard"} text={"Сезон 2021"} imageSrc={Season2021Image}></Card>
                    <Card viewStyle={"seasonCard"} text={"Сезон 2022"} imageSrc={Season2022Image}></Card>
                    <Card viewStyle={"seasonCard"} text={"Сезон 2023"} imageSrc={Season2023Image}></Card>
                </div>
            </div>
        </div>
    )
}

export {MainMenu}