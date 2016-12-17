import { FETCH_TERMINALS, FETCH_TERMINALS_SUCCES, FETCH_TERMINALS_ERROR,
         FETCH_SELECTEDS_POSITIONS, FETCH_SELECTEDS_POSITIONS_ERROR, FETCH_SELECTEDS_POSITIONS_SUCCES,
         START_DATE_CHANGED, END_DATE_CHANGED } from '../actions/form';

const startDate = 1476160894000;
const endDate = new Date().getTime();
const INITIAL_STATE = {
  terminalsList: { terminals: [], error: null, loading: false },
  selectedTerminal: { id: null, position: [], error: null, loading: false, startDate: startDate, endDate: endDate },
  filteredTerminal: { position: [] }
}

function mapPositions(trm) {
  return (
    {
      updatedAt: trm.updatedAt,
      latitude: trm.latitude,
      longtitude: trm.longtitude
    }
  )
}

export default function (state = INITIAL_STATE, action) {
  let error, id;
  let { startDate, endDate } = state.selectedTerminal;
  switch(action.type) {
    case FETCH_TERMINALS: //start fettchin terminals and set loading to true
      return { ...state, terminalsList: {terminals:[], error: null, loading: true} };
    case FETCH_TERMINALS_SUCCES: //return list of terminals and make loading false
      return { ...state, terminalsList: {terminals: action.payload.data, error: null, loading: false} };
    case FETCH_TERMINALS_ERROR: //return error and make loading false
      error = action.payload.data || {message: action.payload.message}; //2nd one is network or server down errors
      return { ...state, terminalsList: {terminals: [], error: error, loading: false} };

    case FETCH_SELECTEDS_POSITIONS:
      return { ...state, selectedTerminal: { ...state.selectedTerminal, position: [], error: null, loading: true }}
    case FETCH_SELECTEDS_POSITIONS_SUCCES:
      const { data } = action.payload;
      return {
        ...state,
        selectedTerminal: {
          ...state.selectedTerminal,
          id: data.id,
          position: data.pos.map(trm => mapPositions(trm)),
          error: null,
          loading: false
        },
        filteredTerminal: data.pos.map(trm => mapPositions(trm)).filter((data) => {
          let timestampToMilis = new Date(data.updatedAt).getTime();
          return (startDate < timestampToMilis) && (endDate > timestampToMilis)
        })
       }
    case FETCH_SELECTEDS_POSITIONS_ERROR:
        error = action.payload.data || {message: action.payload.message};
        return {
          ...state,
          selectedTerminal: {
            ...state.selectedTerminal,
            id: id,
            position: [],
            error: error,
            loading: false
          }
        }

      case START_DATE_CHANGED:
        startDate = action.payload;
        endDate = state.selectedTerminal.endDate;
        return {
          ...state,
          selectedTerminal: {
            ...state.selectedTerminal,
            startDate: startDate
          },
          filteredTerminal: state.selectedTerminal.position.filter((data) => {
            let timestampToMilis = new Date(data.updatedAt).getTime();
            return (startDate < timestampToMilis) && (endDate > timestampToMilis)
          })
        }

      case END_DATE_CHANGED:
        endDate = action.payload;
        startDate = state.selectedTerminal.startDate;
        return {
          ...state,
          selectedTerminal: {
            ...state.selectedTerminal,
            endDate: endDate
          },
          filteredTerminal: state.selectedTerminal.position.filter((data) => {
            let timestampToMilis = new Date(data.updatedAt).getTime();
            return (startDate < timestampToMilis) && (endDate > timestampToMilis)
          })
        }

      default:
        return { ...state };
    }
  }
