const express = require('express');
const viewController = require('../controller/viewController');
const router = express.Router();

router.get('/localIP', (req, res) => {
    const interfaces = os.networkInterfaces();
    let localIP = '';
  
    Object.entries(interfaces).forEach(([ifaceName, iface]) => {
      iface.forEach(alias => {
        if (alias.family === 'IPv4' && !alias.internal) {
          localIP = { ip: alias.address };
          console.log('Local IP: ', localIP);
        }
      })
    });
  
    res.json(localIP);
  });


router.get('/', (req,res)=> viewController.renderIndexView(res)); // Renderiza la vista principal


module.exports = router;
