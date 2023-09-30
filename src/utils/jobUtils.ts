// jobUtils.ts

import { Job } from "../types/Job";

// export function distributeJobs(jobs: Job[]): Job[][] {
//   // Ordena os jobs pela data máxima de conclusão e converte o tempo estimado para minutos
//   const sortedJobs = jobs.sort(
//     (a, b) =>
//       new Date(a["Data Máxima de conclusão"]).getTime() -
//       new Date(b["Data Máxima de conclusão"]).getTime()
//   );

//   const jobSets: Job[][] = [];
//   let currentSet: Job[] = [];
//   let currentSetTime = 0;
//   let currentSetMaxDate: Date | null = null;

//   for (const job of sortedJobs) {
//     const tempoEstimadoStr = job["Tempo estimado"];
//     const tempoEstimadoNum = parseInt(tempoEstimadoStr, 10);

//     // Verifica se o job pode ser adicionado ao conjunto atual
//     if (
//       currentSetTime + tempoEstimadoNum <= 8 * 60 &&
//       (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)
//     ) {
//       currentSet.push(job);
//       currentSetTime += tempoEstimadoNum;
//       if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
//         currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//       }
//     } else {
//       jobSets.push(currentSet);
//       currentSet = [job];
//       currentSetTime = tempoEstimadoNum;
//       currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//     }
//   }

//   if (currentSet.length > 0) {
//     jobSets.push(currentSet);
//   }

//   return jobSets;
// }
// export function distributeJobs(jobs: Job[]): Job[][] {
//   const sortedJobs = jobs.sort(
//     (a, b) =>
//       new Date(a["Data Máxima de conclusão"]).getTime() -
//       new Date(b["Data Máxima de conclusão"]).getTime()
//   );

//   const jobSets: Job[][] = [];
//   let currentSet: Job[] = [];
//   let currentSetTime = 0;

//   for (const job of sortedJobs) {
//     const tempoEstimadoStr = job["Tempo estimado"];
//     const tempoEstimadoNum = parseInt(tempoEstimadoStr, 10);

//     // Verifica se adicionar o job ao conjunto atual excede 8 horas
//     if (currentSetTime + tempoEstimadoNum <= 8 * 60) {
//       currentSet.push(job);
//       currentSetTime += tempoEstimadoNum;
//     } else {
//       // Se exceder, verifica se a data máxima de conclusão ainda é válida
//       const currentDateMax = new Date(job["Data Máxima de conclusão"]);
//       const currentSetMaxDate = new Date(currentSet[currentSet.length - 1]["Data Máxima de conclusão"]);

//       if (currentDateMax <= currentSetMaxDate) {
//         currentSet.push(job);
//         currentSetTime += tempoEstimadoNum;
//       } else {
//         // Inicia um novo conjunto se a data máxima não for válida
//         jobSets.push(currentSet);
//         currentSet = [job];
//         currentSetTime = tempoEstimadoNum;
//       }
//     }
//   }

//   if (currentSet.length > 0) {
//     jobSets.push(currentSet);
//   }

//   return jobSets;
// }
export function distributeJobs(jobs: Job[]): Job[][] {
  // Ordena os jobs pela data máxima de conclusão
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
    const matches = tempoEstimadoStr.match(/(\d+) horas/);

    if (matches && matches.length === 2) {
      const tempoEstimadoNum = parseInt(matches[1], 10);

      // Verifica se o job pode ser adicionado ao conjunto atual
      if (
        tempoEstimadoNum <= 8 * 60 && // Verifica se o tempo estimado não excede 8 horas
        currentSetTime + tempoEstimadoNum <= 8 * 60 &&
        (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)
      ) {
        // Se o tempo estimado não exceder 8 horas, adicione o job ao conjunto atual
        currentSet.push(job);
        currentSetTime += tempoEstimadoNum;
        if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
          currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
        }
      } else {
        // Se o job não puder ser adicionado ao conjunto atual, inicie um novo conjunto
        if (currentSet.length > 0) {
          jobSets.push(currentSet);
        }
        currentSet = [job];
        currentSetTime = tempoEstimadoNum;
        currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
      }
    } else {
      console.error(`Formato de tempo estimado inválido para o Job com ID ${job.ID}`);
    }
  }

  if (currentSet.length > 0) {
    jobSets.push(currentSet);
  }

  return jobSets;
}


