import http from 'http'
import path from 'path'
import {fileURLToPath} from 'url';
import {readdir, readFile} from "fs/promises"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const favIcoPath=path.join(__dirname,"../",'public','poi.jpg')
export function createServer() {
    http.createServer((req, resp) => {
        if(req.url==='/favicon.ico'){

            readFile(favIcoPath).then(file=>{
                resp.write(file)
                resp.end()
            })
        }else{
            console.log(req.url)
            console.log(req.method)
            console.log(req.toLocaleString())
            resp.status=200
            resp.end()
        }
    }).listen(7600, () => console.log("listeneing on port 7600"))
}
