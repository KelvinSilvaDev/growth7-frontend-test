/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css';

import FileUpload from './components/FileUpload';
import { distributeJobs } from './utils/jobUtils';
import { Job } from './types/Job';
import JobList from './components/JobLists';


export default function App() {
  const [jobSets, setJobSets] = useState<any>([]); // Defina o estado inicial como uma matriz vazia de matrizes de Job



  const processJsonFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData: Job[] = JSON.parse(e.target?.result as string);
        // Chama a função distributeJobs para calcular os conjuntos de jobs
        const result = distributeJobs(jsonData);
        setJobSets(result);
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON', error);
      }
    };
    reader.readAsText(file);
  };




  return (
    <div className="App">
      <h1>Divisão de Jobs</h1>
      <FileUpload onFileUpload={processJsonFile} />
      {/* <JobResults jobSets={jobSets} /> */}
      {jobSets.length > 0 && <JobList jobs={jobSets} />}

    </div>
  );
}


