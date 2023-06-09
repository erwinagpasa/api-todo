
import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date

type Todo {
  id:ID
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
  addTodo(title:String, detail:String, date:Date):Todo
  deleteTodo(id:ID):String
  updateTodo(title:String, detail:String, date:Date):Todo
}
`

export default typeDefs;