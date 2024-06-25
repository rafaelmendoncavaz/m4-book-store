import { useState } from "react"
import { MdSearch } from "react-icons/md"
import style from "./style.module.scss"

export function SearchForm({ setSearch }) {

    const [value, setValue] = useState("")

    const submit = (event) => {

        event.preventDefault()

        setSearch(value)
        setValue("")
    }

    return(
        <form className={style.form} onSubmit={submit}>
            <input className="input-md" type="text" name="" id="" onChange={(e) => setValue(e.target.value)} value={value} required placeholder="Buscar livro..." />
            <button className="btn" type="submit"> <MdSearch size={20} /> </button>
        </form>
    )
}