import React from "react";

const Dashboard = () => {
  const response = fetch("https://www.sapperdem.com/api/v1/test")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

  return <div>Dashboard</div>;
};

export default Dashboard;
