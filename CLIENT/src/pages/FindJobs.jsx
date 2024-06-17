import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);

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
          setJobs(response.data);
          console.log('JSON Response:');
          console.log(response.data);
        } else {
          console.error(`Error: ${response.status}`);
          console.error(response.data);
        }
      })
      .catch(error => {
        console.error('Error making the request:', error.message);
      });
  }

  return (
    <div>
      <button 
        type="submit" 
        className="btn btn-block form-btn" 
        onClick={() => searchForJobs('Noida')}
      >
        Submit
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.jobTitle} - {job.companyName}</li> 
        ))}
      </ul>
    </div>
  );
};

export default FindJobs;
