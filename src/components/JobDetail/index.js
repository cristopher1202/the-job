/*eslint-disable */
import React from 'react';

const JobDetail = ({ job }) => {
  const {
    summary,
    responsibilities,
    minimumQualifications,
    preferredQualifications,
  } = job;

  return (
    <section>
      <div className="container">
        <p>{summary}</p>

        <br />
        <h4>Responsibilities</h4>
        <p>
          Loro ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non.
        </p>
        <ul>
          {responsibilities.length
            ? responsibilities.map((r, idx) => <li key={`r-${idx}`}>{r}</li>)
            : null}
        </ul>

        <br />
        <h4>Minimum qualifications</h4>
        <ul>
          {minimumQualifications.length
            ? minimumQualifications.map((mQ, idx) => (
                <li key={`mQ-${idx}`}>{mQ}</li>
              ))
            : null}
        </ul>

        <br />
        <h4>Preferred qualifications</h4>
        <ul>
          {preferredQualifications.length
            ? preferredQualifications.map((pQ, idx) => (
                <li key={`pQ-${idx}`}>{pQ}</li>
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

export default JobDetail;
