import { ChangeEvent, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

    const {pathname} =useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    // console.log(isHome)

    const [searchParams,setSearchParams] = useState({
      ingredient:'',
      category:''
    })

    function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>){
      setSearchParams({
        ...searchParams,[e.target.name]:e.target.value
      })
    }

  return (
    <header className={isHome ? 'bg-header bg-cover':'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>

                <nav className="flex gap-4">
                    <NavLink
                    className={({isActive}) => isActive? 
                    'text-orange-500 uppercase font-bold':
                    'text-white uppercase font-bold'}
                     to='/'>Home</NavLink>
                    {/* <br></br> */}
                    <NavLink 
                     className={({isActive}) => isActive? 
                    'text-orange-500 uppercase font-bold':
                    'text-white uppercase font-bold'}
                    to='/favoritos'>Favoritos</NavLink>
                </nav>
            </div>
            {
                isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                  <div className="space-y-4">
                    <label 
                      htmlFor="ingredient"
                      className="block text-white uppercase font-extrabold text-lg">
                        Nombre o Ingredientes
                      </label>
                      <input 
                        id='ingredient'
                        type="text" 
                        name="ingredient"
                        onChange={handleChange}
                        className="p-3 w-full rounded-lg focus:outline-none"
                        placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila Café"
                        />
                  </div>
                  <div className="space-y-4">
                    <label 
                      htmlFor="category"
                      className="block text-white uppercase font-extrabold text-lg">
                        Categoría
                      </label>
                      <select 
                        id='category'
                        name="category"
                        onChange={handleChange}
                        className="p-3 w-full rounded-lg focus:outline-none"
                        >
                          <option value="">-- Seleccione --</option>
                        </select>
                  </div>
                  <input 
                    type="submit"
                    className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" 
                    value="Buscar Recetas" />
                </form>
                )
            }
        </div>
    </header>

  )
}
