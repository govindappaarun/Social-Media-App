import { useMemo } from "react";

function useSortFeed(feeds, sortBy, order) {
  const getComparatorFn = (sort) => {
    switch (sort) {
      case "date":
        return sortByDate;
      case "trending":
        return sortByTrending;
      case "recent":
        return sortByRecent;
    }
  };

  const sortByDate = (a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (order === "asc") {
      return aDate - bDate;
    } else {
      return bDate - aDate;
    }
  };

  const sortByTrending = (a, b) => {
    return b.likes.likeCount - a.likes.likeCount;
  };

  const sortByRecent = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  return useMemo(
    () => (feeds ? feeds.sort(getComparatorFn(sortBy)) : null),
    [(feeds, sortBy, order)]
  );
}

export { useSortFeed };
