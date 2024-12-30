import axios from "axios";

export type Post = {
  id: number;
  title: string;
  description: string;
};

export const fetchPostsByKeyword = async (keyword: string) => {
  try {
    const response = await axios.get(`/api/posts?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
