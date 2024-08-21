import express, {json} from "express";
import indexRouter from "./routers";

const app = express()

//midlewares
app.use(json()) //este midlewares nos permite recoger los bodys de las peticiones que vienen en formato json y transformarlos en objetos js, mientras tengan un encabezado contentype-application json.Le estoy indicando al servidor que el dato q le envio van en formato json

//Routes
app.use("/status",(req, res)=>{
    res.status(200).json({
        status: "OK",
        environment: process.env.ENVIROMENT //en otros proyectos va haber una api key para acceder a otras apis, es una info sensible por esa razon hay que ignorarla en el gitignore
    })
})

app.use("/", indexRouter)

//app.use("/", indexRouter)
//app.use(errorhandler) 

export default app;

//cliente-> rutas-> controlador <-> servicios <-> modelos <->base de datos