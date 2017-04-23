class IndexController
{
    constructor(res, req) {
        this.res = res;
        this.req = req;
    }

    indexAction() {
        res.render('index', { title: 'Express' });
    }
}