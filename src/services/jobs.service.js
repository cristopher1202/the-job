const ENDPOINT = "http://localhost:3004/api/jobs";

const getAllJobs = async () => {
  try {
    const resp = await fetch(ENDPOINT);
    const jobs = await resp.json();

    return jobs;
  } catch (error) {
    throw Error(error);
  }
};

const getJob = async (id) => {
  try {
    const resp = await fetch(`${ENDPOINT}/${id}`);
    const job = await resp.json();

    return job;
  } catch (error) {
    throw Error(error);
  }
};

const createJob = (job) => {
  return job;
};

export { getAllJobs, getJob, createJob };
