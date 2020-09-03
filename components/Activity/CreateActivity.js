import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import RequiredQuestionCheckbox from "./RequiredQuestionCheckbox";
import DatePicker from "react-datepicker";

import CalendarIcon from "../../public/img/calendar.svg";
import ClockIcon from "../../public/img/clock.svg";

const CreateActivity = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectActivity, setSelectActivity] = useState(false);
  return (
    <Formik
      initialValues={{
        ["question-1-required"]: false,
        ["question-2-required"]: false,
        ["question-3-required"]: false,
      }}
      validate={(values) => {
        // const errors = {};
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        // return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
        /* and other goodies */
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <div className="type-create flex justify-between items-center">
            <div className="create-type flex items-center">
              <h1 className="text-4xl font-bold">Create Activity</h1>
              <button className="ml-6 border border-porange px-6 py-2 rounded-full bg-porange text-white hover:bg-white hover:text-porange transition duration-100 focus:outline-none">
                Privacy setting >
              </button>
            </div>
            <div className="create-cancel">
              <button className="mr-6 border border-porange text-porange px-6 py-2 rounded-full">
                Cancel
              </button>
              <button
                className="border border-gray-500 text-gray-500 px-6 py-2 rounded-full"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
          <div className="type mt-6">
            <p className="input-label">Activity Type</p>
            <button
              className="border border-pblue bg-pblue text-white px-6 py-2 rounded-full"
              onClick={() => setSelectActivity(!selectActivity)}
            >
              Select Type >
            </button>
            <div
              className={`select-activity border bg-pblue flex flex-col p-6 mt-2 rounded-lg ${
                selectActivity ? "show-select-activity" : "hide-select-activity"
              }`}
            >
              <div className="outdoors flex items-center">
                <p className="text-white mr-4">Outdoors</p>
                <img src="/img/activity/hiking.png" alt="" />
                <img src="/img/activity/camping.png" alt="" />
              </div>
              <div className="water flex items-center">
                <p className="text-white mr-4">Water</p>
                <img src="/img/activity/diving.png" alt="" />
                <img src="/img/activity/surfing.png" alt="" />
                <img src="/img/activity/kayak.png" alt="" />
                <img src="/img/activity/sup.png" alt="" />
              </div>
              <div className="sports flex items-center">
                <p className="text-white mr-4">Sports</p>
                <img src="/img/activity/tennis.png" alt="" />
                <img src="/img/activity/badminton.png" alt="" />
                <img src="/img/activity/basketball.png" alt="" />
              </div>
            </div>
          </div>
          <div className="title mt-6">
            <p className="input-label">Title</p>
            <input type="text" className="input-text" />
          </div>
          {/* DATE TIME PICKER */}
          <div className="date-time mt-6">
            <p className="input-label">Date & Time</p>
            <div className="beginning flex">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Beginning date"
                customInput={<DatePickerJsx />}
              />
              <div className="date-time-button mr-4 flex items-center">
                <ClockIcon />
                <p className="text-pgray ml-2">Beginning time</p>
              </div>
            </div>
            <div className="end flex mt-6">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End date"
                customInput={<DatePickerJsx />}
              />
              <div className="date-time-button mr-4 flex items-center">
                <ClockIcon />
                <p className="text-pgray ml-2">End time</p>
              </div>
            </div>
          </div>
          <div className="participants mt-6">
            <p className="input-label">Participant Limit</p>
            <div className="participation flex">
              <button className="border px-4 py-2">Participant limit</button>
              <input type="radio" />
            </div>
          </div>
          <div className="departure mt-6">
            <p className="input-label">Departure City/Region</p>
            <input
              type="text"
              className="input-text"
              placeholder="Which city do you depart for this activity?"
            />
          </div>
          <div className="destination mt-6">
            <p className="input-label">Destination</p>
            <input
              type="text"
              className="input-text"
              placeholder="Where is your destination for this activity?"
            />
          </div>
          <div className="difficulty-level mt-6">
            <p className="input-label">Activity Difficulty</p>
            <div className="difficulty-buttons flex">
              <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold mr-2">
                Beginner
              </button>
              <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full font-semibold mr-2">
                Experienced
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full font-semibold">
                Professional
              </button>
            </div>
          </div>
          <div className="estimated-fee mt-6">
            <p className="input-label">Estimated Fee</p>
            <input type="text" className="input-text" />
          </div>
          <div className="description mt-6">
            <p className="input-label">Description</p>
            <textarea
              className="border p-2 bg-gray-200"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="photo-upload mt-6">
            <p className="input-label">Photo upload</p>
            <div className="p-10 w-1/2 rounded-lg bg-gray-200 border flex flex-col justify-center items-center">
              <img src="/img/add-image.png" alt="" />
              <p className="text-pgray">Photo upload</p>
            </div>
          </div>
          <div className="participant-questions mt-6">
            <p className="input-label">
              Questions to participants (Max 3 questions, optional)
            </p>

            <div className="question-1 flex flex-col">
              <p className="input-label">Question 1</p>
              <div className="question-layout flex items-center">
                <input type="text" className="input-text" />
                <RequiredQuestionCheckbox
                  name="question-1-required"
                  value={false}
                />
              </div>
            </div>
            <div className="question-2 flex flex-col">
              <p className="input-label">Question 2</p>
              <div className="question-layout flex items-center">
                <input type="text" className="input-text" />
                <RequiredQuestionCheckbox
                  name="question-2-required"
                  value={false}
                />
              </div>
            </div>
            <div className="question-3 flex flex-col">
              <p className="input-label">Question 3</p>
              <div className="question-layout flex items-center">
                <input type="text" className="input-text" />
                <RequiredQuestionCheckbox
                  name="question-3-required"
                  value={false}
                />
              </div>
            </div>
          </div>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default CreateActivity;

class DatePickerJsx extends React.Component {
  render() {
    return (
      <div
        className="date-time-button mr-4 flex items-center"
        onClick={this.props.onClick}
      >
        <CalendarIcon />
        <p className="text-pgray ml-2">
          {this.props.value || this.props.placeholderText}
        </p>
      </div>
    );
  }
}

const FormWrapper = styled.form`
  .select-activity {
  }
  .show-select-activity {
    display: flex;
  }
  .hide-select-activity {
    display: none;
  }

  .date-time {
    svg {
      fill: #828282;
    }
    input[date] {
      background: silver;
    }
  }
`;
