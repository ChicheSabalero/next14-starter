import { connectToDb } from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDb;

    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.error(err);
    throw new Error(`Failed to Fetch Posts`);
  }
};
export const getPost = async (slug) => {
  try {
    connectToDb;

    const posts = await Post.find({ slug });

    return posts;
  } catch (error) {
    console.error(err);
    throw new Error(`Failed to Fetch Post!`);
  }
};
export const getUsers = async (id) => {
  try {
    connectToDb;

    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.error(err);
    throw new Error(`Failed to Fetch User`);
  }
};
export const getUser = async () => {
  try {
    connectToDb;

    const users = await User.find();

    return users;
  } catch (error) {
    console.error(err);
    throw new Error(`Failed to Fetch Users`);
  }
};
