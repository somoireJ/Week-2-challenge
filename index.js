
let events = [
  {
    title: "Conference",
    date: new Date("JAN 10, 2022"),
    location: "Nairobi",
    attendees: new Set(["John", "Jane"])
  },
  {
    title: "Meeting",
    date: new Date("JAN 12, 2022"),
    location: "Mombasa",
    attendees: new Set(["Bob", "Alice", "walter"])
  },
  
  {
    title: "Workshop",
    date: new Date("JAN 18, 2022"),
    location: "Kisumu",
    attendees: new Set(["Dave", "Jay"])
  }
];
console.log(events);
// Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value
const organizers = new WeakMap();

const event0 = { name: 'Power' };
const event1 = { name: 'Effec' };
const event2 = { name: 'Pack' };
const event3 = { name: 'Cods' };

organizers.set(event0, 'Solo');
organizers.set(event1, 'Somo');
organizers.set(event2, 'Jay1');
organizers.set(event3, 'John2');

console.log('WeakMap to store the event organizer is;',organizers.get(event0));
/*
// valid key
const validKey = {};
myWeakMap.set(validKey, 'value'); //creating valid key
console.log(organizers);
*/

// Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.
let upcomingEvents = events
  .filter(event => event.date >= new Date())
  .map(event => {
    return {
      title: event.title,
      date: event.date,
      location: event.location,
      organizer: organizers.get(event.title)
    };
  });

console.log('filter for coming event is;',upcomingEvents);

// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.
upcomingEvents.forEach(({ title, date, location, organizer }) => {
  console.log(`
  Title: ${title}
  Date: ${date}
  Location: ${location}
  Organizer: ${organizer}
  `);
});

// Create a function that adds a new attendee to an event.
const addAttendee = (title, attendee) => {
  let foundEvent = events.find(event => event.title === title);
  if (foundEvent) {
    foundEvent.attendees.add(attendee);
  }
};

// Create a function that converts the event array to a JSON string.
const eventsToJSON = () => {
  return JSON.stringify(
    events.map(event => {
      return {
        title: event.title,//extracting title
        date: event.date,
        location: event.location,
        attendees: [...event.attendees],
        formattedDate: event.date.toJSON()//converting date to JSON format
      };
    })
  );
};

console.log(eventsToJSON());

// Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.
let eventProps = Object.keys(events[1]);//getting event properties
let eventValues = Object.values(events[1]);
let eventEntries = Object.entries(events[1]);
console.log('display the properties and values of the first event object in the array is;');
console.log(`Properties: ${eventProps}`);
console.log(`Values: ${eventValues}`);
console.log(`Entries: ${eventEntries}`);

// Use the .forEach() method to iterate over the events array and console.log the title and date of each event.
events.forEach(event => {
  console.log(event.title - event.date);
});

// Bonus: Implement functionality to delete events from the array using the .splice() method.
const deleteEvent = title => {
  let index = events.findIndex(event => event.title === title);//finding index of event
  if (index !== -1) {
    events.splice(index, 1);//deleting event
  }
};

// Bonus: Use the .reduce() method to find the event with the most attendees.
let maxAttendees = events.reduce((max, event) => {
  let numAttendees = event.attendees.size;//getting the size of attendees
  if (numAttendees > max) {//returning event with most attendees
    return numAttendees;
  } else {
    return max;
  }
}, 0);

console.log(`The event with the most attendees has ${maxAttendees} people.`);