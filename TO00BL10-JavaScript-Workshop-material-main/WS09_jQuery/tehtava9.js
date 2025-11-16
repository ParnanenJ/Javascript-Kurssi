// Tehtävä 1

// JQuery skripti linkki liitetty html tiedostoon


// Tehtävä 2

// 1
$('h3');
// 2
$('#contant').text('Tervetuloa!');
// 3
$('img').attr('src', 'https://joku.com/uusi.jpg');
// 4
$('.sideBarListBox').show();
$('.sideBarListBox').hide();
// 5
$('li:contains("Lorem")').css('text-decoration', 'underline');
// 6
$('.sideBarListBox a').css({'color': 'blue'});


// Tehtävä 3

$('#button').on('click', function(){
    $('h1').fadeIn(500);
});

$('#button2').on('click', function(){
    $('h1').fadeOut(500);
});

$('#button3').on('click', function(){
    $('#mainContent').slideUp();
})

$('#button4').on('click', function(){
    $('#mainContent').slideDown();
})

$('#button5').on('click', function(){
    $('#mainContent')
        .animate({left: '200px'}, 1000)
        .animate({top: '100px'}, 1000)
        .animate({left: '0'}, 1000)
        .animate({top: '0'}, 1000)
        .animate({opacity: 0.5}, 1000);
})


// Tehtävä 4

$('#mySelect').on('change', function() {
    const selected = $(this).val();

    // Hae RSS XML
    $.get('https://meijastiina.github.io/news_rss_topstories.xml', function(data) {
        $('#ajax').empty();

        const items = $(data).find('item');

        if(selected === 'first') {
            const title = $(items[0]).find('title').text();
            $('#ajax').append(title);
        }
        if(selected === 'second') {
            const title = $(items[1]).find('title').text();
            $('#ajax').append(title);
        }
        if(selected === 'third') {
            const title = $(items[2]).find('title').text();
            $('#ajax').append(title);
        }
    });
});