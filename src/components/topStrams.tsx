import React from "react";
import styled from "styled-components";
import { TopStreamCard } from "../ui_elements/topStreamCard";

export const TopStreamsContainer = styled.aside`
  position: sticky;
  width: 100%;
  top: 0;
  right: 0;
  background-color: var(--nav-black);
  max-height: 55%;
  overflow-y: scroll;
  transition: all 0.3s ease;
  scroll-behavior: smooth;
  padding: 15px;
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  h3 {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const TopStrams = () => {
  return (
    <TopStreamsContainer>
        <h3>Top</h3>
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />
        <TopStreamCard />

    </TopStreamsContainer>
  );
};
