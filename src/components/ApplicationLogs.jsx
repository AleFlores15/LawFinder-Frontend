import React, { useEffect } from 'react';
import { useLogsStore } from '../store/applicationLogsStore';
import { format } from 'date-fns';
import '../styles/ApplicationLogs.css';
import Navbar from './Navbar';

const ApplicationLogs = () => {
  const {
    logs, levels, categories, status, currentPage, totalPages,
    fromDate, toDate, levelId, categoryId,
    setFromDate, setToDate, setLevelId, setCategoryId,
    getLogs, getLevels, getCategories, nextPage, previousPage, clearFilters
  } = useLogsStore();

  useEffect(() => {
    getLevels();
    getCategories();
  }, [getLevels, getCategories]);

  useEffect(() => {
    getLogs();
  }, [getLogs, fromDate, toDate, levelId, categoryId, currentPage]);


  const formatDate = (dateInput) => format(new Date(dateInput), 'yyyy-MM-dd');
  const currentDate = formatDate(new Date());

  return (
    <>
      <Navbar />
      <div className="log-app-container">
        <h1 className="log-app-title"> Logs De Aplicación</h1>

        <div className="log-app-filter-container">
          <div>
            <label htmlFor="levelId">Level: </label>
            <select id="levelId" value={levelId} onChange={(e) => setLevelId(e.target.value)}>
              <option value="">All</option>
              {levels.map(level => (
                <option key={level.levelId} value={level.levelId}>{level.levelName}</option>
              ))}
            </select>

            <label htmlFor="categoryId">Category: </label>
            <select id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              <option value="">All</option>
              {categories.map(category => (
                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
              ))}
            </select>

            <label htmlFor="fromDate">From: </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              max={currentDate}
            />

            <label htmlFor="toDate">To: </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              min={fromDate}
             
            />

            <button className="log-app-clear-button" onClick={clearFilters}>Borrar Filtros</button>
          </div>
        </div>

        <div className="log-app-logs-container">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'success' && (
            <>
              <table className="log-app-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nivel</th>
                    <th>Username</th>
                    <th>Fecha y hora</th>
                    <th>Host</th>
                    <th>Evento</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map(log => (
                    <tr key={log.logId}>
                      <td>{log.logId}</td>
                      <td>{log.level}</td>
                      <td>{log.username}</td>
                      <td>{format(new Date(log.logDate), 'dd-MM-yyyy HH:mm:ss')}</td>
                      <td>{log.host}</td>
                      <td>{log.description}</td>
                      <td>{log.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="log-app-pagination">
                <button onClick={previousPage} disabled={currentPage === 0}>Previous</button>
                <span>{currentPage + 1}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
              </div>
            </>
          )}
          {status === 'empty' && <p>No se encontraron Logs</p>}
          {status === 'error' && <p>Error fetching logs</p>}
        </div>
      </div>
    </>
  );
};

export default ApplicationLogs;
