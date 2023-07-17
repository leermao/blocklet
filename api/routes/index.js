const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=1000');
  res.set('x-name', 'li');
  res.json(req.user || { name: 'li' });
});

module.exports = router;
