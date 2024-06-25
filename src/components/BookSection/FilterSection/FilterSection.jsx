import { Category } from "./Category/Category"
import { Price } from "./Price/Price"
import { SearchForm } from "./SearchForm/SearchForm"
import style from "./style.module.scss"

export function FilterSection({ cleanFilters, setSearch, setCategory, setMin, min, setMax, max }) {

    return(
        <aside className={style.filterBox}>
            <SearchForm setSearch={setSearch} />
            <Category setCategory={setCategory} />
            <Price setMin={setMin} min={min} setMax={setMax} max={max} />
            <button className="btn" onClick={cleanFilters}>Limpar Filtros</button>
        </aside>
    )
}