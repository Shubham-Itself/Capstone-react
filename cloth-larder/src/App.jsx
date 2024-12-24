import Home from "./routes/home/home";
import { Routes, Route, Outlet } from "react-router";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";

const Shop = () => {
  return <h1>I am shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
