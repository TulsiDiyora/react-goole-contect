import React, { useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Profile2 from '../../assets/profile2.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { editAsync } from '../../Services/Actions/gooleAction';

function GooleEdit() {

  
  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  const { users, user } = useSelector((state) => state.gooleRedux);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Tooltip renderer
  const [googleContact, setGoogleContact] = useState({
    fname: '',
    surname: '',
    company: '',
    job: '',
    email: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleContact = (e) => {
    const { name, value } = e.target;
    console.log("googleContact", name, value);
    setGoogleContact({ ...googleContact, [name]: value });
  };

  const toggleFilledClass = (e) => {
    e.target.classList.toggle('filled', e.target.value.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', googleContact);
    dispatch(editAsync(googleContact));
    setGoogleContact(user);
    setErrors({});
  };

  useEffect(() => {
    if (!user) {
      console.log("employee", user);
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setGoogleContact(user);
    }
  }, [user]);

  return (
    <>
      <Sidebar />
      <Header />
      <div className='page-body-wrapper'>
        <div className='col-5' style={{ padding: '0px 16px 0px 0px' }}>
          <div className='add-form d-flex align-items-center justify-content-between'>
            {/* Back Button */}
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Back")}
              delay={{ show: 200, hide: 100 }}
            >
              <button type="button" className="btn border-0 p-0">
                <i className="material-icons hoverrr">arrow_back</i>
              </button>
            </OverlayTrigger>

            {/* Favourites and Save Buttons */}
            <div className='d-flex align-items-center form-btn'>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Add to favourites")}
                delay={{ show: 200, hide: 100 }}
              >
                <button type="button" className="btn border-0 p-0 me-3">
                  <i className="material-icons hoverrr">star</i>
                </button>
              </OverlayTrigger>
              <button
                type='submit'
                className='border-0 fw-medium save'
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>

          <div className='formm'>
            <div className='user'>
              {/* Profile Section */}
              <div className='profile-icon position-relative'>
                <img src={Profile2} alt="Profile" />
                
                <button
                  type="button"
                  className="add-icon position-absolute border-0 d-flex align-items-center justify-content-center"
                >
                  <i className="material-icons">add</i>
                </button>
              </div>

              {/* Manage Labels */}
              <div className='label mt-3'>
                <OverlayTrigger
                  placement="bottom"
                  overlay={renderTooltip("Manage labels")}
                  delay={{ show: 200, hide: 100 }}
                >
                  <button className='d-flex align-items-center btn-label'>
                    <i className="material-icons">add</i>
                    <span className='fs-6 ms-2'>Label</span>
                  </button>
                </OverlayTrigger>
              </div>

              {/* Form */}
              <form className='form mt-4'>
                {/* First Name and Surname */}
                <div className='d-flex mb-4'>
                  {/* Icon */}
                  <div className='col-1'>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Name")}
                      delay={{ show: 200, hide: 100 }}
                    >
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">person</i>
                      </button>
                    </OverlayTrigger>
                  </div>

                  {/* Inputs */}
                  <div className='col-11'>
                    <div className='enter mb-3'>
                      <input
                        type="text"
                        className={`input ${googleContact.fname.trim() !== '' ? 'filled' : ''}`}
                        name='fname'
                        value={googleContact.fname}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="fname"
                      />
                      <label htmlFor="fname" className='line fw-medium'>First name</label>
                      {errors.fname && <span className="error-text">{errors.fname}</span>}
                    </div>

                    <div className='enter'>
                      <input
                        type="text"
                        className={`input ${googleContact.surname.trim() !== '' ? 'filled' : ''}`}
                        name='surname'
                        value={googleContact.surname}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="surname"
                      />
                      <label htmlFor="surname" className='line fw-medium'>Surname</label>
                      {errors.surname && <span className="error-text">{errors.surname}</span>}
                    </div>
                  </div>
                </div>

                {/* Company and Job Title */}
                <div className='d-flex mb-4'>
                  {/* Icon */}
                  <div className='col-1'>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Organisation")}
                      delay={{ show: 200, hide: 100 }}
                    >
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">domain</i>
                      </button>
                    </OverlayTrigger>
                  </div>

                  {/* Inputs */}
                  <div className='col-11'>
                    <div className='enter mb-3'>
                      <input
                        type="text"
                        className={`input ${googleContact.company.trim() !== '' ? 'filled' : ''}`}
                        name='company'
                        value={googleContact.company}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="company"
                      />
                      <label htmlFor="company" className='line fw-medium'>Company</label>
                    </div>

                    <div className='enter'>
                      <input
                        type="text"
                        className={`input ${googleContact.job.trim() !== '' ? 'filled' : ''}`}
                        name='job'
                        value={googleContact.job}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="job"
                      />
                      <label htmlFor="job" className='line fw-medium'>Job title</label>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className='d-flex mb-4'>
                  {/* Icon */}
                  <div className='col-1'>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Email")}
                      delay={{ show: 200, hide: 100 }}
                    >
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">email</i>
                      </button>
                    </OverlayTrigger>
                  </div>

                  {/* Input */}
                  <div className='col-11'>
                    <div className='enter'>
                      <input
                        type="email"
                        className={`input ${googleContact.email.trim() !== '' ? 'filled' : ''}`}
                        name='email'
                        value={googleContact.email}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="email"
                      />
                      <label htmlFor="email" className='line fw-medium'>Email</label>
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className='d-flex mb-4'>
                  {/* Icon */}
                  <div className='col-1'>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Phone")}
                      delay={{ show: 200, hide: 100 }}
                    >
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">call</i>
                      </button>
                    </OverlayTrigger>
                  </div>

                  {/* Input */}
                  <div className='col-11'>
                    <div className='enter'>
                      <input
                        type="text"
                        className={`input ${googleContact.phone.trim() !== '' ? 'filled' : ''}`}
                        name='phone'
                        value={googleContact.phone}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        placeholder=" "
                        id="phone"
                      />
                      <label htmlFor="phone" className='line fw-medium'>Phone</label>
                    </div>
                  </div>
                </div>

                {/* Birthday */}
                <div className='d-flex mt-4 mb-4'>
                  <div className='col-1'>
                    <OverlayTrigger placement="bottom" overlay={renderTooltip("Birthday")} delay={{ show: 400, hide: 0 }}>
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">cake</i>
                      </button>
                    </OverlayTrigger>
                  </div>
                  <div className="col-2">
                    <div className="enter">
                      <input type="number" className="input w-100" name='day' value={googleContact.day} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                      <label className="line fw-medium">Day</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="enter">
                      <select className="input w-100" name='month' value={googleContact.month} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" ">
                        <option value="" selected></option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <label className="line fw-medium">Month</label>
                    </div>
                  </div>
                  <div className="col-4" style={{ width: '210px' }}>
                    <div className="enter">
                      <input type="number" className="input w-100" name='year' value={googleContact.year} onChange={handleContact} onBlur={toggleFilledClass} placeholder=" " />
                      <label className="line fw-medium">Year(optional)</label>
                    </div>
                  </div>
                </div>

              {/* Notes */}
              <div className='d-flex mb-4'>
                  {/* Icon */}
                  <div className='col-1'>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={renderTooltip("Notes")}
                      delay={{ show: 200, hide: 100 }}
                    >
                      <button type="button" className="btn border-0 p-0 me-2">
                        <i className="material-icons">note</i>
                      </button>
                    </OverlayTrigger>
                  </div>

                  {/* Textarea */}
                  <div className='col-11'>
                    <div className='enter'>
                      <textarea
                        className={`input ${googleContact.notes.trim() !== '' ? 'filled' : ''}`}
                        rows="4"
                        cols="50"
                        name='notes'
                        value={googleContact.notes}
                        onChange={handleContact}
                        onBlur={toggleFilledClass}
                        style={{ height: "80px" }}
                        placeholder=" "
                        id="notes"
                      ></textarea>
                      <label htmlFor="notes" className='line fw-medium'>Notes</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GooleEdit;
