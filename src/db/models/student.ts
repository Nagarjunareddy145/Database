import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface StudentAttributes {
    id: number;
    sname: string;
    course: string;
}

export interface StudentInput extends Optional<StudentAttributes, 'id'> {}
export interface StudentOutput extends Required<StudentAttributes> {}
class Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
    public id!: number;
    public sname!: string;
    public course!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        sname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default Student;