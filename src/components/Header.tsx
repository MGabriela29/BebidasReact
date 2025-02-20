import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname]);

    const [searchFilters, setSearchFilters] = useState({
      ingredient: '',
      category: ''
    });

    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const categories = useAppStore((state) => state.categories);
    const searchRecipes = useAppStore(state => state.searchRecipes);
    const showNotification = useAppStore(state => state.showNotification); 
    
    useEffect(() => {
        fetchCategories();
    }, []);

    function handleChange(
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) {
      setSearchFilters({
        ...searchFilters, [e.target.name]: e.target.value
      });
    }

    function handSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (Object.values(searchFilters).includes('')) {
        showNotification({
          text: "Debes llenar todos los campos solicitados.",
          error: true
        });
        return;
      }
      searchRecipes(searchFilters);
    }

    return (
      <header className={isHome ? 'bg-header bg-center bg-cover':'bg-slate-800'}>
        <div className="mx-auto container px-20 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>

                <nav className="flex gap-8">
                    <NavLink
                    className={({isActive}) => isActive? 
                    'text-orange-500 uppercase font-extrabold':
                    'text-white uppercase font-extrabold'}
                     to='/'>Home</NavLink>
                    {/* <br></br> */}
                    <NavLink 
                     className={({isActive}) => isActive? 
                    'text-orange-500 uppercase font-extrabold':
                    'text-white uppercase font-extrabold, flex gap-8 mr-40'}
                    to='/favoritos'>Favoritos</NavLink>
                </nav>
            </div>
            {
                isHome && (
                    <form 
                    onSubmit={handSubmit}
                    className="md:w-1/2 2xl:w-1/3 m-52 bg-orange-400 my-8 p-10 rounded-lg shadow space-y-6">
                  <div className="space-y-6">
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
                        value={searchFilters.ingredient}
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
                        value={searchFilters.category}
                        className="p-3 w-full rounded-lg focus:outline-none"
                        >
                          <option value="">-- Seleccione una opcion--</option>
                          {
                            categories.drinks.map(category => 
                            (<option 
                            key={category.strCategory}
                            value={category.strCategory}
                            >
                              {category.strCategory}
                            </option>))
                          }
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
    );
}