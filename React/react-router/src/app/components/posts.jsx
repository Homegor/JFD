//import { useEffect } from "react";
import Post from "./post";
import PostList from "./postList";
import { useParams } from "react-router-dom";
//import query from "query-string";
//import _ from "lodash";

const Posts = () => {
  const params = useParams();
  const post = [
    { id: 1, label: "Post 1" },
    { id: 2, label: "Post 2" },
    { id: 3, label: "Post 3" },
  ];
  //const search = query.parse(location.search);
  const { postId } = params;
  //useEffect(() => console.log(search), [search]);
  //const cropPosts = search ? _(post).slice(0).take(search.count).value() : post;
  return (
    <>
      {postId ? <Post posts={post} id={postId} /> : <PostList posts={post} />}
    </>
  );
};

export default Posts;
