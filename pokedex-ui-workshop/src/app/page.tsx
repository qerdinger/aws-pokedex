'use client'
import PokemonsComp from "@/app/components/pokemonsComp";
import PokeNavBar from "@/app/components/pokeNavBarComp";
import PokemonCard from "@/app/model/pokemonCard";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";


export default function Home() {


 const [pokemons, setPokemons] = useState<PokemonCard[]>();


 useEffect(() => {
   const fetchData = async () => {
     const resp = await fetch('/api/pokemon');
     if (resp.ok) {
       const pokemons: PokemonCard[] = (await resp.json()).items;
       console.log(pokemons);
       setPokemons(pokemons);
     }
   };


   fetchData()
     // Making sure to log errors on the console
     .catch(error => {
       console.error(error);
     });
 }, []);


 return (
   <>
     <PokeNavBar></PokeNavBar>
     {pokemons ?
       <PokemonsComp pokemons={pokemons}></PokemonsComp> :
       <Container>
         <Row className="justify-content-md-center p-2">
           <Spinner className='p-2' animation='border' role='status' />
         </Row>
         <Row className="justify-content-md-center p-2">
           Loading Pokémons...
         </Row>
       </Container>
     }
   </>
 );
}
