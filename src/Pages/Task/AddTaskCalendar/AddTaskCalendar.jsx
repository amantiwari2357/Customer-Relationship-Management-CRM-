import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./taskEventCalendar.css"; // For custom styling

const AddTaskCalendar = () => {
  const localizer = momentLocalizer(moment);

  // State for events
  const [events, setEvents] = useState([
    {
      title: "Meeting with Client - Discuss project requirements and timelines.",
      description: "Discuss project requirements and timelines.",
      person: "Gourav", // Default person assigned
      start: new Date(2024, 11, 3, 10, 0), // Dec 3, 2024, 10:00 AM
      end: new Date(2024, 11, 3, 12, 0), // Dec 3, 2024, 12:00 PM
    },
    {
      title: "Team Standup - Daily sync-up to discuss progress.",
      description: "Daily team sync-up to discuss progress.",
      person: "Mannu", // Default person assigned
      start: new Date(2024, 11, 4, 9, 0), // Dec 4, 2024, 9:00 AM
      end: new Date(2024, 11, 4, 9, 30), // Dec 4, 2024, 9:30 AM
    },
    {
      title: "Project Deadline - Final submission of the current project.",
      description: "Final submission of the current project.",
      person: "Vishnu", // Default person assigned
      start: new Date(2024, 11, 5), // Dec 5, 2024
      end: new Date(2024, 11, 5),
      allDay: true,
    },
  ]);

  // State for form inputs
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    note: "",
    person: "gourav", // Default person selected
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Parse date and time to create start and end Date objects
    const start = new Date(`${formData.date}T${formData.time}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // Default duration is 1 hour

    // Create a new event with selected person
    const newEvent = {
      title: `${formData.note}`, // Show note in the title
      description: formData.note, // Set description for tooltip
      person: formData.person, // Include selected person
      start,
      end,
    };

    // Update events state
    setEvents([...events, newEvent]);

    // Clear form
    setFormData({ date: "", time: "", note: "", person: "" });
  };

  return (
    <>
      <div className="task-calendar-container">
        <h2 className="calendar-header">Task & Event Calendar</h2>

        {/* Form Section */}
        <div className="proposal-container mb-3">
          <div className="schedule-meeting-tab">
            <h2>Schedule Meeting or Task</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-md-6 mb-1">
                  <label className="form-label" htmlFor="date">
                    Date:
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-1">
                  <label className="form-label" htmlFor="time">
                    Time:
                  </label>
                  <input
                    className="form-control"
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="form-label">Add Note:</label>
                  <textarea
                    className="form-control w-100 mb-3"
                    placeholder="Add Note"
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <button type="submit" className="all-buttons">
                    Add to Calendar
                  </button>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="">Select Person <span>*</span></label>
                  <select 
                    className="form-control"
                    name="person"
                    value={formData.person}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="gourav">Gourav</option>
                    <option value="mannu">Mannu</option>
                    <option value="vishnu">Vishnu</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Calendar Component */}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          tooltipAccessor={(event) => `${event.title}\n${event.description}\nAssigned to: ${event.person}`} // Show person in tooltip
          style={{ height: 700 }}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: "#6c5ce7",
              color: "#fff",
              borderRadius: "5px",
              padding: "5px",
              fontSize: '12px'
            },
          })}
          views={["month", "week", "day", "agenda"]}
        />
      </div>
    </>
  );
};

export default AddTaskCalendar;
