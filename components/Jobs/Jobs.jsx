import Job from "../Job/Job";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./jobs.module.scss";

export const Jobs = ({ jobsDetail }) => {
  return (
    <div className={style.jobs}>
      <SectionHeader
        title="Recent Job Circulars"
        text="We help you to choose the right job for you"
      />

      <div className={style.jobs_main}>
        {jobsDetail.map((details) => {
          return <Job key={details.id} jobDetail={details} />;
        })}
      </div>
    </div>
  );
};
