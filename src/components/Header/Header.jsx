import logo from "../../assets/HeaderLogo.svg"
import style from "./style.module.scss"

export function Header() {

    return(
        <header>
            <div className="container">
                <div className={style.flex}>
                    <img src={logo} alt="Logo books" />
                </div>
            </div>
        </header>
    )
}