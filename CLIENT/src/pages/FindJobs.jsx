import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import axios from 'axios';

const searchForJobs = (place) => {

const apiUrl = 'https://api.scrapingdog.com/indeed';
const apiKey = '666fe381e2e88d70f5168059';
const jobSearchUrl = `https://in.indeed.com/jobs?q=python&l=${place}`;

// Set up the parameters
const params = { api_key: apiKey, url: jobSearchUrl };

// Make the HTTP GET request
axios.get(apiUrl, { params })
  .then(response => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse the JSON content
      const jsonResponse = response.data;
      console.log('JSON Response:');
      console.log(JSON.stringify(jsonResponse, null, 2)); // Pretty print the JSON
    } else {
      console.error(`Error: ${response.status}`);
      console.error(response.data);
    }
  })
  .catch(error => {
    console.error('Error making the request:', error.message);
  });

}

const FindJobs = () => {
  return (
  
        <div>
          <div>
          <button type="submit" className="btn btn-block form-btn" onClick ={searchForJobs}> Submit</button>
          </div>
          <div>
          <button type="submit" className="btn btn-block form-btn" onClick ={searchForJobs('Bengaluru')}> Submit</button>
          </div>
        </div>

  );
};
export default FindJobs;
