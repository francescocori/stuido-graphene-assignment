import React from "react";
import "./style.css";
import CardCommunity from "../../Components/CardCommunity";
import communityData from "../../Data/CommunityData";

const Community = () => {
  return (
    <div className="community__section" id="community">
      <div className=" community__header__wrapper">
        <h2 className="section__title">
          meet our <br />
          <span className="title__line__through">community</span>
        </h2>
        <button className="main__button">know more</button>
        <p className="community__title__text">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>

      {communityData.map((card) => {
        return (
          <div className="community__section__row" key={card.id}>
            <CardCommunity {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default Community;
