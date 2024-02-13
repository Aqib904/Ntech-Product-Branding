import axios from "axios";

const getApiUrl = () => {
	const env = process.env.NEXT_PUBLIC_ENV;
	console.log("env", env);
	if (env === 'dev') {
		return process.env.NEXT_PUBLIC_DEVURL;
	} else if (env === 'prod') {
		return process.env.NEXT_PUBLIC_PRODURL;
	} else {
		return process.env.NEXT_PUBLIC_LOCALURL;
	}
};

const baseDomain = `${getApiUrl()}/`;
// const baseDomain = "http://127.0.0.1:8000/";
const baseURL = `${baseDomain}`;
let axiosObj;
axiosObj = axios.create({
	baseURL,
	headers: { "Content-Type": "application/json" },
});
export default axiosObj;

// https://backend.vehya.com/
// http://192.168.18.106:7000/
