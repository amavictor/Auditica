import { requests } from "../../utils";


export const getNewRelease = (limit = 30, offset = 0) => {
  return requests({
    url: `/browse/new-releases?limit=${limit}&offset=${offset}`,
  });
};


export const getForYou = () => {
  return requests({
    url: "/me/albums",
  });
};
