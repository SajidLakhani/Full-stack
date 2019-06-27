const axios = require("axios");

const baseUrl = "http://localhost:3002";

// GET REQUEST FOR STUDENT DATA [WORKS]
// axios.get("http://localhost:3002/api/student").then(res => {
//   console.log(res.data);
// });

// ====================================================

// POST REQUEST FOR STUDENT DATA [WORKS]
// axios
//   .post(`${baseUrl}/api/student/register`, {
//     name: "Irfan",
//     lastname: "Ali",
//     email: "irfan@ali.com",
//     password: "123456",
//     role: "student",
//     appliedTo: ''
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


//   axios
//   .post(`${baseUrl}/api/student/register`, {
//     name: "Muneeb",
//     lastname: "Khan",
//     email: "muneeb@axiom.com",
//     password: "123456",
//     role: "student",
//     appliedTo: ''
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//   axios
//   .post(`${baseUrl}/api/student/register`, {
//     name: "Umair",
//     lastname: "Bajwa",
//     email: "umair@bajwa.com",
//     password: "123456",
//     role: "student",
//     appliedTo: ''
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// =======================================================

// DELETE REQUEST FOR STUDENT
// axios
//   .delete(`${baseUrl}/api/student`, {data: {email: "irfan@axiom.com"}})
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// =======================================================

// GET REQUEST FOR ADMINS [WORKS]
// axios.get(`${baseUrl}/api/admin`).then(res => console.log(res.data));

// =======================================================

// POST REQUEST FOR ADMINS [WORKS]
// axios
//   .post(`${baseUrl}/api/admin/register`, {
//     email: "admin@admin.com",
//     password: "admin",
//     name: "admin",
//     lastname: "admin",
//     role: "admin"
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// =======================================================

// GET REQUEST FOR COMPANIES [WORKS]
// axios.get(`${baseUrl}/api/company`).then(res => {
//   console.log(res.data);
// });

// =======================================================

// POST REQUEST FOR COMPANIES [WORKS]
axios
  .post(`${baseUrl}/api/company/register`, {
    email: "zia@panacloud.com",
    password: "123456",
    companyName: "Panacloud",
    role: "company",
    ceo: "Sir Zia Khan"
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

// =======================================================

// GET REQUEST FOR JOBS [WORKS]
// axios.get(`${baseUrl}/api/company/jobs`).then(res => {
//     console.log(res)
// })

// =======================================================

// POST REQUEST FOR JOBS
// axios
//   .post(`${baseUrl}/api/company/jobs`, {
//     ceo: 'Umair',
//     position: "React Developer",
//     description: "A job for React Stack developer",
//     companyName: "Panacloud",
//     salary: 10000,
//     date: "23/04/2019"
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
