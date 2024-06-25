import { BookCard } from "./BookCard/BookCard"
import style from "./style.module.scss"

export function BookList({ search, bookSearch }) {

    return(
        <div className={style.listBox}>
            <span className="paragraph1 bold">
                Livros Listados: {bookSearch.length}
            </span>
            {
               ( search
                ? <p className={`paragraph1 ${style.result}`}>Resultados de busca para: <strong>{search}</strong></p>
                : null)
            }
            {
                bookSearch.length > 0 
                ? 
                    (<ul className={style.grid}>
                        {bookSearch.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </ul>)
                : 
                   (<p className="paragraph1">
                        Nenhum resultado encontrado
                    </p>)
            }
            
        </div>
    )
}