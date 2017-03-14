'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "arn:aws:lambda:us-east-1:658674624465:function:myDragonFacts";  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "Dragons are one the world’s most popular mythological creatures. They are represented in cultures all over the world in places like China, Europe and right here in the Americas.",
                "The word “dragon” comes from the Greek word “draconta,” which means “to watch.” The Greeks saw dragons as beasts that guarded valuable items. In fact, many cultures depict dragons as hoarding treasure.",
                "Ancient Greeks and Sumerians spoke of giant “flying serpents” in their scrolls and lectures. Dragons are depicted as snake- or reptile-like.",
                "The Komodo dragon is a type of monitor lizard, which is aggressive and deadly. They can be 10 feet long and use toxic bacteria in their mouths to wound their prey.",
                "Dragons have never had a particular personality. This is unlike the unicorn, which is always known to be a majestic, peaceful creature. The dragon is sometimes regal and protective. Other times it’s deadly and destructive.",
                "In most cultures, the dragon is always rare. There are never very many of them.",
                "In medieval times, dragons were considered very real, but demonic. Religions had widely different views of dragons- some loved them and some feared them.",
                "When giant bones were occasionally uncovered around the world (dinosaurs, as we know them now), people assumed they were dragons.",
                "Some dragons have wings, others don’t. Some dragons with wings can fly, others can’t. Some dragons without wings can fly.",
                "Most dragons are described as having scaly skin, talons, and slanted eyes, and long snouts.",
                "Dragons can possess many different types of magical powers or none at all.",
                "Some dragons are small, house-pet sized creatures. Others are miles long.",
                "Some dragons live in deep places under the oceans, others hide in deep caves, and some others perch on high mountaintops. In most cases, dragons live where ancient people couldn’t reach.",
                "In many cultural stories, dragons exhibit features of other animals, like the head of elephants, claws of lions and beaks of predatory birds. Their body colors are widely different – red, blue, green, red, gold, but usually earth tones. In some cultures, the colors have specific meanings.",
                "Some people books and films with dragons include “How to Train Your Dragon,” “The Hobbit,” “Game of Thrones,” the “Dungeons and Dragons” games, “Mulan,” “The Never Ending Story,” “Sleeping Beauty,” any King Arthur story, and much more."
            ],
            "SKILL_NAME" : "Dragon Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a Dragon fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "Dragons are one the world’s most popular mythological creatures. They are represented in cultures all over the world in places like China, Europe and right here in the Americas.",
                "The word “dragon” comes from the Greek word “draconta,” which means “to watch.” The Greeks saw dragons as beasts that guarded valuable items. In fact, many cultures depict dragons as hoarding treasure.",
                "Ancient Greeks and Sumerians spoke of giant “flying serpents” in their scrolls and lectures. Dragons are depicted as snake- or reptile-like.",
                "The Komodo dragon is a type of monitor lizard, which is aggressive and deadly. They can be 10 feet long and use toxic bacteria in their mouths to wound their prey.",
                "Dragons have never had a particular personality. This is unlike the unicorn, which is always known to be a majestic, peaceful creature. The dragon is sometimes regal and protective. Other times it’s deadly and destructive.",
                "In most cultures, the dragon is always rare. There are never very many of them.",
                "In medieval times, dragons were considered very real, but demonic. Religions had widely different views of dragons: some loved them and some feared them.",
                "When giant bones were occasionally uncovered around the world (dinosaurs, as we know them now), people assumed they were dragons.",
                "Some dragons have wings, others don’t. Some dragons with wings can fly, others can’t. Some dragons without wings can fly.",
                "Most dragons are described as having scaly skin, talons, and slanted eyes, and long snouts.",
                "Dragons can possess many different types of magical powers or none at all.",
                "Some dragons are small, house-pet sized creatures. Others are miles long.",
                "Some dragons live in deep places under the oceans, others hide in deep caves, and some others perch on high mountaintops. In most cases, dragons live where ancient people couldn’t reach.",
                "In many cultural stories, dragons exhibit features of other animals, like the head of elephants, claws of lions and beaks of predatory birds. Their body colors are widely different – red, blue, green, red, gold, but usually earth tones. In some cultures, the colors have specific meanings.",
                "Some people books and films with dragons include “How to Train Your Dragon,” “The Hobbit,” “Game of Thrones,” the “Dungeons and Dragons” games, “Mulan,” “The Never Ending Story,” “Sleeping Beauty,” any King Arthur story, and much more."
            ],
            "SKILL_NAME" : "American Dragon Facts"
        }
    },
    "en-GB": {
        "translation": {
            "FACTS": [
                "Dragons are one the world’s most popular mythological creatures. They are represented in cultures all over the world in places like China, Europe and right here in the Americas.",
                "The word “dragon” comes from the Greek word “draconta,” which means “to watch.” The Greeks saw dragons as beasts that guarded valuable items. In fact, many cultures depict dragons as hoarding treasure.",
                "Ancient Greeks and Sumerians spoke of giant “flying serpents” in their scrolls and lectures. Dragons are depicted as snake- or reptile-like.",
                "The Komodo dragon is a type of monitor lizard, which is aggressive and deadly. They can be 10 feet long and use toxic bacteria in their mouths to wound their prey.",
                "Dragons have never had a particular personality. This is unlike the unicorn, which is always known to be a majestic, peaceful creature. The dragon is sometimes regal and protective. Other times it’s deadly and destructive.",
                "In most cultures, the dragon is always rare. There are never very many of them.",
                "In medieval times, dragons were considered very real, but demonic. Religions had widely different views of dragons: some loved them and some feared them.",
                "When giant bones were occasionally uncovered around the world (dinosaurs, as we know them now), people assumed they were dragons.",
                "Some dragons have wings, others don’t. Some dragons with wings can fly, others can’t. Some dragons without wings can fly.",
                "Most dragons are described as having scaly skin, talons, and slanted eyes, and long snouts.",
                "Dragons can possess many different types of magical powers or none at all.",
                "Some dragons are small, house-pet sized creatures. Others are miles long.",
                "Some dragons live in deep places under the oceans, others hide in deep caves, and some others perch on high mountaintops. In most cases, dragons live where ancient people couldn’t reach.",
                "In many cultural stories, dragons exhibit features of other animals, like the head of elephants, claws of lions and beaks of predatory birds. Their body colors are widely different – red, blue, green, red, gold, but usually earth tones. In some cultures, the colors have specific meanings.",
                "Some people books and films with dragons include “How to Train Your Dragon,” “The Hobbit,” “Game of Thrones,” the “Dungeons and Dragons” games, “Mulan,” “The Never Ending Story,” “Sleeping Beauty,” any King Arthur story, and much more."
            ],
            "SKILL_NAME" : "British Dragon Facts"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Dragon fact from the Dragon facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};