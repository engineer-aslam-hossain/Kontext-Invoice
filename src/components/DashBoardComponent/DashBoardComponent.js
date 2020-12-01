import React from 'react';

const DashBoardComponent = () => {
  return (
    <div>
      <h4 className='ml-3 pl-4 mb-3 text-dark'>Dashboard</h4>
      <div className='row px-5'>
        <div className='singleInfo col-3' style={{ background: '#F1536E' }}>
          <h1>00</h1>
          <p>
            Pending <br /> dummy
          </p>
        </div>
        <div className='singleInfo col-3' style={{ background: '#3DA5F4' }}>
          <h1>19</h1>
          <p>
            Today's <br /> dummy
          </p>
        </div>
        <div className='singleInfo col-3' style={{ background: '#00C689' }}>
          <h1>34</h1>
          <p>
            Total <br /> dummy
          </p>
        </div>
        <div className='singleInfo col-3' style={{ background: '#FDA006' }}>
          <h1>74</h1>
          <p>
            Total <br /> dummy
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardComponent;
