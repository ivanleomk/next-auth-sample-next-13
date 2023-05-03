"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Dashboard = async () => {
  return (
    <div>
      Dashboard is a protected page.
      <button
        className="cursor-pointer"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
