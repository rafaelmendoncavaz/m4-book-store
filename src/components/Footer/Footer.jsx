import footer from "../../assets/FooterLogo.svg"

export function Footer() {

    return(
        <footer>
            <img src={footer} alt="Logo Books" />
            <p>
                Todos os direitos reservados &copy; Kenzie Academy Brasil
            </p>
        </footer>
    )
}