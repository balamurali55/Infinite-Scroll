import React from "react";
import { useState } from "react";

function FeedDescription({ description }) {
  const hashtags = description.match(/#[\w]+/g);
  const remainingText = description.replace(/#[\w]+/g, "");

  const combinedText = <div>{remainingText}</div>;

  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div>
        <div className={`${showMore ? "" : "truncate-lines-2"}`}>
          {combinedText}
        </div>
        {description.length > 150 && (
          <span
            className=" text-[#000000] opacity-50 cursor-pointer"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "less" : "more"}
          </span>
        )}
      </div>
    </>
  );
}

export default FeedDescription;
