import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";
 // Replace with the correct import for your Matches component
import Calendar from "./calendar";

const DateScroller = () => {
  const today = new Date();
  const [activeDate, setActiveDate] = useState(format(today, "yyyy-MM-dd"));
  const [mainContent, setMainContent] = useState(null);

  useEffect(() => {
    setMainContent(<Calendar props="today" />);
  }, []);

  // Generate a range of dates (5 days before and 5 days after today)
  const dates = Array.from({ length: 11 }, (_, i) => addDays(today, i - 5));

  const handleDateClick = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setActiveDate(formattedDate);
    setMainContent(<Calendar props={formattedDate} />);
  };

  return (
    <div style={styles.container}>
      <div style={styles.dateScroller}>
        {dates.map((date) => {
          const formattedDate = format(date, "yyyy-MM-dd");
          const isToday = formattedDate === format(today, "yyyy-MM-dd");
          const isActive = formattedDate === activeDate;

          return (
            <button
              key={formattedDate}
              onClick={() => handleDateClick(date)}
              style={{
                ...styles.dateButton,
                ...(isActive && { borderBottom: "3px solid #007bff" }), // Example active color
              }}
            >
              <div style={{ ...styles.dayText, color: isActive ? "#007bff" : "#333" }}>
                {isToday ? "Today" : format(date, "EEE")}
              </div>
              <div style={{ ...styles.dateText, color: isActive ? "#007bff" : "#666" }}>
                {format(date, "dd MMM")}
              </div>
            </button>
          );
        })}
      </div>
      <div style={styles.mainContent}>{mainContent}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateScroller: {
    display: "flex",
    overflowX: "auto",
    padding: "10px 15px",
    gap: "10px",
    marginBottom: "20px",
    whiteSpace: "nowrap",
  },
  dateButton: {
    background: "none",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    textAlign: "center",
  },
  dayText: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  dateText: {
    fontSize: "12px",
  },
  mainContent: {
    width: "100%",
    maxWidth: "800px",
  },
};

export default DateScroller;
