import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface patientAttributes {
    pid: number;
    pname: string;
    description: string;
}

export interface patientInput extends Optional<patientAttributes, 'pid'> {}
export interface patientOutput extends Required<patientAttributes> {}
class patient extends Model<patientAttributes, patientInput> implements patientAttributes {
    public pid!: number;
    public pname!: string;
    public description!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

patient.init(
    {
        pid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        pname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default patient;