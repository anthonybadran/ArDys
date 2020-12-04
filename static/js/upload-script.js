$(document).ready(function () {
    function transform(content) {
        var text = "";
        var words = content.split(" ");
        words.forEach(function (element) {
            var word = " ";
            var size = element.length;
            var word_slash = element.split("/");
            var counter = 0;
            if (size > 0) {
                word_slash.forEach(function (syll) {
                    if (counter % 2 == 0) {
                        if (counter != 0) {
                            if (counter == word_slash.length - 1) {
                                word += "<span class='black-syll'>&zwj;" + syll + "</span>";
                            } else {
                                word += "<span class='black-syll'>&zwj;" + syll + "&zwj;</span>";
                            }
                        } else {
                            word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                        }
                    } else {
                        if (counter != 0) {
                            if (counter == word_slash.length - 1) {
                                word += "<span class='red-syll'>&zwj;" + syll + "</span>";
                            } else {
                                word += "<span class='red-syll'>&zwj;" + syll + "&zwj;</span>";
                            }
                        } else {
                            word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                        }
                    }
                    counter++;
                });
                text += word;
            }
        });
        text = text.trim();
        document.getElementById("text-uploads").innerHTML = text;
    }
    var text = document.getElementById("text-uploads").innerHTML;
    transform(text);
    $("#text-uploads").autosize();
});
