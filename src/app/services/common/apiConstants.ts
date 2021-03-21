export const IS_DEV = true;

export const GetApiBaseUrl = () => {
	if (IS_DEV) {
		return 'https://localhost:5000/api/1.0';
	} else {
		return 'http://www.jpshrader.com/railways-api/api/1.0';
	}
};
