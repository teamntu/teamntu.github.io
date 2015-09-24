$(document).ready(function(){
    animateDiv();
});

function makeNewPosition( i ){
    var h = ( $( window ).height() - 424 );
    var w = ( $( window ).width() -770 ) / 7;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor( (Math.random() + i ) * w + i * 110 ) ;

/**
    console.log( $(window).width() );
**/
    return [nh,nw];    
}
    
    
function animateDiv(){
    var width_left = ( $( window ).width() - 770 );
    var id = ['#home', '#project', '#result', '#material', '#conclusion', '#team', '#acknowledgement'];
    var newp = new Array(7);
    var oldp = new Array(7);
    for( var i = 0; i < 7; i++ ) {
        newp[ i ] = makeNewPosition( i );
    }
    for( var i = 0; i < 7; i++ ) {
        oldp[ i ] = $( id[i] ).offset();
    }
    for( var i = 0; i < 7; i++ ) {
        var speed = calcSpeed([oldp[ i ].top, oldp[ i ].left], newp[ i ]);
        $( id[i] ).animate({ top: newp[i][0], left: newp[i][1]}, speed, function(){
            animateDiv();
        });
    }
}

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}

function imageCount(id, src) {
    return function() {
        $( id + ' a img').attr('src', src);
    };
}

$(function() {
    var id = ['#home','#project', '#result', '#material', '#conclusion', '#team', '#acknowledgement'];
    var aftImg = ['/images/home_2.png','/images/project_2.png','/images/result_2.png', '/images/material_2.png', '/images/conclusion_2.png', '/images/team_2.png', '/images/acknowledgement_2.png'];
    var preImg = ['/images/home.png','/images/project.png','/images/result.png', '/images/material.png', '/images/conclusion.png', '/images/team.png', '/images/acknowledgement.png'];
    for(var i = 0; i < 7; i++ ) {
        $( id[ i ] ).hover(imageCount(id[i], aftImg[i]), imageCount(id[i], preImg[i]));
    }
});

