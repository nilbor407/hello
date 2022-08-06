var express=require('express'); 
var app=express();

app.get("/",function(req,res)
{
    var arr=['A','B','C'];
    var obj={
                'student_name':'ABCD',
                'student_mobile':'9876543210'
            };
    var arrobj=[
                    {
                        'student_name':'ABCD',
                        'student_mobile':'9876543210'
                    },
                    {
                        'student_name':'PQRS',
                        'student_mobile':'9876543211'
                    }
            ];
    var object={'name':'A2Z INFOTECH','myarr':arr,'myobj':obj,'myarrobj':arrobj};
    res.render("first.ejs",object);
});
app.get("/about",function(req,res)
{
    res.render("about.ejs");
});

app.listen(1000);
// views