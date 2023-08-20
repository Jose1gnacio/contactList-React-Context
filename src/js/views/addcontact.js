import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [newContact, setNewContact] = useState(
    {
      full_name: "",
      email: "",
      agenda_slug: "jose",
      address: "",
      phone: "",
    }
  );
  const navigate = useNavigate();
  const inputContact = () => {
    console.log(inputContact)
    actions.postContact(newContact);

    setNewContact({
      full_name: "",
      email: "",
      agenda_slug: "jose",
      address: "",
      phone: "",
    });
    navigate("/")
  };

  return (
    <div className="container-fluid mt-3 w-50">
      <div className="text-center fw-bold h1 mb-3">Add new contact</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inputContact();
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            placeholder="Full Name"
            onChange={(e) => {
              setNewContact({
                ...newContact,
                full_name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            E-Mail
          </label>
          <input
            className="form-control"
            id="exampleInputEmail"
            placeholder="E-Mail"
            onChange={(e) => {
              setNewContact({
                ...newContact,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            className="form-control"
            id="exampleInputPhone"
            placeholder="Phone"
            onChange={(e) => {
              setNewContact({
                ...newContact,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            className="form-control"
            id="exampleInputAddress"
            placeholder="Address"
            onChange={(e) => {
              setNewContact({
                ...newContact,
                address: e.target.value,
              });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>

        <Link to="/">
          <span>Get back to contacts</span>
        </Link>
      </form>
    </div>
  );
};
