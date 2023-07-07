import { requests } from "../../utils";


export const getNewRelease = (limit?: any, offset?: any) => {
  if (limit && offset) {
    return requests({
      url: `/browse/new-releases?limit=${limit}&offset=${offset}`,
    });
  }
  return requests({
    url: `/browse/new-releases`,
  });
};


export const getForYou = () => {
  return requests({
    url: "/me/albums",
  });
};
