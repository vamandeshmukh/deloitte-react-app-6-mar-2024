
import { useState, useEffect } from "react";

import { getProductsWithPagination } from '../services/ProductService';
import { Link } from "react-router-dom";

const ProductPages = () => {

    const [products, setProducts] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        getProductsWithPagination(10, 10)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <h1>Product List </h1>
            {products &&
                products.map((product) => {
                    return <div>
                        <Link to={`/product-details/${product.id}`}>{product.title}</Link>
                    </div>
                })
            }
            <div>
                <button onClick={handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next Page</button>
            </div>
        </>
    );
};
export default ProductPages;
