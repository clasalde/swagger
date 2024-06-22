const swaggerJSDoc= require("swagger-jsdoc");
const swaggerUiExpress= require( "swagger-ui-express"); 

//3) Creamos un objeto de configuración: swaggerOptions

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la App Woody",
            description: "Woody´s world products"
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions);

module.exports={swaggerOptions, specs}