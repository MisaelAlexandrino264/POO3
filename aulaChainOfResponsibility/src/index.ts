import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import * as readline from "readline";

declare var process;
const server = new Server();

function setPrompQuestions(){
    const rl = readline.createInterface({
        input: process.stdin, output: process.stdout
    });

    rl.question("Digite o email: ", email => {
        rl.question("Digite a senha: ", password =>{
            server.logIn(email, password);
            rl.close();
        });
    });
    rl.on("close", () => setPrompQuestions());   
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);

setPrompQuestions();