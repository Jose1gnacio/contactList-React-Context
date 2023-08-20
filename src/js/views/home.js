import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <ol className="container mt-3 list-group list-group-numbered">
        {store.contactList.length > 0 &&
          store.contactList.map((contact, i) => (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={i}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{contact.full_name}</div>
                <div className="fw-bold text-muted">
                  <i className="fa-solid fa-location-dot me-1"></i>
                  {contact.address}
                </div>
                <div className="fw-bold text-muted">
                  <i className="fa-solid fa-phone me-1"></i>
                  {contact.phone}
                </div>
                <div className="fw-bold text-muted">
                  <i className="fa-solid fa-envelope me-1"></i>
                  {contact.email}
                </div>
              </div>
              <i className="fa-solid fa-trash-can mt-2"
                onClick={() => actions.deleteContact(i)}></i>
            </li>
          ))}
      </ol>
    </div>
  );
};
