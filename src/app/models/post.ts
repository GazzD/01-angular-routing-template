export class Post {

  constructor(
    private _userId: number,
    private _id: number,
    private _title: string,
    private _body: string
    ) {}

    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
    public get userId(): number {
      return this._userId;
    }
    public set userId(value: number) {
      this._userId = value;
    }
    public get body(): string {
      return this._body;
    }
    public set body(value: string) {
      this._body = value;
    }
    public get title(): string {
      return this._title;
    }
    public set title(value: string) {
      this._title = value;
    }
}
