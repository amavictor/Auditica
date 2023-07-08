import React from "react";
import styled from "styled-components";
import { PlayIcon } from "../assets";

interface Props {
  image: string;
  title: string;
  artist: string;
}

export const MusicCard = ({ image, title, artist }: Props) => {
  return (
    <CardContainer>
      <img src={`${image}`} alt="image_item" />

      <div>
        <div>
          <h5>{title.substring(0, 13)}...</h5>
          <p>{artist}</p>
        </div>
        <PlayIcon className="musicCardIcon" />
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  transition: all 0.3s ease;
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;
  }
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
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  h5 {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    color: gray;
    margin-top: 2px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 2%;
    box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    img {
      box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
      -webkit-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: -1px 10px 7px -5px rgba(0, 0, 0, 0.48);
    }
  }
`;
