/* http://jsfiddle.net/graydixon/jkxguryq/ */
(function($) {

    $.trimLeft = function(element, options) {

        var trim = this;

        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        var initialText = element.innerHTML;

        trim.init = function() {
            overrideNodeMethod("html", function(){ return initialText; });
            trimContents(element, element);
            return trim;
        };

        trim.reset = function(){
            element.innerHTML = initialText;
            return trim;
        };

        //Overide .html() to return initialText.
        var overrideNodeMethod = function(methodName, action) {
            var originalVal = $.fn[methodName];
            var thisNode = $element;
            $.fn[methodName] = function() {
                if (this[0]==thisNode[0]) {
                    return action.apply(this, arguments);
                } else {
                    return originalVal.apply(this, arguments);
                }
            };
        };

        var trimContents = function(row, node){
            while (row.scrollWidth > row.offsetWidth) {
                var childNode = node.firstChild;
                if (!childNode)
                    return true;
                if (childNode.nodeType == document.TEXT_NODE){
                    trimText(row, node, childNode);
                }
                else {
                    var empty = trimContents(row, childNode);
                    if (empty){
                        node.removeChild(childNode);
                    }
                }
            };
        };

        var trimText = function(row, node, textNode){
            var value = '\u2026' + textNode.nodeValue;
            do {
                value = '\u2026' + value.substr(4);
                textNode.nodeValue = value;
                if (value == '\u2026'){
                    node.removeChild(textNode);
                    return;
                }
            }
            while (row.scrollWidth > row.offsetWidth);
        };

        trim.init();

    };

    $.fn.trimLeft = (function(options){
      var othat = this;

      var single = function(that){
          if (undefined == $(that).data('trim')) {
              var trim = new $.trimLeft(that, options);
              $(that).data('trim', trim);
              $(window).resize(function(){
                  $(that).each(function(){
                        trim.reset().init();
                  });
              });
           }
       };

       var multiple = function(){
            $(othat).each(function() {
                single(this);
            });
        };


        if($(othat).length>1)
            multiple(othat);
        else
            single(othat);

        //-----------
        return this;
    });

})(jQuery);
/* --------------------------------------- */

/* --------------------------------------- */
/* https://gist.github.com/shahabkhalvati/7228249  */
$.fn.scrollTo = function( target, options, callback ){
  if ( typeof options == 'function' && arguments.length == 2 ) {
    callback = options;
    options  = target;
  }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each( function() {
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}
/* --------------------------------------- */

/* latest and random articles at index page */
$('#switch-latest-articles').on( 'click', function() {
  $('#latest-articles').show();
  $('#random-articles').hide();
  $('#switch-latest-articles').css({'cursor':'default','font-weight':'bold'}).removeClass('btn-link');
  $('#switch-random-articles').css({'cursor':'pointer','font-weight':'normal'}).addClass('btn-link');
});
$('#switch-random-articles').on( 'click', function() {
  $('#latest-articles').hide();
  $('#random-articles').show();
  $('#switch-latest-articles').css({'cursor':'pointer','font-weight':'normal'}).addClass('btn-link');
  $('#switch-random-articles').css({'cursor':'default','font-weight':'bold'}).removeClass('btn-link');
});
/* --------------------------------------- */

/* --------------------------------------- */
/* tabs in dwdswb                          */
var dwdswbtabs = $('#dwdswb-tabs')[0];
var showTabFromHash = function() {
  var hash = window.location.hash;
  var selector = hash ? 'a[href$="' + hash.replace(/^#(?:d-)?(\d).*/,'#$1') + '"]' : 'li.active > a';
  $(selector, dwdswbtabs).tab('show');

  var wanted_article_no = hash ? hash.replace(/.*?(\d).*/, '$1') : 1;
  $('body').scrollspy({ target: '#spy-' + wanted_article_no });
}

// Set the correct tab when the page loads
showTabFromHash( dwdswbtabs );

// Set the correct tab when a user uses their back/forward button
window.addEventListener('hashchange', showTabFromHash, false);

$('#dwdswb-tabs a').click( function (e) {
  e.preventDefault();
  $(this).tab('show');
  history.pushState(null, null, this.href);

  // this is broken in Bootstrap 3.3.2
  $('body').scrollspy({ target: '#spy-' + $(this).attr('aria-controls') });
  $('body').scrollspy('refresh');
});
/* --------------------------------------- */

/* --------------------------------------- */
/* expand relations in dwdswb              */
function showRel (el) {
  var block_id = $(el).data('id');
  $(el).toggle();
  $(el + '-button-show').toggle();
  $(el + '-button-hide').toggle();
  $('#relation-sep-' + block_id).toggle();
}

/* expand examples in dwdswb               */
function showExamples (el) {
  $(el).toggle();
  $(el + '-button-show').toggle();
  $(el + '-button-hide').toggle();
}

/* expand belege in dwdswb                 */
function showBelege (el) {
  $(el).toggle();
  $(el + '-button-show').toggle();
  $(el + '-button-hide').toggle();
}

/* expand kollokationen in dwdswb          */
function showKollokationen (el) {
  $(el).toggle();
  $(el + '-button-show').toggle();
  $(el + '-button-hide').toggle();
}

/* expand kollokationen in dwdswb          */
function showKollokationenBelege (el) {
  $(el).toggle();
  $(el + '-button-show').toggle();
  $(el + '-button-hide').toggle();
}
/* --------------------------------------- */

/* --------------------------------------- */
/* dwdswb navbar: hide if there is only one entry */
if ( $('.dwdswb-navbar a').length == 1 ) {
  $('.dwdswb-navbar').hide();
}
/* --------------------------------------- */

/* --------------------------------------- */
/* word frequency slider                   */
$('.dwds-frequency').show();
var frequency_labels = ['selten','','','','','','häufig'];
var frequency_slider = $('#word-frequency').slider({
  enabled:      false,
  ticks_labels: frequency_labels
});
$('.slider-tick-label').each( function() {
  if ( frequency_labels[ parseInt($('#word-frequency').val()) ] == $(this).html() ) {
    $(this).css( 'opacity', '1' );
  }
  else {
    $(this).css( 'opacity', '.5' );
  }
});
$('.slider.slider-horizontal .slider-track').css( 'top', '0px' );
/* --------------------------------------- */

/* --------------------------------------- */
jQuery( function() {
  $('.ddc-kwic-ls').trimLeft();
});
/* --------------------------------------- */

/* --------------------------------------- */
// http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}
$('.dwds-ddc-count').each( function(idx) {
  // data saver mode
  if ( typeof(website_data_mode) !== 'undefined' && website_data_mode == 'light' ) {
    return;
  }
  // Mehrwortausdrücke
  if ( typeof(pos) !== 'undefined' && pos == 'Mehrwortausdruck' ) {
    return;
  }

  var el = $(this);
  var corpus = el.data('corpus');
  var lexdb  = el.data('lexdb');
  var ddc    = el.data('ddc');
  if ( lexdb != 1 && ddc != 1 ) // temporarily no hit count if query is complex and corpus is internal (ddc = 0)
    return;                     //

  var forms = el.data('query').toString().split("\t");
  $.each( forms, function( idx, form ) {
    form = decodeURIComponent( form );
    if ( lexdb ) {
      form = form.replace(/^"|"$/g, '');
    }
    $.ajax( base + ( lexdb == 1 ? 'frequency/' : 'r/hits/' ),
      {
        type: 'GET',
        data: {
          corpus: corpus,
          // escape DDC query keywords
          q:      ( lexdb == 1 ? form : form.replace(/^(count|date|doc|docid|file|fileid|near|with|without|withor|wor|orwith)$/i,'\'$1\'') )
        },
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          if ( !isInt(data) ) {
            data = '0';
          }

          if ( el.html().search(/<span class="">\(/) > -1 ) {
            el.html( el.html().replace( /(\d+)(\)<\/span>)$/, function (match, cnt, post) {
              return ( parseInt(cnt) + parseInt(data) ) + post;
            }));
          }
          else {
            var append = ' <span class="">(';
            if ( corpus.search(/^zeitungen(?:xl)$/) > -1 ) {
              append += '<span title="geschätzt, Zahl kann von den tatsächlichen Korpustreffern abweichen">~</span>';
            }
            append += data + ')</span>';
            el.append( append );
          }

          if ( corpus == 'c4' || corpus == 'untertitel' ) {
            return;
          }
        }
      }
    );
  });
});

$('.dwds-corpus-hits').each( function(idx) {
  var el = $(this);
  var corpus = el.data('corpus');
  var query  = el.data('query');

  $.ajax( base + 'r/hits',
    {
      type: 'GET',
      data: {
        corpus: corpus,
        q:      query
      },
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        if ( !isInt(data) ) {
          el.html( 0 );
        }
        else {
          el.html( data );
        }
      }
    }
  );
});
/* --------------------------------------- */

/* --------------------------------------- */
$('.dwds-wb-count').each( function(idx) {
  // data saver mode
  if ( typeof(website_data_mode) !== 'undefined' && website_data_mode == 'light' ) {
    return;
  }

  var el = $(this);
  var wb = el.attr( 'data-wb' );
  $.ajax( base + 'wb/' + wb + '/hits',
    {
      type: 'GET',
      data: {
        q: el.attr( 'data-query' )
      },
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        if ( !isInt(data) ) data = '0';
        el.append( ' <span class="">(' + data + ')</span>' );
      }
    }
  );
});
/* --------------------------------------- */

/* --------------------------------------- */
function corpus_select () {
  var select = $(this);
  $('#query-filters').load( base + 'r/filters',
    {
      corpus: select.val(),
      format: $('input[name="format"]:checked').val()
    },
    function() {
      $('#corpus-select').change( corpus_select );
    }
  );
}

$('#corpus-select').change( corpus_select );

/* --------------------------------------- */

/* --------------------------------------- */
$('.ddc-expand-metakwic').on( 'click', ddc_expand_metakwic );

function ddc_expand_metakwic (evt) {
  var el = $(this);
  el.closest('tr').next().toggle();
  evt.stopPropagation();
}

$('.ddc-expand-metafull').on( 'click', ddc_expand_metafull );

function ddc_expand_metafull (evt) {
  var el = $(this);
  var tr = el.closest('tr');
  $('.ddc-hit-metafull', tr).toggle();
  evt.stopPropagation();
}

// fw, 2019-12-04: kann weg? vgl. auch lex.js: $('.ddc-hit-metafull *').on( 'click', ddc_hit_metafull );

function ddc_hit_metafull (evt) {
  new ClipboardJS('.ddc-copy-hit');
  evt.stopPropagation();
}
/* --------------------------------------- */

/* --------------------------------------- */
$('.r-corpora').on({
  'mouseenter': function() {
    $(this).css( 'z-index', 100 );
  },
  'mouseleave': function() {
    $(this).css( 'z-index', 0 );
  }
});
/* --------------------------------------- */

/* --------------------------------------- */
/* multiple entries in ¹DWB                */
var dwb_idx = 1;
$('.dwb-form').each( function() {
  var el = $(this);
  el.before( '<a id="' + dwb_idx + '"></a>' );
  dwb_idx++;
});

/* --------------------------------------- */

/* --------------------------------------- */
/* typehead.js autocompletion              */
$('#q:not(.corpus-q)').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/typeahead', { q: query }, function (data) {
        return process(data);
      });
    },
    display: function(data) {
      if ( data.hidx === null )
        return data.value;
      else
        return data.value + '#' + data.hidx;
    },
    templates: {
      suggestion: function(data) {
        if ( data.pos === null ) {
          return '<p>' + data.value.replace( $('#q').val(), '<b>' + $('#q').val() + '</b>') + '</p>';
        }
        else {
          if ( $(window).width() < 768 ) {
            return '<p>' + data.value.replace( $('#q').val(), '<b>' + $('#q').val() + '</b>') + '<br /><span style="color:#999;font-style:italic">' + data.pos + '</span></p>';
          }
          else {
            return '<p>' + data.value.replace( $('#q').val(), '<b>' + $('#q').val() + '</b>') + '<span style="color:#999;font-style:italic"> &middot; ' + data.pos + '</span></p>';
          }
        }
      }
    }
  }
);

$('#q').bind('typeahead:selected', function(obj, datum, name) {
  var form = obj.target.form;
  if ( $(form).hasClass('autosubmit') )
    form.submit();
});

$('#q-wdg').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/wdg/typeahead', { q: query }, function (data) {
        return process(data);
      });
    }
  }
);

$('#q-dwb').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/dwb/typeahead', { q: query }, function (data) {
        return process(data);
      });
    }
  }
);

$('#q-dwb2').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/dwb2/typeahead', { q: query }, function (data) {
        return process(data);
      });
    }
  }
);

$('#q-wgd').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/wortgeschichten/typeahead', { q: query }, function (data) {
        return process(data);
      });
    }
  }
);

$('#q-etymwb').typeahead(
  {
    minLength: 3,
    highlight: true,
    hint: true
  },
  {
    source: function( query, process ) {
      return $.get('/wb/etymwb/typeahead', { q: query }, function (data) {
        return process(data);
      });
    }
  }
);
/* --------------------------------------- */

/* --------------------------------------- */
/* today's date */
/* --------------------------------------- */
$(function() {
  function pad(n){return n<10 ? '0'+n : n}
  $('.today').html( function() {
    var dt = new Date();
    return pad(dt.getUTCDate()) + '.' + pad(dt.getUTCMonth()+1) + '.' + dt.getFullYear();
  });
});

/* --------------------------------------- */
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
  });
  $('[data-toggle="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
  })
  $('[data-toggle-hint="popover"]').popover();
});
/* --------------------------------------- */

/* --------------------------------------- */
/* jQuery expander for etymWB entries      */
$('.etymwb-wrapper').each( function(idx, el) {
  var wrapper = $(el);
  wrapper.expander({
    slicePoint: 400,
    preserveWords: true,
    detailPrefix: '',
    expandPrefix: '',
    expandText: ' <b style="font-size:smaller">...&nbsp;Mehr</b>',
    userCollapseText: '<b style="font-size:smaller">...&nbsp;Weniger</b>',
    beforeExpand: function() {
      wrapper.find('.details').css( 'display', 'inline' );
    }
  });
});
/* --------------------------------------- */


/* --------------------------------------- */
/* expander for OT                         */
$('.ot-expander').on( 'click', function() {
  var el = $(this);
  var synset_no = el.data('synset-no');
  $('.ot-synset-more-' + synset_no).toggle();
  if ( el.hasClass('glyphicon-chevron-down') ) {
    el.removeClass('glyphicon-chevron-down');
    el.addClass('glyphicon-chevron-right');
    el.attr( 'title', '' );
    el.attr( 'data-original-title', 'Synonymgruppe aufklappen' );
  }
  else {
    el.removeClass('glyphicon-chevron-right');
    el.addClass('glyphicon-chevron-down');
    el.attr( 'title', '' );
    el.attr( 'data-original-title', 'Synonymgruppe zuklappen' );
  }
});
/* --------------------------------------- */

/* --------------------------------------- */
$(window).on( 'load', function() {
  var graph_image = $('#plot-box img').get(1);
  if ( typeof graph_image != 'undefined' && graph_image.naturalWidth == 0 ) {
    $('#plot-box').parent().hide();
  }
});
/* --------------------------------------- */

/* some fixes for dwdswb */
$('.dwdswb-uebersicht-item .dwdswb-belegtext').each( function() {
  var el = $(this);
  el.html( el.html().trim() );
});

$('.dwdswb-lesart-def').each( function() {
  var el = $(this);
  var html = el.html();
  html = html.replace( /<[^>]+>/g, '' );
  if ( html == '' ) {
    el.detach();
  }
});

if ( $('.dwdswb-regelverweis').html() ) {
  var regel_html = $('.dwdswb-regelverweis').html();
  regel_html = regel_html.replace(/(<a href="[^"]*orthografie#\w+">[^<]+<\/a>)+/, '$1');
  $('.dwdswb-regelverweis').html( regel_html );

  /* http://zwei.dwds.de/wb/Ajatollah */
  /* http://zwei.dwds.de/wb/Alcopop */
}

/* Regelverweise in Formkommentaren, cf. "Genfood" */
$('.dwdswb-artikel-kommentar td').html( function(index, oldHTML) {
  return oldHTML.replace( /(§(?:\s|&#160;|&nbsp;)*(\d+)(?:[ _]\([\d.]+\))?)/g, '<a href="' + base + 'd/orthografie#r$2">$1</a>' );
});

/* ------------- */
$('.dwdswb-illustration img').on('click', function() {
  var dataid = $(this).attr('data-id');
  $('#image-model-' + dataid).modal();
});
/* ------------- */

/* Popover bei Verweisen */
$(function () {
  $('.dwdswb-verweis[data-popover-def="1"]').popover({
    "html": true,
    "title": function() {
      $(this).data('lemma');
    },
    "content": function() {
      var div_id = "tmp-id-" + $.now();
      var url = base + 'api/wb/def?lemma=' + encodeURI($(this).data('lemma')) + '&hidx=' + $(this).data('hidx');
      if ( $(this).data('lesart') ) {
        url += '&lesart=' + encodeURI($(this).data('lesart'));
      }
      return details_in_popup( url, div_id );
    }
  });
});

function details_in_popup(link, div_id) {
  $.ajax({
    url: link,
    success: function(response) {
      if ( response ) {
        $('#'+div_id).html(response);
      }
      else {
        $('.dwdswb-verweis[data-popover-def="1"]').popover('hide');
      }
    }
  });
  return '<div id="'+ div_id +'" style="color:#666">Lade &hellip;</div>';
}
/* --------------------- */

/* Sprachauswahl */
$('.lang-chooser-btn').on('click', function() {
  $('.lang-chooser').toggle();
});
/* ------------- */

/* GB reporting */
$( function() {
  $('.gb-reporting-submit').on('click', function(e) {
    e.preventDefault();
    $('#spinner').show();
    var article_no = $(this).data('article-no');

    $.ajax({
      type: "POST",
      url: base + 'gb/error/submit',
      data: {
        message: $('#gb-reporting-text-' + article_no).val(),
        subject: $('#gb-reporting-subject-' + article_no).val(),
        url:     $('#gb-reporting-url-' + article_no).val(),
        lemma:   $('#gb-reporting-lemma-' + article_no).val(),
        name:    'report'
      },
      success: function(res) {
        $('#spinner').hide();
        $('#gb-reporting-form-' + article_no).html('<p class="bg-success" style="padding:10px">Danke für Ihre Meldung!</p>');
        setTimeout(
          function() {
            $('#gb-reporting-' + article_no).modal('hide');
          }, 5000
        );
      },
      error: function(res) {
        $('#spinner').hide();
        $('#gb-reporting-error-' + article_no).html('<p class="bg-danger" style="margin:10px 0; padding:10px">Ihre Meldung konnte nicht gespeichert werden.</p>');
      }
    });
    return false;
  });
});

/* ------------ */

/* ------------ */
/* ++ alles eingeklappte ausklappen */
$('.dwds-expand-button').on('click', function() {
  var article_no = $(this).data('article-no');

  var tab_sel = 'div[role="tabpanel"][id="' + article_no + '"]';
  var has_tabs = $(tab_sel).length;
  if ( has_tabs == 0 )
      tab_sel = '';

  // alles im Artikel
  $(tab_sel + ' .expansion-button').trigger('click');

  // Etymologie
  $(tab_sel + ' .more-link').trigger('click');

  // OpenThesaurus
  $(tab_sel + ' .ot-expander.glyphicon-chevron-right').trigger('click');

  $(this).hide();
  $(tab_sel + ' .dwds-collapse-button').show();
});
/* -- alles eingeklappte ausklappen */

/* ++ alles ausgeklappte einklappen */
$('.dwds-collapse-button').on('click', function() {
  var article_no = $(this).data('article-no');

  var tab_sel = 'div[role="tabpanel"][id="' + article_no + '"]';
  var has_tabs = $(tab_sel).length;
  if ( has_tabs == 0 )
      tab_sel = '';

  // alles im Artikel
  $(tab_sel + ' .collapse-button').trigger('click');

  // Etymologie
  $(tab_sel + ' .less-link').trigger('click');

  // OpenThesaurus
  $(tab_sel + ' .ot-expander.glyphicon-chevron-down').trigger('click');

  $(this).hide();
  $(tab_sel + ' .dwds-expand-button').show();
});
/* -- alles ausgeklappte einklappen */
/* ------------ */

/* ++++++++++++ */
/* Auswahl Teilkorpora Korpussuche */
$( function() {
  $('#r-show-subcorpora').on( 'click', function() {
    $('.r-subcorpus-filter').show();
    $('#r-show-subcorpora').hide();
    $('#r-hide-subcorpora').show();
    return false;
  });
  $('#r-hide-subcorpora').on( 'click', function() {
    $('.r-subcorpus-filter').hide();
    $('#r-show-subcorpora').show();
    $('#r-hide-subcorpora').hide();
    return false;
  });
  $('#r-all-subcorpora').on( 'click', function() {
    $('input[name=sc],input[name=area]').prop('checked', true);
    return false;
  });
  $('#r-no-subcorpora').on( 'click', function() {
    $('input[name=sc],input[name=area]').prop('checked', false);
    return false;
  });
})

/* ------------ */

/* ++++++++++++ */
$( function() {
  $('.show-areal-count').on('click', function() {
    $('.regional-areal-count').toggle();
  });
  $('.show-corpus-count').on('click', function() {
    $('.regional-corpus-count').toggle();
  });
  $('.show-dta-hints').on('click', function() {
    $('.ddc-dta-hints').toggle();
  });
});
/* ------------ */

/* ++++++++++++ */
/* Glossar change */
$('#carousel-glossar').on('slide.bs.carousel', function (ev) {
  var title  = $(ev.relatedTarget).find('.carousel-caption h3').clone();
  var teaser = $(ev.relatedTarget).find('.carousel-caption p').clone();
  var link   = $(ev.relatedTarget).find('a').attr('href');

  $('#glossar-startbox-desc').html( teaser );
  $('#glossar-startbox-header').html( '<h2><a href="' + link + '">' + title.html() + '</a></h2>' );

});

/* Video change */
$('#carousel-videos').on('slide.bs.carousel', function (ev) {
  var el = $(ev.relatedTarget);
  var title       = el.data('title');
  var title_link  = el.data('title-link');
  var teaser      = el.data('teaser');
  var footer      = el.data('footer');
  var footer_link = el.data('footer-link');

  $('#videos-startbox-teaser').html( teaser );
  $('#videos-startbox-header').html( '<h2><a href="' + title_link + '">' + title + '</a></h2>' );

  if ( footer ) {
    $('#videos-startbox-footer').html( '[<a href="' + footer_link + '">' + footer + '</a>]' );
  }
  else {
    $('#videos-startbox-footer').html( '' );
  }
});
/* ------------ */

/* ------------ */
// /d/regionalangaben: toggle subareals
/* ------------ */
$( function() {
  $('.show-subareals').on( 'click', function() {
    var sa = $(this).data('sprachareal');
    $('[data-in-sprachareal="' + sa + '"]').toggle();
    if ( $('[data-in-sprachareal="' + sa + '"]').is(':visible') )
      $(this).html( 'Subareale ausblenden' );
    else
      $(this).html( 'Subareale anzeigen' );
  });

  /* Popover bei Sprachareal-Angaben */
  $('[data-toggle="popover-sprachareal"]').popover({
    "html": true,
    "title": function() {
      return "<span style='color:#000'>Sprachareal: " + $(this).html() + '</span>'
    },
    "content": function() {
      var div_id =  "tmp-id-" + $.now();
      return sa_in_popup( div_id, $(this).html() );
    }
  });

  function sa_in_popup( div_id, key ) {
    $.ajax({
      "url": base + 'api/regionalangaben',
      "data": {
        "key": key
      },
      "success": function(response) {
        if ( response ) {
          $('#'+div_id).html(response);
        }
        else {
          $('[data-toggle="popover-sprachareal"]').popover('hide');
        }
      }
    });
    return '<div id="'+ div_id +'" style="color:#666">Lade &hellip;</div>';
  }

  if ( $('.show-subareals')[0] && window.location.hash ) {
    var hash = decodeURIComponent(window.location.hash);
    if ( !$(hash).is(':visible') ) {
      var prefix = hash.replace(/(-[^-]+)$/, '').replace(/^#/,'');
      var btn = $('.show-subareals[data-sprachareal="' + prefix + '"]');
      btn.trigger('click');
      $(hash)[0].scrollIntoView();
    }
  }
});

/* https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/ */
jQuery.fn.putCursorAtEnd = function() {

  return this.each(function() {

    // Cache references
    var $el = $(this),
        el = this;

    // Only focus if input isn't already
    if (!$el.is(":focus")) {
     $el.focus();
    }

    // If this function exists... (IE 9+)
    if (el.setSelectionRange) {

      // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
      var len = $el.val().length * 2;

      // Timeout seems to be required for Blink
      setTimeout(function() {
        el.setSelectionRange(len, len);
      }, 1);

    } else {

      // As a fallback, replace the contents with itself
      // Doesn't work in Chrome, but Chrome supports setSelectionRange
      $el.val($el.val());

    }

    // Scroll to the bottom, in case we're in a tall textarea
    // (Necessary for Firefox and Chrome)
    this.scrollTop = 999999;

  });
};

$( function() {
  var hash = window.location.hash;
  if ( !hash || hash.search(/^\d/) > -1 ) {
    $('#q').putCursorAtEnd();
  }
});
