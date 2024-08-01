import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface EmployeeAttributes {
    eid: number;
    ename: string;
    job: string;
}

export interface EmployeeInput extends Optional<EmployeeAttributes, 'eid'> {}
export interface EmployeeOutput extends Required<EmployeeAttributes> {}
class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
    public eid!: number;
    public ename!: string;
    public job!: string;
   
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Employee.init(
    {
        eid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        ename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        job: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default Employee;