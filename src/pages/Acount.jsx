import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Account.css";

const Account = () => {
  const [user, setUser] = useState({ username: "", firstLetter: "" });
  const navigate = useNavigate()
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.username) {
      const email = storedUser.username;
      const namePart = email.split("@")[0]; // remove "@gmail.com"
      const firstLetter = namePart.charAt(0).toUpperCase();

      setUser({ username: namePart, firstLetter });
    }
  }, []);
    return (
        <>

            <div className="container px-3 px-md-5 py-4 text-white">
                {/* Header */}
                <div className="account-header d-flex align-items-center mb-4">
                    <div className="profile-circle me-3">{user.firstLetter || "U"}</div>
          <div>
            <h4 className="mb-0 fw-bold">Hi, {user.username || "User"}</h4>
            <small className="opacity-75">Guest</small>
          </div>
                </div>

                {/* Genius Rewards */}
                {/* <div className="rewards-card p-3 rounded  mb-4 shadow-sm">
          <h6 className="fw-bold mb-3">You have 3 Genius rewards</h6>
          <div className="d-flex flex-wrap gap-4">
            <div className="reward-box border p-2 rounded text-center">
              <div className="fw-bold">10% off stays</div>
              <small>Level 1</small>
            </div>
            <div className="reward-box border p-2 rounded text-center">
              <div className="fw-bold">10% off rental cars</div>
            </div>
            <div className="reward-box border p-2 rounded text-center">
              <div className="fw-bold">Flight price alerts</div>
              <span className="badge bg-info text-white">New</span>
            </div>
          </div>
        </div> */}

                {/* Complete Profile */}
                <div className=" p-3 rounded shadow-sm mb-4 d-flex justify-content-between align-items-center text-white" style={{ backgroundColor: "#0b0a12" }}>
                    <div>
                        <h6 className="mb-1">Complete your profile</h6>
                        <small className="opacity-75">
                            Complete your profile and use this info for your next booking
                        </small>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-sm me-2" onClick={()=>{navigate(`/dashboard/completeprofile`)}}>Complete now</button>
                        <button className="btn btn-outline-secondary btn-sm">Not now</button>
                    </div>
                </div>

                {/* Account Options Grid */}
                <div className="row g-3">
                    {[
                        { title: "Payment info", items: ["Rewards & Wallet", "Payment methods"] },
                        { title: "Manage account", items: ["Personal details", "Security settings", "Other travelers"] },
                        { title: "Preferences", items: ["Customization preferences", "Email preferences"] },
                        { title: "Travel activity", items: ["Trips and bookings", "Saved lists", "My reviews"] },
                        { title: "Help and support", items: ["Contact Customer Service", "Safety resource center", "Dispute resolution"] },
                        { title: "Legal and privacy", items: ["Privacy and data management", "Content guidelines"] },
                        { title: "Manage your property", items: ["List your property"] },
                    ].map((section, i) => (
                        <div key={i} className="col-md-6 col-lg-4 text-start">
                            <div className=" p-3  rounded shadow-sm h-100" style={{ backgroundColor: "#0b0a12" }}>
                                <h6 className="fw-bold">{section.title}</h6>
                                <ul className="list-unstyled mb-0 mt-2">
                                    {section.items.map((item, j) => (
                                        <li
                                            key={j}
                                            className="nav-item d-flex align-items-center gap-2 mb-2 list-link justify-between"
                                        >
                                            
                                            <span className="text-primary">{item}</span>
                                            <i className="bi bi-chevron-right text-secondary"></i>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Account;
