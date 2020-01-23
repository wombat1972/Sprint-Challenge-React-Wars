import React, { useEffect, useState } from "react";
import axios from "axios";
import StarwarsCard from "./StarwarsCard";
import styled from "styled-components";

const Background = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export default function StarwarsGrid() {

    const [card, setCard] = useState([]);

    useEffect(() => {
      axios
          .get("https://swapi.co/api/people/")
          .then(response => {
              console.log(response);
              setCard(response.data.results);
          })
          .catch(err => {
              console.log("this is a error", err);
          })
  }, [] );

  return (
      <Background>
        {card.map((item) => {
          return (
              
            <StarwarsCard
              name={item.name}
              birthYear={item.birth_year}
              gender={item.gender}
              skinColor={item.skin_color}
              hairColor={item.hair_color}
              height={item.height}
            />
                 
             
          )
             
          })}
      </Background>
  )
}