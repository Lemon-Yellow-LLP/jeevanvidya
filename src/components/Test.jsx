import React from 'react';

const Test = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  //   if totalPosts = 100 and postPerPage = 10 ;
  // 100/10 = 10 pages
  //if totalPosts = 25 and postPerPage = 10 so 25/10 = 2.5 to solve this condition use Math.ceil
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='flex gap-4'>
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            className='w-5 h-5 bg-gray-800 text-white'
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Test;
