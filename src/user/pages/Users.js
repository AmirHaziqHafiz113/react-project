import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
        id: 'u1',
        name: 'Max Schwarz',
        image:
            'https://images.unsplash.com/photo-1587613868258-4e8e9d4a7a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        places: 3
        }
    ];
    
    return <UsersList items={USERS} />;
};

export default Users;
