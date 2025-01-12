import React from 'react';
import Markdown from 'markdown-to-jsx';

interface PostProps {
  postClassName?: string;
  lastPost: boolean;
  postTitle?: string;
  postContent?: string;
}

const BlogPost: React.FC<PostProps> = ({
  lastPost = false,
  postClassName = '',
  postTitle = 'Default title',
  postContent = 'Default content',
}) => {
  return (
    <div className={postClassName}>
      <h1
        id={postTitle}
        className="text-4xl pb-10">
        {postTitle}
      </h1>
      <Markdown className="pb-10">{postContent}</Markdown>
      {lastPost ? <hr className="w-[52rem]"></hr> : null}
    </div>
  );
};

export default BlogPost;
