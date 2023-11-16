import Header from "./components/Header";
import Box from "./components/Box";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container flex flex-col gap-6 mx-auto">
      <Header />
      <Box />
      <Footer />
    </div>
  );
};

export default App;
