import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";


const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
app.use(express.json(),express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/Q3.html");
});

app.post('/submit',(req,res)=>{
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const phoneNumber = req.body.number;
    if(phoneRegex.test(phoneNumber)){
        res.send(`Thank you,   ${req.body.name} .Your phone number has been successfully validated!`);
    }
    else{
        res.send("The phone number is invalid. It must be in the format: xxx-xxx-xxxx.");
    }
});
app.listen(port, () => console.log(`Server listening on port ${port}`));