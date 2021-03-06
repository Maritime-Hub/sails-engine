/**
 * Created by Emmanuel Mahuni. MIT 2018
 */
module.exports = {
    /**
     * Can be overide RuntimeController.js file on your sails main app
     * @param req
     * @param res
     */
    runtimeCtrlTest: function (req, res) {
        sails.log.verbose('test method on RuntimeController');
        res.send(true);
    },

    runtimeCtrlPolicyAllow: function (req, res) {
        sails.log.verbose('test runtime allow policy');
        res.send(true);
    },
    runtimeCtrlPolicyDeny: function (req, res) {
        sails.log.verbose('test runtime deny policy');
        res.send(true);
    },
};
