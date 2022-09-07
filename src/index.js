async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    }

    funcName('localhost:5050/api/weather?cityname=hisar')