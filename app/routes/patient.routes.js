// module.exports = (app) => {
//     const patient = require('../controllers/PatientController.js');

//     app.post('/auth',patient.getCode);
//     app.post('/token',patient.getToken);
//     app.get('/getAllPatients',patient.getAllPatients);
//     app.get('/patient/:pId',patient.getPatient)
//     app.post('/patient',patient.postPatient);
//     app.put('/patient/:pId',patient.updatePatient);
//     app.delete('/patient/:pId',patient.deletePatient);
// }

module.exports = (router) => {
    const patient = require('../controllers/PatientController.js');

    // // For Authentication
    router.post('/auth',patient.getCode);
    router.post('/token',patient.getToken);


    // // For Patient Functionalities
    router.route('/patient/:pId')
        .get(patient.getPatient)
        .put(patient.updatePatient)
        .delete(patient.deletePatient);

    router.post('/patient',patient.postPatient);
    
}