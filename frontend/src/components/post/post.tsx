import Markdown from 'markdown-to-jsx';
import React from 'react';

interface PostProps {
  postClassName?: string;
  //   postTitle: string;
  postContent: string;
}

const BlogPost: React.FC<PostProps> = ({
  postClassName = '',
  //   postTitle = 'Default title',
  postContent = 'Default content',
}) => {
  return (
    <div className={postClassName}>
      {/* <h1>{postTitle}</h1> */}
      <Markdown>{postContent}</Markdown>
    </div>
  );
};

export default BlogPost;
