function setunderline(elementid) {
    document.getElementById(elementid).style.textDecoration='underline';
    if (elementid == 'date'){
        document.getElementById('popularity').style.textDecoration='none';
        }
    if (elementid == 'popularity'){
        document.getElementById('date').style.textDecoration='none';
        }
}

function arrowhover(elementid, elementclass, action) {
    if (action == 'over') {
        if (elementclass == 'voteup') {
            document.getElementById(elementid).src='img/clickeduparrow.png';
        }
        if (elementclass == 'votedown') {
            document.getElementById(elementid).src='img/clickeddownarrow.png';
        }
    }
    else {
        if (elementclass == 'voteup') {
            document.getElementById(elementid).src='img/uparrow.png';
        }
        if (elementclass == 'votedown') {
            document.getElementById(elementid).src='img/downarrow.png';
        }
    }
}