'use client';

import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavourite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const { id, name } = pokemon;
  const isFavourite = useAppSelector( state => !!state.pokemons[id] );
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch( toggleFavourite( pokemon ) );
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${ name }`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b cursor-pointer" onClick={ onToggle }>
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center">

            <div className="text-red-600">
              {
                isFavourite
                ? (<IoHeart />)
                : (<IoHeartOutline />)
              }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavourite
                  ? 'Es favorito'
                  : 'No es favorito'
                }
                
              </p>
              <p className="text-xs text-gray-500">Click to change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
