import React from "react";

export const FeedItem = ({ feed }) => {
  const { avatar_url, login } = feed;

  return (
    <>
      <div className="flex justify-center w-[40%] p-4 ">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="flex justify-center mb-4 p-4">
            <img
              src={avatar_url}
              width={350}
              height={350}
              alt="avatar_url"
              className="rounded-full border-4 border-indigo-500 shadow-md"
            />
          </div>
          <div className="text-center p-4">
            <p className="font-bold text-2xl text-indigo-600">{login}</p>
            <p className="text-gray-600 mt-2">
              {login} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sed eum maiores libero! Reiciendis perspiciatis dolores illum sit
              enim vero autem numquam, rerum nostrum fugit. Cum voluptate
              delectus molestias expedita ex?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
