import { useState } from "react";
import { BookList } from "./BookList/BookList";
import { FilterSection } from "./FilterSection/FilterSection";
import { books } from "../../data/Books";

export function BookSection() {

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")

    const booksResult = books.filter(book => {

        const searchFilter = 
            search === "" 
            ? true 
            : book.name.toLowerCase().includes(search.toLowerCase())
            || book.category.toLowerCase().includes(search.toLowerCase())

        const categoryFilter = category === "" ? true : book.category === category

        return (

            searchFilter && categoryFilter

        )
    })

    const cleanFilters = () => {

        setSearch("")
        setCategory("")

    }

    return(
        <section>
            <FilterSection cleanFilters={cleanFilters} setSearch={setSearch} setCategory={setCategory} />
            <BookList search={search} bookSearch={booksResult} />
        </section>
    )
}