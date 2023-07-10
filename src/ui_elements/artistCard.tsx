import React from "react";
import styled from "styled-components";
import { PlayIcon } from "../assets";

interface Props {
  image: string;
  title: string;
  onClick?: () => any;
}

export const ArtistCard = ({ image, title, onClick }: Props) => {
  return (
    <CardContainer
      onClick={onClick}
    >
      <img src={`${image}`} alt="image_item" />
      <div>
        <h5>{title}</h5>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  transition: all 0.3s ease;
  position: relative;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 20px;

  .musicCardIcon {
    transition: all 0.5s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  img {
    width: 10.6rem;
    height: 10.6rem;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.3s ease;

  }
  h5 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    color: gray;
    margin-top: 2px;
    white-space: normal;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2%;
    box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    cursor: pointer;
    img {
      box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
      -webkit-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    }
  }
`;
