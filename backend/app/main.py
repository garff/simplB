"""Main module for the backend."""
from fastapi import FastAPI

from .utils.utils import get_blog_post_content, get_blog_post_file_names

app = FastAPI()

@app.get("/")
def blogposts():
    """Blog posts get route."""
    blog_post_file_names = get_blog_post_file_names()
    return { file_name:get_blog_post_content(file_name) for file_name in blog_post_file_names }
