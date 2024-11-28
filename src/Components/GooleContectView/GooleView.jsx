import React, { useEffect, useState } from 'react';
import './GooleView.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, getAsync, singleEmpAsync } from '../../Services/Actions/gooleAction';
import { useNavigate } from 'react-router-dom';
import Nprofile from '../../assets/nprofile.jpg';
import Loading from '../Loading/Loading';

function GooleView() {
  const { users, user, isLoading, isError, errorMsg } = useSelector((state) => state.gooleRedux);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDotClick = (id) => {
    setSelectedUserId(id);
    setShowDeleteOption(!showDeleteOption);
  };

  const handleEdit = (id) => {
    console.log("handleEdit", id);
    dispatch(singleEmpAsync(id));
  };

  const handleDelete = (id) => {
    console.log("handleDelete", id);
    dispatch(deleteAsync(id));
    setShowDeleteOption(false);
  };

  useEffect(() => {
    dispatch(getAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log("user", user);
    if (user) {
      navigate('/edit');
    }
  }, [user, navigate]);


  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-body-wrapper">
        <div className="v-title">
          <h3 className='fw-normal'> Contacts
            <span className='h6 ms-2'>(116)</span>
          </h3>
        </div>
        <div className="v-table">
          {isLoading ? ( 
            <div className="loading-message"><Loading /></div> 
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className='fw-medium'>Name</th>
                  <th scope="col" className='fw-medium'>Email</th>
                  <th scope="col" className='fw-medium'>Phone Number</th>
                  <th scope="col" className='fw-medium'>Job title and company</th>
                  <th scope="col" className='fw-medium'>Labels</th>
                  <th scope="col" className='px-0 '><i className="bi bi-printer bold-icon"></i></th>
                  <th scope="col" className='px-0'><i className="bi bi-upload bold-icon"></i></th>
                  <th scope="col" className='px-0'><i className="bi bi-three-dots-vertical bold-icon"></i></th>
                </tr>
              </thead>
              <h6 className='mt-2' style={{color: '#444746', fontSize: '14px'}}>Contects</h6>
              <tbody className='v-tbody '>
                {users && users.length > 0 ? (
                  
                  users.map((user) => (
                    <tr key={user.id} >
                      <td className='fw-normal d-flex align-items-center'>
                        <div className="user-avatar">
                          <span>{user.fname.charAt(0).toUpperCase()}</span>
                        </div>
                        {user.fname}
                      </td>
                      <td className='fw-normal'>{user.email}</td>
                      <td className='fw-normal'>{user.phone}</td>
                      <td className='fw-normal'>{user.job}</td>
                      <td className='fw-normal'>{user.labels}</td>
                      <td className='px-0 user-action'><i className="bi bi-star"></i></td>
                      <td className='px-0 user-action' onClick={() => handleEdit(user.id)}>
                        <i className="material-icons">edit</i>
                      </td>
                      <td className="px-0 user-action">
                        <i
                          className="bi bi-three-dots-vertical bold-icon"
                          onClick={() => handleDotClick(user.id)}
                        ></i>
                        {showDeleteOption && selectedUserId === user.id && (
                          <div className="delete-option">
                            <p>
                              <i className="bi bi-printer bold-icon me-3"></i>
                              <span> Print</span>
                            </p>
                            <p>
                              <i className="bi bi-upload bold-icon me-3"></i>
                              <span> Export</span>
                            </p>
                            <p>
                              <i className="bi bi-archive me-3"></i>
                              <span> Hide from contacts</span>
                            </p>
                            <p onClick={() => handleDelete(user.id)}>
                              <i className="bi bi-trash me-3"></i>
                              <span> Delete</span>
                            </p>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No Content Available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
  
}

export default GooleView;
