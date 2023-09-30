// jobUtils.ts

import { Job } from "../types/Job";

export function distributeJobs(jobs: Job[]): Job[][] {
  // Ordena os jobs pela data máxima de conclusão e converte o tempo estimado para minutos
  const sortedJobs = jobs.sort(
    (a, b) =>
      new Date(a["Data Máxima de conclusão"]).getTime() -
      new Date(b["Data Máxima de conclusão"]).getTime()
  );

  const jobSets: Job[][] = [];
  let currentSet: Job[] = [];
  let currentSetTime = 0;
  let currentSetMaxDate: Date | null = null;

  for (const job of sortedJobs) {
    const tempoEstimadoStr = job["Tempo estimado"];
    const tempoEstimadoNum = parseInt(tempoEstimadoStr, 10);

    // Verifica se o job pode ser adicionado ao conjunto atual
    if (
      currentSetTime + tempoEstimadoNum <= 8 * 60 &&
      (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)
    ) {
      currentSet.push(job);
      currentSetTime += tempoEstimadoNum;
      if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
        currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
      }
    } else {
      jobSets.push(currentSet);
      currentSet = [job];
      currentSetTime = tempoEstimadoNum;
      currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
    }
  }

  if (currentSet.length > 0) {
    jobSets.push(currentSet);
  }

  return jobSets;
}
