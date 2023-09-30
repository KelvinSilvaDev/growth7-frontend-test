import React, { useState } from 'react';
import './App.css';

import FileUpload from './components/FileUpload';
import JobResults from './components/JobResults';
import { distributeJobs } from './utils/jobUtils';
import { Job } from './types/Job';


function App() {
  const [jobSets, setJobSets] = useState<Array<Array<Job>>>([]);

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
  

  // Função dividirJobs permanece a mesma

  return (
    <div className="App">
      <h1>Divisão de Jobs</h1>
      <FileUpload onFileUpload={processJsonFile} />
      <JobResults jobSets={jobSets} />
    </div>
  );
}

export default App;
