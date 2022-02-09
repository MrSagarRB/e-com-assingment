import Header from "./components/Header";
import Services from "./components/Services";
import Slider from "./components/Slider";
import ShopByPet from './components/ShopByPet';
import ShopByCategory from './components/ShopByCategory';
import TopBrand from './components/TopBrand';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services /> 
      <ShopByPet />
      <ShopByCategory />
      <TopBrand />


    </div>
  );
}

export default App;
