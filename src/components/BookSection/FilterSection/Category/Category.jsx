import { categories } from "../../../../data/Categories"
import style from "./style.module.scss"

export function Category({ setCategory }) {

    return(
        <div className={style.categoryFilters}>
            <h2 className="title2">
                Filtrar por categoria
            </h2>
            <ul>
                {
                    categories.map(category => (
                        <li className="paragraph1" key={category.id} onClick={() => setCategory(category.name)}>
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}