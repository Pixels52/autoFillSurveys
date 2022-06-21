// ==UserScript==
// @name         Fill Survey
// @namespace    Hmmm
// @version      0.9
// @description  University of Engineering and Tecnology LMS Surveys Auto Filler
// @author       Pixels
// @match        https://lms.uet.edu.pk/survey/*
// @icon         https://lms.uet.edu.pk/logo.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fillSurvey() {
        let wraps = document.getElementsByClassName('js_question-wrapper');
        if (document.getElementsByClassName('text-center')[0].children[0].textContent == 'Thank you!') window.onload = reset();

        // for( i = 0; i < wraps.length; i++ ) {
        //     let rad = document.getElementsByName(wraps[i].id);
        //     let k = Math.floor(Math.random() * 5);
        //     rad[k].checked = true;
        // }
        // submitButton.click();
        alert ('You have not purchased the liscence')
    }

    function reset() {
        window.open(website,'_blank');
        window.setTimeout(function(){this.close();},1000);
    }

    let i = 0;
    let startButton = document.getElementsByClassName('btn btn-primary btn-lg')[0];
    let submitButton = document.getElementsByName('button_submit')[0];
    let website = 'https://lms.uet.edu.pk/web#action=obe_survey.semester_for_survey_action';

    if (window.location.href.substr(30,5)=='start') window.onload = startButton.click();
    if (window.location.href.substr(30,4)=='fill') window.onload = fillSurvey();

})();
