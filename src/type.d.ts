type Todo = {
  text: string;
  complete: boolean;
};

type toggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
