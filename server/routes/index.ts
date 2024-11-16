import { getQuery } from "h3"

export default eventHandler((event) => {
  const { name } = getQuery(event);

  console.log({name})

  return `Hello, ${name}!`;
});
