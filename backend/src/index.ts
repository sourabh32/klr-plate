import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { cors } from 'hono/cors'

const app = new Hono()


type colorType = {
  name:string,
  colorCode:string,
  id:number,
  projectId:number
}

app.use('/*', cors())
app.get("/",async (c)=>{
  return c.text("api running ")
})


app.post('/project', async (c) => {
  try {
    const { name } = await c.req.json()
    const { DATABASE_URL } = env<{ DATABASE_URL: string, JWT_SECRET:string }>(c)
    

   
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL,
        },
      },
    }).$extends(withAccelerate())


    const obj1 = await prisma.project.findUnique({
      where:{
        name
      }
    })

    if(obj1){
      return c.json(obj1)
    }

    const res = await prisma.project.create({
      data: {
        name,
      }
    })

    
     
    return c.json(res)
  } catch (error) {
    console.error("Error creating project:", error)
    return c.json({"error":error})
  }
})


app.get("/project/schema/:id",async (c)=>{
  try {
    const id = c.req.param('id')
  const { DATABASE_URL } = env<{ DATABASE_URL: string,JWT_SECRET :string }>(c)


  
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  const res = await prisma.variable.findMany({where:{
    projectId :parseInt(id)
  }})

  const obj:{[key: string]: string} = {}

  res.forEach((item: colorType) => {
    obj[`${item.name}`] = item.colorCode;
});
  


  return c.json(obj)
  } catch (error) {
    return c.json({"error":error})
  }
})

app.get("/project/name/:id",async (c)=>{
  try {
    const id = c.req.param('id')
  const { DATABASE_URL } = env<{ DATABASE_URL: string,JWT_SECRET :string }>(c)


  
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  const res = await prisma.project.findFirst({where:{
    id :parseInt(id)
  }})

  return c.json(res)
  } catch (error) {
    return c.json({"error":error})
  }
  

})
app.get("/project/:id", async (c)=>{
  try {
    const id = c.req.param('id')
  const { DATABASE_URL } = env<{ DATABASE_URL: string,JWT_SECRET :string }>(c)


  
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  const res = await prisma.variable.findMany({where:{
    projectId :parseInt(id)
  }})

  return c.json(res)
  } catch (error) {
    return c.json({"error":error})
  }
  

})

app.post("/project/:id/add", async (c)=>{
  const id = c.req.param('id')

  const {colorCode,name} = await c.req.json()
  const { DATABASE_URL } = env<{ DATABASE_URL: string,JWT_SECRET :string }>(c)


  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

   await prisma.variable.create({
    data:{
      colorCode,
      name,
      projectId:parseInt(id)
    }
   })

  

  const res = await prisma.variable.findMany({where:{
    projectId :parseInt(id)
  }})

  return c.json(res)

  

})

app.post("/project/:id/update", async (c)=>{
  const {id} = c.req.param()

  const {colorCode,name} = await c.req.json()
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  const updated = await prisma.variable.update({
    where:{
      id:parseInt(id)
    },
    data: {
      colorCode,
      name


    }
   })

   
  const res = await prisma.variable.findMany({where:{
    projectId :updated.projectId
  }})

  return c.json(res)

  

})

app.post("/project/:color/delete", async (c)=>{
  const {color} = c.req.param()

  
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  const deleted =  await prisma.variable.delete({
    where:{
      id:parseInt(color),
    },
   })

   const res = await prisma.variable.findMany({where:{
    projectId :deleted.projectId
  }})

  return c.json(res)

})

export default app