function clue1()
{
    inp1 = document.getElementById('inp1').value
    if(inp1=="clue1")
    {
        var tab1=window.open("tab1.html","_blank")
        tab1.focus()
    }
    else
    {
        window.alert('try with correct code!')
    }
}
function clue2()
{
    inp1 = document.getElementById('inp2').value
    if(inp1=="clue2")
    {
        var tab1=window.open("tab2.html","_blank")
        tab1.focus()
    }
    else
    {
        window.alert('try with correct code!')
    }
}
function clue3()
{
    inp1 = document.getElementById('inp3').value
    if(inp1=="clue3")
    {
        document.getElementById('clue-title').innerHTML="The Final clue is"
        document.getElementById('clue3').innerHTML='"Raj was at the park at 12 PM"'
        document.querySelector('.hidden').classList.add('show')
        document.querySelector('#form').classList.add('show')
    }
    else
    {
        window.alert('try with correct code!')
    }
}