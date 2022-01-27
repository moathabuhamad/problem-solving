"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'Jaber',
//      lastName: 'Saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is * * I am * YO, and I love *.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------

const objLat = (obj) => {
  // write your code here
  let firstName =
    obj.firstName.charAt(0).toUpperCase() + obj.firstName.slice(1);
  let lastName = obj.lastName.charAt(0).toUpperCase() + obj.lastName.slice(1);
  return `my name is ${firstName}${lastName} I am ${obj.age} and i love ${obj.hobby} `;
};

// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// ------------------------
const cvFormatter = (arr) => {
  // write your code here
  arr.map((obj) => {
    return {
      fullName: obj.firstName + obj.lastName,
      tech: obj.tech,
    };
  });
};

// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
// python_Devs: 0,
// javaScript_Devs: 0,
// dotNet_Devs: 0,
// java_Devs: 0,
// totalApplicants: 0,
// rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have less than one year of Experience

// ------------------------
const applicationsStatics = (arr) => {
  // write your code here
  let result = {
    python_Devs: 0,
    javaScript_Devs: 0,
    dotNet_Devs: 0,
    java_Devs: 0,
    totalApplicants: 0,
    rejectedApplicants: 0,
  };
  arr.forEach((applicant) => {
    result.totalApplicants++;

    if (applicant.tech === "Java") {
      result.java_Devs++;
    } else if (applicant.tech === "Python") {
      result.python_Devs++;
    } else if (applicant.tech === "JS") {
      result.javaScript_Devs++;
    } else if (applicant.tech === ".Net") {
      result.dotNet_Devs++;
    }
    if (applicant.yearsOfExperience < 1 || !obj.firstName || !obj.lastName) {
      result.rejectedApplicants++;
    }
  });
};

// 4) ---------------------
//
//  A Certain School principal…
