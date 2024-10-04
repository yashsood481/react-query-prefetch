const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async () => {
  try {
    const jsonData = await fetch(`${BASE_URL}/posts`);
    const data = await jsonData.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
export const getPostById = async (id) => {
  try {
    const jsonData = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await jsonData.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
