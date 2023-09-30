import JobResultsProps from '../types/JobResults';


function JobResults({ jobSets }: JobResultsProps) {
  console.log("jobSets recebido:", jobSets); 
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
