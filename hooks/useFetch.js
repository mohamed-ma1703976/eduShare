import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const useFetch = (path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, path));
        const courses = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(courses);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [path]);

  return { data, error, loading };
};

export default useFetch;
