import React, { useEffect, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../../context/GlobalContext";

const DetailContent = (props) => {
  const ctx = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${ctx.id}}`
      );

      ctx.setDetailData(res.data);
    };
    getData();
  }, []);

  const jobStatus =
    ctx.detailData.job_status === 1 ? (
      <p>Status : Open</p>
    ) : (
      <p>Status : Close</p>
    );

  return (
    <div className="place-content-center text-center mt-[50px] p-[15px]">
      <img
        className="m-auto mb-[50px] h-[200px] w-auto"
        src={ctx.detailData.company_image_url}
      />
      <h1 className="text-[2rem] font-bold">{ctx.detailData.title}</h1>
      <div className="text-justify pl-[100px] pr-[100px] leading-loose">
        <p className="text-[grey]">
          last updated : {ctx.detailData.updated_at}
        </p>
        <h2 className="text-[1.5rem] font-bold">Company Name</h2>
        <p>{ctx.detailData.company_name}</p>
        <h2 className="text-[1.5rem] font-bold">Job Description</h2>
        <p>{ctx.detailData.job_description}</p>
        <h2 className="text-[1.5rem] font-bold">Qualifications</h2>
        <p>{ctx.detailData.job_qualification}</p>

        <hr className="mt-[25px] mb-[25px] w-[95%] m-auto border-black"></hr>

        <div className="font-thick w-[95%] m-auto">
          <p>
            Salary (IDR) : {ctx.detailData.salary_min} -{" "}
            {ctx.detailData.salary_max}
          </p>

          <p>Type : {ctx.detailData.job_type}</p>
          <p>Tenure : {ctx.detailData.job_tenure}</p>
          {jobStatus}
          <p>City : {ctx.detailData.company_city}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
