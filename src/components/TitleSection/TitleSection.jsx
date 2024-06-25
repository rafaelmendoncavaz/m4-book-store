import style from "./style.module.scss"

export function TitleSection() {

    return(
        <section className={style.titleSection}>
            <div className="container">
                <h1 className="title1 white">
                    Encontre o seu livro favorito
                </h1>
            </div>
        </section>
    )
}