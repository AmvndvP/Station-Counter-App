
count = 0
function increment () {
   
    count = count + 1
    counter.innerText = count

}

increment()


function save(){
    var previousEntry = counter.innerText
    prevEntries.textContent = previousEntry 
    save()
}
