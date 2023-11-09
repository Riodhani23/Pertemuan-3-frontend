import React from 'react';
import users from './users';

// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    async () => {
        console.log(formatUser(users));
        console.log(await findByName("joko"));
        console.log(await filterByMajor("Desktop"));
    }

    fetchData();

    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = (dataUsers) => {
return dataUsers.map(user => user.name);
};

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = (name) => {
const user = users.find (user => user.name === name);
return user ? user : "user tidak di temukan";
};


// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = (major) => {
    return users.filter(user => user.major === major);
};

export default UsersController;
