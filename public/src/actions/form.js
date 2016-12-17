import axios from 'axios';

export const FETCH_TERMINALS = 'FETCH_TERMINALS';
export const FETCH_TERMINALS_SUCCES = 'FETCH_TERMINALS_SUCCES';
export const FETCH_TERMINALS_ERROR = 'FETCH_TERMINALS_ERROR';
export const FETCH_SELECTEDS_POSITIONS = 'FETCH_SELECTEDS_POSITIONS';
export const FETCH_SELECTEDS_POSITIONS_ERROR = 'FETCH_SELECTEDS_POSITIONS_ERROR';
export const FETCH_SELECTEDS_POSITIONS_SUCCES = 'FETCH_SELECTEDS_POSITIONS_SUCCES';
export const START_DATE_CHANGED = "START_DATE_CHANGED";
export const END_DATE_CHANGED = "END_DATE_CHANGED";

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchTerminals() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/terminals`,
    headers: []
  });

  return {
    type: FETCH_TERMINALS,
    payload: request
  };
}

export function fetchTerminalsSucces(terminals) {
  return {
    type: FETCH_TERMINALS_SUCCES,
    payload: terminals
  };
}

export function fetchTerminalsError(error) {
  return {
    type: FETCH_TERMINALS_ERROR,
    payload: error
  };
}

export function fetchSelectedsPositions(id) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/position/${id}`,
    headers: []
  });

  return {
    type: FETCH_SELECTEDS_POSITIONS,
    payload: request
  };
}

export function fetchSelectedsPositionsSucces(positions) {
  return {
    type: FETCH_SELECTEDS_POSITIONS_SUCCES,
    payload: positions
  };
}

export function fetchSelectedsPositionsError(error) {
  return {
    type: FETCH_SELECTEDS_POSITIONS_ERROR,
    payload: error
  };
}

export function startDateChanged(date) {
  return {
    type: START_DATE_CHANGED,
    payload: date
  }
}

export function endDateChanged(date) {
  return {
    type: END_DATE_CHANGED,
    payload: date
  }
}
