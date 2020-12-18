document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    }, {
        preventScrolling: 'true'
    }, {
        draggable: 'true'
    });
    //option was included in the init(elems,options) not sure what it was used for, this is a note incase errors spring up in the future
});