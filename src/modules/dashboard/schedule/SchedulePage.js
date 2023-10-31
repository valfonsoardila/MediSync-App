import React, { useState } from "react";
import { motion } from "framer-motion";
import { resources } from "../../../assets/resources";
import "./SchedulePage.css";

const AppointmentDialog = ({
  isOpen,
  onClose,
  date,
  showAppointmentsForDay,
}) => {
  if (!isOpen) return null;

  return (
    <div className="appointment-dialog">
      <h3>Citas para {date.toDateString()}</h3>
      {/* Aquí puedes mostrar las citas del día */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showYearList, setShowYearList] = useState(false);

  const showAppointmentsForDay = (date) => {
    const newAppointment = {
      date,
      // Otros detalles de la cita, como el nombre del paciente, etc.
    };
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
    setDialogOpen(true);
    setSelectedDate(date);
  };
  const countAppointmentsByDay = () => {
    const appointmentCounts = {};

    appointments.forEach((appointment) => {
      const dateKey = appointment.date.toDateString();
      if (!appointmentCounts[dateKey]) {
        appointmentCounts[dateKey] = 1;
      } else {
        appointmentCounts[dateKey] += 1;
      }
    });

    return appointmentCounts;
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

      // Verifica si hay citas para el día actual
      const appointmentsForDay = appointmentCounts[date.toDateString()] || 0;

      // Determina la clase CSS para mostrar la imagen de pizarra
      const pizarraClass = appointmentsForDay === 0 ? resources.pizarraLow : "";

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
          style={{
            backgroundImage:
              appointmentsForDay >= 0 && appointmentsForDay <= 5
                ? `url(${resources.pizarraLow})`
                : appointmentsForDay > 5 && appointmentsForDay < 10 ?
                `url(${resources.pizarraMedium})` : appointmentsForDay >= 10 ?
                `url(${resources.pizarraHigh})` : "none",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "20px 20px", // Ajusta el tamaño de la imagen
          }}
        >
          {day}
        </div>
      );
    }
    return calendar;
  };
  const appointmentCounts = countAppointmentsByDay();

  return (
    <div className="appointment-calendar-container">
      <div className="appointment-calendar-header">
        <h3>Horario de trabajo</h3>
      </div>
      <div className="appointment-calendar-body">
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-header">
              <div className="calendar-title">
                <span>Cronograma de disponibilidad</span>
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
            <h3>Horas asignadas</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
