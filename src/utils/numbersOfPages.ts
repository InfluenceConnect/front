const numberOfPages = (count: number, pageSize: number) =>
  count % pageSize == 0 ? Math.floor(count / pageSize) : Math.floor(count / pageSize) + 1;

export default numberOfPages;
