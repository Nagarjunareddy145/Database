import Employee from './models/employee';
import patient from './models/patient';
import Student from './models/student';




async function init(){
    const isDev = true;

  
    await Student.sync({alter:isDev})
    await Employee.sync({alter:isDev})
    await patient.sync({alter:isDev})
}


const dbInit =() => {
    init();
}

export default dbInit;