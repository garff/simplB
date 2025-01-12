"""Main module for the backend."""
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .utils.utils import get_blog_post_content, get_blog_post_file_names

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://192.168.8.100:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/blog_posts")
def blog_posts():
    """Blog posts get route."""
    blog_post_file_names = get_blog_post_file_names()
    return [get_blog_post_content(file_name) for file_name in blog_post_file_names]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)