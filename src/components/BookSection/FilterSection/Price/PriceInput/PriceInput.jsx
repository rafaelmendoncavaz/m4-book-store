import style from "./style.module.scss"

export function PriceInput({ set, value, label, type }) {

    return(
        <div className={style.flex}>
            <label 
            className="label" 
            htmlFor={type}>
                {label}
            </label>
            <input 
            className="input-sm" 
            type="number" 
            name={type} 
            id={type} 
            onChange={(e) => set(e.target.value)} 
            value={value} min={"1"} 
            />
        </div>
    )
}