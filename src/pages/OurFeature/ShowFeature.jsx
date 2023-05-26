import React from "react";

const ShowFeature = ({ allToy }) => {
  const { name, pictureURL, image } = allToy;
  console.log(allToy);
  return (
    <div className="mt-8 ">
      <div className="text-center">
        <div className="avatar">
          <div className="w-52 h-50 rounded">
            <img src={pictureURL ? pictureURL : image} />
          </div>
        </div>
        <p> {name}</p>
      </div>
    </div>
  );
};

export default ShowFeature;
