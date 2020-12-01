import {
  faCalendarWeek,
  faCog,
  faFileAlt,
  faSignOutAlt,
  faTh,
  faUserFriends,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import SplitPane from 'react-split-pane';
import DashBoardComponent from '../DashBoardComponent/DashBoardComponent';
import './DashBoard.css';
import { UserContext } from '../../App';
import { Link, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import CreateInvoices from '../CreateInvoices/CreateInvoices';
const DashBoard = () => {
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
  const handleLogout = () => {
    SetLoggedInUser('');
  };

  return (
    <div className='row dashboard'>
      <SplitPane split='vertical'>
        <div className='col-2 dashboardOptions  d-flex flex-column justify-content-between'>
          <div className='panelName'>
            <Link to='/'>
              <FontAwesomeIcon icon={faFileAlt} /> Home
            </Link>
            <Link to='/dashboard'>
              <FontAwesomeIcon icon={faTh} /> Dashboard
            </Link>
            <Link to='/dashboard/createInvoices'>
              <FontAwesomeIcon icon={faCalendarWeek} /> Create Invoices
            </Link>
            <p>
              <FontAwesomeIcon icon={faUserFriends} /> Manage
            </p>

            <p>
              <FontAwesomeIcon icon={faCog} /> Settings
            </p>
          </div>
          <div className='mt-auto' onClick={handleLogout}>
            <p>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </p>
          </div>
        </div>

        <div className='col-10 dashboardRight p-0'>
          <div className='dashboardDetails'>
            <div className='componentList' style={{ padding: '3rem' }}>
              <DashBoardComponent />
              <Switch>
                <Route path='/dashboard/createInvoices'>
                  <CreateInvoices />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </SplitPane>
    </div>
  );
};

export default DashBoard;
