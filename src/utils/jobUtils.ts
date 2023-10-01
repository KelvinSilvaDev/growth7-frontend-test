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
// export function distributeJobs(jobs: Job[]): Job[][] {




//   const jobSets: Job[][] = [];
//   let currentSet: Job[] = [];
//   let currentSetTime = 0;
//   let currentSetMaxDate: Date | null = null;

//   // Agora vamos percorrer os jobs e aplicar as regras de distribuição
//   for (const job of jobs) {
//     // TODO: Implementar a lógica de distribuição dos jobs aqui
//     const tempoEstimadoStr = job["Tempo estimado"];
//     const tempoEstimadoNum = parseInt(tempoEstimadoStr, 10);

//     console.log(`Job com ID ${job.ID} tem tempo estimado de ${tempoEstimadoNum} horas`);

//     // Verifica se o job pode ser adicionado ao conjunto atual

//     if(currentSetTime + tempoEstimadoNum > 8){
//       console.log(`O Job com ID ${job.ID} não pode ser adicionado ao conjunto atual pois excede 8 horas`);
//     } else {

//       if ((!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)) {
//         currentSet.push(job);
//         currentSetTime += tempoEstimadoNum;
//         if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
//           currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//         }
//       } else {
//         jobSets.push(currentSet);
//         currentSet = [job];
//         currentSetTime = tempoEstimadoNum;
//         currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//       }
//     }

//   }




//   // Ordena os jobs pela data máxima de conclusão
//   // const sortedJobs = jobs.sort(
//   //   (a, b) =>
//   //     new Date(a["Data Máxima de conclusão"]).getTime() -
//   //     new Date(b["Data Máxima de conclusão"]).getTime()
//   // );

//   // const jobSets: Job[][] = [];
//   // let currentSet: Job[] = [];
//   // let currentSetMaxDate: Date | null = null;

//   // for (const job of sortedJobs) {
//   //   let currentSetTime = 0;
//   //   const tempoEstimadoStr = job["Tempo estimado"];
//   //   const matches = tempoEstimadoStr.match(/(\d+) horas/);

//   //   if (matches && matches.length === 2) {
//   //     const tempoEstimadoNum = parseInt(matches[1], 10);


//   //     // Verifica se o job pode ser adicionado ao conjunto atual
//   //     if (
//   //       tempoEstimadoNum <= 8 && // Verifica se o tempo estimado não excede 8 horas
//   //       currentSetTime + tempoEstimadoNum <= 8 &&
//   //       (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)
//   //     ) {
//   //       // Se o tempo estimado não exceder 8 horas, adicione o job ao conjunto atual
//   //       currentSet.push(job);
//   //       currentSetTime += tempoEstimadoNum;
//   //       if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
//   //         currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//   //       }
//   //     } else {
//   //       // Se não for possível adicionar o job ao conjunto atual, crie um novo conjunto
//   //       if (currentSet.length > 0) {
//   //         jobSets.push(currentSet);
//   //       }
//   //       currentSet = [job];
//   //       currentSetTime = tempoEstimadoNum;
//   //       currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//   //     }
//   //   } else {
//   //     console.error(`Formato de tempo estimado inválido para o Job com ID ${job.ID}`);
//   //   }
//   // }

//   // if (currentSet.length > 0) {
//   //   jobSets.push(currentSet);
//   // }

//   return jobSets;
// }


// export function distributeJobs(jobs: Job[]): Job[][] {
//   const jobSets: Job[][] = [];
//   let currentSet: Job[] = [];
//   let currentSetTime = 0;
//   let currentSetMaxDate: Date | null = null;

//   const maxExecutionTime = 8; // 8 horas em minutos

//   // Ordena os jobs pela data máxima de conclusão
//   const sortedJobs = jobs.sort(
//     (a, b) =>
//       new Date(a["Data Máxima de conclusão"]).getTime() -
//       new Date(b["Data Máxima de conclusão"]).getTime()
//   );

//   for (const job of sortedJobs) {
//     const tempoEstimadoStr = job["Tempo estimado"];
//     const matches = tempoEstimadoStr.match(/(\d+) horas/);


//     if (matches && matches.length === 2 && parseInt(matches[1], 10) <= maxExecutionTime) {

//       const tempoEstimadoNum = parseInt(matches[1], 10);

//       // Verifica se o job pode ser adicionado ao conjunto atual
//       if (
//         currentSetTime + tempoEstimadoNum <= maxExecutionTime &&
//         (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) <= currentSetMaxDate)
//       ) {
//         // Se o tempo estimado não exceder 8 horas, adicione o job ao conjunto atual
//         currentSet.push(job);
//         currentSetTime += tempoEstimadoNum;
//         if (!currentSetMaxDate || new Date(job["Data Máxima de conclusão"]) > currentSetMaxDate) {
//           currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//         }
//       } else {
//         // Se não for possível adicionar o job ao conjunto atual, crie um novo conjunto
//         if (currentSet.length > 0) {
//           jobSets.push(currentSet);
//         }
//         currentSet = [job];
//         currentSetTime = tempoEstimadoNum;
//         currentSetMaxDate = new Date(job["Data Máxima de conclusão"]);
//       }
//     } else {
//       console.error(`Formato de tempo estimado inválido para o Job com ID ${job.ID}`);
//     }
//   }

//   // Adicione o último conjunto, se ele não estiver vazio
//   if (currentSet.length > 0) {
//     jobSets.push(currentSet);
//   }

//   return jobSets;
// }





// export function distributeJobs(jobs: Job[]): Job[][] {
//   const jobSets: Job[][] = [];
//   let currentSet: Job[] = [];
//   let currentSetTime = 0;
//   let currentSetMaxDate: Date | null = null;

//   const maxExecutionTime = 8; // 8 horas em minutos

//   // Ordena os jobs pela data máxima de conclusão
//   const sortedJobs = jobs.sort(
//     (a, b) =>
//       new Date(a["Data Máxima de conclusão"]).getTime() -
//       new Date(b["Data Máxima de conclusão"]).getTime()
//   );

//   for (const job of sortedJobs) {
//     const tempoEstimadoStr = job["Tempo estimado"];
//     const matches = tempoEstimadoStr.match(/(\d+) horas/);

//     // Verifica se o job possui data de início e data fim
//     if (matches && matches.length === 2) {
//       const tempoEstimadoNum = parseInt(matches[1], 10);

//       // Verifica se o tempo estimado não excede 8 horas
//       if (tempoEstimadoNum <= maxExecutionTime) {
//         const dataMaxima = new Date(job["Data Máxima de conclusão"]);
//         const dataMinima = new Date(job["Data Máxima de conclusão"]);
//         dataMinima.setMinutes(dataMinima.getMinutes() - tempoEstimadoNum);

//         // Verifica se o job pode ser executado dentro da janela de execução
//         if (
//           currentSetTime + tempoEstimadoNum <= maxExecutionTime &&
//           (!currentSetMaxDate || dataMaxima <= currentSetMaxDate) &&
//           (!currentSetMaxDate || dataMinima >= currentSetMaxDate)
//         ) {
//           // Se o tempo estimado não exceder 8 horas e estiver dentro da janela, adicione o job ao conjunto atual
//           currentSet.push(job);
//           currentSetTime += tempoEstimadoNum;
//           if (!currentSetMaxDate || dataMaxima > currentSetMaxDate) {
//             currentSetMaxDate = dataMaxima;
//           }
//         } else {
//           // Se não for possível adicionar o job ao conjunto atual, crie um novo conjunto
//           if (currentSet.length > 0) {
//             jobSets.push(currentSet);
//           }
//           currentSet = [job];
//           currentSetTime = tempoEstimadoNum;
//           currentSetMaxDate = dataMaxima;
//         }
//       } else {
//         console.error(`Tempo estimado excede 8 horas para o Job com ID ${job.ID}`);
//       }
//     } else {
//       console.error(`Formato de tempo estimado inválido para o Job com ID ${job.ID}`);
//     }
//   }

//   // Adicione o último conjunto, se ele não estiver vazio
//   if (currentSet.length > 0) {
//     jobSets.push(currentSet);
//   }

//   return jobSets;
// }


export function distributeJobs(jobs: Job[]): Job[][] {
  const jobSets: Job[][] = [];
  let currentSet: Job[] = [];
  let currentSetTime = 0;
  let currentSetMaxDate: Date | null = null;

  const maxExecutionTime = 8; // 8 horas em minutos

  // Ordena os jobs pela data máxima de conclusão
  const sortedJobs = jobs.sort(
    (a, b) =>
      new Date(a["Data Máxima de conclusão"]).getTime() -
      new Date(b["Data Máxima de conclusão"]).getTime()
  );

  for (const job of sortedJobs) {
    const tempoEstimadoStr = job["Tempo estimado"];
    const matches = tempoEstimadoStr.match(/(\d+) horas/);

    // Verifica se o job possui data de início e data fim
    if (matches && matches.length === 2) {
      const tempoEstimadoNum = parseInt(matches[1], 10);

      // Verifica se o tempo estimado não excede 8 horas
      if (tempoEstimadoNum <= maxExecutionTime) {
        const dataMaxima = new Date(job["Data Máxima de conclusão"]);
        const dataMinima = new Date(job["Data Máxima de conclusão"]);
        dataMinima.setMinutes(dataMinima.getMinutes() - tempoEstimadoNum);

        // Verifica se o job pode ser executado dentro da janela de execução
        if (
          currentSetTime + tempoEstimadoNum <= maxExecutionTime &&
          (!currentSetMaxDate || dataMaxima <= currentSetMaxDate) &&
          (!currentSetMaxDate || dataMinima >= currentSetMaxDate)
        ) {
          // Se o tempo estimado não exceder 8 horas e estiver dentro da janela, adicione o job ao conjunto atual
          currentSet.push(job);
          currentSetTime += tempoEstimadoNum;
          if (!currentSetMaxDate || dataMaxima > currentSetMaxDate) {
            currentSetMaxDate = dataMaxima;
          }
        } else {
          // Se não for possível adicionar o job ao conjunto atual, crie um novo conjunto
          if (currentSet.length > 0) {
            jobSets.push(currentSet);
          }
          currentSet = [job];
          currentSetTime = tempoEstimadoNum;
          currentSetMaxDate = dataMaxima;
        }
      } else {
        console.error(`Tempo estimado excede 8 horas para o Job com ID ${job.ID}`);
      }
    } else {
      console.error(`Formato de tempo estimado inválido para o Job com ID ${job.ID}`);
    }
  }

  // Adicione o último conjunto, se ele não estiver vazio
  if (currentSet.length > 0) {
    jobSets.push(currentSet);
  }

  return jobSets;
}
