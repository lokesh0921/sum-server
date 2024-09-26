const express = require("express");
const app = express();

app.get("/sum", (req,res)=>{
     const a = req.query.a;
     const b = req.query.b;
     const sum = a + b;
     res.send(sum.toString());
});

app.get("/intrest", (req,res)=>{
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;
    const interest= (principal * rate * time)/100;
    const total = principal + interest;
    res.send({
        total: total,
        interest: interest
    }); 

});

app.listen(3000);

