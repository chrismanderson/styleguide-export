const path = require('path');

module.exports = function exportEyeglass(eyeglass) {
    eyeglass.assets.addSource(path.resolve(__dirname, 'src', 'assets'), {
        pattern: 'images/**/*',
    });
    return eyeglass;
};
