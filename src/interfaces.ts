export interface ITodo {
    id: number,
    todoTitle: string,
    isCompleted: boolean

}
export interface PropsTodo {
    onAddTodo(title: string): void
  }