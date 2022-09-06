import axios from "axios";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const ListJob = (props) => {
  const ctx = useContext(GlobalContext);

  const editHandler = (event) => {
    event.preventDefault();
    ctx.setId(+event.target.value);
    ctx.setDataIsFetched(!ctx.dataIsFetched);
    ctx.navigate(`/list-job-vacancy/${+event.target.value}`);
  };

  const removeHandler = (event) => {
    event.preventDefault();
    const deleteData = async () => {
      const res = await axios.delete(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${+event.target
          .value}`,
        { headers: { Authorization: "Bearer " + ctx.Cookies.get("token") } }
      );
      ctx.setDataIsFetched(!ctx.dataIsFetched);
    };
    deleteData();
  };

  const dataTable = ctx.data.map((result) => {
    return (
      <tr
        key={result.id}
        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      >
        <th
          scope="row"
          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {result.company_name}
        </th>
        <td class="py-4 px-6">{result.title}</td>
        <td class="py-4 px-6">{result.company_city}</td>
        <td class="py-4 px-6">{result.salary_min}</td>
        <td class="py-4 px-6">
          <button
            onClick={editHandler}
            value={result.id}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit
          </button>
          <button
            onClick={removeHandler}
            value={result.id}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Company Name
            </th>
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              City
            </th>
            <th scope="col" class="py-3 px-6">
              Min Salary
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{dataTable}</tbody>
      </table>
    </div>
  );
};

export default ListJob;
