import React from "react";

const Pagination = ({totalPosts, postPerPage, currentPage, postsPerPage, setCurrentPage,}) => {
    let pages = [];

   
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const handleClick = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                )})}
             </div>
            )}
            export default Pagination;
        
