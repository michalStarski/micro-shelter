const AuthController = router => {
    router.get('/', (req, res) => {
        res.send('Hello dshjdksahd!')
    });

    return router;
}

module.exports = AuthController;
