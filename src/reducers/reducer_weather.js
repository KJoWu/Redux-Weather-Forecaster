import { FETCH_WEATHER} from "../actions/index";  //imported the FETCH_WEATHER

export default function(state = [], action) {
	switch(action.type){
		case FETCH_WEATHER:
			return [action.payload.data, ...state ]; //this is the only data we want. Add on to existing state
	} //do not use state.push. Use state.concat or the above

	console.log("Action recieved", action);
	return state;
}
