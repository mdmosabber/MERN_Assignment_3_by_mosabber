const {client} = require('./dbConfig');

const insertManyData = async()=>{
    try{

        const studentCollection = client.db('school').collection('students');
        const data = [
            {name: 'Md. Rahim', lastName: 'Khan', email: 'rahim@gmail.com', phone: '01922334455', city: 'sylhet', country: 'Bangladesh'},
            {name: 'Md. Karim', lastName: 'Ali', email: 'karim@gmail.com', phone: '01899887766', city: 'Rajshahi', country: 'Bangladesh'},
            {name: 'Md. Jhon', lastName: 'Doe', email: 'jhon@gmail.com', phone: '01522334455', city: 'Italy', country: 'Italy'},
            {name: 'Md. Rani', lastName: 'Hasan', email: 'rani@gmail.com', phone: '01299887766', city: 'Rangpur', country: 'Bangladesh'}
        ]
        const result = await studentCollection.insertMany(data);
        
        if(result.acknowledged == true){
            console.log(`Save Your ${result.insertedCount} datas Successfully`)
        }        

    }catch(err){
        console.log(err)
    }finally{
        await client.close()
    }
}
insertManyData()