import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelloWorld } from "../redux/thunks/helloWorldThunk";
import { RootState, AppDispatch } from "../redux/store";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { message, loading, error } = useSelector((state: RootState) => state.helloWorld);

  useEffect(() => {
    dispatch(fetchHelloWorld());
  }, [dispatch]);

  return (
    <div>
      <h1>{t("home")}</h1>
      {loading && <p>{t("loading")}</p>}
      {error && <p style={{ color: "red" }}>{t("error")}</p>}
      {message && <p>{t("hello")}: {message}</p>}
    </div>
  );
};

export default Home;
