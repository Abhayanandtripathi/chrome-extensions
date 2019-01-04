(function () {
    angular.module('popup').factory('popupAPI',popupAPI)

    function popupAPI($http){

        return {
            getMeaning : getMeaning,
        };

        function getMeaning(word, intendedLanguage) {

            var DICTIONARY_API = "https://googledictionaryapi.eu-gb.mybluemix.net/";
            return $http.get("https://googledictionaryapi.eu-gb.mybluemix.net/?define=" + word.replace(" ","") + "&" + "lang=en");
        }
    }
})();