import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";

const EditForm = () => {
  const ctx = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${ctx.id}`
      );
      ctx.setCreateData({ ...res.data });
    };
    getData();
  }, []);

  const {
    title,
    job_description,
    job_qualification,
    job_type,
    job_tenure,
    job_status,
    company_name,
    company_image_url,
    company_city,
    salary_min,
    salary_max,
  } = ctx.createData;

  const editHandler = (event) => {
    event.preventDefault();
    const editData = async () => {
        try {
          const res = await axios.put(
            `https://dev-example.sanbercloud.com/api/job-vacancy/${ctx.id}`,
            {
              title,
              job_description,
              job_qualification,
              job_type,
              job_tenure,
              job_status,
              company_name,
              company_image_url,
              company_city,
              salary_min,
              salary_max,
            },
            { headers: { Authorization: "Bearer " + ctx.Cookies.get("token") } }
          );
          ctx.setDataIsFetched(!ctx.dataIsFetched);
          ctx.navigate("/dashboard/list-job-vacancy");
          ctx.setCreateData({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: null,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: null,
            salary_max: null,
          });
        } catch (error) {
          ctx.navigate("/404");
        }
      };
      editData();
    };

  const companyNameHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, company_name: event.target.value };
    });
  };

  const titleHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, title: event.target.value };
    });
  };

  const cityHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, company_city: event.target.value };
    });
  };

  const jobTypeHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, job_type: event.target.value };
    });
  };

  const descHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, job_description: event.target.value };
    });
  };

  const jobTenureHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, job_tenure: event.target.value };
    });
  };

  const jobStatusHandler = (event) => {
    let status = "";
    if (event.target.value === "Open") {
      status = "1";
    } else {
      status = "0";
    }
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, job_status: +status };
    });
  };

  const minSalaryHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, salary_min: +event.target.value };
    });
  };

  const qualificationHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, job_qualification: event.target.value };
    });
  };

  const maxSalaryHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, salary_max: +event.target.value };
    });
  };

  const imgURLHandler = (event) => {
    ctx.setCreateData((prevValue) => {
      return { ...prevValue, company_image_url: event.target.value };
    });
  };


  return (
    <div className="w-[75%] m-auto mt-[100px]">
      <h1 className="font-bold text-[1.5rem] text-center mb-[50px]">
        Create your dream job!
      </h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="company_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Name
            </label>
            <input
              onChange={companyNameHandler}
              value={company_name}
              type="text"
              id="company_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="PT Sanbercode"
              required={true}
            />
          </div>
          <div>
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              onChange={titleHandler}
              value={title}
              type="text"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Web Developer"
              required={true}
            />
          </div>
          <div>
            <div>
              <label
                for="city"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City
              </label>
              <input
                onChange={cityHandler}
                value={company_city}
                type="text"
                id="city"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jakarta"
                required={true}
              />
            </div>
            <label
              for="desc"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Job Description
            </label>
            <textarea
              onChange={descHandler}
              value={job_description}
              rows={4}
              id="desc"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Make a responsive website"
              required={true}
            />
          </div>
          <div>
            <label
              for="job_type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Job Type
            </label>
            <select
              onChange={jobTypeHandler}
              value={job_type}
              id="job_type"
              class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Select Job Type
              </option>
              <option value="onSite">On Site</option>
              <option value="WFH">WFH</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label
              for="job_tenure"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Job Tenure
            </label>
            <select
              onChange={jobTenureHandler}
              value={job_tenure}
              id="job_tenure"
              class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Select Job Tenure
              </option>
              <option value="Contract">Contract</option>
              <option value="Full Time">Full Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div>
            <label
              for="job_status"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Job Status
            </label>
            <select
              onChange={jobStatusHandler}
              value={job_status === 1 ? "Open" : "Close"}
              id="job_status"
              class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Select Job Status
              </option>
              <option value="Open">Open</option>
              <option value="Close">Close</option>
            </select>
          </div>

          <div>
            <label
              for="min-salary"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Min Salary (IDR)
            </label>
            <input
              onChange={minSalaryHandler}
              value={salary_min}
              step={500000}
              type="number"
              id="min-salary"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="5000000"
              required={true}
            />
          </div>

          <div>
            <label
              for="qualification"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Qualification
            </label>
            <input
              onChange={qualificationHandler}
              value={job_qualification}
              type="text"
              id="qualification"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="S1 Computer Science"
              required={true}
            />
          </div>
          <div>
            <label
              for="max-salary"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Max Salary (IDR)
            </label>
            <input
              onChange={maxSalaryHandler}
              value={salary_max}
              step={500000}
              type="number"
              id="max-salary"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="10000000"
              required={true}
            />
          </div>

          <div>
            <label
              for="img"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              onChange={imgURLHandler}
              value={company_image_url}
              type="url"
              id="img"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="insert image URL here"
              required={true}
            />
          </div>
        </div>
        <button
          onClick={editHandler}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditForm;
