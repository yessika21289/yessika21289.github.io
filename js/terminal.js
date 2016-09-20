/**
 * Created by Yessika on 23/08/2016.
 */

document.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName('form')[0].onsubmit = function (evt) {
        evt.preventDefault(); // Preventing the form from submitting
        checkWord(); // Do your magic and check the entered word/sentence
    }

    // Get the focus to the text input to enter a word right away.
    //document.getElementById('terminalTextInput').focus();

    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalResultsCont').innerHTML;

    // Clear text input
    var clearInput = function () {
        document.getElementById('terminalTextInput').value = "";
    }

    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function () {
        var terminalResultsDiv = document.getElementById('terminalResultsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    // Scroll to the bottom of the results
    scrollToBottomOfResults();

    // Add text to the results div
    var addTextToResults = function (textToAdd) {
        document.getElementById('terminalResultsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scrollToBottomOfResults();
    }

    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function () {
        // Array of all the help keywords
        /*var helpKeyWords = [
            "Try this:",
            "- Favourite language?",
            "- Experienced in",
            "- Mission",
            "- Skills",
            "- Clients",
            "* There are more keywords that you have to discover by yourself."
        ].join('<br>');*/
        var helpKeyWords = "<table>" +
            "<tr>" +
            "<td style='padding-right:30px'>fav-lang</td><td>Get my speciality</td>" +
            "</tr>" +
            "<tr>" +
            "<td>exp</td><td>Get my expertise fields</td>" +
            "</tr>" +
            "<tr>" +
            "<td>mission</td><td>Get to know my mission</td>" +
            "</tr>" +
            "</table>";
        addTextToResults(helpKeyWords);
    }

    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function (postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
        var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.

        if (timeHours < 10) { // if 1 number display 0 before it.
            timeHours = "0" + timeHours;
        }

        if (timeMinutes < 10) { // if 1 number display 0 before it.
            timeMinutes = "0" + timeMinutes;
        }

        var currentTime = timeHours + ":" + timeMinutes;
        var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

        if (postTimeDay == "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay == "date") {
            addTextToResults(currentDate);
        }
    }

    // Opening links in a new window
    var openLinkInNewWindow = function (linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }

    // Having a specific text reply to specific strings
    var textReplies = function () {
        switch (textInputValueLowerCase) {
            // funny replies [START]
            case "favourite language?":
                clearInput();
                addTextToResults("PHP for now.");
                break;

            case "exp":
                clearInput();
                addTextToResults("Backend web developing and translating English to Indonesian.");
                break;

            case "mission":
                clearInput();
                addTextToResults("I deliver uniqueness and quality.");
                break;

            case "yeye":
                clearInput();
                addTextToResults("Calling me?");
                break;

            case "git":
                clearInput();
                addTextToResults("My GitHub: <a target='_blank' href='https://github.com/yessika21289'>https://github.com/yessika21289</a>");
                break;

            case "git status":
                clearInput();
                addTextToResults("nothing to commit, working directory clean.");
                break;

            case "git push origin master":
                clearInput();
                addTextToResults("Don't you dare pushing anything!");
                break;

            case "hello":
            case "hi":
            case "hola":
                clearInput();
                addTextToResults("Hey! What's up?");
                break;

            case "husky":
                clearInput();
                addTextToResults("Wow! You just found out my Chassy.");
                break;

            case "lol":
                clearInput();
                addTextToResults("MUAHAHAHAHAHAHA...");
                break;
            // funny replies [END]

            case "time":
                clearInput();
                getTimeAndDate("time");
                break;

            case "date":
                clearInput();
                getTimeAndDate("date");
                break;

            case "help":
            case "?":
                clearInput();
                postHelpList();
                break;

            default:
                clearInput();
                addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to get hints.</i></p>");
                break;
        }
    }

// Main function to check the entered text and assign it to the correct function
    var checkWord = function () {
        textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
        textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

        if (textInputValue != "") { //checking if text was entered
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            textReplies();
        }
    };

});

var greeting = "Hello, I'm Yessika. You can call me Yeye. Nice to meet you.";

$(function(){
    $('div#terminalResultsCont').one('inview', function() {
        type('#terminalResultsCont', greeting, 0);
    });
});

function type(el, text, pos, no) {
    ctext = text.substring(0, pos);
    $(el).html(ctext);
    if (pos == text.length) {
        $(el).html(text);
    } else {
        window.setTimeout('type("' + el + '","' + text + '",' + (pos + 1) + ',' + 1 + ');', 100);
    }
}