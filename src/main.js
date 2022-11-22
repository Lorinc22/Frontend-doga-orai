document.addEventListener('DOMContentLoaded', () => {
    //1.Feladat
    document.getElementById('osszesBtn').addEventListener('click', () => {
       let response = await fetch('/quotes.json');
       let data = await response.json();
       /*data.quotes.sort((a,b)=>{
            if(a < b ){
                return-1;
            }else if(a.author > b.author){
                return 1;
            } else {
                return 0;
            }
       });*/
       data.quotes.sort((a,b) => a.author.localeCompare(b.author));

       let ul = document.getElementById('osszesIdezet');
       ul.textContent = '';
        for( let q of data.quotes){
            let li  = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = '<q>' + q.quote + '</q> -' + q.author;
        }
    });

    //2.Feladat
    document.getElementById('theBtn').addEventListener('click', () => {
        let response = await fetch('/quotes.json');
        let data = await response.json();
        let idezetek = data.quotes.map(q => q.quote
        .replaceAll('the', '<b>the<b>')
        .replaceAll('The', '<b>The<b>'));

        let ol = document.getElementById('theIdezet');
        ol.textContent = '';
        for (q of idezetek){
            let li = document.createElement('li');
            ol.appendChild(li);
            li.innerHTML=q;

        }
    });

    //3.Feladat
    document.getElementById('hosszBtn').addEventListener('click', () => {
        let response = await fetch('/quotes.json');
        let data = await response.json();

       let hosszok =  data.quotes.map(q => q.quotes.length).join(', ');
       document.getElementById('hossz').textContent = hosszok;

});
    //4.Feladat
    document.getElementById('dbBtn').addEventListener('click', () => {
        let response = await fetch('/quotes.json');
        let data = await response.json();

        let szerzo = document.getElementById('szerzo').value;

        let idezetek = data.quotes.filter(q => q.author === szerzo);
        document.getElementById('db').value =idezetek.length;
        console.log(idezetek);

});
