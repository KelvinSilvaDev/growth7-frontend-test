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
                <p>
                  ID: {job.ID}
                </p>
                <p>
                  Descrição: {job.Descrição}
                </p>
                <p>
                  Data Máxima de conclusão: {job['Data Máxima de conclusão']}
                </p>
                <p>
                  Tempo estimado: {job['Tempo estimado']}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JobResults;
