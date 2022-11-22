const {client} = require('./dbConfig');

const deleteManYData = async ()=> {
    try{

        const studentCollection = client.db('school').collection('students');
        const result = await studentCollection.deleteMany({});
        
        if(result.acknowledged == true){
            console.log(`Delete Your ${result.deletedCount} Datas Successfully`)
        }        

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
deleteManYData()