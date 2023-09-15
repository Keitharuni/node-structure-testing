const { createUserController } = require('../controllers/createUserController');
const { express } = require('../index');

const router = express.Router();

router.post('/createUser', createUserController)