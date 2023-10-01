import { distributeJobs } from "../src/utils/jobUtils";

test('distributeJobs divides jobs correctly', () => {
  const jobs = [
    {
      "ID": 1,
      "Descrição": "Importação de arquivos de fundos",
      "Data Máxima de conclusão": "2021-02-04 12:00:00",
      "Tempo estimado": "8 horas"
    },
    {
      "ID": 2,
      "Descrição": "Importação de dados da Base Legada",
      "Data Máxima de conclusão": "2021-02-04 12:00:00",
      "Tempo estimado": "4 horas"
    },
    {
      "ID": 3,
      "Descrição": "Importação de dados",
      "Data Máxima de conclusão": "2021-02-02 12:00:00",
      "Tempo estimado": "6 horas"
    },
  ];

  const result = distributeJobs(jobs);

  // Extrair os IDs dos trabalhos de cada conjunto e criar um conjunto de IDs resultantes
  const resultJobIDs = new Set(result.flatMap(jobSet => jobSet.map(job => job.ID)));

  // Conjunto de IDs esperados
  const expectedJobIDs = new Set([1, 2, 3]);

  // Verificar se os IDs dos trabalhos esperados estão presentes nos conjuntos
  expect(resultJobIDs).toEqual(expectedJobIDs);
});