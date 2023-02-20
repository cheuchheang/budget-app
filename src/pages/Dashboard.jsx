import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName}</div>;
};

export default Dashboard;
