import { BookCard } from "./BookCard/BookCard";

export function BookList({ search, bookSearch }) {

    return(
        <div>
            <span>
                Livros Listados: {bookSearch.length}
            </span>
            {
               ( search
                ? <p>Resultados de busca para: {search}</p>
                : null)
            }
            {
                bookSearch.length > 0 
                ? 
                    (<ul>
                        {bookSearch.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </ul>)
                : 
                   (<p>
                        Nenhum resultado encontrado
                    </p>)
            }
            
        </div>
    )
}