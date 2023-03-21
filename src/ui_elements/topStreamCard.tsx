import React from "react";
import styled from "styled-components";
import { TopStreamLike, TopStreamOptions } from "../assets";

const CardBody = styled.div`
  width: 100%;
  hr {
    width: 80%;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 10px auto 0 auto;
    height: 1px;
    border: none;
    box-sizing: content-box;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > p {
    font-size: 0.8rem;
  }
  img {
    height: 40px;
    height: 40px;
    object-fit: contain;
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 10px;
    div {
      display: block;
      p:first-child {
        font-weight: 500;
        font-size: 0.7rem;
      }
      p:last-child {
        font-size: 0.6rem;
        color: regba(255, 255, 255, 0.2);
      }
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 0.8rem;
    }
    .cardIcon {
      width: 15px;
      height: 15px;
    }
  }
`;

export const TopStreamCard = () => {
  return (
    <CardBody>
      <CardContainer>
        <p>1</p>
        <div>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            alt=""
          />
          <div>
            <p>MistleToe</p>
            <p>Justin Bieber</p>
          </div>
        </div>
        <div>
          <p>3:54</p>
          <TopStreamLike className="cardIcon" />
          <TopStreamOptions className="cardIcon" />
        </div>
      </CardContainer>
      <hr />
    </CardBody>
  );
};
