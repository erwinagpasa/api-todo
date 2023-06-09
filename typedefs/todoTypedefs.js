
import { gql } from 'apollo-server-express';

const todoTypeDefs = gql`
scalar Date

type Todo {
  id:ID
  role:String
  title:String
  detail:String
  date: Date
}

type Query {
  welcome: String
  getTodos:[Todo]
  getTodo(id:ID):Todo #this is not array just getting individual todo
}
type Mutation {
  addTodo(role:String, title:String, detail:String, date:Date):Todo
  deleteTodo(id:ID):String
  updateTodo(id:ID, role:String, title:String, detail:String, date:Date):Todo
}
`

// module.exports = todoTypeDefs;
export default todoTypeDefs;