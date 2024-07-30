import Student from './models/student';




async function init(){
    const isDev = true;

  
    await Student.sync({alter:isDev})
}


const dbInit =() => {
    init();
}

export default dbInit;