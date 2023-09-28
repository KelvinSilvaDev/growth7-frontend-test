import React, { useState } from 'react';
import './App.css';
import Job from './types/job';
import FileUpload from './components/FileUpload';
import JobResults from './components/JobResults';


function App() {
  const [jobSets, setJobSets] = useState<Array<Array<Job>>>([]);

  function dividirJobs(jobs: Job[]) {
    const maxTempoEstimado = 8 * 60; // 8 horas em minutos
    const resultado = [];
    let conjuntoAtual: Job[] = [];
    let tempoTotalAtual = 0;
    let dataMaxima = new Date();
  
    for (const job of jobs) {
      const tempoEstimado = parseInt(job['Tempo estimado'].split(' ')[0]); // Extrai o tempo estimado em horas
      const dataConclusao = new Date(job['Data Máxima de conclusão']);
  
      if (tempoTotalAtual + tempoEstimado <= maxTempoEstimado && dataConclusao <= dataMaxima) {
        conjuntoAtual.push(job);
        tempoTotalAtual += tempoEstimado;
        if (dataConclusao < dataMaxima) {
          dataMaxima = dataConclusao;
        }
      } else {
        resultado.push(conjuntoAtual);
        conjuntoAtual = [job];
        tempoTotalAtual = tempoEstimado;
        dataMaxima = dataConclusao;
      }
    }
  
    if (conjuntoAtual.length > 0) {
      resultado.push(conjuntoAtual);
    }
  
    return resultado;
  }

  const processJsonFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData: Job[] = JSON.parse(e.target?.result as string);
        const result = dividirJobs(jsonData);
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
