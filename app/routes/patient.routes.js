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
    const auth = require('../controllers/AuthController.js');
    const user = require('../controllers/UserController.js');

    // // For Authentication
    router.post('/auth/code',auth.getCode);
    router.post('/auth/token',auth.getToken);


    // // For Patient Functionalities
    router.route('/patient/:pId')
          .get(patient.getPatient)
          .put(patient.updatePatient)
          .delete(patient.deletePatient);
    router.get('/patient/getAllPatients',patient.getAllPatients);
    router.post('/patient/postPatient',patient.postPatient);

    // // For User Functionalities
    router.post('/user/postUser',user.postUser);
    router.put('/user/updateUser',user.updateUser);
    router.put('/user/activeUser',user.deactiveUser);
}