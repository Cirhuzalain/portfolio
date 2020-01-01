import React from "react";

const Card = props => {
  return (
    <div className={`card col-md-${props.data.n} col-md-offset-1`}>
      <a href={`${props.data.link}`} rel="noreferrer noopener" target="_blank">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary" />
          <i className={`fas ${props.data.icon} fa-stack-1x fa-inverse`} />
        </span>
      </a>
      <h4 className="service-heading">{props.data.title}</h4>
      <p className="text-muted">{props.data.desc}</p>
    </div>
  );
};

export default Card;
