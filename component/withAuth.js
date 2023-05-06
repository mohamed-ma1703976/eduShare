import { useRouter } from 'next/router';
import {  onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../Firebase/Firebase';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (!user) {
          router.push('/');
        }
      });
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
