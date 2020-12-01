import React from 'react';
import fakeAchievement from '../../fakeData/fakeAchievement';
import './Achievement.css';
const Achievement = () => {
  return (
    <section className='achievement'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 d-flex flex-column justify-content-center align-items-start'>
            <h3>Our Achievements</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
          </div>
          <div className='achievementDetails col-md-7 d-flex flex-wrap'>
            {fakeAchievement.map(achievement => (
              <div
                className='col-md-6 d-flex singleAchieve align-items-center  justify-content-center'
                style={{
                  borderRadius: `${
                    (achievement.id === 2 && '4rem 0') ||
                    (achievement.id === 3 && '4rem 0')
                  }`,
                  flex: '40%',
                }}
                key={achievement.id}>
                <img src={achievement.img} className='achieveImg' alt='' />
                <div className='details'>
                  <h2>{achievement.number} </h2>
                  <p style={{ width: '100%' }}>{achievement.title} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
