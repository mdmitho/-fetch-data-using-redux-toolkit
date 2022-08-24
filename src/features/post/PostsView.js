
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    // const user = useSelector((state)=> console.log(state))
    const {isLoading, posts, error} = useSelector((state)=> state.posts)

const dispatch = useDispatch()

useEffect(()=>{
dispatch(fetchPosts())
},[])

    return (
      <div>
        <h1>PostsView</h1>
        {isLoading && <h1>Loading....</h1>}
        {error && <h1>{error}</h1>}
        <section>
          {posts &&
            posts.map((post) => {
              return (
                <article>
                  <h1> Title : {post.title}</h1>
                  <p>Comment : {post.body}</p>
                </article>
              );
            })}
        </section>
      </div>
    );
};

export default PostsView;