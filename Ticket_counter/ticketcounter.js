let count=0
let incrVal=document.getElementById("incr-val")
let countVal=document.getElementById("count-str")
function increment()
{
   count+=1
   incrVal.textContent=count
}
function save()
{   let countmsg=" "+count+" - "
    countVal.textContent+=countmsg
    count=0
    incrVal.innerText=0
}