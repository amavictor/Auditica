import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getForYou, getNewRelease } from "../../Apicalls/Albums/albums";
import { useGetRequest } from "../../custom-hooks/get-request";
import { MusicCard } from "../../ui_elements/musicCard";
import { UserContext } from "../../contexts/contexts";
import {
  getUsersRecentlyPlayed,
  getUsersTopItems,
} from "../../Apicalls/User/users";
import { ArtistCard } from "../../ui_elements/artistCard";
import { TopMixCard } from "../../ui_elements/topMixCard";
import { useNavigate } from "react-router-dom";
import { randomizeIndex } from "../../utils";

export const MainApp = () => {
  // const{user} = useContext(UserContext)
  const navigate = useNavigate();

  const {
    data: newRelease,
    isLoading,
    isFetching,
    isError,
  } = useGetRequest("new-releases", () => getNewRelease(), {
    refetchOnWindowFocus: false,
  });

  const { data: topItemsArtists } = useGetRequest(
    "top-artists",
    () => getUsersTopItems("artists"),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: topItemsTracks } = useGetRequest(
    "top-tracks",
    () => getUsersTopItems("tracks"),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: recentlyPlayed } = useGetRequest(
    "me/player/recently-played",
    () => getUsersRecentlyPlayed(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const [randomIndexArtists, setRandomIndexArtists] = useState<number | null>();
  const [randomIndexTracks, setRandomIndexTracks] = useState<number | null>();
  const [randomIndexTracks2, setRandomIndexTracks2] = useState<number | null>();
  const [randomIndexTracks3, setRandomIndexTracks3] = useState<number | null>();

  const [randomIndexRecentlyPlayed, setRandomIndexRecentlyPlayed] = useState<
    number | null
  >();

  useEffect(() => {
    if (topItemsArtists?.data?.items) {
      setRandomIndexArtists(randomizeIndex(topItemsArtists.data.items));
    }
    if (recentlyPlayed?.data?.items) {
      setRandomIndexRecentlyPlayed(randomizeIndex(recentlyPlayed?.data?.items));
    }
    if (topItemsTracks?.data?.items) {
      setRandomIndexTracks(randomizeIndex(topItemsTracks?.data?.items));
    }
    if (topItemsTracks?.data?.items) {
      setRandomIndexTracks2(randomizeIndex(topItemsTracks?.data?.items));
    }
    if (topItemsTracks?.data?.items) {
      setRandomIndexTracks3(randomizeIndex(topItemsTracks?.data?.items));
    }
  }, [topItemsArtists]);

  const handleNavigateToArtist = (id: string) => {
    navigate(`/artist/${id}`);
  };
  return (
    <MainContainer>
      <Banner>
        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <aside>
          <h5>Good Morning</h5>
          {/* <h4>{user?.display_name }</h4> */}
        </aside>
        <div>
          <section>
            <h5>Featured songs</h5>
            <h4>Post Malone</h4>
            <h2>Circles</h2>
          </section>
        </div>
      </Banner>

      <QuickAccess>
        <QuickAccessCard>
          <img
            src={recentlyPlayed?.data?.items[0]?.track?.album?.images[1]?.url}
            alt="lastPlayed"
          />
          <p>{recentlyPlayed?.data?.items[0]?.track?.album?.name}</p>
        </QuickAccessCard>

        <QuickAccessCard>
          <img
            src={
              topItemsArtists?.data?.items[
                randomIndexArtists ? randomIndexArtists : 0
              ]?.images[1]?.url
            }
            alt="lastPlayed"
          />
          <p>
            {
              topItemsArtists?.data?.items[
                randomIndexArtists ? randomIndexArtists : 0
              ]?.name
            }
          </p>
        </QuickAccessCard>

        <QuickAccessCard>
          <img
            src={
              topItemsTracks?.data?.items[
                randomIndexTracks ? randomIndexTracks : 5
              ]?.album?.images[1]?.url
            }
            alt="lastPlayed"
          />
          <p>
            {
              topItemsTracks?.data?.items[
                randomIndexTracks ? randomIndexTracks : 5
              ]?.album?.name
            }
          </p>
        </QuickAccessCard>

        <QuickAccessCard>
          <img
            src={
              topItemsTracks?.data?.items[
                randomIndexTracks2 ? randomIndexTracks2 : 13
              ]?.album?.images[1]?.url
            }
            alt="lastPlayed"
          />
          <p>
            {
              topItemsTracks?.data?.items[
                randomIndexTracks2 ? randomIndexTracks2 : 13
              ]?.album?.name
            }
          </p>
        </QuickAccessCard>

        <QuickAccessCard>
          <img
            src={
              recentlyPlayed?.data?.items[
                randomIndexRecentlyPlayed ? randomIndexRecentlyPlayed : 16
              ]?.track?.album?.images[1]?.url
            }
            alt="lastPlayed"
          />
          <p>
            {
              recentlyPlayed?.data?.items[
                randomIndexRecentlyPlayed ? randomIndexRecentlyPlayed : 16
              ]?.track?.album?.name
            }
          </p>
        </QuickAccessCard>

        <QuickAccessCard>
          <img
            src={
              topItemsTracks?.data?.items[
                randomIndexTracks3 ? randomIndexTracks3 : 12
              ]?.album?.images[1]?.url
            }
            alt="lastPlayed"
          />
          <p>
            {
              topItemsTracks?.data?.items[
                randomIndexTracks3 ? randomIndexTracks3 : 12
              ]?.album?.name
            }
          </p>
        </QuickAccessCard>
      </QuickAccess>

      <AllSongsHolder>
        <SongsContainer>
          <SongsTitleContainer>
            <h3>New Releases </h3>
            <p
              onClick={() =>
                navigate("/details", { state: { type: "new-release" } })
              }
            >
              See more
            </p>
          </SongsTitleContainer>
          <Songs>
            {newRelease?.data?.albums?.items.map((song: any) => (
              <MusicCard
                image={song?.images[1]?.url}
                title={song?.name}
                artist={song?.artists[0]?.name}
              />
            ))}
          </Songs>
        </SongsContainer>

        <SongsContainer>
          <SongsTitleContainer>
            <h3>From Your Favourite Artists</h3>
            <p
              onClick={() =>
                navigate("/details", { state: { type: "favorite" } })
              }
            >
              See more
            </p>
          </SongsTitleContainer>
          <Songs>
            {topItemsArtists?.data?.items?.map((song: any) => (
              <ArtistCard
                image={song?.images[1]?.url}
                title={song?.name}
                onClick={() =>
                  navigate(`/artists/${song?.name}`, {
                    state: { details: song },
                  })
                }
                key={song?.id}
              />
            ))}
          </Songs>
        </SongsContainer>

        <SongsContainer>
          <SongsTitleContainer>
            <h3>Your Top Mixes</h3>
            <p
              onClick={() =>
                navigate("/details", { state: { type: "top-mixes" } })
              }
            >
              See more
            </p>
          </SongsTitleContainer>
          <Songs>
            {topItemsTracks?.data?.items?.map((song: any) => (
              <TopMixCard
                image={song?.album?.images[1]?.url}
                title={song?.album?.name}
                artists={song?.artists
                  .map((artists: any) => artists?.name)
                  .join(", ")}
              />
            ))}
          </Songs>
        </SongsContainer>

        <SongsContainer>
          <SongsTitleContainer>
            <h3>Recently Played </h3>
            <p
              onClick={() =>
                navigate("/details", {
                  state: { type: "recently-played" },
                })
              }
            >
              See more
            </p>
          </SongsTitleContainer>
          <Songs>
            {recentlyPlayed?.data?.items?.map((song: any) => (
              <TopMixCard
                image={song?.track?.album?.images[1]?.url}
                title={song?.track?.album?.name}
                artists={song?.track?.artists
                  .map((artists: any) => artists?.name)
                  .join(", ")}
              />
            ))}
          </Songs>
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
      </AllSongsHolder>
    </MainContainer>
  );
};

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
  height: 25vh;
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
  aside {
    padding-left: 3rem;
    padding-top: 3rem;
    width: fit-content;
    h5 {
      font-size: clamp(1rem, 2.5rem, 2.5rem);
      font-weight: 700;
    }
    h4 {
      font-size: clamp(1rem, 2rem, 2rem);
      font-weight: 500;
    }
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

const QuickAccess = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  background-color: rgba(255, 255, 255, 0.02);
  margin-top: 5%;
  border-radius: 1rem;
  transition: all 0.5s ease;
  padding: 2%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const QuickAccessCard = styled.div`
  display: flex;
  width: 18vw;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 1% 0;
  border-radius: 0.5rem;
  align-items: center;
  padding-right: 0.5rem;
  gap: 6%;

  p {
    font-size: clamp(0.8rem, 1.1rem, 1.1rem);
    font-weight: 500;
  }

  img {
    width: 5vw;
    height: 10vh;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

const AllSongsHolder = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  padding: 2%;
  margin-top: 5%;
  border-radius: 1rem;
`;
const Songs = styled.section`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  max-height: 16rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 61vw;
  scroll-behavior: smooth;
  padding: 2%;
  &::focus-within {
    gap: 5rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  transition: all 0.5s ease;
`;
const SongsContainer = styled.div`
  margin-top: 5%;
`;
const SongsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  h3 {
    font-weight: 700;
    font-size: clamp(1rem, 1.5rem, 1.5rem);
  }
  p {
    color: var(--primary);
    font-size: clamp(0.8rem, 1.1rem, 1.1rem);

    &:hover {
      cursor: pointer;
      opacity: 0.9;
      text-decoration: underline;
    }
  }
`;
