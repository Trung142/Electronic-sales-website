const { handleUserlogin } = require("../riverci/login")

const controllerLoginUser = async (req,res) => {
    try {
        const message = await handleUserlogin(req.body.email, req.body.password);
        return res.status(200).json({
            errCode: 0,
            message: message
        })
    } catch (error) {
        return res.status(404).json({
            errCode: 4,
            error
        })
    }
}
 
module.exports = controllerLoginUser;