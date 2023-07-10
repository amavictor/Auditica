import { requests } from "../../utils";

export const getArtist = (id: string) => {
  return requests({
    url: `/artists/${id}`,
    method: "GET",
  });
};

export const getArtistTopTracks = (id: string, country?:string) => {
  return requests({
    url: `/artists/${id}/top-tracks?market=${country}`,
    method: "GET",
  });
};
