const ENDPOINT = "http://localhost:3004/api/candidates";

const getAllCandidates = async () => {
  try {
    const resp = await fetch(ENDPOINT);
    const candidates = await resp.json();

    return candidates;
  } catch (error) {
    throw Error(error);
  }
};

const getCandidate = async (id) => {
  try {
    const resp = await fetch(`${ENDPOINT}/${id}`);
    const candidate = await resp.json();

    return candidate;
  } catch (error) {
    throw Error(error);
  }
};

const createCandidate = (candidate) => {
  return candidate;
};

export { getAllCandidates, getCandidate, createCandidate };
