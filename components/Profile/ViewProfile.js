import React from "react";

const ViewProfile = ({ profile }) => {
  return (
    <>
      <div className="user-row flex justify-between mt-4">
        <div className="user-info flex">
          <div className="profile-img">
            <img
              src={profile.profilePic || "/img/profile_1.png"}
              className="rounded-full w-56 h-56 object-cover"
              alt=""
            />
          </div>
          <div className="profile-info flex flex-col justify-center ml-8">
            <h2 className="text-2xl font-semibold text-porange">
              {profile.name}
            </h2>
            <p className="mt-4 text-pgray">{profile.selfIntro}</p>
            <div className="mt-4 user-activities flex w-1/2 flex-wrap">
              {profile.activities.map((activity, i) => (
                <img
                  className="h-8 w-auto m-1"
                  src={`/img/activity/${activity}.png`}
                  key={i}
                  title={activity}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="social-links flex items-center">
          <a
            href={`${
              profile.facebook
                ? `https://facebook.com/${profile.facebook}`
                : "#"
            }`}
            target="_blank"
          >
            <img
              className="h-10 w-auto rounded-full mr-3"
              src="/img/facebook-icon.png"
              alt=""
            />
          </a>
          <a
            href={`${
              profile.instagram
                ? `https://instagram.com/${profile.instagram}`
                : "#"
            }`}
            target="_blank"
          >
            <img
              className="h-10 w-auto rounded-full mr-3"
              src="/img/instagram-icon.png"
              alt=""
            />
          </a>
          <a
            href={`${
              profile.line ? `https://line.me/R/ti/p/@${profile.line}` : ""
            }`}
            target="_blank"
          >
            <img
              className="h-10 w-auto rounded-full"
              src="/img/line-icon.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="about-me flex flex-col mt-4 w-1/2">
        <h2 className="text-2xl font-semibold text-pgray">About me</h2>
        <p className="text-pdarkblue">{profile.aboutMe}</p>
      </div>
      <div className="personal-records flex flex-col mt-4 w-1/2">
        <h2 className="text-2xl font-semibold text-pgray">Personal records</h2>
        <p className="text-pdarkblue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          labore?
        </p>
      </div>
    </>
  );
};

export default ViewProfile;
