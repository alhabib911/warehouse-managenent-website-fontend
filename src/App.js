import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import AddProduct from './Components/AddProduct/AddProduct';
import Products from './Components/Products/Products';
import Inventory from './Components/Inventory/Inventory';
import RequereAuth from './Components/RequereAuth/RequereAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import FirstSection from './Components/FirstSection/FirstSection';
import SecoundSection from './Components/SecoundSection/SecoundSection';
import NotFound from './Components/NotFound/NotFound';
import MyItem from './Components/MyItem/MyItem';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequereAuth>
            <Inventory></Inventory>
          </RequereAuth>
        }></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/first-section' element={<FirstSection></FirstSection>}></Route>
        <Route path='/secound' element={<SecoundSection></SecoundSection>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
