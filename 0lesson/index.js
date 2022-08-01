const casual = require('casual');

console.log("Julija Ged");
console.log(casual.city, casual.integer(1,10));

// random skaiciaus funkcija pasirasyti, kurioje galime irasyti nuo ..iki.. random skaicius ir ji grazinti

console.log(casual.city, casual.integer(1,10));


// sukonstruoti user objektą iš casual random properčių
// turi turėti vardą, pavardę, lytį, adrasas (objektas su šalis, miestas, gatvė), el. paštas, slaptažodis, metai (0-99), kuri mėn gimė., mėgstamiausia spalva
const user = casual.user;
let color = casual.random_value({ a: "violet", b: "red", c: "black" });
let birthmonth = casual.random_value({
  a: "january",
  b: "february",
  c: "march",
});

casual.define("user", function () {
  return {
    firstname: casual.first_name,
    lastname: casual.last_name,
    email: casual.email,
    password: casual.password,
    address: casual.address,
    color: color.random_value,
    birthmonth: birthmonth.random_value,
  };
});
console.log(casual.user);

// 'uuid' versiją 7.0.2


/*

console.log(Math.random());


casual.define('user', function() {
    return {
    name_prefix: casual.name_prefix,
    first_name: casual.first_name,
    last_name: casual.last_name,
    address: casual.address,
    city: casual.city,
    country: casual.country,
    email: casual.email
    month_name: casual.month_name,
    color_name: casual.color_name,
    };
   });
    
   console.log(casual.name_prefix, casual.first_name, casual.last_name, casual.address, casual.city, casual.country, casual.email, casual.month_name, casual.color_name);

   integer: casual.integer(from = 0, to = 99)*/

   //
   const randomNumber = casual.integer((from = 1), (to = 10));
   console.log(randomNumber);
   
   const randomPersonName = () => {
   return `${casual.name_prefix} ${casual.first_name} ${casual.last_name}`;
   };
   
   console.log(randomPersonName());

const sex = ["male", "female", "other"];
const randomSex = sex[casual.integer((from = 0), (to = 2))];

casual.define("user", () => ({
firstName: casual.first_name,
lastName: casual.last_name,
sex: randomSex,
address: {
country: casual.country,
city: casual.city,
street: casual.street,
},
email: casual.email,
password: casual.password,
age: casual.integer((from = 0), (to = 99)),
month: casual.month_name,
color: casual.color_name,
}));

console.log(casual.user);
