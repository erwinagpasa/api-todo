
import { gql } from 'apollo-server-express';

const staffTypeDefs = gql`
scalar Date

type Staff {
  id:ID
  role:String
  stfn:String
  name:String
  date: Date
}

type Query {
  getStaffs:[Staff]
  getStaff(id:ID):Staff
}

type Mutation {
  addStaff(role:String, stfn:String, name:String, date:Date):Staff
  deleteStaff(id:ID):String
  updateStaff(id:ID, role:String, stfn:String, name:String, date:Date):Staff
}
`

export default staffTypeDefs;