$(document).ready(function() {

    $('#navigation').css("min-height", $('#content').height() + 19);

    $('#content').click(function(event) {
        if($(document).width() < 961 && $('#navigation').is(":visible")) {
            $('#navigation').hide();
            $('#menu-toggle').toggleClass("active");
        }
    });

    $("#menu-toggle").click(function() {
        $(this).toggleClass("active");
        $("#navigation").toggle(300);
    });

    $(".button-questionaire").click(function() {
        $(".questionaire").find(".step1").hide();
        $(".questionaire").find(".step2").show();
    });

    $(".nav-header").click(function() {
      debugger;
      $(this).toggleClass("active");
      $("#drop-menu-" + $(this).data('section-id')).toggle();
    });

    // $(".nav-header.events").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.events").toggle();
    // });

    // $(".nav-header.analyst").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.analyst").toggle();
    // });

    // $(".nav-header.developer").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.developer").toggle();
    // });

    // $(".nav-header.integrations").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.integrations").toggle();
    // });

    // $(".nav-header.digitaldata").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.digitaldata").toggle();
    // });

    // $(".nav-header.ecommerce").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.ecommerce").toggle();
    // });

    // $(".nav-header.datasources").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.datasources").toggle();
    // });

    // $(".nav-header.datadestinations").click(function() {
    //     $(this).toggleClass("active");
    //     $(".drop-menu.datadestinations").toggle();
    // });

    $('#myBtn').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > 120) {
            //$('#myBtn').css('bottom', '30px')
            $('#myBtn').stop();
            $("#myBtn").animate({bottom: "30px"},"fast");
        } else {
            //$('#myBtn').css('bottom', '-50px')
            $('#myBtn').stop();
            $("#myBtn").animate({bottom: "-100px"},"fast");
        }
    });

    $('#clearIcon').click(function() {
      $('#searchForm').removeClass('extended');
      $('#searchField').val('');
      $('#searchField').focus();
      $('.searchHints').hide();
    });

    loadSearch();

})

function loadSearch(){
  idx = lunr(function(){
    this.field('url');
    this.field('title', { boost: 10 });
    this.field('summary');
  })

  $.getJSON('/content.json', function(data){
    window.searchData = data;
    $.each(data, function(index, entry){
      idx.add($.extend({"id": index}, entry))
    })
  })

  $('#search').on('click', function(){
    $('.searchForm').toggleClass('show');
    $('.searchHints').hide();
  });

  $('#search-toggle').on('click', function(){
    $('.searchForm').toggleClass('show');
    $('#searchField').focus();
  });

  $('#searchForm input').blur(function(){
    if ($('.searchHints').is(":hover")) {
    } else {
      $('.searchHints').hide();
      $('#searchForm').removeClass('extended');
    }
  });

  $('#leftIcon').on('click', function(){
    $('.searchForm').toggleClass('show');
  });

  function preparePreview(entry, searchInput) {
    var summary = entry.summary || ''
    var previewIndex = summary.indexOf(searchInput);
    var previewStart = previewIndex > 15 ? 15 : previewIndex;
    var preview = summary.replace(/-/g, ' ').substr(previewIndex - previewStart, 40);
    var previewPrefix = previewIndex > previewStart ? '...' : '';
    var previewSuffix = summary.length > previewIndex + searchInput.length ? '...' : '';
    // show preview only if search query is included (search engine has an algorythm which might suggest pages that don't include query)
    if (preview.indexOf(searchInput.replace(/-/g, ' ')) > -1) {
      return previewPrefix + preview + previewSuffix;
    }
  }

  $('#searchForm').on('keyup', function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    var searchInput = $('#searchField').val().replace(/\s/g, '-').toLowerCase();
    results = idx.search(searchInput);
    $('.searchHints').html('');
    $('.searchHints').append('<ul class="searchResults"></ul>');
    if (results.length > 0) {
      $.each(results, function(index, result){
        var entry = window.searchData[result.ref];
        if (searchInput.length > 2) {
          var preview = preparePreview(entry, searchInput);
        }
        $('.searchHints').show();
        $('#searchForm').addClass('extended');
        $('.searchResults').append('<li><a href="' + entry.url + '">' + entry.title + '</li>')
        if (preview) {
          $('.searchResults').append('<li class="search-preview"><a href="' + entry.url + '">' + preview + '</li>')
        }
      })
    } else {
      $('.searchHints').hide();
      $('#searchForm').removeClass('extended');
    }
    if (code == 13) {
      $('#searchForm').removeClass('extended');
      $('.searchHints').hide();
    }

  });

  $('#searchForm').on('submit', function(e){
    e.preventDefault()
    results = idx.search($('#searchField').val())
    $('#content').html('<h1 class="searchHeader">Search results</h1>')
    $('#content').append(
        '<div class="bodySearchResults">\
            <div class="resultCat forAnalystResults">Analyst<ul></ul></div>\
            <div class="resultCat forDeveloperResults">Developer<ul></ul></div>\
            <div class="resultCat ecommerceResults">Ecommerce<ul></ul></div>\
            <div class="resultCat digitalDataResults">Variable list<ul></ul></div>\
            <div class="resultCat eventResults">Events list<ul></ul></div>\
            <div class="resultCat integrationResults">Integration list<ul></ul></div>\
            <div class="resultCat dataSourcesResults">Data Sources<ul></ul></div>\
        </div>'
    )

    if(!results.length) {
      $('#content').append('<div class="noSearchResults">No results found.</div>');
    }

    $.each(results, function(index, result){
      entry = window.searchData[result.ref]
      var resultType;
      if (entry.url.indexOf('/events/') > -1) {
          resultType = 'eventResults';
      } else if (entry.url.indexOf('/digitaldata/') > -1) {
          resultType = 'digitalDataResults';
      } else if (entry.url.indexOf('/ecommerce/') > -1) {
          resultType = 'ecommerceResults';
      } else if (entry.url.indexOf('/for-analyst/') > -1) {
          resultType = 'forAnalystResults';
      } else if (entry.url.indexOf('/for-developer/') > -1) {
          resultType = 'forDeveloperResults';
      } else if (entry.url.indexOf('/integrations/') > -1) {
          resultType = 'integrationResults';
      } else if (entry.url.indexOf('/datasources/') > -1) {
          resultType = 'dataSourcesResults';
      }
      $('.' + resultType).show();
      $('.searchResults, .bodySearchResults .' + resultType + ' ul').append('<li><a href="' + entry.url + '">' + entry.title + '</li>')
    })
  })
}
