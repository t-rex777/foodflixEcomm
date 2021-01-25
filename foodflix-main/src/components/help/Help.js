import React from "react";
import Base from "./../Base/Base";
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as FiIcons from "react-icons/fi"
import "./help.css"
function Help() {
  return (
    <Base header="Contact Us">
      <div className="help">
        <form action="mailto:msahu300@gmail.com">
          <label>Name:</label>
          <input type="text" name="name" />

          <label>Email:</label>
          <input type="email" name="email" />

          <label>Question: </label>
          <textarea rows="5" cols="33" name="question" />

          <button className="add" type="submit">
            Submit
          </button>
        </form>
        <div className="address">
          <p><FiIcons.FiMapPin/>  Ghaziabad, sector XX, New Delhi</p>
          <p><FaIcons.FaPhoneAlt/> 8007796335</p>
          <p> <IoIcons.IoMdMail/> msahu300@gmail.com</p>
        </div>
      </div>
    </Base>
  );
}

export default Help;
