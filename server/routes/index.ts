import { getQuery } from "h3"

export default eventHandler((event) => {
  const url = getRequestURL(event);
  const search = Object.fromEntries(
    new URLSearchParams(url.search).entries()
  )

  console.log({url, search})

  return `Hello, ${JSON.stringify(search)}!`;
});

