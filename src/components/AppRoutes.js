import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import Page404 from './Page404';
import MenuBar from './MenuBar';

import CompConcepts from './CompConcepts';

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <>
                    <MenuBar />
                </>
                <div className='container'>
                    <Routes >
                        <Route exact path='learning' element={<CompConcepts />} />
                        <Route exact path='home' element={<Home />} />
                        <Route exact path='login' element={<Login />} />
                        <Route exact path='product-details' element={<ProductDetails />} />
                        <Route exact path='product-list' element={<ProductList />} />
                        <Route exact path='' element={<Home />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;

// const AppRoutes = () => {
//     return (
//         <>
//             <p>App Routes Component</p>
//         </>
//     );
// };

// export default AppRoutes;
























