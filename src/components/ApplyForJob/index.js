import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from '../../services/jobs.service';
import Header from './Header';
import Main from './Form';

const ApplyJob = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { id } = useParams();

  const getJobDetails = async () => {
    const job = await getJob(id);

    setJobDetails(job);
  };
  useEffect(() => {
    getJobDetails();
  }, [id]);

  return (
    <div>
      <Header job={jobDetails} />
      <Main />
    </div>
  );
};

export default ApplyJob;
