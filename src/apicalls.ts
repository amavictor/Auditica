import { requests } from "./utils";


export const getNewRelease = () => {
  return requests({
    url: "/browse/new-releases",
  });
};


export const getForYou = () => {
  return requests({
    url: "/me/albums",
  });
};
