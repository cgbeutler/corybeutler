import { validate, NIL } from 'uuid'

export class MotwCharacter {

    private _id: string = "";
    public get id(): string { return this._id; }
    private set id( value: string )
    {
        if (!validate(value)) { this._id = NIL; return; }
        this._id = value;
    }

    private _name: string = "";
    public get name(): string { return this._name ?? ""; }
    public set name( value: string ) { this._name = value ?? ""; }

    constructor(p_id) {
        this.id = p_id;
        this.name = ""
    }
  }