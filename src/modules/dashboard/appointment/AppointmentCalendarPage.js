import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AppointmentCalendarPage.css";

const AppointmentCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showYearList, setShowYearList] = useState(false);

  const showAppointmentsForDay = (date) => {
    setDialogOpen(true);
    setSelectedDate(date);
    handleDateClick(date);
  };
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const calendar = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      const isCurrentDay = date.toDateString() === new Date().toDateString();
      const isSelectedDay = date.toDateString() === selectedDate.toDateString();
      calendar.push(
        <div
          key={day}
          onClick={() => {
            showAppointmentsForDay(date);
            handleDateChange(date);
          }}
          className={`calendar-day ${isCurrentDay ? "current-day" : ""} ${
            isSelectedDay ? "selected" : ""
          }`}
        >
          {day}
        </div>
      );
    }
    return calendar;
  };

  return (
    <div className="appointment-calendar-container">
      <div className="appointment-calendar-header">
        <h3>Calendario de citas</h3>
      </div>
      <div className="appointment-calendar-body">
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-header">
              <div className="calendar-title">
                <span>Cronograma de citas</span>
              </div>
              <div className="calendar-date">
                <span onClick={() => setShowYearList(true)}>
                  {selectedDate.getDate()}
                  <select
                    value={selectedDate.getMonth()}
                    onChange={(event) => {
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          parseInt(event.target.value),
                          1
                        )
                      );
                    }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i).map((month) => (
                      <option key={month} value={month}>
                        {new Date(
                          selectedDate.getFullYear(),
                          month,
                          1
                        ).toLocaleString("default", {
                          month: "long",
                        })}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedDate.getFullYear()}
                    onChange={(event) => {
                      setSelectedDate(
                        new Date(
                          parseInt(event.target.value),
                          selectedDate.getMonth(),
                          1
                        )
                      );
                    }}
                  >
                    {Array.from({ length: 141 }, (_, i) => 2050 - i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                </span>
              </div>{" "}
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="calendar-body"
            >
              {renderCalendar()}
            </motion.div>
          </div>
        </div>
        <div className="appointment-schedule">
          <div className="appointment-schedule-header">
            <h3>Horario de citas</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendarPage;
