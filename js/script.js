// VARIABILE

let i;
// INSERIAMO IL CICLO FOR
for (i = 1; i <=100; i++) {


// PRIMA CONDIZIONE PER I MULTIPLI DI 3
    if (i % 3 ==0 ) {
        console.log('fizz')

        // PRIMA CONDIZIONE PER I MULTIPLI SIA DI 3 CHE DI 5
        if (i % 5 == 0) {
            console.log('fizzbuzz');
            
        }
    // PRIMA CONDIZIONE PER I MULTIPLI DI 5    
    } else if (i % 5 ==0) {
        console.log('buzz');
        
    }
    
    else{    
        console.log(i);
    }
   
   
} 