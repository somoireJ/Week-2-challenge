/*let events = [
  {
    title: 'Event 1',
    date: new Date(2021, 2, 20),
    location: 'New York',
    attendees: new Set(['John', 'Susan', 'David'])
  },
  {
    title: 'Event 2',
    date: new Date(2021, 3, 20),
    location: 'Los Angeles',
    attendees: new Set(['Carol', 'Ken', 'Dave'])
  },
  {
    title: 'Event 3',
    date: new Date(2021, 4, 20),
    location: 'San Francisco',
    attendees: new Set(['Jon', 'Mark', 'Anna'])
  },
  {
    title: 'Event 4',
    date: new Date(2021, 5, 20),
    location: 'Miami',
    attendees: new Set(['Sam', 'John', 'Andrew'])
  }
];

// Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days
let upcomingEvents = events
  .filter(event => event.date > Date.now() && event.date < Date.now() + (7 * 24 * 60 * 60 * 1000))
  .map(event => event.title);

console.log('Upcoming Events: ', upcomingEvents);

// Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value
let eventOrganizers = new WeakMap();
eventOrganizers.set(events[0].title, 'John Doe');
eventOrganizers.set(events[1].title, 'Jane Doe');
eventOrganizers.set(events[2].title, 'Bob Smith');
eventOrganizers.set(events[3].title, 'Sally Jones');

// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format
events.forEach(({ title, date, location }) => {
  //added a console.log to see what is happening
  console.log(title, date, location);
  console.log(`${title} -- ${date.toDateString()} -- ${location}`);
});

// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format


// Create a function that adds a new attendee to an event
function addAttendee(eventTitle, attendeeName) {
  events.forEach(event => {
    if (event.title === eventTitle) {
      event.attendees.add(attendeeName);
    }
  });
}

// Call the addAttendee() function
addAttendee('Event 3', 'Tim');

// Create a function that converts the event array to a JSON string using the .stringify() method
function eventsToJSON() {
  let eventJSON = JSON.stringify(events, function(key, value) {
    if (key === 'date') {
      return value.toJSON();
    }
    return value;
  }, 2);
  console.log(eventJSON);
}

// Call the eventsToJSON() function
eventsToJSON();

// Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array
let firstEvent = events[0];
console.log('Object.keys(): ', Object.keys(firstEvent));
console.log('Object.values(): ', Object.values(firstEvent));
console.log('Object.entries(): ', Object.entries(firstEvent));

// Use the .forEach() method to iterate over the events array and console.log the title and date of each event
events.forEach(event => {
  console.log(`${event.title} - ${event.date.toDateString()}`);
});

// Bonus: Implement functionality to delete events from the array using the .splice() method
function deleteEvent(eventTitle) {
  events.forEach((event, index) => {
    if (event.title === eventTitle) {
      events.splice(index, 1);
    }
  });
}

// Call the deleteEvent() function
deleteEvent('Event 2');

// Bonus: Use the .reduce() method to find the event with the most attendees
let mostAttendees = events.reduce((prev, curr) => {
  return (prev.attendees.size > curr.attendees.size) ? prev : curr;
});

console.log('Event with most attendees: ', mostAttendees.title);*/

// 1. Create a script that manages a list of events for a calendar application.
let events = [];

// 2. Create an array of objects, each representing an event. Each event object should have the following properties:
let event1 = {
  title: "Board Meeting",
  date: new Date("10/02/2020"),
  location: "London",
  attendees: new Set()
};

let event2 = {
  title: "Marketing Conference",
  date: new Date("10/05/2020"),
  location: "New York",
  attendees: new Set()
};

events.push(event1, event2);

// 3. Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.
let nextWeekEvents = events.filter(event => {
  let eventDate = event.date;
  let today = new Date();
  let weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  return eventDate >= today && eventDate <= weekFromToday;
});

let nextWeekEventsInfo = nextWeekEvents.map(event => {
  return {
    title: event.title,
    date: event.date,
    location: event.location
  };
});

console.log(nextWeekEventsInfo);

// 4. Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.
let eventOrganizers = new WeakMap();
eventOrganizers.set(event1.title, "John Doe");
eventOrganizers.set(event2.title, "Jane Smith");

// 5. Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.
events.forEach(event => {
  let { title, date, location } = event;
  console.log(`Title: ${title}, Date: ${date}, Location: ${location}`);
});

// 6. Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.
function addAttendee(eventTitle, attendeeName) {
  events.forEach(event => {
    if (event.title === eventTitle) {
      event.attendees.add(attendeeName);
    }
  });
};

// 7. Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".
function convertToJSON() {
  let eventsObj = { events: events };
  let eventsJSON = JSON.stringify(eventsObj, (key, value) => {
    if (key === "date") {
      return value.toJSON().slice(0, 10);
    } else {
      return value;
    }
  });
  console.log(eventsJSON);
}

// 8. Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.
let firstEvent = events[0];
let eventKeys = Object.keys(firstEvent);
let eventValues = Object.values(firstEvent);
let eventEntries = Object.entries(firstEvent);

console.log(`Event Keys: ${eventKeys}`);
console.log(`Event Values: ${eventValues}`);
console.log(`Event Entries: ${eventEntries}`);

// 9. Use the .forEach() method to iterate over the events array and console.log the title and date of each event.
events.forEach(event => {
  console.log(`Title: ${event.title}, Date: ${event.date}`);
});

// 10 Bonus: Implement functionality to delete events from the array using the .splice() method.
function deleteEvent(eventTitle) {
  events.forEach((event, index) => {
    if (event.title === eventTitle) {
      events.splice(index, 1);
    }
  });
}
/*
// 11 Bonus: Use the .reduce() method to find the event with the most attendees.
let mostPopularEvent = events.reduce((prevEvent, currEvent) => {
  return prevEvent.attendees.size > currEvent.attendees.size ? prevEvent : currEvent;
});

console.log(`Most popular event: ${mostPopularEvent.title}`);
// 11 Bonus: Use the .reduce() method to find the event with the most attendees.
let mostPopularEvent = events.reduce((prevEvent, currEvent) => {
  return prevEvent.attendees.size > currEvent.attendees.size ? prevEvent : currEvent;
});

console.log(`Most popular event: ${mostPopularEvent.title}`);*/