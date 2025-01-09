'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getPosts from '@/queries/getPosts';
import Loading from '@/app/loading';
import Post from '@/components/post/post';

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPosts(),
    queryKey: ['posts'],
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Sorry, There Was An Error</div>;

  return (
    <div>
      {data != null
        ? data.map(post => {
            return (
              <Post
                key={post.file_name}
                postClassName=""
                postContent={post.content}
              />
            );
          })
        : null}
    </div>
  );
};

export default Posts;
