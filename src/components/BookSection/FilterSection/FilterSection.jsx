import { Category } from "./Category/Category";
import { Price } from "./Price/Price";
import { SearchForm } from "./SearchForm/SearchForm";

export function FilterSection({ cleanFilters, setSearch, setCategory }) {

    return(
        <aside>
            <SearchForm setSearch={setSearch} />
            <Category setCategory={setCategory} />
            <Price />
            <button onClick={cleanFilters}>Limpar Filtros</button>
        </aside>
    )
}