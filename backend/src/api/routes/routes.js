module.exports=app=> {
    const router=require('express').Router();
    const lunetteController=require('../controllers/lunette.controller');
    router.post('/lunettes',lunetteController.create);
    router.get('/lunettes',lunetteController.findAll);
    router.get('/lunettes/:id',lunetteController.findOne);
    router.delete('/lunettes/:id',lunetteController.delete);
    router.put('/lunettes/:id',lunetteController.update);
    
    app.use('/api/',router);
        }