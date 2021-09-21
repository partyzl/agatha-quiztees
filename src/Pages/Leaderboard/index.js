import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../Layout";
import { Footer } from "../../Layout";
import { Button } from "../../components";


const Leaderboard = () => {
  let history = useHistory();
  const landing = () => {
    history.push("/");
  };
  return (
    <>
      <Header />
      <Button value="Landing" onClick={landing} />
      <Footer />
    </>
  );
};

export default Leaderboard;
