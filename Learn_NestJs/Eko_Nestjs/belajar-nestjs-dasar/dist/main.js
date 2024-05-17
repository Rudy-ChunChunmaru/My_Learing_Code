"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const mustache = require("mustache-express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser('MY SECRET KEY'));
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'html');
    app.engine('html', mustache());
    await app.listen(3003);
}
bootstrap();
//# sourceMappingURL=main.js.map