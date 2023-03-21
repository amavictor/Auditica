import React from "react";
import styled from "styled-components";
import { Like, Next, Pause, Previous, Repeat, Shuffle, Volume } from "../assets";

const AudioPlayerContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--nav-black);
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UtilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding-left: 0.7rem;

`
const DetailsContainer = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  gap:3rem;
  img{
    width: 3.3rem;
    height: 3.3rem;
    object-fit: contain;
  }
`
const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
`
const PlayerBoxDetails = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  p{
    font-size: 0.8rem;
  }
  p:last-child{
    color: gray;
    margin-left: 10px;
  }
  span{
    font-size: 0.8rem;
    margin: auto;
  }
`
const PlayerBoxScrubber = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  p{
    font-size: 0.7rem;
  }
`
const AccessibilityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:15px;
  flex: 1;
`
const ScrubberContainer = styled.div`
  background-color: white;
  width: 35rem;
  height: 4px;
  border-radius: 2px;
  div{
    width: 80%;
    background-color: var(--primary);
    height: 4px;
    border-radius: 2px;

  }
`

export const AudioPlayer = () => {
  return (
    <AudioPlayerContainer>
      <UtilityContainer>
        <Shuffle className="iconsAudio" />
        <Previous className="iconsAudio" />
        <Pause />
        <Next className="iconsAudio" />
        <Repeat className="iconsAudio" />
      </UtilityContainer>
      <DetailsContainer>
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="" />
        <PlayerBox>
          <PlayerBoxDetails>
            <p>On The Ground</p><span> . </span><p>Rose</p>
          </PlayerBoxDetails>

          <PlayerBoxScrubber>
            <p>2:45</p>
            <ScrubberContainer>
              <div/>
            </ScrubberContainer>
            <p>3:27</p>
          </PlayerBoxScrubber>
        </PlayerBox>
      </DetailsContainer>
      <AccessibilityContainer>
        <Like />
        <Volume/>
      </AccessibilityContainer>
    </AudioPlayerContainer>
  );
};
