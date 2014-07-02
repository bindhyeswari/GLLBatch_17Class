/**
 * Created by mishrab on 7/2/14.
 */
document.addEventListener('DOMContentLoaded', function(){


    var companies = [];
    var companies2 = [];


    var divs = document.getElementsByClassName('div-col columns column-width');
    for(var i = 0; i < divs.length; i++ ){
        /*console.log(divs[i]);*/
        var div = divs[i];
        for( var j = 0; j < div.children.length; j++){
            /*console.log(div.children[j]);*/
            var ul = div.children[j];
            for( var k = 0; k < ul.children.length; k++){
                //console.log(ul.children[k]);
                companies.push(ul.children[k].innerHTML);
                companies2.push(ul.children[k].firstElementChild.innerHTML)
            }
        }
    }
    console.log(companies.length);
    console.log(companies2.length);
    console.log(companies2);

    document.body.innerHTML = '["' + companies2.join('", "') + '"]';

});