import { PriceInput } from "./PriceInput/PriceInput"
import style from "./style.module.scss"

export function Price({ setMin, min, setMax, max }) {

    return(
        <div className={style.flex}>
            <h2 className="title2">Filtrar por Preço</h2>
            <PriceInput 
            set={setMin} 
            value={min} 
            label={`Mínimo (R$)`} 
            type="min" 
            />
            <PriceInput 
            set={setMax} 
            value={max} 
            label={`Máximo (R$)`} 
            type="max" 
            />
        </div>

    )
}