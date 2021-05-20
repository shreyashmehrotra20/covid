const searchitem = ()=> {
    let fil = document.getElementById('searchbar').value.toUpperCase();
    let ul =document.getElementById('list');
    let a = ul.getElementsByTagName('li');
for(var i=0;i<a.length;i++){
    let b = a[i].textContent;
    if(b.toUpperCase.indexOf(fil)>-1){
        a[i].style.display= '';
    }else {
        a[i].style.display='none';
    }
}
}
