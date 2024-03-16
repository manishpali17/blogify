import { Suspense, useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard, Skeleton } from '../components/index';
import { useSelector } from 'react-redux';
import { Button } from '../components/index';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length == 0 && !authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="min-h-[50vh] flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold mb-4 font-mono">SignUp / Login to read posts</h1>
              <div className="flex flex-col gap-6">
                <Link to="/signup">
                  <Button bgColor="bg-primary">Signup</Button>
                </Link>
                <Link to="/login">
                  <Button bgColor="bg-primary">Login</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0 && authStatus) {
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
      <div className="w-full py-2 bg-background md:pt-10">
        <div className="w-full max-w-8xl mx-auto px-4">
          <div className="w-full flex flex-wrap justify-center">
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

export default Home;
