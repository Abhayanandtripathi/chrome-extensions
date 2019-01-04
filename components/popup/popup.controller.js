(function () {
    angular.module('popup').controller('PopupController',popupController)

    function popupController($scope, popupAPI){

        var vm = this;

        vm.sayIt = sayIt;

        activate();

        function activate(){
            vm.error = undefined;
            vm.data = undefined;
            vm.preparedData = undefined;

            var activePage = chrome.extension.getBackgroundPage();

            vm.intendedLanguuage ="en";
            vm.selectedWord = activePage.selectedText;
            //chrome.tabs.detectLanguage(vm.intendedLanguuage);

            if(vm.selectedWord.length > 0){
                popupAPI.getMeaning(vm.selectedWord, vm.intendedLanguuage).then(_gotData).catch(_gotError)
            }
        }

        function _gotData(result){
            vm.data = result.data[0];
            vm.word = vm.data.word;
            vm.phonetic = vm.data.phonetic;
            vm.meaningNounDefinitiuon = vm.data.meaning.noun[0].definition;
            vm.meaningVerbDefinitiuon = vm.data.meaning.verb[0].definition;
            vm.meaningNounExample = vm.data.meaning.noun[0].example;
            vm.meaningVerbExample = vm.data.meaning.verb[0].example;
            vm.meaningNounSynonyms = vm.data.meaning.noun[0].synonyms.toString();
            vm.meaningVerbSynonyms = vm.data.meaning.verb[0].synonyms.toString();
            //vm.meaningExcalamtionDefinitiuon = vm.data.meaning.exclamation[0].definition;
            //vm.meaningExcalamtionExample = vm.data.meaning.exclamation[0].example;


        }

        function _gotError(error) {
            vm.error = error;
        }

        function sayIt(word){
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(word));
        };

    }
})();