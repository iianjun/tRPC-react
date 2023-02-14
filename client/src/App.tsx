import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test2 from "./components/Test2";
import Test from "./components/Test";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test" element={<Test />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
