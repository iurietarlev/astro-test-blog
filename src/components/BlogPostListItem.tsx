import type { FC } from "react";

interface Props {
  url: string;
  title: string;
}

const BlogPostListItem: FC<Props> = ({ url, title }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

export default BlogPostListItem;
