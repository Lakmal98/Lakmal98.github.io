import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

function Timeline({ education }) {
  const [expanded, setExpanded] = useState(false);

  const handleSeeMore = () => {
    setExpanded(!expanded);
  };

  let { start, end, title, content, globalTerm } = education;

  // start/end format: Jan 2010
  // calculate the years and months between start and end dates
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const totalNumberOfMonths =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear()) +
    1;
  const years = Math.floor(totalNumberOfMonths / 12);
  const months = totalNumberOfMonths % 12;

  // override start/end format
  start =
    startDate.toLocaleString("default", { month: "short" }) +
    " " +
    startDate.getFullYear();
  end =
    endDate.toLocaleString("default", { month: "short" }) +
    " " +
    endDate.getFullYear();

  // show months or years if only exist
  const experience = `${start} - ${end} (${years ? years + " year/s" : ""} ${
    months ? months + " month/s" : ""
  })`;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{experience}</span>

          <h3 className="title">
            {title}{" "}
            {globalTerm ? (
              <span style={{ fontWeight: "normal", color: "gray" }}>
                {" "}
                ({globalTerm})
              </span>
            ) : null}{" "}
          </h3>
          {!expanded ? (
            <p>
              {content.length > 300
                ? content.substring(0, 300) + "..."
                : content}
              {!expanded && content.length > 300 && (
                <span onClick={handleSeeMore} className="see-more">
                  See more
                </span>
              )}
            </p>
          ) : (
            content
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
