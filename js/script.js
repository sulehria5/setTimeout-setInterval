var myVar;
document.getElementById('btn').addEventListener('click',function(){
    myVar = setInterval(counter,100)
})
    var count =100;
    var div = document.getElementsByClassName('zeit')
function counter(){
    if(count !=-1){
    div[0].innerHTML = `${count--}%`
    }else{
        stopfunc()
    }
    function stopfunc(){
        clearInterval(myVar)
    }
}