const path = require('path');

const viewController = {

    renderIndexView: (res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }
    
};

module.exports = viewController;