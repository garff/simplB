'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getPosts from '@/queries/getPosts';

const Sidebar = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPosts(),
    queryKey: ['posts'],
  });

  if (isLoading) return <aside>Loading...</aside>;
  if (isError) {
    return (
      <aside>
        There was an <i>error</i> loading the side bar!
      </aside>
    );
  }

  return (
    <aside className="fixed top-0 right-0 w-72 h-full p-10 pt-32 z-10">
      {data != null
        ? data.map(post => {
            const postTitle = post.file_name.slice(0, post.file_name.length - 3);
            const link = `#${postTitle}`;

            return (
              <div className="pb-2">
                <a
                  href={link}
                  className="text-m">
                  {postTitle}
                </a>
              </div>
            );
          })
        : null}
    </aside>
  );
};

export default Sidebar;
