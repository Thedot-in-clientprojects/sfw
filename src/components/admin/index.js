import React from 'react';

const AdminLayout = ({ children }) => {
    return(
        <div style={{
            margin:50
        }}>
            <main>{children}</main>
        </div>
    )
}

export default AdminLayout;
