import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import ActivityCheckbox from "./ActivityCheckbox";

const EditProfile = ({ profile, user }) => {
  const [photoUpload, setPhotoUpload] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  return (
    <Formik
      initialValues={{
        name: profile.name || "",
        instagram: profile.instagram || "",
        facebook: profile.facebook || "",
        line: profile.line || "",
        selfIntro: profile.selfIntro || "",
        aboutYou: profile.aboutYou || "",
        activities: profile.activities || [],
      }}
      validate={(values) => {
        // const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        // return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const data = new FormData();
        data.append("file", photoFile);
        data.append("upload_preset", "jb7wg5xu");
        let cloudinaryFile;
        try {
          if (photoFile) {
            const res = await fetch(
              "https://api.cloudinary.com/v1_1/popmeet/image/upload",
              {
                method: "POST",
                body: data,
              }
            );
            if (res.status === 400) {
              throw new Error();
            }
            cloudinaryFile = await res.json();
            cloudinaryFile = cloudinaryFile.secure_url;
          } else {
            cloudinaryFile = profile.profilePic || "";
          }

          await user.setUserProfile(profile.uid, {
            ...values,
            profilePic: cloudinaryFile,
          });
          alert("Successfully saved your profile data.");
        } catch (err) {
          alert("There was an error saving your data.");
          console.log(err);
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <div className="container mx-auto px-4 mb-6">
            <div className="photo-social flex mt-6">
              <div
                className="photo"
                onMouseEnter={() => setPhotoUpload(true)}
                onMouseLeave={() => setPhotoUpload(false)}
              >
                <img
                  src={profilePhoto || profile.profilePic}
                  className="w-40 h-40 object-cover rounded-full"
                  alt=""
                />
                <div
                  className={`photo-upload w-40 h-40 rounded-full ${
                    photoUpload ? "photo-show" : "photo-hide"
                  }`}
                >
                  <label htmlFor="photo-input">
                    <img
                      src="/img/upload.png"
                      className="h-10 w-auto cursor-pointer"
                    />
                  </label>
                  <input
                    id="photo-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      var fr = new FileReader();
                      fr.onload = function () {
                        setProfilePhoto(fr.result);
                      };
                      fr.readAsDataURL(e.currentTarget.files[0]);
                      setPhotoFile(e.currentTarget.files[0]);
                    }}
                  />
                </div>
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
                    name="instagram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.instagram}
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
                    name="facebook"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.facebook}
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
                    name="line"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.line}
                  />
                </div>
              </div>
            </div>
            <div className="name flex flex-col mt-6">
              <p className="text-xl font-semibold text-pgray">Your Name</p>
              <input
                className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div className="self-intro flex flex-col mt-6">
              <p className="text-xl font-semibold text-pgray">
                Self Intro (max 30 words)
              </p>
              <input
                className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
                type="text"
                name="selfIntro"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.selfIntro}
              />
            </div>
            <div className="activities flex flex-col mt-6">
              <p className="text-xl font-semibold text-pgray">
                Activities you do
              </p>
              <div className="activities-list flex justify-around mt-6">
                <div className="mountains-nature flex flex-col items-center">
                  <p className="text-lg text-pgray mb-4">Mountains & Nature</p>
                  <ActivityCheckbox name="activities" value="hiking" />
                  <ActivityCheckbox name="activities" value="camping" />
                  {/* <div>
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1">
                      <img
                        src="/img/activity/hiking.png"
                        className="h-10 w-auto mb-2"
                        alt=""
                        id="cb1"
                      />
                    </label>
                  </div>
                  <img
                    src="/img/activity/camping.png"
                    className="h-10 w-auto mb-2"
                    alt=""
                  /> */}
                </div>
                <div className="water-activity flex flex-col items-center">
                  <p className="text-lg text-pgray mb-4">Water Activity</p>
                  <ActivityCheckbox name="activities" value="diving" />
                  <ActivityCheckbox name="activities" value="surfing" />
                  <ActivityCheckbox name="activities" value="kayak" />
                  <ActivityCheckbox name="activities" value="sup" />
                </div>
                <div className="sport flex flex-col items-center">
                  <p className="text-lg text-pgray mb-4">Sport</p>
                  <ActivityCheckbox name="activities" value="badminton" />
                  <ActivityCheckbox name="activities" value="tennis" />
                  <ActivityCheckbox name="activities" value="basketball" />
                </div>
              </div>
            </div>
            <div className="about-you flex flex-col mt-6">
              <p className="text-xl font-semibold text-pgray">About you</p>
              <textarea
                className="border bg-gray-200 rounded-lg text-pdarkblue p-2"
                name=""
                id=""
                cols="30"
                rows="10"
                name="aboutYou"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutYou}
              ></textarea>
            </div>
            <button
              className="bg-porange text-white rounded-full py-2 px-4 mt-6"
              type="submit"
              disabled={isSubmitting}
            >
              Complete
            </button>
          </div>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default EditProfile;

const FormWrapper = styled.form`
  .photo {
    position: relative;
  }

  .photo-upload {
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
  }
  .photo-upload input {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  .photo-show {
    display: flex;
  }

  .photo-hide {
    display: none;
  }
`;
