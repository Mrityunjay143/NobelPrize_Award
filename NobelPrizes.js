function ListofAward (array) { 

    const Award=array;
    let myMapyear=new Map();
    let myMapCategory=new Map();
    for (var x in Award)
    {
        if(!myMapyear.has("year"))
        {
            myMapyear.set(x["year"],x);
        }
        else{
            let old = myMap.get("year");
            myMapyear.set("year",(old + ", " +  x));
        }
        if(!myMapCategory.has("category"))
        {
            myMapCategory.set(x["category"],x)
        }
        else{
            let old1= myMap.get("category");
           myMapCategory.set("category",(old1 + ", " +  x));
        }
      
    }
    console.log("result"+Award);
   // return null;
}

function LoadData()
{
    const jsonData= require('./data.json'); 
    console.log(jsonData);
    ListofAward(jsonData)
}
LoadData();



