const Image1 = require("../assets/images/ayambakar.jpg");
const Image2 = require("../assets/images/ayambakar.jpg");
const Image3 = require("../assets/images/ayambakar.jpg");
const Image4 = require("../assets/images/ayambakar.jpg");


export const dataDeal = [
    {
      id: 1,
      imgSrc: Image1,
      type: 'Restaurant',
      rate : "5.0",
      liked: true,
      name: 'Gyakukaku Buffet',
      location : 'Gandaria City, Jakarta Selatan',
      descs : "Grill, Japanese",
      bookedTimes : 100,
      persentase : [
        {
          id : 1,
          day : "noon",
          count : "50%",
          time : "09:00-12:00"
        },
        {
          id : 2,
          day : "night",
          count : "10%",
          time : "13:00-16:30"
        },
        {
          id : 3,
          day : "noon",
          count : "35%",
          time : "13:00-16:30"
        },
      ]
    },
    {
      id: 2,
      imgSrc: Image1,
      rate : "4.5",
      type: 'Work',
      liked: false,
      name: 'Akunting Office',
      location : 'Gandaria City',
      descs : "Grill, Japanese",
      bookedTimes : 100,
      persentase : [
        {
          id : 1,
          day : "noon",
          count : "50%",
          time : "09:00-12:00"
        },
        {
          id : 2,
          day : "night",
          count : "10%",
          time : "13:00-16:30"
        },
        {
          id : 3,
          day : "noon",
          count : "35%",
          time : "13:00-16:30"
        },
      ]
    },
  ];



export const dataPopular = [
    {
      id: 1,
      imgSrc: Image1,
      type: 'Sports',
      rate : "5.0",
      liked: true,
      name: 'Lapangan Footsal',
      location : 'Gandaria City, Jakarta Selatan',
      descs : "Grill, Japanese",
      bookedTimes : 100,
      persentase : [
        {
          id : 1,
          day : "noon",
          count : "50%",
          time : "09:00-12:00"
        },
        {
          id : 2,
          day : "night",
          count : "10%",
          time : "13:00-16:30"
        },
        {
          id : 3,
          day : "noon",
          count : "35%",
          time : "13:00-16:30"
        },
      ]
    },
    {
      id: 2,
      imgSrc: Image1,
      rate : "4.5",
      type: 'Beauty',
      liked: false,
      name: 'Irmanofy Salon',
      location : 'Gandaria City',
      descs : "Grill, Japanese",
      bookedTimes : 100,
      persentase : [
        {
          id : 1,
          day : "noon",
          count : "50%",
          time : "09:00-12:00"
        },
        {
          id : 2,
          day : "night",
          count : "10%",
          time : "13:00-16:30"
        },
        {
          id : 3,
          day : "noon",
          count : "35%",
          time : "13:00-16:30"
        },
      ]
    },
  ];