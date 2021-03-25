import { environment } from '../../../environments/environment';

export const GetApiBaseUrl = () => {
	if (environment.production) {
		return 'http://www.jpshrader.com/railways-api/api/1.0';
	} else {
		return 'http://localhost:5000/api/1.0';
	}
};
