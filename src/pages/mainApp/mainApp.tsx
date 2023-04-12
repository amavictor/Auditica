import { useEffect } from "react";
import styled from "styled-components";
import { getForYou, getNewRelease } from "../../apicalls";
import { useGetRequest } from "../../custom-hooks/get-request";
import { MusicCard } from "../../ui_elements/musicCard";

const MainContainer = styled.main`
  max-width: 100% !important;
  height: 90vh;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(238, 73, 80, 0.3);
    border-radius: 10px;
  }
  /* 
  div {
    width: 100%;
    height: 100%;
    p {
      margin-top: 20px;
    }
  } */
`;

const Banner = styled.section`
  width: 100%;
  height: 40vh;
  position: relative;
  transition: all 0.3s ease;
  img {
    position: absolute;
    z-index: -2;
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(70%) contrast(120%) saturate(120%);
    transition: all 0.3s ease-in;
  }
  &:hover {
    &::after {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6) 30%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    & > div {
      section {
        h5,
        h4,
        h2 {
          opacity: 1;
          transform: translateY(-5px);
        }
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in;
  }
  & > div {
    width: inherit;
    height: fit-content;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;

    section {
      margin-right: 5%;
      margin-bottom: 5%;
      h5 {
        font-size: 0.7rem;
        margin-bottom: 1rem;
        font-weight: 700;
        opacity: 0;
        transform: translateY(0px);
        transition: all 0.3s ease-in;
      }
      h4 {
        font-size: 1.5rem;
        font-weight: lighter;
        opacity: 0;
        transform: translateY(0px);
        transition: all 0.3s ease-in;
      }
      h2 {
        font-size: 2.2rem;
        font-weight: 700;
        opacity: 0;
        transform: translateY(0px);
        transition: all 0.3s ease-in;
      }
    }
  }
`;
const Songs = styled.section`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  max-height: 16rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 982px;
  scroll-behavior: smooth;
  padding: 20px;
  &::focus-within {
    gap: 5rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  transition: all 0.5s ease;
`;
const SongsContainer = styled.div`
  margin-top: 6%;

`;
const SongsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  h3 {
    font-weight: 700;
  }
  p {
    color: var(--primary);
    font-size: 0.8rem;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const MainApp = () => {
  const {
    data: newRelease,
    isLoading,
    isFetching,
    isError,
  } = useGetRequest("new-releases", getNewRelease);
  const {
    data: forYou,
    
  }=useGetRequest("for-you",getForYou)
  //Please stop now 

  return (
    <MainContainer>
      <Banner>
        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <div>
          <section>
            <h5>Featured songs</h5>
            <h4>Post Malone</h4>
            <h2>Circles</h2>
          </section>
        </div>
      </Banner>
      <SongsContainer>
        <SongsTitleContainer>
          <h3>New Releases </h3>
          <p>See more</p>
        </SongsTitleContainer>
        <Songs> 
          {
            newRelease?.data?.albums?.items.map((song: any) =>
              <MusicCard
                image={song?.images[1]?.url}
                title={song?.name}
                artist={song?.artists[0]?.name}
              />)
          }
        </Songs>
      </SongsContainer>

      <SongsContainer>
        <SongsTitleContainer>
          <h3>Made For You </h3>
          <p>See more</p>
        </SongsTitleContainer>
        <Songs>
          {/* <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard /> */}
        </Songs>
      </SongsContainer>

      <SongsContainer>
        <SongsTitleContainer>
          <h3>Your Top Mix </h3>
          <p>See more</p>
        </SongsTitleContainer>
        <Songs>
          {/* <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard /> */}
        </Songs>
      </SongsContainer>

      <SongsContainer>
        <SongsTitleContainer>
          <h3>Recently Played </h3>
          <p>See more</p>
        </SongsTitleContainer>
        <Songs>
          {/* <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard /> */}
        </Songs>
      </SongsContainer>
    </MainContainer>
  );
};
