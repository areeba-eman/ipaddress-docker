import { Get, Req, Controller } from '@nestjs/common';
import { UAParser } from 'ua-parser-js';

@Controller('info')
export class InfoController {
     
    @Get()
    getInfo(@Req() req){
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const userAgent = req.headers['user-agent']

        const parser =new UAParser(userAgent);
        const result = parser.getResult();
        return {
            ip,
            browser: result.browser.name,
            os: result.os.name,
            device: result.device.type || "desktop",
            userAgent
    }
    }

}
