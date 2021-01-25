import React,{useState} from "react";
import Base from "./../Base/Base";
import "./orders.css";

function AdminOrders() {
  const[status,setStatus] = useState({
    pending : 0,
    processing : 0,
    shipped : 0,
    completed : 0,
    cancelled : 0,
    failed : 0
  })
  return (
    <Base header="Admin Orders">
      <h3>Status</h3>
      <div className="orders">
        <p className="yellow status">Pending: {status.pending}</p>
        <p className="blue status">Processing: {status.processing}</p>
        <p className="orange status">Shipped: {status.shipped}</p>
        <p className="green status">Completed: {status.completed}</p>
        <p className="red status">Cancelled: {status.cancelled}</p>
        <p className="pink status">Failed: {status.failed}</p>
      </div>
      <h3>Filter Order by Status</h3>
      <div className="orders">
        <button className="status_button">Pending</button>
        <button className="status_button">Processing</button>
        <button className="status_button">Shipped</button>
        <button className="status_button">Completed</button>
        <button className="status_button">Cancelled</button>
        <button className="status_button">Failed</button>
      </div>
    </Base>
  );
}

export default AdminOrders;
