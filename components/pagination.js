import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
const PAGE_SIZE = 3;
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery(
    ["products", currentPage],
    () =>
      fetch(
        `https://dummyjson.com/products?skip=${
          (currentPage - 1) * PAGE_SIZE
        }&limit=${PAGE_SIZE}`
      ).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  const handlePreviousClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <div>
      <div className="mt-5">
        <h6>Product List</h6>

        <ul>
          {data.products.map((product, index) => (
            <>
              <div className="d-flex" key={index}>
                <p>{product.id}.</p>
                <p className="ms-1"> {product.title} - </p>
                <p>${product.price}</p>
              </div>
            </>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <a
            className="ms-2 d-block"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Go to next page
          </a>

          <a
            className="ms-2"
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
          >
            Go to previous page
          </a>
        </div>

        <p>
          Showing page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
