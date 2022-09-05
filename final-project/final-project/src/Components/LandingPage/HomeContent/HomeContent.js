import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


const HomeContent = (props) => {

    const ctx = useContext(GlobalContext);

    const dataVacancy = ctx.data.map(result => {

        const detailHandler = (event) => {
            event.preventDefault()
    
            let dataId = +event.target.value;
           
            ctx.setId(dataId);
            ctx.navigate(`/details/${dataId}`)
    
        }

        return (
            <div key={result.id} class="relative w-[400px] h-[450px] m-auto mt-[20px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 2xl:w-auto h-[550px]">
            <div class="p-5">
                <img
                  class="rounded-t-lg inline-block w-[200px] h-auto"
                  src={result.company_image_url}
                  alt="company-img"
                />
                <div className="absolute bottom-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {result.title}
                </h5>
              <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
                Updated at : {result.updated_at}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Status : {result.job_tenure}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Salary (IDR): {result.salary_min} - {result.salary_max}
              </p>
              <button onClick={detailHandler} value={result.id}
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Details
        
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              </div>
            </div>
          </div>
  
        )
    })

  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-4 gap-4 p-5 1xl:grid-cols-2 2xl:grid-cols-1">
        {dataVacancy}
      </div>
    </>
  );
};

export default HomeContent;
