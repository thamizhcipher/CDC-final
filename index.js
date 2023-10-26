function clue1()
{
    inp1 = document.getElementById('inp1').value
    if(inp1=="K#j9pX!qZu")
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
    if(inp1=="L$e2hR&d7A")
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
    if(inp1=="G@w5fT*vPQ")
    {
        document.getElementById('clue-title').innerHTML="The Final clue is"
        document.getElementById('clue3').innerHTML="The next clue that the detective found was a hidden recording of a heated argument with David. While searching Linda's residence, Detective Sarah O'Connor stumbled upon an audio recording device. When she listened to the recordings, she heard a heated argument between Linda and David, during which David could be heard threatening Linda if she were to reveal certain information. This recording raises suspicions about Linda's motives and the possibility of self-defense."
        document.querySelector('.hidden').classList.add('show')
        document.querySelector('#form').classList.add('show')
    }
    else
    {
        window.alert('try with correct code!')
    }
}