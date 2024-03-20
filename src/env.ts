// // Define the required environment variables
// const requiredEnvVars = ['RECAPTCHA_SECRET_KEY'];

// // Check if the required environment variables are present
// const envVarsPresent = requiredEnvVars.every((envVar) => {
// 	if (!process.env[envVar]) {
// 		console.warn(`Environment variable ${envVar} is not defined.`);
// 		return false;
// 	}
// 	return true;
// });

// // If any of the required environment variables are missing, throw an error
// if (!envVarsPresent) {
// 	throw new Error(
// 		`Some required environment variables are not defined. Please check your .env file.`,
// 	);
// }

// // Export the environment variables
// export const getEnvVar = (key: string): string => {
// 	return process.env[key] || '';
// };

// export const RECAPTCHA_SECRET_KEY = getEnvVar('RECAPTCHA_SECRET_KEY');
