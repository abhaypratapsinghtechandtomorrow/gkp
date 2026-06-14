import React, { useState, useEffect } from 'react';
import { IconUsers, IconCalendarEvent, IconTrash, IconHome, IconPhoneCall } from '@tabler/icons-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    const loadedUsers = JSON.parse(localStorage.getItem('usersDB') || '[]');
    const loadedBookings = JSON.parse(localStorage.getItem('bookingsDB') || '[]');
    const loadedCallbacks = JSON.parse(localStorage.getItem('callbacksDB') || '[]');
    setUsers(loadedUsers);
    setBookings(loadedBookings);
    setCallbacks(loadedCallbacks);
  }, []);

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to delete all user and booking data? This cannot be undone.")) {
      localStorage.removeItem('usersDB');
      localStorage.removeItem('bookingsDB');
      localStorage.removeItem('callbacksDB');
      setUsers([]);
      setBookings([]);
      setCallbacks([]);
      alert("All data cleared successfully.");
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content container">
          <div className="admin-brand">
            <IconUsers size={28} color="#ffffff" />
            <h2>Admin Panel</h2>
          </div>
          <div className="admin-actions">
            <button className="btn btn-danger" onClick={handleClearData}>
              <IconTrash size={18} /> Clear Data
            </button>
            <button className="btn btn-outline-white" onClick={() => window.location.hash = ''}>
              <IconHome size={18} /> Back to Site
            </button>
          </div>
        </div>
      </header>

      <div className="admin-content container">
        <div className="admin-section">
          <div className="section-header">
            <IconUsers size={24} color="var(--primary-color)" />
            <h3>Registered Users ({users.length})</h3>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr><td colSpan="4" className="empty-state">No users registered yet.</td></tr>
                ) : (
                  users.map(u => (
                    <tr key={u.id}>
                      <td><span className="code-badge">{u.id}</span></td>
                      <td><strong>{u.name}</strong></td>
                      <td>{u.mobile}</td>
                      <td><span className="code-badge password-badge">{u.password}</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-section">
          <div className="section-header">
            <IconCalendarEvent size={24} color="var(--primary-color)" />
            <h3>Recent Bookings ({bookings.length})</h3>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Items Booked</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr><td colSpan="3" className="empty-state">No bookings yet.</td></tr>
                ) : (
                  bookings.map((b, i) => (
                    <tr key={i}>
                      <td>{new Date(b.date).toLocaleString()}</td>
                      <td>
                        <ul className="booking-items-list">
                          {b.items.map((item, idx) => (
                            <li key={idx}>{item.name} <span className="item-price">₹{item.price}</span></li>
                          ))}
                        </ul>
                      </td>
                      <td><strong>₹{b.totalAmount}</strong></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-section">
          <div className="section-header">
            <IconPhoneCall size={24} color="var(--primary-color)" />
            <h3>Callback Requests ({callbacks.length})</h3>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date & Time (IST)</th>
                  <th>Name</th>
                  <th>Registered Mobile</th>
                  <th>Callback Number</th>
                </tr>
              </thead>
              <tbody>
                {callbacks.length === 0 ? (
                  <tr><td colSpan="4" className="empty-state">No callback requests.</td></tr>
                ) : (
                  callbacks.map((c) => (
                    <tr key={c.id}>
                      <td>{c.date}</td>
                      <td><strong>{c.name}</strong></td>
                      <td>{c.registeredMobile}</td>
                      <td><span className="code-badge">{c.callbackMobile}</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
