import { distributeJobs } from '../src/utils/jobUtils';

test('distributeJobs divides jobs correctly', () => {
  const jobs = [
    {
      "ID": 1,
      "Descrição": "Job 1",
      "Data Máxima de conclusão": "2023-10-01 12:00:00",
      "Tempo estimado": "2 horas"
    },
    {
      "ID": 2,
      "Descrição": "Job 2",
      "Data Máxima de conclusão": "2023-10-01 14:00:00",
      "Tempo estimado": "3 horas"
    },
    {
      "ID": 3,
      "Descrição": "Job 3",
      "Data Máxima de conclusão": "2023-10-01 16:00:00",
      "Tempo estimado": "1 hora"
    }
  ];

  // const expectedJobSets = [
  //   [
  //     {
  //       "ID": 5,
  //       "Descrição": "Gerar QRCode",
  //       "Data Máxima de conclusão": "2020-02-15 12:00:00",
  //       "Tempo estimado": "6 horas"
  //     },
  //     {
  //       "ID": 6,
  //       "Descrição": "Importação de dados de integração",
  //       "Data Máxima de conclusão": "2020-02-15 12:00:00",
  //       "Tempo estimado": "8 horas"
  //     }
  //   ],
  //   [
  //     {
  //       "ID": 3,
  //       "Descrição": "Importação de dados",
  //       "Data Máxima de conclusão": "2021-02-02 12:00:00",
  //       "Tempo estimado": "6 horas"
  //     },
  //     {
  //       "ID": 4,
  //       "Descrição": "Desenvolver historia 745",
  //       "Data Máxima de conclusão": "2021-02-02 12:00:00",
  //       "Tempo estimado": "2 horas"
  //     }
  //   ],
  //   [
  //     {
  //       "ID": 1,
  //       "Descrição": "Importação de arquivos de fundos",
  //       "Data Máxima de conclusão": "2021-02-04 12:00:00",
  //       "Tempo estimado": "8 horas"
  //     },
  //     {
  //       "ID": 2,
  //       "Descrição": "Importação de dados da Base Legada",
  //       "Data Máxima de conclusão": "2021-02-04 12:00:00",
  //       "Tempo estimado": "4 horas"
  //     }
  //   ]
  // ];
  

  const jobSets = distributeJobs(jobs);

  // Teste 1: Verificar se jobSets é uma matriz
  expect(Array.isArray(jobSets)).toBe(true);

  // Teste 2: Verificar se jobSets contém 3 conjuntos (arrays)
  expect(jobSets).toHaveLength(3);

  // Teste 3: Verificar se cada conjunto contém pelo menos um trabalho (job)
  jobSets.forEach((jobSet) => {
    expect(jobSet.length).toBeGreaterThan(0);
  });

  // Teste 4: Verificar se a soma do tempo estimado em cada conjunto é menor ou igual a 8 horas
  jobSets.forEach((jobSet) => {
    const totalEstimation = jobSet.reduce((total, job) => {
      return total + parseInt(job['Tempo estimado'], 10);
    }, 0);
    expect(totalEstimation).toBeLessThanOrEqual(8);
  });
});
