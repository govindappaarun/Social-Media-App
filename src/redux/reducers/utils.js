const getComparatorFn = (sort) => {
  switch (sort) {
    case "date":
      return sortDate;
    case "trending":
      return sortTrending;
    case "recent":
      return sortRecent;
  }
};

const sortDate = (order) => {
  return function (a, b) {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    if (order === "asc") {
      return aDate - bDate;
    } else {
      return bDate - aDate;
    }
  };
};

const sortTrending = (a, b) => {
  return b.likes.likeCount - a.likes.likeCount;
};

const sortRecent = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

export { sortDate, sortTrending, sortRecent, getComparatorFn };
