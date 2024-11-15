module.exports = mongoose => {
    const Schema = mongoose.Schema;
    let LunetteSchema = new Schema({
        Marque: {type: String, required: true},
        Type: { type: [String], required: true },
        Prix: {type: Number, required: true},
        Fume: {type: Boolean, required: true}
        
       
    }, {
        timestamps: true
    });
    LunetteSchema.method('toJSON', function(){
        const{_v, _id, ...object}= this.toObject();
        object.id= _id;
        return object;
    })
   const Lunette = mongoose.model('Lunette' , LunetteSchema);
   return Lunette;
}        