        let button =  document.getElementById('find')
        button.addEventListener('click',()=>{
            let city = document.getElementById('city').value;
            let request = new XMLHttpRequest();
            request.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=faa70cbaae7edf4ddc280057abe67d2c');
            request.onload = function(){
                let response = request.response;
                let parsedData = JSON.parse(response);
                let condition = parsedData.weather[0].main;
                let description = parsedData.weather[0].description;
                let icon = parsedData.weather[0].icon;
                console.log(parsedData);
                document.write(`
                               <h3 style="margin-left:10%;color:#fff;background-color:green;font-family:sans-serif;width:300px;height:50vh;border-top-left-radius:10px;border-bottom-left-right:20px;">Weather at ${city} city: ${condition}.
                                <br>
                                Description: ${description}
                                </h3>
                 `);
            }
            request.send();
       })
       
