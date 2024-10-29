import Tinybird from "@tinybirdco/flock.js";

export const getTinybird = () => {
  const tb = new Tinybird({ token: process.env.TINYBIRD_API_KEY });
  return tb;
};
