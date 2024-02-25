import React, { useState } from 'react';

function TotalUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [userList,setUserList] = useState([]);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      {/* {soldList.length === 0 ? (
        "No Sold List Present"
      ) : ( */}
        <div className="p-8 mt-4">
          <div className="flex justify-between">
            <select
              type="button"
              className="text-purple-800 hover:text-white hover:bg-purple-800 ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
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
              className="text-purple-800 hover:text-white hover:bg-purple-800 ring-4 ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              // onClick={sortByRating}
            >
              Sort by Date
            </button>
          </div>
          <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  
                  <th scope="col" className="text-xl px-4 py-3">
                    First Name
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Last Name
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Email/User Name
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Phone
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Date Created
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    User Type
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Activated
                  </th>
                  <th scope="col" className="text-xl px-4 py-3">
                    Actions
                  </th>
                  
                </tr>
              </thead>
              <tbody>
              {userList.length === 0 ? (
  <div>No Users Present</div>
) : (
  <div>Items present</div>
)}
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
                        ) */}
              </tbody>
            </table>
          </div>
        </div>
      
    </>
  );
}

export default TotalUsers