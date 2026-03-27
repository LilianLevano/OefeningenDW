 
    // Standaard loggen
    console.log("Normale informatie");

    // Waarschuwingen (geel)
    console.warn("Mmm, dit verdient aandacht...");

    // Fouten (rood)
    console.error("Er is iets helemaal misgegaan!");

    // Informatie (blauw)
    console.info("Wist je dat...?");


console.time();
console.group('Een groep van elementen')
console.log('E1');
console.log("E2")
console.group("Een geneste groep")
console.log("E3");
console.log("E3");

console.groupEnd();

console.log("Uit de nest");

console.groupEnd();

console.log('Uit de groep');


    const users = [
        { id: 1, name: "Sara", role: "Developer" },
        { id: 2, name: "Alex", role: "Designer" },
        { id: 3, name: "Kim", role: "Manager" }
    ];

console.table(users)
console.log(users);


   console.timeEnd();


    
  const validateUser = (user) => {
      console.assert(user.name, "Gebruiker moet een naam hebben!");
      console.assert(user.age >= 18, "Gebruiker moet minimaal 18 jaar zijn!");
    }


    validateUser({name: "Iets", age: 20})

    validateUser({ name: "Sam", age: 16 });
    // Toont alleen: Assertion failed: Gebruiker moet minimaal 18 jaar zijn!

