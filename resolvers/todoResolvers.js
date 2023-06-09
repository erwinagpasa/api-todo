import Todo from "../models/Todo.js";

const resolvers = {
  Query:{
    welcome: () => {
      return "Hello World"
    
    },
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    }
  },
  Mutation: {
    addTodo: async (root, args) => {
      const newTodo = new Todo({role:args.role, title:args.title, detail:args.detail, date:args.date})
      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "Todo deleted successfully";
    },    
    updateTodo: async (root, args) => {
      const {id, role, title, detail, date} = args;
      const updatedTodo = {};
      
      if(role !== undefined){
        updatedTodo.role = role;      
      };

      if(title !== undefined){
        updatedTodo.title = title;      
      };

      if(detail !== undefined){
        updatedTodo.detail = detail;      
      };

      if(date !== undefined){
        updatedTodo.date = date;      
      };

    
      const todo = await Todo.findByIdAndUpdate(id, updatedTodo,{new:true});
      return todo;
    }

    
  }
}

export default resolvers;