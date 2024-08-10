const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swagger = require('./swagger');

dotenv.config();

// Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Booking Rooms API',
        version: '1.0.0',
        description: 'A simple Express Booking Rooms API',
        },
        servers: [
        {
            url: 'http://localhost:3000',
        },
        ],
    },
    apis: ['./routes/*.js'],
}
const specs = swaggerJsDoc(options);


// Routes
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

module.exports = app;