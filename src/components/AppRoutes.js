import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

const AppRoutes = () => {
    return (
        <>
            <p>App Routes Component</p>
            <>
                <BrowserRouter>
                    <Routes>
                        <Route>

                        </Route>
                    </Routes>
                </BrowserRouter>
            </>

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























