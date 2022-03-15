import React from "react";
import './Pagination.css';

const Pagination = ({pages, currentPage,  setCurrentPage}) => {
    return ( 
        <div>
            {Array.from(Array(pages),(item, index) => {
            return <button 
                style={index === currentPage ? { backgroundColor: "gray"} : null}
                className="pagination" 
                value={index} 
                onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}
                </button>
            })}
         </div>
         
    )

}

export default Pagination;