// src/data/schedule.ts

export interface ScheduleEvent {
    start: string;
    end: string;
    title: string;
    notes?: string;
  }
  
  export interface ScheduleDay {
    day: string;
    date: string;
    events: ScheduleEvent[];
  }
  
  export const schedule: ScheduleDay[] = [
    {
      day: "Saturday",
      date: "December 27",
      events: [
        {
          start: "10:00am",
          end: "10:30am",
          title: "Introductions and games",
        },
        {
          start: "10:30am",
          end: "11:30am",
          title: "J Craft Talk",
        },
        {
          start: "11:30am",
          end: "12:00pm",
          title: "Generative writing (J-led)",
        },
        {
          start: "12:00pm",
          end: "1:30pm",
          title: "Lunchie lunch",
        },
        {
          start: "1:30pm",
          end: "2:30pm",
          title: "Craft talk?",
        },
        {
          start: "2:30pm",
          end: "3:30pm",
          title: "Jeremiah workshop",
        },
        {
          start: "3:30pm",
          end: "4:00pm",
          title: "Wrap-up & intention settings",
        },
      ],
    },
    {
      day: "Sunday",
      date: "December 28",
      events: [
        {
          start: "10:00am",
          end: "10:15am",
          title: "Check-in",
        },
        {
          start: "10:15am",
          end: "11:15am",
          title: "Nina Craft Talk — The Mighty Struggle of Talking About Catastrophes in a post-truth, post-modern world",
        },
        {
          start: "11:15am",
          end: "12:00pm",
          title: "Generative writing (Nina-led)",
        },
        {
          start: "12:00pm",
          end: "1:30pm",
          title: "Lunchie lunch",
        },
        {
          start: "1:30pm",
          end: "2:30pm",
          title: "Jordan craft talk",
        },
        {
          start: "2:30pm",
          end: "3:30pm",
          title: "Ben workshop",
        },
        {
          start: "3:30pm",
          end: "4:00pm",
          title: "Wrap-up",
        },
      ],
    },
    {
      day: "Monday",
      date: "December 29",
      events: [
        {
          start: "10:00am",
          end: "10:15am",
          title: "Check-in",
        },
        {
          start: "10:15am",
          end: "11:15am",
          title: "Jeremiah Craft Talk",
        },
        {
          start: "11:15am",
          end: "12:00pm",
          title: "Generative writing (Jeremiah-led)",
        },
        {
          start: "12:00pm",
          end: "1:30pm",
          title: "Lunchie lunch",
        },
        {
          start: "1:30pm",
          end: "2:30pm",
          title: "Craft talk?",
        },
        {
          start: "2:30pm",
          end: "3:30pm",
          title: "Nina workshop",
        },
        {
          start: "3:30pm",
          end: "4:00pm",
          title: "Wrap-up",
        },
      ],
    },
    {
      day: "Tuesday",
      date: "December 30",
      events: [
        {
          start: "10:00am",
          end: "10:15am",
          title: "Check-in",
        },
        {
          start: "10:15am",
          end: "11:15am",
          title: "Ben Craft Talk — Somebody’s Dalmatian Perfects My Grief: On Chimeras, Confessionals, & What Poets Owe Animals",
        },
        {
          start: "11:15am",
          end: "12:00pm",
          title: "Generative writing (Ben-led)",
        },
        {
          start: "12:00pm",
          end: "1:30pm",
          title: "Lunchie lunch",
        },
        {
          start: "1:30pm",
          end: "2:30pm",
          title: "Payton Selby Craft Talk",
        },
        {
          start: "2:30pm",
          end: "3:30pm",
          title: "J workshop",
        },
        {
          start: "3:30pm",
          end: "4:00pm",
          title: "Wrap-up",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "December 31",
      events: [
        {
          start: "10:00am",
          end: "10:15am",
          title: "Check-in",
        },
        {
          start: "10:15am",
          end: "11:15am",
          title: "Susan Craft Talk",
        },
        {
          start: "11:15am",
          end: "12:00pm",
          title: "Generative writing (Susan-led)",
        },
        {
          start: "12:00pm",
          end: "1:30pm",
          title: "Lunchie lunch",
        },
        {
          start: "1:30pm",
          end: "2:30pm",
          title: "Fenner Craft Talk",
        },
        {
          start: "2:30pm",
          end: "3:30pm",
          title: "TBD workshop",
        },
        {
          start: "3:30pm",
          end: "4:00pm",
          title: "Wrap-up & intention check-ins",
        },
        {
          start: "6:00pm",
          end: "8:00pm",
          title: "Reading / open mic??",
        },
      ],
    },
  ];
  