function usersRead() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            var idNumber = 0;
            var usernameNumber = 0;
            var nameNumber = 0;
            var emailNumber = 0;
            var phoneNumber = 0;
            var websiteNumber = 0;
            var companyNumber = 0;
            var addressNumber = 0;
            var datasLoadtoTable = 0;

            var idArray =[];
            var usernameArray =[];
            var nameArray =[];
            var emailArray =[];
            var phoneArray =[];
            var websiteArray =[];
            var companyArray =[];
            var addressArray =[];

            var table = document.getElementById("datas");


            const id = json.map(x => x.id);
            const username = json.map(x => x.username);
            const name = json.map(x => x.name);
            const email = json.map(x => x.email);
            const phone = json.map(x => x.phone);
            const website = json.map(x => x.website);
            const company = json.map(x => x.company.name);
            const address = json.map(x => x.address.street);
            const address2 = json.map(x => x.address.suite);
            const address3 = json.map(x => x.address.city);
            const address4 = json.map(x => x.address.zipcode);



            while (idNumber<id.length){
                idArray.push(id[idNumber]);
                idNumber = idNumber+1;
            }
            while (usernameNumber<id.length){
                usernameArray.push(username[usernameNumber]);
                usernameNumber = usernameNumber+1;
            }
            while (nameNumber<id.length){
                nameArray.push(name[nameNumber]);
                nameNumber = nameNumber+1;
            }
            while (emailNumber<id.length){
                emailArray.push(email[emailNumber]);
                emailNumber = emailNumber+1;
            }
            while (phoneNumber<id.length){
                phoneArray.push(phone[phoneNumber]);
                phoneNumber = phoneNumber+1;
            }
            while (websiteNumber<id.length){
                websiteArray.push(website[websiteNumber]);
                websiteNumber = websiteNumber+1;
            }
            while (companyNumber<id.length){
                companyArray.push(company[companyNumber]);
                companyNumber = companyNumber+1;
            }
            while (addressNumber<id.length){
                addressArray.push(address[addressNumber] + " " + address2[addressNumber] + " " + address3[addressNumber] + " " + address4[addressNumber]);
                addressNumber = addressNumber+1;
            }
            while (datasLoadtoTable <id.length){
                function allTableCheck(){
                    if (datasLoadtoTable < id.length){
                        column1.innerHTML = "<input type='checkbox' name='usersCheckbox'>";
                        column2.innerHTML = idArray[datasLoadtoTable];
                        column3.innerHTML = usernameArray[datasLoadtoTable];
                        column4.innerHTML = nameArray[datasLoadtoTable];
                        column5.innerHTML = emailArray[datasLoadtoTable];
                        column6.innerHTML = phoneArray[datasLoadtoTable];
                        column7.innerHTML = websiteArray[datasLoadtoTable];
                        column8.innerHTML = companyArray[datasLoadtoTable];
                        column9.innerHTML = addressArray[datasLoadtoTable];
                    }
                }
                var row = table.insertRow(datasLoadtoTable + 1);
                var column1 = row.insertCell(0);
                var column2 = row.insertCell(1);
                var column3 = row.insertCell(2);
                var column4 = row.insertCell(3);
                var column5 = row.insertCell(4);
                var column6 = row.insertCell(5);
                var column7 = row.insertCell(6);
                var column8 = row.insertCell(7);
                var column9 = row.insertCell(8);

                allTableCheck()
                datasLoadtoTable = datasLoadtoTable + 1;
            }
        });
}
usersRead();

function selectAllCheckboxes(source){
    checkboxes = document.getElementsByName('usersCheckbox');
    for(var i in checkboxes){
        checkboxes[i].checked = source.checked;
    }
}

function countPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {

            var countDict = 0;
            var uniqueUserId = [];

            const postId = json.map(x => x.id);
            const userId = json.map(x => x.userId);

            for(let i = 0;i < userId.length; i++){
                if(uniqueUserId.indexOf(userId[i]) == -1){
                    uniqueUserId.push(userId[i])
                }
            }

            while (countDict < uniqueUserId.length){

            }
            document.getElementById("mrc3").innerHTML = uniqueUserId;
            document.getElementById("mrc").innerHTML = postId;
            document.getElementById("mrc2").innerHTML = userId;
            document.getElementById("mrc4").innerHTML = usersPostDict;


        });
}

countPosts();






google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     15],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}


