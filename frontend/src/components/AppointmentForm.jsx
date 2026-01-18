import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const AppointmentForm = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const handleAppointment = async (e) => {
    e.preventDefault();
  
    if (
      !firstName ||
      !email ||
      !phone ||
      !dob ||
      !gender ||
      !appointmentDate ||
      !department ||
      !address
    ) {
      toast.error("Please fill all required fields");
      return;
    }
  
    try {
      const { data } = await api.post(
        "/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          hasVisited,
          address,
        }
      );
  
      toast.success(data.message || "Appointment booked successfully");
      navigateTo("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Booking failed");
    }
  };
  

  return (
    <div className="appointment-wrapper">
      <div className="appointment-card">
        <h2>Book Appointment</h2>


        <form onSubmit={handleAppointment}>
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="date"
              title="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="datetime-local"
              title="Appointment Date & Time"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>

          <div className="form-row">
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Select Department *</option>
              {departmentsArray.map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Address *"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="checkbox-row">
            <label>
              <input
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
              />
              Have you visited before?
            </label>
          </div>

          <button type="submit" className="appointment-btn">
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;