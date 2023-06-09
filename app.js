import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import allTypeDefs from './typedefs/index.js'
import allResolver from './resolvers/index.js'
import mongoose  from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';



async function initServer(){
  const app = express();

  app.use(cors());
  dotenv.config();

  const apolloServer = new ApolloServer({

    typeDefs:allTypeDefs,
    resolvers:allResolver,
  })

  await apolloServer.start();
  apolloServer.applyMiddleware({app})
  app.use((req, res) => {
    res.send("Hello World")
  })

  const PORT = process.env.PORT || 4000;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected on port ${PORT}`)
  } catch (error) {
    console.log(error)
  }

  app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}`))

}

initServer();