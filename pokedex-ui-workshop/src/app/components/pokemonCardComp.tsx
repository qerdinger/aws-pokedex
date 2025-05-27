"use client";


import PokemonCard from "@/app/model/pokemonCard";
import PokemonTypeBadgeComp from "./pokemonTypeBadgeComp";
import { Card } from "react-bootstrap";


interface PokemonCardCompProps {
   pokemon: PokemonCard;
}


export default function PokemonCardComp(props: PokemonCardCompProps) {


   const pokemonUrl = `/pokemon/${props.pokemon.pokemonNumber}`;


   return (
       <a href={pokemonUrl}>
           <Card>
               <Card.Img variant="top" src={props.pokemon.mainImage} />
               <Card.Body>
                   <Card.Title>{props.pokemon.pokemonName}</Card.Title>
                   <Card.Text>
                       <PokemonTypeBadgeComp pokemonTypes={props.pokemon.pokemonType} />
                   </Card.Text>
               </Card.Body>
           </Card>
       </a>
   );
}
