import Header from "./components/Header";
import Box from "./components/Box";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container flex flex-col gap-10 mx-auto md:w-[40rem]">
      <Header />
      <Box />
      <Footer />
    </div>
  );
};

export default App;
