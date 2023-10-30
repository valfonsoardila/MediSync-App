import React, { useState } from "react";
import "./AppointmentCalendarPage.css";

const AppointmentDialog = ({ isOpen, onClose, date, showAppointmentsForDay }) => {
  if (!isOpen) return null;

  return (
    <div className="appointment-dialog">
      <h3>Citas para {date.toDateString()}</h3>
      {/* Aquí puedes mostrar las citas del día */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

const AppointmentCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDialogOpen, setDialogOpen] = useState(false);

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
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <div className="calendar-date">
            <span>
              {selectedDate.getDate()}{" "}
              {selectedDate.toLocaleString("default", { month: "long" })}{" "}
              {selectedDate.getFullYear()}
            </span>
          </div>
        </div>
        <div className="calendar-body">{renderCalendar()}</div>
      </div>
    </div>
  );
};

export default AppointmentCalendarPage;
