"""Utils module for the backend."""
import os

CURRENT_FP = os.path.abspath(__file__)
CURRENT_DIR = os.path.dirname(CURRENT_FP)
PARRENT_DIR = os.path.dirname(CURRENT_DIR)
BLOG_POSTS_DIR = os.path.join(PARRENT_DIR, "blog_posts")  

def get_blog_post_file_names() -> list[str]:
    """Returns a list of blog post file names."""
    blogpost_file_names = []

    for _, _, files in os.walk(BLOG_POSTS_DIR):
        for file in files:
            blogpost_file_names.append(file)

    return blogpost_file_names

def get_blog_post_content(file_name: str) -> str:
    """Returns the content of a blog post."""
    with open(os.path.join(BLOG_POSTS_DIR, file_name), 'r', encoding='utf-8') as file:
        return { 'file_name': file_name, 'content': file.read() }