import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards/Cards";
import CartItems from "./Components/CartItems/CartItems";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import FavouriteItems from "./Components/FavouriteItems/FavouriteItems";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFetch } from "./reducers";
import ViewProvider from "./Context";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);
  return (
    <ViewProvider>
      <div className="container" data-testid="app-some">
        <Header />
        <Routes>
          <Route path="/cartitems" element={<CartItems />} />
          <Route index element={<Cards />} />
          <Route path="/favourites" element={<FavouriteItems />} />

          <Route path="*" element={<p>page is not found</p>} />
        </Routes>
      </div>
    </ViewProvider>
  );
};
export default App;
