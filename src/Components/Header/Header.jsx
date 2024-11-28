import React from 'react'
import './Header.css'
import '../SideBar/SideBar.css'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../../Services/Actions/loginAction';

const Header = () => {
    const { isLogin, user } = useSelector(state => state.loginRedux);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const renderTooltip = (message) => (
        <Tooltip id="button-tooltip">{message}</Tooltip>
    );

    const handleLogOut = () => {
        console.log("logout");
        dispatch(logoutAsync());
        navigate('/login');
    };

    return (
        <div className='header d-flex align-items-center justify-content-between'>
            <div className="search-bar">
                <i className="material-icons">search</i>
                <input type="text" placeholder="Search" />
            </div>
            <div className="profile  d-flex align-items-center">
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Help menu")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 p-0">
                        <i className="material-icons hoverr">help_outline</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Settings menu")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 p-0">
                        <i className="material-icons hoverr">settings</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={renderTooltip("Google apps")} delay={{ show: 500, hide: 0 }}>
                    <button type="button" className="btn border-0 ps-1 pe-0">
                        <i className="material-icons hoverr">apps</i>
                    </button>
                </OverlayTrigger>
                {isLogin && (
                    <div className="mt-2  valign-middle me-3" onClick={handleLogOut}>
                        <img src={user?.photoURL || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"}
                        className="rounded-circle" style={{ width: '40px', height: '40px' }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
