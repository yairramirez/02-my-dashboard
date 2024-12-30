import { FavouritePokemons } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: ''
}

export default async function favoritesPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small className="text-blue-500">Global State</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <FavouritePokemons />
      </div>
    </div>
  );
}
