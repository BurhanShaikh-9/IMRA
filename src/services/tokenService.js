// import React from 'react'
// import Cookies from 'js-cookie';


// const TokenService = () => {

//   const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM4YmU1MWI2YjE2NDZhZjNjNWQ3ZDYiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImlhdCI6MTY5MTQ4MzUyNiwiZXhwIjoxNjkxNTY5OTI2fQ.In5H8PNKRdXYlbummcZ5rh6FAKTi3P8ro95LHc4mW4A'
//   const cookieAttributes = {
//     expires: 1,       // Expires in 7 days
//     path: '/',        // Accessible across the entire domain
//     secure: false,     // Only sent over HTTPS
//     httpOnly: false,   // Accessible only through HTTP
//     sameSite: 'strict' // Send cookie only if the request is from the same site
//   };


//   function saveCookie(token) {
//     // console.log(token, 'tokenn');
//     Cookies.set('userToken', token, cookieAttributes);
//   }


//   function deleteCookie() {
//     const cookieName = 'userToken';
//     document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//     console.log('cookieDeleted');
//   }


//   function getCookie() {
//     const cookieString = document.cookie;
//     const cookies = cookieString.split('; ');

//     for (const cookie of cookies) {
//       const [cookieName, cookieValue] = cookie.split('=');
//       if (cookieName === 'userToken') {
//         return decodeURIComponent(cookieValue);
//       }
//     }

//     return null; // Cookie not found
//   }


//   return { userToken, saveCookie, getCookie, deleteCookie }
// }

// export default TokenService