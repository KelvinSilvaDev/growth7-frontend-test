import React from 'react';

type Job = {
  ID: number;
  Descrição: string;
  'Data Máxima de conclusão': string;
};

type JobResultsProps = {
  jobSets: Job[][];
};

function JobResults({ jobSets }: JobResultsProps) {
  return (
    <div>
      {jobSets.map((jobSet, index) => (
        <div key={index}>
          <h2>Conjunto {index + 1}</h2>
          <ul>
            {jobSet.map((job) => (
              <li key={job.ID}>
                {job.Descrição} - Data Máxima de conclusão: {job['Data Máxima de conclusão']}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JobResults;
