/*eslint-disable*/
import React, { useState } from 'react';

const Form = props => {
  const { handleSubmit } = props;
  const currentUser = JSON.parse(localStorage.getItem('THE_JOB_APP'));
  const [form, setForm] = useState(currentUser);

  const handleChange = target => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleAplication = evt => {
    evt.preventDefault();
    if (form === null) {
      alert('You must register first');
      history.push('/register');
    } else {
      handleSubmit(form);
    }
  };

  return (
    <main>
      <section id="sec-custom">
        <div className="container">
          <header className="section-header">
            <span>Custom application</span>
            <h2>Apply now</h2>
            <p>Apply for this job with a custom application.</p>
          </header>

          <form onSubmit={handleAplication}>
            <div className="row">
              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Name"
                  name="name"
                  onChange={handleAplication}
                  defaultValue={form.name}
                />
              </div>

              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="email"
                  className="form-control input-lg"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  defaultValue={form.email}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
              />
            </div>

            <div className="form-group" />

            <div className="row">
              <div className="col-xs-6 col-md-3">
                <div className="upload-button upload-button-block">
                  <button className="btn btn-block btn-success">
                    Attach your CV
                  </button>
                  <input name="cv" type="file" />
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Submit application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;
