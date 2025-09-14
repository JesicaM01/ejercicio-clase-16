//const  numeros = [2,4,5,6,];
//console.log(numeros) ;
//const cuadradoDenumeros = numeros.map(function(num){ return num * num; });
//console.log(cuadradoDenumeros); 


//const numeros = [1,2,3,4,5,6,];
//console.log(numeros) ;
//const numerosPares = numeros.filter(function(num){ return num % 2 === 0; });
//console.log(numerosPares);

//const numeros = [5,8,12,20,3];
//console.log(numeros) ;

//const numero = numeros.find(function(num) { return num > 10; });
//console.log(numero);
  

//const numeros = [1,2,3,4,];
//console.log(numeros) ; 
//const operacion = numeros.reduce((acumulador, num) => {
        //if (acumulador === "") {
          //  return num.toString();
        //} else {
      //      return acumulador + " + " + num ;
    //    }
  //  }, "")
//console.log(operacion) ;



//const frutas = ["manzana", "banana", "naranja", "fresa"];
//console.log(frutas) ;
//frutas.forEach(function(fruta) {
  //  console.log(fruta);
//});



//const palabras = ["hola", "mundo", "javascript"];
//console.log(palabras) ;
//const palabrasTransformadas = palabras.map(palabra => { return "¡" + palabra + "!"; });
//console.log(palabrasTransformadas) ;


//const nombres = ["Ana", "Luis", "Andrea", "Maria"];
//console.log(nombres);
//const nombresConA = nombres.filter(nombre => nombre.includes("A"));
//console.log(nombresConA);


//let nombres = ["Carlos" ,"Daniel" ,"Laura" ,"Ana"];
//console.log(nombres) ;
//let nombreConL = nombres.find(nombre => nombre.includes("L"));
//console.log(nombreConL) ;


//const palabras = ["sol", "luna", "estrella"];
//console.log(palabras) ;
//const longitudTotal = palabras.map( palabra => { return palabra.length; })
//console.log(longitud);
//longitudTotal.forEach(longitud =>  {
  //  console.log(longitud);
//});



//const palabras = ["Me", "gusta", "aprender" , "JavaScript"];
//console.log(palabras) ;
//const frase = palabras.reduce((acumulador, palabra) => {
    //if (acumulador === "") {
     //   return palabra;
    //} else {
    //    return acumulador + " " + palabra;
  //  }
//}, "");
//console.log(frase);



//const nombres = ["Lucia", "Ana", "Maria", "Luis", "Jose", "Pablo"];
//console.log(nombres) ;
//const nombresSeleccionados = nombres.filter(nombre => nombre.length < 5)
    //.map(nombre => nombre.toUpperCase())
    //.reduce((acumulador, nombreActual, index) => {
        //if (index === 0) {
         //   return nombreActual;
        //} else {
        //    return acumulador + ", " + nombreActual;
      //  }
    //}, "");
    //const fraseFinal = " los Nombres seleccionados son:  .";
    //console.log(fraseFinal);
        //console.log(nombresSeleccionados) ;



//const products = [
 // { name: 'Laptop', price: 1000 },
  //{ name: 'Mouse', price: 25 },
  //{ name: 'Teclado', price: 50 },
 // { name: 'Monitor', price: 200 },
//  { name: 'Audífonos', price: 75 }
//];
//console.log('Lista de Productos Originales');
//let contador = 1;
//products.forEach(product => {
  //console.log(`${contador}. ${product.name} - $${product.price}`);
 // contador++;
//});
//const productosSeleccionados = products.filter(product => product.price >= 50);
//productosSeleccionados.forEach(product => {
  //console.log(`- ${product.name} - $${product.price}`);
//});
//console.log('Productos con precio mayor o igual a $50:');

//const totalVentas = productosSeleccionados.reduce((sum, product) => {
  //return sum + product.price;
//}, 0);
//console.log(`Total de ventas: $${totalVentas}`);



const movies = [
  { title: 'El Señor de los Anillos', duration: 200 },
  { title: 'Inception', duration: 148 },
  { title: 'Matrix', duration: 136 },
  { title: 'Toy Story', duration: 81 },
  { title: 'Coco', duration: 105 }
];
console.log('Lista de películas original:', movies);
let contador = 1;

const shortestMovie = movies.reduce((min, movie) => 
  (movie.duration < min.duration ? movie : min), movies[0]);

console.log('1) La película más corta es:', shortestMovie);

const remainingMovies = movies.filter(movie => movie.title !== shortestMovie.title);

const longTitleMovies = remainingMovies.filter(movie => movie.title.length > 10);

console.log('2) Películas con más de 10 caracteres:', longTitleMovies);

const longTitlesInLowercase = longTitleMovies.map(movie => movie.title.toLowerCase());

console.log('4) El título de la película más corta es:', shortestMovie.title);
console.log('5) La lista de títulos largos en minúscula es:', longTitlesInLowercase);