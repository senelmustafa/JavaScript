import React from 'react'
import "../15-card/15-profile-card.css";


const ProfileCard = (props) => {
 
  const img = require(`../15-card/${props.avatar}`);

  const profileBg = { backgroundImage: `url(${img})` };
  return (
    <div className="profile-card">
      <div className="profile-bg" style={profileBg}>
        <div className="profile-tranparent"></div>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={img} alt=""/>
        </div>
        <h3>{props.name}</h3>
        <h6>{props.location}</h6>
        <div className="profile-stats">
          <div>
            {props.shot}
            <span>Shot</span>
          </div>
          <div>
            {props.followers}
            <span>Followers</span>
          </div>
          <div>
            10
            {props.followings}
            <span>Followings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
