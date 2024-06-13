import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import { Products } from "./Products";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";

const LazyAbout = React.lazy(() => import( "./components/About"))

function App() {
  return (
    <>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>

        {/* Lazy Loading */}
        <Route path="/about" element = {<React.Suspense fallback='Loading.....'><LazyAbout/></React.Suspense>} />

        <Route path="/order-summary" element = {<OrderSummary/>} />

        {/* Nested Routing to Products Component. In this case React Router automatically forms the full path. So we no need to specify '/product/featured' for FeaturedProduct component and others*/} 
        <Route path="products" element = {<Products/>} >
          <Route index element = {<FeaturedProduct/>} />    {/* Here index route act as a index page, when we navigate to /products route then the /feature route will also render. This does not include the path because the path is same as the parent i.e /product */}
          
          <Route path="featured" element = {<FeaturedProduct/>} />
          <Route path="new" element = {<New/>} />
        </Route>

        <Route path="users" element = {<Users/>}>
          <Route path=":userId" element = {<UserDetails/>}/>  {/* Dynamic Routing */}
          <Route path="admin" element={<Admin/>}/>
        </Route>

        <Route path="*" element = {<NoMatch/>} />     {/* * means if no routing matches then this component will be rendered. */}
      </Routes>
    </>
  );
}

export default App;
