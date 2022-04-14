export interface ITask
{
   id?: number,
   status: string,
   content: string,
   important: boolean,
   created_at: Date,
   updated_at: Date
}