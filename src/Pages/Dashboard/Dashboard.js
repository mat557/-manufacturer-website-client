import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
            <div className="drawer drawer-mobile w-11/12 mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <p className="text-4xl text-teal-500">Dashboard</p>
                    <Outlet></Outlet>
                    <div className=" flex  justify-end mr-2">
                        <label  htmlFor="my-drawer-2"  tabIndex="1" className="btn btn-ghost btn-circle lg:hidden ">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                        </label>
                    </div>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dasboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dasboard/reviews'>Sidebar Item 2</Link></li>
                    </ul>
                </div>
            </div>
  );
};

export default Dashboard;