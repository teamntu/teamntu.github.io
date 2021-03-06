$(document).ready(function(){
    animateDiv();
});

function makeNewPosition( i ){
    var h = ( $( window ).height() - 450 );
    var w = ( $( window ).width() - 750 ) / 6;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor( (Math.random() + i ) * w + i * 110 ) ;

/**
    console.log( $(window).width() );
**/
    return [nh,nw];    
}
    
    
function animateDiv(){
    var width_left = ( $( window ).width() - 660 );
    var id = ['#home', '#project', '#result', '#material', '#conclusion', '#team'];
    var newp = new Array(6);
    var oldp = new Array(6);
    for( var i = 0; i < 6; i++ ) {
        newp[ i ] = makeNewPosition( i );
    }
    for( var i = 0; i < 6; i++ ) {
        oldp[ i ] = $( id[i] ).offset();
    }
    for( var i = 0; i < 6; i++ ) {
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

function imageCount(i, id, affImg) {
    return function() {
        $( id[ i ] + ' a img').attr('src', affImg[ i ]);
        return false;
    };
}

function imageCount(i, id, preImg) {
    return function() {
        $( id[ i ] + ' a img').attr('src', preImg[ i ]);
        return false;
    };
}
    
$(function() {
    var id = ['#home','#project', '#result', '#material', '#conclusion', '#team'];
    var affImg = ['/images/home_2.png','/images/project_2.png','/images/result_2.png', '/images/material_2.png', '/images/conclusion_2.png', '/images/team_2.png'];
    for(var i = 0; i < 6; i++ ) {
        $( id[ i ] ).hover(imageCount(i, id, affImg));
    }
});

    
$(function() {
    var id = ['#home','#project', '#result', '#material', '#conclusion', '#team'];
    var preImg = ['/images/home.png','/images/project.png','/images/result.png', '/images/material.png', '/images/conclusion.png', '/images/team.png'];
    for(var i = 0; i < 6; i++ ) {
        $( id[ i ] ).mouseleave(imageCount(i, id, preImg));
    }
});
