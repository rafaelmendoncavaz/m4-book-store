import footer from "../../assets/FooterLogo.svg"
import style from "./style.module.scss"

export function Footer() {

    return(
        <footer className={style.footer}>
            <div className="container">
                <div className={style.flex}>
                    <img src={footer} alt="Logo Books" />
                    <p className="paragraph1 white">
                        Todos os direitos reservados &copy; Kenzie Academy Brasil
                    </p>
                </div>
            </div>
        </footer>
    )
}