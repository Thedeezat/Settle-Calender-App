interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  subTitle: string;
  subDescription: string;
  attendees: string[];
  eventDuration: string;
  buttonLabels: string[];
  isCompleted: boolean;
  minutes?: { title: string; time: string }[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Team Meeting",
    description: "Discussing new hires",
    time: "10:00 - 11:00 PM",
    subTitle: "",
    subDescription: "",
    attendees: [],
    eventDuration: "",
    buttonLabels: [],
    isCompleted: true,
    minutes: [],
  },
  {
    id: 2,
    title: "Design Call",
    description: "Discussing Design Updates 🕺",
    time: "12:00 - 1:00 PM",
    subTitle: "Design Call",
    subDescription: "Repeats every two weeks",
    attendees: ["attendee1", "attendee2"],
    eventDuration: "1h",
    buttonLabels: ["Today", "1h"],
    isCompleted: false,
    minutes: [
      { title: "Reviewing Current Design Concepts", time: "12:10 - 12:30 PM" },
      {
        title: "Evaluating UI for Improvements",
        time: "12:40 - 12:45 PM",
      },
      {
        title: "Setting Goals for Next Work",
        time: "12:45 - 1:00 PM",
      },
    ],
  },
  {
    id: 3,
    title: "PM Meeting",
    description: "Discussion for Christmas retreat 🎉",
    time: "1:00 - 2:30 PM",
    subTitle: "PM Meeting",
    subDescription: "Discussion for Christmas retreat 🎉",
    attendees: ["attendee1", "attendee2", "attendee3"],
    eventDuration: "1h 30m",
    buttonLabels: ["Today", "1h 30m"],
    isCompleted: false,
    minutes: [
      { title: "Appointing the planning committee", time: "1:00 - 1:30 PM" },
      {
        title: "Choosing an appropriate airline for all remote staff",
        time: "1:30 - 1:45 PM",
      },
      {
        title: "Events and bonding session for the week",
        time: "1:45 - 2:30 PM",
      },
      {
        title: "More bonding session for the week",
        time: "1:45 - 2:30 PM",
      },
    ],
  },
];

export default events;
