import { useState } from "react"
import { BookList } from "./BookList/BookList"
import { FilterSection } from "./FilterSection/FilterSection"
import { books } from "../../data/Books"
import style from "./style.module.scss"

export function BookSection() {

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    const booksResult = books.filter(book => {

        const searchFilter = 
            search === "" 
            ? true 
            : book.name.toLowerCase().includes(search.toLowerCase())
            || book.category.toLowerCase().includes(search.toLowerCase())

        const categoryFilter = category === "" ? true : book.category === category

        const minPrice = min === "" ? true : book.price >= Number(min)
        
        const maxPrice = max === "" ? true : book.price <= Number(max)

        return searchFilter && categoryFilter && minPrice && maxPrice

    })

    const cleanFilters = () => {

        setSearch("")
        setCategory("")
        setMin("")
        setMax("")

    }

    return(
        <section>
            <div className="container">
                <div className={style.flex}>
                    <FilterSection 
                    cleanFilters={cleanFilters} 
                    setSearch={setSearch} 
                    setCategory={setCategory} 
                    setMin={setMin}
                    min={min}
                    setMax={setMax}
                    max={max}
                    />
                    <BookList 
                    search={search} 
                    bookSearch={booksResult} 
                    />
                </div>
            </div>
        </section>
    )
}