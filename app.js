const { express } = require('./index')

const { createUserRoute } = require('./routes/createUserRoute');

const app = express();


app.use(express.json());

app.post('/users', createUserRoute);

app.listen(8080);