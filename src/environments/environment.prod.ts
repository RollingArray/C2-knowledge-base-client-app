/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Prod environment configurations
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-04-21 12:04:48 
 * Last modified  : 2021-12-17 10:37:45
 */

export const environment = {
  production: true,
  apiEndpoint: 'https://c2.doc.api.rollingarray.co.in/',
	version: "1.16.50.120",
	level: '',
	logAnalytics: true,
  allowPreview: false,
	firebaseConfig : {
		apiKey: "AIzaSyCuXMA63q2lv-RvW6hEnqa5kvN_ayURflg",
		authDomain: "credibility-calculator-doc.firebaseapp.com",
		projectId: "credibility-calculator-doc",
		storageBucket: "credibility-calculator-doc.appspot.com",
		messagingSenderId: "23476958001",
		appId: "1:23476958001:web:1a108f9a9e9992ebf4f610",
		measurementId: "G-B6LGPRHK5J"
	}
};
