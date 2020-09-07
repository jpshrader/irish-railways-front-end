export const IS_DEV = true;

export const GetApiBaseUrl = () => {
	if (IS_DEV) {
		return 'http://localhost:5000/api';
	} else {
		return 'http://www.jpshrader.com/railways-api/api';
	}
};
