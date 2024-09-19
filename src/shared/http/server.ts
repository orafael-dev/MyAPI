import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '../typeorm'

dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🏆 Server iniciado na porta ${process.env.PORT} 🏆`)
    console.log(`🏆 http://localhost:${process.env.PORT} 🏆`)
  })
})
