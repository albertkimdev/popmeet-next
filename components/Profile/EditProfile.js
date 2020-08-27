import React from "react";

const EditProfile = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="photo-social flex mt-6">
        <div className="photo">
          <img
            src="/img/profile_2.png"
            className="w-40 h-auto rounded-full"
            alt=""
          />
        </div>
        <div className="social ml-8 flex flex-col justify-center">
          <div className="instagram flex">
            <img
              src="/img/instagram-icon.png"
              className="h-10 w-auto rounded-full"
              alt=""
            />
            <input
              className="border ml-4 bg-gray-200 rounded-lg text-pdarkblue p-2"
              type="text"
            />
          </div>
          <div className="facebook flex mt-3">
            <img
              src="/img/facebook-icon.png"
              className="h-10 w-auto rounded-full"
              alt=""
            />
            <input
              className="border ml-4 bg-gray-200 rounded-lg text-pdarkblue p-2"
              type="text"
            />
          </div>
          <div className="line flex mt-3">
            <img
              src="/img/line-icon.png"
              className="h-10 w-auto rounded-full"
              alt=""
            />
            <input
              className="border ml-4 bg-gray-200 rounded-lg text-pdarkblue p-2"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="name flex flex-col mt-6">
        <p className="text-xl font-semibold text-pgray">Your Name</p>
        <input
          className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
          type="text"
        />
      </div>
      <div className="self-intro flex flex-col mt-6">
        <p className="text-xl font-semibold text-pgray">
          Self Intro (max 30 words)
        </p>
        <input
          className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
          type="text"
        />
      </div>
      <div className="activities flex flex-col mt-6">
        <p className="text-xl font-semibold text-pgray">Activities you do</p>
        <div className="border">activities</div>
      </div>
      <div className="about-you flex flex-col mt-6">
        <p className="text-xl font-semibold text-pgray">About you</p>
        <textarea
          className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button className="bg-porange text-white rounded-full py-2 px-4 mt-6">
        Complete
      </button>
    </div>
  );
};

export default EditProfile;
