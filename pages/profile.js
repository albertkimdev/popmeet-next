import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import EditProfile from "../components/Profile/EditProfile";
import ViewProfile from "../components/Profile/ViewProfile";
import { useAuth } from "../auth/useAuth";
import { useUser } from "../user/useUser";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const auth = useAuth(); // firebase auth methods
  const user = useUser(); // firestore methods

  useEffect(() => {
    if (!auth.user) {
      // redirect if there is no user
      router.push("/");
    } else {
      user.getUserData(auth.user.uid);
    }
  }, []);

  let profileLayout = "";
  let editProfile = "";

  if (user.user) {
    profileLayout = <ViewProfile profile={user.user} />;
    editProfile = <EditProfile profile={user.user} user={user} />;
  } else {
    profileLayout = <p>Loading...</p>;
    editProfile = <p>Loading...</p>;
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
        {!edit ? profileLayout : editProfile}
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
