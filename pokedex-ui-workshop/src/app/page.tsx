import PokeNavBarComp from "./components/pokeNavBarComp";
import PokemonsComp from "./components/pokemonsComp";

export default function Home() {
 const testData = [
   {
     pokemonNumber: 1,
     pokemonName:"poke1",
     pokemonType:["Water"],
     mainImage: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png"
   },
   {
     pokemonNumber: 2,
     pokemonName:"poke2",
     pokemonType:["Fire"],     
     mainImage: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/002.png"
   }
 ];


 return (
   <>
     <PokeNavBarComp></PokeNavBarComp>
     <PokemonsComp pokemons={testData}></PokemonsComp>
   </>
 );
}
