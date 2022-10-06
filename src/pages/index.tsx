import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);
  return (
    <div>
      <Head>
        <title>Cost Manger</title>
      </Head>

      <main>
        cost manager
        {status === 'unauthenticated' && (
          <Button type="button" onClick={() => signIn('google')}>
            Sign In
          </Button>
        )}
        {status === 'authenticated' && (
          <Button type="button" onClick={() => signOut()}>
            Sign out
          </Button>
        )}
      </main>
    </div>
  );
};

export default Home;
