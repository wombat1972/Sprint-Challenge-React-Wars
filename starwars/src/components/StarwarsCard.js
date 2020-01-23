import React from "react";
import styled from "styled-components";

const Name = styled.h1`
    color: white;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`;

const Info = styled.h2`
    color: white;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`;

const CardBackground = styled.div`
    margin: 0 auto;
    width: 23%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    border: 2px solid white;
    border-radius: 15px;
`;


const StarwarsCard = props => {
    return (
      <CardBackground>
        <Name>{props.name}</Name>
        <Info>D.O.B.: {props.birthYear}</Info>
        <Info>Gender: {props.gender}</Info>
        <Info>Complextion: {props.skinColor}</Info>
        <Info>Hair: {props.hairColor}</Info>
        <Info>Height: {props.height}</Info>
      </CardBackground>
    );
  };
  export default StarwarsCard;


  
