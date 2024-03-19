
import { useState, useEffect } from "react";

import { getProductsWithPagination } from '../services/ProductService';
import { Link } from "react-router-dom";

const ProductPages = () => {

    const [products, setProducts] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10); // can be changed dynamically 
    const [skip, setSkip] = useState(0);

    useEffect(() => {

        getProductsWithPagination(limit, skip)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data.products);
                setTotalPages(Math.floor(response.data.total / response.data.limit));
            })
            .catch((error) => {
                console.log(error);
            });

    }, [skip, currentPage, totalPages]);

    const handlePrevious = () => {
        console.log('handlePrevious');
        if (skip > 0) {
            setSkip(skip - 10);
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        console.log('handleNext');
        if (skip < totalPages * currentPage) {
            setSkip(skip + 10);
            setCurrentPage(currentPage + 1);
        }
    };

    // Note: use cards layout  
    // https://getbootstrap.com/docs/5.3/components/card/#card-layout

    return (
        <>
            <h1>Product Pages </h1>
            {products &&
                products.map((product) => {
                    return <div key={product.id}>
                        <Link to={`/product-details/${product.id}`}>{product.title}</Link>
                    </div>
                })
            }
            <div>
                <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        </>
    );
};
export default ProductPages;

