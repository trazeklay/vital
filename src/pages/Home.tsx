import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelloWorld } from "../redux/helloWorldSlice";
import { RootState, AppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { message, loading, error } = useSelector((state: RootState) => state.helloWorld);

  useEffect(() => {
    dispatch(fetchHelloWorld());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>Message: {message}</p>}
    </div>
  );
};

export default Home;
