import Header from "./components/Header";
import Services from "./components/Services";
import Slider from "./components/Slider";
import ShopByPet from "./components/ShopByPet";
import ShopByCategory from "./components/ShopByCategory";
import TopBrand from "./components/TopBrand";
import TrandingProducts from "./components/TrandingProducts";
import TailsBudyForm from "./components/TailsBudyForm";
import Contacts from "./components/Contacts";
import ProductReview from "./components/ProductReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <ShopByPet />
      <ShopByCategory />
      <TopBrand />
      <TrandingProducts />
      <ProductReview />
      <Contacts />
      <TailsBudyForm />
    </div>
  );
}

export default App;
