import axios from "axios";

export const getData = async () => {
  // const data = await axios.get(`${import.meta.env.VITE_API}`);
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
  // const data = await axios.get(
  //   "https://jsonplaceholder.typicode.com/posts/1/comments"
  // );
  return data;
};
