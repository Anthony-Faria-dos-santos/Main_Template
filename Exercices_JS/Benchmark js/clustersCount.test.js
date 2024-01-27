import cluster from "cluster";
import os from "node:os";
import v8 from "v8";

import { faker } from '@faker-js/faker';

//! Réalisation d'un Benchmark CPU multithreading (node 12+) :
//? lancer via le script : "cluster4096": "node --max-old-space-size=4096 clustersCount.test.js" afin d'augmenter la mémoire Heap de node à 4GB.




// const numCPUs = os.cpus().length; //! Multithreading
const numCPUs = 1; //! Single Thread


if (cluster.isPrimary) {
  // Code pour le processus principal
  const USERS_COUNT = 10000000;
  const TEST_COUNT = 100;
  let RESULT_COUNT = 0;
  console.log(`Master en fonctionnement avec ${numCPUs} threads`)
  console.time('Création de la collection d\'utilisateurs');

  // Créer des workers
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();  
  }

  cluster.on('message', (worker, message) => {
    if (message.task === 'ready') {
      console.log(`Worker ${worker.id} is ready`);
      worker.send({ task: 'compute', data: Math.round(USERS_COUNT/numCPUs) });
    }

    if (message.task === 'result') {
      console.log(`Worker ${worker.id} computed result:`, message.result);
      RESULT_COUNT++;

      if (RESULT_COUNT === numCPUs) {
        console.timeEnd('Création de la collection d\'utilisateurs');
        console.log(`La limite de mémoire Heap pour ce test est de ${v8.getHeapStatistics().total_available_size / 1024 / 1024} MB`);
        
      }
    }

  });

  // sur i9-13900k 32_cores : // Allocation mémoire doublée pour le dernier test.

  // 100: 182ms           multithread : 100: 381ms                  
  // 1000 : 155ms                       1000: 384ms
  // 10000 : 229ms                      10000: 391ms
  // 100000 : 910ms                     100000: 489ms
  // 1000000 : 7811ms                   1000000: 1006ms
  // 10000000 : 85346ms                 10000000: 6557ms
  // Fin de l'exécution. Combien de temps ?



  // sur i5 4_cores : 

  // 100: **ms            multithread : 100: 452ms                  
  // 1000 : **ms                        1000: 397ms
  // 10000 : ***ms                      10000: 529ms
  // 100000 : ****ms                    100000: 1320ms
  // 1000000 : *****ms                  1000000: 4863ms
  // 10000000 : ******ms                10000000: 39240ms
  // Fin de l'exécution. Combien de temps ?


} else {
  // Code pour les processus enfants

  process.send({task: "ready", pid:process.pid})

  // Recevoir les messages du processus principal
  process.on('message', (message) => {
      if (message.task === 'compute') {
      // Effectuer le calcul dans le worker
      const result = batchCreateUser(message.data);

      // Envoyer le résultat au processus principal
      process.send({ task: 'result', result:"Terminé" });
    }
  });
}



function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 90 }),
    registeredAt: faker.date.past(),
  };
}

function batchCreateUser(count) {
  const emptyArray = [...new Array(count)];
  return emptyArray.map(() => createRandomUser());
}

function countByAge(users, age = 55) {
  const filteredUsers = users.filter((user) => user.age === age);
  return filteredUsers.length;
}





// console.time('Comptage d\'utilisateur ayant un certain age sans index');
// const tries = [...new Array(TEST_COUNT)].map(
//   () => countByAge(users, faker.number.int({ min: 18, max: 90 })),
// );
// console.log(`nombre d'utilisateur ayant un certain age : ${tries[0]}`);
// console.timeEnd('Comptage d\'utilisateur ayant un certain age sans index');