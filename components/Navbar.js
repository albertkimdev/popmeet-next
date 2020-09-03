import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useAuth } from "../auth/useAuth";
import { useUser } from "../user/useUser";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const auth = useAuth();
  const user = useUser();

  let profileNav = "";
  // console.log(user.user);

  useEffect(() => {
    if (auth.user) {
      user.getUserData(auth.user.uid);
    }
  }, [auth.user]);

  if (user.user) {
    profileNav = (
      <div
        className="profile-button bg-pblue  pl-4 pr-1 py-1 rounded-full text-white cursor-pointer"
        onMouseEnter={() => setShowProfileOptions(true)}
        onMouseLeave={() => setShowProfileOptions(false)}
      >
        <div className="flex items-center justify-between ">
          <span className="mr-4">{user.user.name}</span>

          <img
            src={user.user.profilePic || "/img/profile_1.png"}
            className="h-10 w-auto rounded-full"
          />
        </div>

        <div
          className={`profile-hover bg-white px-4 py-1 border rounded-lg ${
            showProfileOptions ? "show-profile-options" : "hide-profile-options"
          }`}
        >
          <Link href="/profile">
            <a
              className="hover:bg-gray-100 text-pdarkblue font-semibold pb-2 border-b"
              onClick={() => {
                setOpenBurger(false);
              }}
            >
              My profile
            </a>
          </Link>
          <Link href="/">
            <a
              className="hover:bg-gray-100 text-porange font-semibold pb-2 border-b"
              onClick={() => {
                setOpenBurger(false);
                auth.signout();
              }}
            >
              Logout
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    profileNav = (
      <button
        className="profile-button border bg-gray-500 py-2 px-4 rounded-full bg-porange text-white focus:outline-none"
        onClick={async () => {
          setShowModal(true);
          setOpenBurger(false);
        }}
      >
        Log in
      </button>
    );
  }

  return (
    <div className="container mx-auto mt-4 px-4">
      <NavWrapper open={openBurger}>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="logo" onClick={() => setOpenBurger(false)}>
              <img className="h-10 w-auto" src="/img/popmeet_logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div
          className="burger"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-links flex items-center">
          <Link href="/create">
            <a
              className="mr-4 nav-link font-semibold"
              onClick={() => setOpenBurger(false)}
            >
              Create
            </a>
          </Link>
          <a
            className="mr-4 nav-link font-semibold"
            href="#"
            onClick={() => setOpenBurger(false)}
          >
            Explore
          </a>
          <a
            className="mr-4 nav-link font-semibold"
            href="#"
            onClick={() => setOpenBurger(false)}
          >
            FAQ
          </a>
          {profileNav}
        </div>
      </NavWrapper>
      {showModal && (
        <ModalBackground>
          <div className="background" onClick={() => setShowModal(false)}></div>
          <LoginModal className="border rounded-lg bg-white">
            <p className="text-4xl">Popmeet</p>
            <button
              className="mt-8 w-2/3 border border-fbblue rounded-full py-2 text-fbblue font-bold hover:text-white hover:bg-fbblue transition duration-200"
              onClick={async () => {
                const res = await auth.fbsignin();
                setShowModal(false);
              }}
            >
              Login with Facebook
            </button>
            <button
              className="mt-2 w-2/3 border border-linegreen rounded-full py-2 text-linegreen font-bold hover:text-white hover:bg-linegreen transition duration-200"
              onClick={async () => {
                const res = await auth.googlesignin();
                setShowModal(false);
              }}
            >
              Login with Google
            </button>
            <div
              className="close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </div>
          </LoginModal>
        </ModalBackground>
      )}
    </div>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  .burger {
    display: none;
  }

  .nav-links {
    display: flex;
  }

  .profile-button {
    position: relative;
    .profile-hover {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
    }
    .show-profile-options {
      display: flex;
      flex-direction: column;
    }
    .hide-profile-options {
      display: none;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
    .burger {
      width: 25px;
      display: block;
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;

      span {
        margin-bottom: 0.3rem;
        background: black;
        height: 2px;
        width: 100%;
        display: block;
      }
    }

    .nav-links {
      background: white;
      display: ${(props) => (props.open ? "flex" : "none")};
      align-items: flex-start;
      position: absolute;
      left: 0;
      top: 100%;
      flex-direction: column;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .nav-link {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 1rem;
      }

      .profile-button {
        /* width: 100%; */
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 5px;
        margin-left: 1rem;
        margin-bottom: 5px;
      }
    }

    .logo {
      justify-self: center;
    }
  }
`;

const LoginModal = styled.div`
  position: relative;
  padding: 1rem;
  z-index: 5;
  width: 40vw;
  height: 40vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .close {
    position: absolute;
    top: 5%;
    left: 5%;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    /* Mobile */
    width: 70vw;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;

  .background {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
`;
