import React, { useState } from 'react'

function MyWishlist() {
  const [isLoading, setIsLoading] = useState(true);
  const [wishList,setWishtList] = useState([]);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      {wishList.length === 0 ? (
        "No Wish List Present"
      ) : (
        <div className="p-8 mt-4">
          <div className="flex justify-between">
            <select
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              // onChange={handleFilter}
            >
              <option value="All">All</option>
              {/* {getWatchlistFromLocalStorage().map(({ genreIds = [] }) => {
                return genreIds.map((genreId) => (
                  <option key={genreId} value={genreId}>
                    {genreMap[genreId]}
                  </option>
                ));
              })} */}
            </select>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              // onClick={sortByRating}
            >
              Sort by Name
            </button>
          </div>
          <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  
                  <th scope="col" className="text-xl px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="text-xl px-6 py-3">
                    Type
                  </th>
                  
                  <th scope="col" className="text-xl px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {watchlist.map(
                  ({
                    id,
                    title = "",
                    genreIds = [],
                    voteAverage,
                    posterPath,
                  }) => (
                    <tr
                      key={id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4">
                        <img
                          className="w-[160px] h-[30vh] min-h-[200px]"
                          src={`${IMAGE_BASE_URL}/${posterPath}`}
                          alt={title}
                        />
                      </td>
                      <td className="text-xl px-6 py-4 items-center">
                        {title}
                      </td>
                      <td className="text-xl px-6 py-4">{voteAverage}</td>
                      <td className="text-xl px-6 py-4">
                        {genreIds
                          .map((genreId) => genreMap[genreId] || "")
                          .join(", ")}
                      </td>
                      <td
                        className="text-xl space-x-1 px-6 py-4 text-right cursor-pointer text-red-200 hover:text-red-500"
                        onClick={() => removeMediaFromLocalStorage(id)}
                      >
                        <span>Delete</span>
                        <span>🗑️</span>
                      </td>
                    </tr>
                  )
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default MyWishlist