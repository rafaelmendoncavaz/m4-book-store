import style from "./style.module.scss"

export function BookCard({ book }) {

    return (
        <li className={style.bookCard}>
            <div>
                <h2 className="title2">
                    {book.name}
                </h2>
                <p className="paragraph1">
                    {book.category}
                </p>
            </div>
            <span className="paragraph1 bold">
                {book.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"} )}
            </span>
        </li>
    )
}