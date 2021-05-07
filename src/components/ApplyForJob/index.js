/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJob, updateJob } from '../../services/jobs.service';
import Header from './Header';
import Form from './Form';

const ApplyJob = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { id } = useParams();

  const getJobDetails = async () => {
    const job = await getJob(id);

    setJobDetails(job);
  };

  const setJobUpdate = async jobUpdated => {
    await updateJob(jobUpdated);
  };

  const handleSubmit = aplicant => {
    const { candidates = [] } = jobDetails;
    candidates.push(aplicant);
    const jobUpdated = {
      ...jobDetails,
      candidates,
    };
    setJobUpdate(jobUpdated);
    alert('Plication sended');
  };

  useEffect(() => {
    getJobDetails();
  }, [id]);

  return (
    <div>
      {jobDetails ? <Header job={jobDetails} /> : null}
      {jobDetails ? <Form handleSubmit={handleSubmit} /> : null}
    </div>
  );
};

export default ApplyJob;
