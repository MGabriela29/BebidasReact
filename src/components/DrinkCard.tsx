import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink:Drink
}

export default function DrinkCard({drink}:DrinkCardProps) {

    const selectRecipe = useAppStore(state => state.selectRecipe)

  return (
    <>
    <div className="shadow-xl bg-slate-100 flex flex-col rounded-lg overflow-hidden w-96 m-auto"> 
    <div className="border-y-4 border-x-4 bg-slate-100 border-slate-100 rounded-lg overflow-hidden">
        <img 
            src={drink.strDrinkThumb} 
            alt={'Imagen de ' + drink.strDrink}
            className=" hover:scale-105 transition-transform hover:rotate-3 rounded-lg w-auto h-96 object-cover"
        />
    </div>
    <div className="p-3">
        <h2 className="text-lg truncate font-black">{drink.strDrink}</h2>
        <button
            onClick={() => selectRecipe(drink.idDrink)}
            type="button"
            className="bg-orange-400 hover:bg-orange-500 mt-3 w-full p-2 font-bold text-white text-sm rounded-lg"
        >
            Ver Receta
        </button>
    </div>
</div>

</>
  )
}
