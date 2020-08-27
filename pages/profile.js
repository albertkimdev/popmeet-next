import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import EditProfile from "../components/Profile/EditProfile";
import { useAuth } from "../auth/useAuth";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      router.push("/");
    }
  }, []);

  return (
    <ProfileWrapper className="container mx-auto px-4">
      <div className="flex flex-col mt-4">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">My Profile</h1>
          <button
            className="border border-pblue rounded-full ml-6 px-6 py-1 text-pblue font-semibold hover:bg-pblue hover:text-white transition duration-100"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
        </div>
        {!edit ? (
          <>
            <div className="user-row flex justify-between mt-4">
              <div className="user-info flex">
                <div className="profile-img">
                  <img
                    src="/img/profile_2.png"
                    className="rounded-full w-56 h-auto"
                    alt=""
                  />
                </div>
                <div className="profile-info flex flex-col justify-center ml-8">
                  <h2 className="text-2xl font-semibold text-porange">
                    Alan Chou
                  </h2>
                  <p className="mt-4 text-pgray">Short into - CPO Popmeet</p>
                  <div className="mt-4 user-activities">
                    <div className="activity">
                      <span>icon</span>
                      <span>name</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-links flex items-center">
                <a href="#">
                  <img
                    className="h-10 w-auto rounded-full mr-3"
                    src="/img/facebook-icon.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="h-10 w-auto rounded-full mr-3"
                    src="/img/instagram-icon.png"
                    alt=""
                  />
                </a>
                <a href="#">
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
              <p className="text-pdarkblue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                non corporis eaque numquam aliquid blanditiis? Harum commodi
                temporibus consectetur sequi, laborum accusantium obcaecati
                dignissimos eius non, ipsam totam alias vel velit porro hic.
                Voluptatibus perferendis eius cumque est suscipit dolorem ab
                impedit nesciunt sit officia eum provident, iste sapiente omnis.
              </p>
            </div>
            <div className="personal-records flex flex-col mt-4 w-1/2">
              <h2 className="text-2xl font-semibold text-pgray">
                Personal records
              </h2>
              <p className="text-pdarkblue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, labore?
              </p>
            </div>
          </>
        ) : (
          <EditProfile />
        )}
      </div>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  @media (max-width: 640px) {
    .user-row {
      flex-direction: column;
    }
    .social-links {
      margin-top: 1rem;
    }
  }
`;
