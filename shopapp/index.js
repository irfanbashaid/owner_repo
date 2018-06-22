const express = require('express');
const app = express();

//middleware starts (it is used to show the static files like jpg,.css,etc)
app.use(express.static('public'));  //var.function(var.function('folder_name'));

app.set('view engine','ejs'); // view engine =default name ejs = value
//get request from user and give response to them
app.get('/',(req,res)=>{
    res.render('home',{
        title : "Home"
    });
});

app.get('/Shop',(req,res)=>{
    res.render('Shop',{
        title :"Shopping"
    });
});

app.get('/Sale',(req,res)=>{
    res.render('S');
});

app.get('/Features',(req,res)=>{
    res.render('Features');
});

app.get('/Blog',(req,res)=>{
    res.render('Blog');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/Contact',(req,res)=>{
    res.render('Contact',{
        title:"Contact US"
    });
});

app.get('/excetra/one',(req,res)=>{
    // app.get('/one',(req,res)=>{
        res.send('inside extra/one');
        // res.render('home');
    // });
});

app.get('/getjson',(req,res)=>{
    // console.log(res)
    res.json({
        hi:"hello"
    });
});

app.get('/products/:id',(req,res)=>{
    console.log(req.params.id)
    var data = [
        {
            id : 1,
            name : "one"
        },
        {
            id : 2,
            name : "two"
        }
    ]
    var result;
    data.forEach((product) => {
        if(product.id == req.params.id){
            result = product;
            return true;
        }
    })
    console.log(result); 
    // console.log(req.params.id);
    // var result;
    // if(req.params.id==1)
    // {
    //     console.log('inside if');
    //     res.render('home',{
    //             title : "Home"
    //         });
    // }
    // app.get('/',(req,res)=>{
    //     res.render('home',{
    //         title : "Home"
    //     });
    // });
    // res.render('home',{
    //     title : "Home"
    // });
    //res.end();
});


// app.get('/',(req,res)=>{
//     res.send('<h1>this is home page using send method</h1>');
// });

// app.get('/about',(req,res)=>{
//     res.send('<h1>This is about page using send method</h1>');
// });


// app.post()
app.listen(3000);