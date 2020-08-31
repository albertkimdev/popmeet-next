import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import EditProfile from "../components/Profile/EditProfile";
import ViewProfile from "../components/Profile/ViewProfile";
import { useAuth } from "../auth/useAuth";
import { useUser } from "../user/useUser";

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const auth = useAuth(); // firebase auth methods
  const user = useUser(); // firestore methods

  useEffect(() => {
    let ignore = false;
    if (!auth.user) {
      // redirect if there is no user
      router.push("/");
    } else {
      // get user data and insert into user state
      const getUserData = async (uid) => {
        const thisUser = await user.getUserData(uid);
        if (!ignore) setProfile({ ...thisUser.data(), uid });
      };
      getUserData(auth.user.uid);
    }
    return () => {
      ignore = true;
    };
  }, [auth]);

  let profileLayout = "";

  if (profile) {
    profileLayout = <ViewProfile profile={profile} />;
  } else {
    profileLayout = <p>Loading...</p>;
  }

  return (
    <ProfileWrapper className="container mx-auto px-4">
      <div className="flex flex-col mt-4">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">My Profile</h1>
          <button
            className="border border-pblue rounded-full ml-6 px-6 py-1 text-pblue font-semibold hover:bg-pblue hover:text-white transition duration-100 outline-none"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "View" : "Edit"}
          </button>
        </div>
        {!edit ? profileLayout : <EditProfile profile={profile} user={user} />}
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
