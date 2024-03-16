import { Suspense, useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard, Skeleton } from '../components/index';
import { useNavigate } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
        return null;
      })
      .catch((error) => console.log('Failed to get all posts from appwrite', error));
  }, []);

  if (posts.length == 0) {
    return (
      <div className="h-[70vh] flex justify-center flex-col items-center">
        <p className="text-3xl">Write you first Post</p>
        <button
          className="mt-2 bg-primary text-background p-2 rounded-md shadow-md border-dotted border-4 "
          onClick={() => {
            navigate('/add-post');
          }}
        >
          Add Post
        </button>
      </div>
    );
  }

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="w-full py-8 md:pt-10">
        <div className="w-full max-w-8xl mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 hover:scale-95 transition-all duration-200">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default AllPosts;
