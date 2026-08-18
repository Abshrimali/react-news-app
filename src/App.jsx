import React from "react";
import Navbar from "./components/layout/Navbar";
import NewsPage from "./pages/NewsPage";
import Button from "./components/common/Button";

const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
      <NewsPage />
    </div>
  );
};

export default App;
