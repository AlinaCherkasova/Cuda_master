var clickElem = document.getElementById('main');
clickElem.addEventListener('click',function(e){
    document.getElementById('click').style.display = 'inline';
    clickElem.style.display = 'none';
})