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
  if (isError) {
    return (
      <div>
        There was an <i>error</i> fetching the blog post!
      </div>
    );
  }

  return (
    <div>
      {data != null
        ? data.map((post, idx) => {
            const postTitle = post.file_name.slice(0, post.file_name.length - 3);

            return (
              <Post
                key={postTitle}
                lastPost={idx !== data.length - 1}
                postClassName="pb-32 w-[52rem]"
                postTitle={postTitle}
                postContent={post.content}
              />
            );
          })
        : null}
    </div>
  );
};

export default Posts;
