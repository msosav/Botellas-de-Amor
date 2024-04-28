import React from "react";
import "../styles/TableItem.css";
import "../App.css";
import "../styles/Show.css";

const TableItem = ({ leading, onEdit, onDelete, onShow }) => {
  const handleEditClick = (event) => {
    event.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete();
  };

  // Obtener la ruta actual
  const currentPath = window.location.pathname;

  // Verificar si la ruta coincide
  const isDesiredPath = currentPath === "/operador/registrar-botellas/historial";

  return (
    <div className="acopio-container" onClick={onShow} id="my-container">
      {/* Mostrar "Id usuario: {leading}" solo si la ruta coincide */}
      {isDesiredPath && (
        <h2 id="leading" className="acopio-text" title={leading}>
          Id usuario: {leading}
        </h2>
      )}
      {!isDesiredPath && (
        <h2 id="leading" className="acopio-text" title={leading}>
          {leading}
        </h2>
      )}
      <div className="col-auto">
        <div className="col-auto">
          <svg
            onClick={handleEditClick}
            className=""
            width="25"
            height="25"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1465 7.10151L31.8977 16.8528L10.7233 38.0272L2.02923 38.987C0.865355 39.1157 -0.117998 38.1316 0.011491 36.9677L0.978849 28.2676L22.1465 7.10151ZM37.9289 5.64971L33.3503 1.07114C31.9221 -0.357046 29.6058 -0.357046 28.1776 1.07114L23.8702 5.37855L33.6215 15.1298L37.9289 10.8224C39.357 9.39346 39.357 7.0779 37.9289 5.64971Z"
              fill="black"
            />
          </svg>
          <svg
            onClick={handleDeleteClick}
            className="icon-acopio"
            width="25"
            height="28"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
                    <path
              d="M20.4141 31.6875H22.2422C22.4846 31.6875 22.7171 31.5912 22.8885 31.4198C23.0599 31.2484 23.1562 31.0159 23.1562 30.7734V14.3203C23.1562 14.0779 23.0599 13.8454 22.8885 13.674C22.7171 13.5026 22.4846 13.4062 22.2422 13.4062H20.4141C20.1716 13.4062 19.9391 13.5026 19.7677 13.674C19.5963 13.8454 19.5 14.0779 19.5 14.3203V30.7734C19.5 31.0159 19.5963 31.2484 19.7677 31.4198C19.9391 31.5912 20.1716 31.6875 20.4141 31.6875ZM32.9062 6.09375H26.6289L24.0391 1.77481C23.7141 1.23323 23.2543 0.785097 22.7046 0.474061C22.1549 0.163025 21.5339 -0.000300376 20.9023 4.14715e-07H13.2227C12.5913 -3.72305e-05 11.9707 0.163413 11.4213 0.474436C10.8719 0.78546 10.4123 1.23346 10.0874 1.77481L7.49607 6.09375H1.21875C0.895517 6.09375 0.585524 6.22215 0.356964 6.45071C0.128404 6.67927 0 6.98927 0 7.3125L0 8.53125C0 8.85448 0.128404 9.16448 0.356964 9.39304C0.585524 9.6216 0.895517 9.75 1.21875 9.75H2.4375V35.3438C2.4375 36.3134 2.82271 37.2434 3.50839 37.9291C4.19407 38.6148 5.12405 39 6.09375 39H28.0312C29.0009 39 29.9309 38.6148 30.6166 37.9291C31.3023 37.2434 31.6875 36.3134 31.6875 35.3438V9.75H32.9062C33.2295 9.75 33.5395 9.6216 33.768 9.39304C33.9966 9.16448 34.125 8.85448 34.125 8.53125V7.3125C34.125 6.98927 33.9966 6.67927 33.768 6.45071C33.5395 6.22215 33.2295 6.09375 32.9062 6.09375ZM13.0894 3.87791C13.1301 3.81011 13.1877 3.75404 13.2566 3.71519C13.3255 3.67634 13.4033 3.65603 13.4824 3.65625H20.6426C20.7215 3.65616 20.7992 3.67653 20.8679 3.71538C20.9367 3.75422 20.9942 3.81022 21.0349 3.87791L22.3648 6.09375H11.7602L13.0894 3.87791ZM28.0312 35.3438H6.09375V9.75H28.0312V35.3438ZM11.8828 31.6875H13.7109C13.9534 31.6875 14.1859 31.5912 14.3573 31.4198C14.5287 31.2484 14.625 31.0159 14.625 30.7734V14.3203C14.625 14.0779 14.5287 13.8454 14.3573 13.674C14.1859 13.5026 13.9534 13.4062 13.7109 13.4062H11.8828C11.6404 13.4062 11.4079 13.5026 11.2365 13.674C11.0651 13.8454 10.9687 14.0779 10.9687 14.3203V30.7734C10.9687 31.0159 11.0651 31.2484 11.2365 31.4198C11.4079 31.5912 11.6404 31.6875 11.8828 31.6875Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TableItem;

