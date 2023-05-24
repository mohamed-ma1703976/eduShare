import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Loading from '../Loading ';
// Initialize Firebase app

const firebaseConfig = {
  apiKey: "AIzaSyC-ZYyj3mpgKszGlMQmETjBuBCqzYGFDh4",
  authDomain: "edushare-e9242.firebaseapp.com",
  projectId: "edushare-e9242",
  storageBucket: "edushare-e9242.appspot.com",
  messagingSenderId: "826723606155",
  appId: "1:826723606155:web:4ef2868e093bc281523e8e",
  measurementId: "G-BGCNB10FJ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Define a custom hook to check if the user is authenticated
const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  return { user, loading, error };
};

// Define a custom route component that checks if the user is authenticated
const PrivateRoute = ({ children, ...rest }) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  console.log(user)

  if (loading) {
    return <div>          <Loading />
    </div>;
  }

  if (user === null) {
    router.push('/');
    // return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
