import app from '../hono/hono';
import { dbInit } from '../init/init';

app.get('/init/:secret', (c) => {
	console.log('init debug', {
		path: c.req.path,
		hasJwtSecret: !!c.env.jwt_secret,
		jwtSecretLength: c.env.jwt_secret ? String(c.env.jwt_secret).length : 0,
		requestSecretLength: c.req.param('secret') ? String(c.req.param('secret')).length : 0,
		envKeys: Object.keys(c.env || {}).sort()
	});
	return dbInit.init(c);
})
