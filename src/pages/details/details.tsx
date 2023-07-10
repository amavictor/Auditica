import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetRequest } from "../../custom-hooks/get-request";
import { getNewRelease } from "../../Apicalls/Albums/albums";
import {
  getUsersRecentlyPlayed,
  getUsersTopItems,
} from "../../Apicalls/User/users";
import styled from "styled-components";
import { MusicCard } from "../../ui_elements/musicCard";
import { ArtistCard } from "../../ui_elements/artistCard";
import { TopMixCard } from "../../ui_elements/topMixCard";

export const Details = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState<string>("");

  const { data: newRelease, refetch: fetchNewReleases } = useGetRequest(
    "new-releases",
    () => getNewRelease(50, 0),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const { data: topItemsArtists, refetch: fetchTopItemsArtists } =
    useGetRequest("top-artists", () => getUsersTopItems("artists"), {
      refetchOnWindowFocus: false,
      enabled: false,
    });

  const { data: topItemsTracks, refetch: fetchTopItemsTracks } = useGetRequest(
    "top-tracks",
    () => getUsersTopItems("tracks"),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const { data: recentlyPlayed, refetch: fetchRecentlyPlayed } = useGetRequest(
    "me/player/recently-played",
    () => getUsersRecentlyPlayed(),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (state?.type === "new-release") {
      fetchNewReleases();
      setTitle("New Releases");
    } else if (state?.type === "favorite") {
      fetchTopItemsArtists();
      setTitle("From your Favourite Artists");
    } else if (state?.type === "top-mixes") {
      fetchTopItemsTracks();
      setTitle("Your Top Mixes");
    } else if (state?.type === "recently-played") {
      fetchRecentlyPlayed();
      setTitle("Recently Played");
    } else {
      fetchNewReleases();
    }
  }, [
    fetchNewReleases,
    fetchRecentlyPlayed,
    fetchTopItemsArtists,
    fetchTopItemsTracks,
    state,
  ]);
  return (
    <DetailsContainer>
      <h2>{title}</h2>
      <div>
        {state?.type === "new-release" &&
          newRelease &&
          newRelease?.data?.albums?.items.map((song: any) => (
            <MusicCard
              image={song?.images[1]?.url}
              title={song?.name}
              artist={song?.artists[0]?.name}
            />
          ))}

        {state?.type === "favorite" &&
          topItemsArtists &&
          topItemsArtists?.data?.items?.map((song: any) => (
            <ArtistCard image={song?.images[1]?.url} title={song?.name} />
          ))}

        {state?.type === "top-mixes" &&
          topItemsTracks &&
          topItemsTracks?.data?.items?.map((song: any) => (
            <TopMixCard
              image={song?.album?.images[1]?.url}
              title={song?.album?.name}
              artists={song?.artists
                .map((artists: any) => artists?.name)
                .join(", ")}
            />
          ))}

        {state?.type === "recently-played" &&
          recentlyPlayed &&
          recentlyPlayed?.data?.items?.map((song: any) => (
            <TopMixCard
              image={song?.track?.album?.images[1]?.url}
              title={song?.track?.album?.name}
              artists={song?.track?.artists
                .map((artists: any) => artists?.name)
                .join(", ")}
            />
          ))}
      </div>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.main`
  max-width: 100% !important;
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  h2 {
    font-size: clamp(1rem, 2.5rem, 2.5rem);
    margin: 2rem 0 2rem 1.5rem;
    font-weight: 700;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    width: inherit;
    height: inherit;
    justify-content: center;
  }

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
`;
