
const db = require('../../database/db.config');
const Lunette = db.lunettes;

exports.create=(req, res) => {
    //récupération des données
    const {Marque, Type, Prix, Fume} = req.body;
    if(!Marque || ! Type || ! Prix || !Fume ) {
    return res.status(400).send({
    message: 'content can not be empty' })
    }
    
    const newLunette = new Lunette({
    
        Marque: Marque,
        Type: Type,
        Prix: Prix,
        Fume: Fume,
        

    });
    newLunette.save(newLunette).then((data) => {
        res.status(200).send({
        message: 'successufully created Lunettes'
    });
    }).catch(err =>{
        console.log(err);
    });
    }
    exports.findAll = (req, res) => {
        Lunette.find({}).then((data) => { 
            res.send(data);
        }).catch((err) => {
            console.log(err);
            res.status(500).send({
                message: 'An error occurred while retrieving Lunettes'
            });
        });
    };
    
    exports.findOne = (req, res) => {
        const id = req.params.id;
        if (!id) {
            res.status(400).send({ message: "content is required " });
        }
        Lunette.findById(id).then((data) => { 
            res.send(data);
        }).catch((err) => {
            console.log(err);
            res.status(500).send({
                message: 'An error occurred while retrieving Lunette'
            });
        });
    };
//suppression par id 
exports.delete = (req, res) => {
    const id = req.params.id;
    if(!id) {
    res.status(400).send({ message: "content is required "});
    }
    Lunette.findByIdAndDelete(id).then((data) => {
    if(!data){
        res.status(404).send({ message: "Lunette not found "});  
    }
    res.status(200).send({ message: "Lunette was successfull deleted "});
    })
};
exports.update =(req, res) =>{
    const id = req.params.id;
    const {Prix} = req.body;
    if(!id || !Prix ) {
    res.status(400).send({ message: "content is required "});
    }
    Lunette.findByIdAndUpdate(id,
    {Prix: Prix},
    {useFindAndModify: false}).then((data) =>{
        if(!data){
            res.status(404).send({ message: `Can not update Lunette with
            id=${id}`});
            }
            res.status(200).send({ message: `Lunette was successfully updated`});
            }).catch((err) =>{
            console.log(err);
            });
            }



