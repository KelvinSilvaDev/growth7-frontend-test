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

  // Teste 5: Verificar se cada conjunto contém jobs a serem executados em sequência
  jobSets.forEach((jobSet) => {
    for (let i = 1; i < jobSet.length; i++) {
      const date1 = new Date(jobSet[i - 1]['Data Máxima de conclusão']).getTime();
      const date2 = new Date(jobSet[i]['Data Máxima de conclusão']).getTime();
      expect(date1).toBeLessThanOrEqual(date2);
    }
  });

  // Teste 6: Verificar se a data máxima de conclusão de cada job é respeitada
  const maxDate = new Date('2023-10-01 16:00:00').getTime();
  jobSets.forEach((jobSet) => {
    jobSet.forEach((job) => {
      const jobDate = new Date(job['Data Máxima de conclusão']).getTime();
      expect(jobDate).toBeLessThanOrEqual(maxDate);
    });
  });

  // Teste 7: Verificar se a data máxima de conclusão de cada job está dentro da janela de execução
  const minDate = new Date('2023-10-01 12:00:00').getTime();
  jobSets.forEach((jobSet) => {
    jobSet.forEach((job) => {
      const jobDate = new Date(job['Data Máxima de conclusão']).getTime();
      expect(jobDate).toBeGreaterThanOrEqual(minDate);
      expect(jobDate).toBeLessThanOrEqual(maxDate);
    });
  });
});
