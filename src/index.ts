import { History, Location } from 'history';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

export {
	History,
	Location,

	history
};

export default history;
