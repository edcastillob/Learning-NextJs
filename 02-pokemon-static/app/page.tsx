
import RootLayout from "./layout";
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { PokemonList, SmallPokemon } from "@/interfaces";


interface props{
	pokemons: SmallPokemon[]
}

  
  export default function Home(props: props) {
	console.log(props);

	return (
		<RootLayout title="Listado de Pokemons">
		
	  </RootLayout>
	
	);
}


	
export const getStaticProps: GetStaticProps = async (ctx) => {
	
	  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');
	  console.log(data.results[0].name)
	  
	  return {
		props: {
		  pokemons: data.results
		
	  }
	}
}

  