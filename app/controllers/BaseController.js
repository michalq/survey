
class BaseController
{
    constructor(res, req) {
        this.res = res;
        this.req = req;
    }

    /**
     *
     * @param  {String} msg [description]
     */
    http500(msg) {
        this.res.json({
            success: false,
            code: 500,
            error: {
                message: msg
            }
        });
    }
}

module.exports = BaseController;