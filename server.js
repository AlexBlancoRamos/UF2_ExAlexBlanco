const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const Sequelize = require('sequelize');

app.use(express.json());

app.use(cors())

port = 3080;

app.listen(port, () => {
  console.log('Server listening on the port::'+ port);
});

//

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'patata',
  database: 'unialexblanco'
});

db.connect((err) =>{
  if (err) throw err;
  console.log('Connectat a la base de dades Mysql parte 1')
})


app.get('/assiginfo', (req,res)=>{
  db.query(`SELECT assig.ASSIG_CODI, assig.ASSIG_NOM
            FROM ASSIGNATURES assig
                   INNER JOIN ASSIGNATURES_PROFESSOR assigpro ON assig.ASSIG_CODI = assigpro.ASSIGPROF_ASSIG_CODI
                   INNER JOIN PROFESSOR pro ON assigpro.ASSIGPROF_PROF_DNI = pro.PROF_DNI
                   INNER JOIN DEPARTAMENT dep ON pro.PROF_DNI = dep.DEPT_PROF_DNI
            WHERE dep.DEPT_NOM = 'INFORMATICA I MATEMATICA APLICADA';`,(err, info)=>{
    if (err) throw err;
    res.json(info);
  })
})

app.post('/modifalum', (req,res)=>{
  db.query(`SHOW COLUMNS FROM alumnes WHERE Field = 'alumn_zodiac'`, (error, results, fields) => {
    if (error) {
      console.error(error);
    } else if (results.length > 0) {
      console.log('Noi vas tard, ja està creat.');
    } else {
      db.query(`ALTER TABLE alumnes ADD COLUMN alumn_zodiac VARCHAR(50);`, (error, results, fields) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Columna inserida');
        }
      });
    }});
})



//

const sequelize = new Sequelize("unialexblanco","root","patata",{
  host: 'localhost',
  dialect: "mysql",
});

const initmodels = require("C:\\Users\\alexb\\UF2_ExAlexBlanco\\models\\init-models.js");
const models = initmodels(sequelize);

sequelize.authenticate().then(() => {
  console.log('Connexio per ORM correcte');
}).catch((error) => {
  console.error('Connexio per ORM incorrecte: ', error);
});


//EX4 comentat per no acaba de funcionar


//app.post('/ex4', (req, res) => {
//  const {dept_codi, dept_nom, dept_ubicacio, dept_telefon, dept_prof_dni} = req.body
//  const attr ={
//    dept_codi: dept_codi,
//    dept_nom: dept_nom,
//    dept_ubicacio: dept_ubicacio,
//    dept_telefon: dept_telefon,
//    dept_prof_dni:  dept_prof_dni,
//  }
//  const nouDep = models.departament.create(attr)
//})
