import { useState } from "react"

export function SearchForm({ setSearch }) {

    const [value, setValue] = useState("")

    const submit = (event) => {

        event.preventDefault()

        setSearch(value)
        setValue("")
    }

    return(
        <form className="search" onSubmit={submit}>
            <input type="text" name="" id="" onChange={(e) => setValue(e.target.value)} value={value} required placeholder="Buscar livro..." />
            <button type="submit"></button>
        </form>
    )
}