import React, { FC } from "react";
import Thread from "../../../models/Thread";
import { Link, useHistory } from "react-router-dom";
import { faEye, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ThreadCard.css";

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push("/thread/" + thread.id)
  };

  // creates the UI for display likes on posts, 
  const getPoints = (thread: Thread) => {
    if(width <= 768) { // shows up in mobiles only
      return (
        <label style={{marginRight: ".75em", marginTop: ".25em"}}>
          {thread.points || 0}
          <FontAwesomeIcon
            icon={faHeart}
            className="points-icon"
            style={{
              marginLeft: ".2em"
            }}
          />
        </label>
      )
    }
    return null;
  }

  //show how many thread items responses there are for this Thread.
  const getResponses = (thread: Thread) => {
    if(width <= 768) { // shows up in mobiles only
      return (
        <label style={{marginRight: ".5em"}}>
          { thread && thread.threadItems && thread.threadItems.length }
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{ marginLeft: ".25em", marginTop: "-.25em"}}
          />
        </label>
      )
    }
    return null;
  }

  //points to the right of the ThreadCard, and renders when the screen width is bigger than 768px
  const getPointsNonMobile = () => {
    if(width > 768) {
      return (
        <div className="threadcard-points">
          <div className="threadcard-points-item">
            {thread.points || 0}
            <br />
            <FontAwesomeIcon
              icon={faHeart}
              className="points-icon"
            />
          </div>
          <div
            className="threadcard-points-item"
            style={{ marginBottom: ".75em" }}
          >
            { thread && thread.threadItems && thread.threadItems.length }
            <br />
            <FontAwesomeIcon
              icon={faReplyAll}
              className="points-icon"
            />
          </div>
        </div>
      )
    }
  }

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link 
            to={`/categorythreads/${thread.category.id}`}
            className="link-txt"
            >
              <strong>{thread.category.name}</strong>
          </Link>
          <span className="username-header" style={{marginLeft: ".5em"}}>
            {thread.userName}
          </span>
        </div>
        <div className="question">
          <div
            onClick={onClickShowThread}
            data-thread-id={thread.id}
            style={{ marginBottom: ".4em"}}
          >
            <strong>{thread.title}</strong>
          </div>
          <div 
            className="threadcard-body"
            onClick={onClickShowThread}
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>
          <div className="threadcard-footer">
            <span style={{marginRight: ".5em"}}>
              <label>
                {thread.views}
                <FontAwesomeIcon
                  icon={faEye}
                  className="icon-lg"
                />
              </label>
            </span>
            <span>
              {getPoints(thread)}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      {getPointsNonMobile()}
    </section>
  )
};

export default ThreadCard;