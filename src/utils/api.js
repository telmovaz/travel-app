export const url = 'https://nodejs-mysql-it-academy.herokuapp.com';

export const options = {
    headers: {
      "Content-type": "multipart/form-data",
      "x-access-token": localStorage.getItem("token"),
    },
  };