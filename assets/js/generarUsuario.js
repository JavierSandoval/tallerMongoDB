var usuarios = ''

for (let i = 0; i < 10; i++) {
    let nombre = faker.name.firstName() + " " + faker.name.lastName()
    let ciudad = faker.address.city()
    let profesion = faker.name.jobTitle()
    let direccion = faker.address.streetAddress()
    let telefono = faker.phone.phoneNumber()
    let email = faker.internet.email()
    let salario = faker.finance.amount()
    let edad = faker.random.number(45)
    usuarios += `{ "nombre": "${nombre}", "ciudad": "${ciudad}", "profesion": "${profesion}", "direccion": "${direccion}", "telefono": "${telefono}", "email": "${email}", "salario": "${salario}", "edad": "${edad}"}`;
}
console.log(usuarios);

/*
{ "nombre": "Earnestine Ebert", "ciudad": "Harrisview", "profesion": "Dynamic Accountability Director", "direccion": "3373 Shania Hills", "telefono": "511-515-6978 x2226", "email": "Kobe.Gutmann@hotmail.com", "salario": "268.85", "edad": "3"}
{ "nombre": "Shakira Green", "ciudad": "West Eleazar", "profesion": "Internal Security Specialist", "direccion": "209 Leanna Alley", "telefono": "(768) 250-3075 x2034", "email": "Citlalli_Goodwin@yahoo.com", "salario": "112.12", "edad": "10"}
{ "nombre": "Nora Mitchell", "ciudad": "West Adalbertoshire", "profesion": "District Security Engineer", "direccion": "131 Sherman Parkway", "telefono": "652.615.7991", "email": "Erling32@gmail.com", "salario": "642.36", "edad": "38"}
{ "nombre": "Hadley Hessel", "ciudad": "East Juwan", "profesion": "Human Operations Orchestrator", "direccion": "038 Mueller Landing", "telefono": "433.444.6842", "email": "Kim.Schinner9@gmail.com", "salario": "184.45", "edad": "37"}
{ "nombre": "Willis Kuvalis", "ciudad": "Bogota", "profesion": "Customer Metrics Developer", "direccion": "14779 Giovanni Gardens", "telefono": "1-810-937-0816 x72576", "email": "Libbie.Green18@gmail.com", "salario": "679.07", "edad": "30"}
{ "nombre": "Timmy Doyle", "ciudad": "West Tellyview", "profesion": "International Assurance Planner", "direccion": "5155 Labadie Stream", "telefono": "454.632.4509 x2088", "email": "Efrain.Schmidt@hotmail.com", "salario": "185.21", "edad": "2"}
{ "nombre": "Bret Yost", "ciudad": "Bogota", "profesion": "Global Infrastructure Orchestrator", "direccion": "925 Nicholas Village", "telefono": "1-731-244-1576", "email": "Imelda77@hotmail.com", "salario": "200.21", "edad": "44"}
{ "nombre": "Rosella Hahn", "ciudad": "South Isobelland", "profesion": "Dynamic Security Engineer", "direccion": "869 Devyn Parks", "telefono": "(860) 405-7757 x5368", "email": "Minerva31@hotmail.com", "salario": "929.93", "edad": "28"}
{ "nombre": "Aliya Torphy", "ciudad": "Lake Salliehaven", "profesion": "Regional Program Planner", "direccion": "14700 Raegan Rapids", "telefono": "1-701-569-0977 x101", "email": "Delilah15@gmail.com", "salario": "909.73", "edad": "40"}
{ "nombre": "Bridget Hills", "ciudad": "Bogota", "profesion": "Senior Program Architect", "direccion": "552 Friesen Cliffs", "telefono": "479-780-4596 x0109", "email": "Frieda36@gmail.com", "salario": "397.47", "edad": "17"}
*/

/*
use taller
db.usuarios.updateMany( { "ciudad": "Bogota" }, { $inc: {"salario": 5} })
*/

/*
use taller
db.usuarios.deleteMany( { $lt: { "edad": "18" } })
*/