import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getArtist, getArtistTopTracks } from "../../Apicalls/Artists/artists";
import { PlayIcon } from "../../assets";
import { useGetRequest } from "../../custom-hooks/get-request";
import { addNumberComma, convertToMinutes } from "../../utils";
import { UserContext } from "../../contexts/contexts";

export const ArtistPage = () => {
  const { state } = useLocation();
  const { details } = state;
  const { user } = useContext(UserContext);
  console.log(user.country, "user......");
  const { data: artistDetail } = useGetRequest(
    "Artist-detail",
    () => getArtist(details?.id),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const { data: artistTopTracks } = useGetRequest(
    "Artist-top-tacks",
    () => getArtistTopTracks(details?.id, user?.country),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );
  // console.log(artistDetail?.data, "Api call");
  console.log(artistTopTracks?.data, "top-track");

  return (
    <Container>
      <ArtistBanner>
        <img src={artistDetail?.data?.images[0]?.url} alt={"backdrop"} />
        <div>
          <BannerDetail>
            <img src={artistDetail?.data?.images[0]?.url} alt="artist" />
            <h3>{artistDetail?.data?.name}</h3>
            <p>
              {addNumberComma(artistDetail?.data?.followers?.total)} Followers
            </p>
          </BannerDetail>
          <GenreContainer>
            {artistDetail?.data?.genres.map((genre: string) => (
              <GenreButtons>{genre}</GenreButtons>
            ))}
          </GenreContainer>
        </div>
      </ArtistBanner>

      <PlayContainer>
        <PlayButton />
        <FollowButton>Follow</FollowButton>
      </PlayContainer>

      <h2>Popular</h2>

      <PopularContainer>
        <TracksContainer>
          {artistTopTracks?.data?.tracks.map((track: any) => (
            <TrackContainer>
              <div>
                <img src={track?.album?.images[2]?.url} alt={"album"} />
                <p>{track?.name}</p>
              </div>

              <p>{convertToMinutes(track?.duration_ms)}</p>
            </TrackContainer>
          ))}
        </TracksContainer>

        <LikedSongsContainer>
          <h4>Liked Songs</h4>
          <LikedSongsContainer>
            <div>
              <img src={artistDetail?.data?.images[0]?.url} alt="artist" />
            </div>
          </LikedSongsContainer>
        </LikedSongsContainer>
      </PopularContainer>
    </Container>
  );
};

const Container = styled.main`
  max-width: 100% !important;
  height: 90vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  h2 {
    margin: 4%;
    font-size: clamp(1.2rem, 2.5rem, 2.5rem);
    font-weight: 700;
  }
`;
const ArtistBanner = styled.header`
  width: 100%;
  height: 40vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1));
  }

  > div {
    padding: 0 4%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: auto 0;
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
    object-position: center;
  }
`;

const BannerDetail = styled.aside`
  img {
    width: clamp(4rem, 11rem, 11rem);
    height: clamp(4rem, 11rem, 11rem);
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    font-size: clamp(1.2rem, 2.5rem, 2.5rem);
    font-weight: 700;
    margin: 0.7rem 0;
  }
  p {
    font-weight: 600;
  }
`;

const GenreButtons = styled.button`
  color: white;
  padding: 0.6rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: none;
  outline: none;
  width: fit-content;
`;

const FollowButton = styled.button`
  color: white;
  border: solid 1px white;
  padding: 0.5rem 2rem;
  background-color: transparent;
  border-radius: 4px;
  width: fit-content;
  font-size: 1rem;
  font-weight: 500;
  max-height: 3rem;
`;

const GenreContainer = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;
  margin-top: 1.2rem;
`;

const PlayContainer = styled.section`
  margin-top: 4%;
  margin-left: 1%;
  padding: 2% 3%;
  background-color: rgba(255, 255, 255, 0.04);
  width: 99%;
  display: flex;
  justify-content: flex-start;
  gap: 4%;
  align-items: center;
  border-radius: 1rem;
`;

const PlayButton = styled(PlayIcon)`
  width: 5rem;
  height: 5rem;
`;

const PopularContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
`;
const LikedSongsContainer = styled.div`
  height: 30vh;
  width: 100%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const LikedImageContainer = styled.div`
  position: relative;
`

const TracksContainer = styled.section`
  width: 100%;
`;
const TrackContainer = styled.div`
  display: flex;
  margin-left: 1%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2% 4%;
  border-radius: 0.7rem;
  transition: all ease 0.1s;

  > p {
    color: gray;
  }

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.04);
  }

  > div {
    display: flex;
    align-items: center;
    width: 30%;
    gap: 10%;
    p {
      font-weight: 600;
    }
  }

  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
`;

const DiscoGraphyContainer = styled.section``;
