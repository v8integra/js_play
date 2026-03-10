let myLeads = []
const input = document.getElementById("input")
const inputBtn = document.getElementById("input-btn")
const leadsUl = document.getElementById("leads-ul")

inputBtn.addEventListener("click", function() {
    myLeads.push(input.value)
    input.value = '';
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    leadsUl.innerHTML = listItems  
}
