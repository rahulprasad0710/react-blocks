import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <div>
            <div className='btn-group' role='group' aria-label='Basic example'>
                <button type='button' className='btn btn-secondary'>
                    Dashboard
                </button>
                <button type='button' className='btn btn-secondary'>
                    List
                </button>
                <button type='button' className='btn btn-secondary'>
                    Add
                </button>
            </div>
            <Outlet />
        </div>
    );
};

export default UserLayout;
