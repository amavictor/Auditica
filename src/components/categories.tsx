import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.aside`
  width: 100%;
  height: 45%;
  background-color: var(--background-black);
  position: sticky;
  bottom: 0;
  right: 0;
  margin-top: 10px;
  h3{
    font-size:1rem;
    margin-bottom: 10px;
  }

`;
const CategoryCards = styled.div`
  width: 8.6rem;
  height: 5rem;
  position: relative;
  display: flex;
  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
  img {
    position: absolute;
    z-index: -2;
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 4px;

  }
  P {
    z-index: 2;
    margin: auto;
    align-self: center;
    justify-self: center;
    font-weight: 700;
  }
`;
const Scroller = styled.div`
  height: 90%;
  overflow-y: scroll;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Categories = () => {
  return (
    <CategoryContainer>
      <h3>Categories</h3>
      <Scroller>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
          <p>Pop</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1568547741072-0c2468182867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
          <p>Chill</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>Podcast</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>Christmas</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1562048048-86d659689440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
          <p>Romans</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>Hip Hop</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>Rock</p>
        </CategoryCards>
        <CategoryCards>
          <img src="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>Jazz</p>
        </CategoryCards>
      </Scroller>
    </CategoryContainer>
  );
};
