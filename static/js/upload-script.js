$(document).ready(function () {
    function transform(content) {
        var text = "";
        var words = content.split(" ");
        words.forEach(function (element) {
            var word = " ";
            var size = element.length;
            var word_slash = element.split("/");
            var counter = 0;
            var prev2 = "";
            var prev = "";
            if (size > 0) {
                word_slash.forEach(function (syll) {
                    if (word_slash.length == 1) {
                        word += "<span class='black-syll'>" + syll + "</span>";
                    } else if (
                        prev2 == "دً" ||
                        prev2 == "دّ" ||
                        prev2 == "ذً" ||
                        prev2 == "ذّ" ||
                        prev2 == "رّ" ||
                        prev2 == "رً" ||
                        prev2 == "زّ" ||
                        prev2 == "زً" ||
                        prev2 == "وً" ||
                        prev2 == "وّ" ||
                        prev2 == "ؤّ" ||
                        prev2 == "ؤً" ||
                        prev2 == "إِ" ||
                        prev2 == "إٍ" ||
                        prev2 == "ؤِ" ||
                        prev2 == "ؤٍ" ||
                        prev2 == "ؤٌ" ||
                        prev2 == "ؤُ" ||
                        prev2 == "ؤَ" ||
                        prev2 == "ؤْ" ||
                        prev2 == "أْ" ||
                        prev2 == "أٌ" ||
                        prev2 == "أُ" ||
                        prev2 == "أً" ||
                        prev2 == "أَ" ||
                        prev2 == "وٍ" ||
                        prev2 == "وٌ" ||
                        prev2 == "وِ" ||
                        prev2 == "وُ" ||
                        prev2 == "وَ" ||
                        prev2 == "وْ" ||
                        prev2 == "زٍ" ||
                        prev2 == "زِ" ||
                        prev2 == "زٌ" ||
                        prev2 == "زَ" ||
                        prev2 == "زُ" ||
                        prev2 == "زْ" ||
                        prev2 == "رٌ" ||
                        prev2 == "رٍ" ||
                        prev2 == "رَ" ||
                        prev2 == "رُ" ||
                        prev2 == "رْ" ||
                        prev2 == "رِ" ||
                        prev2 == "ذٍ" ||
                        prev2 == "ذٌ" ||
                        prev2 == "دٍ" ||
                        prev2 == "دٌ" ||
                        prev2 == "دْ" ||
                        prev2 == "دِ" ||
                        prev2 == "دُ" ||
                        prev2 == "دَ" ||
                        prev2 == "اً" ||
                        prev2 == "ذِ" ||
                        prev2 == "ذُ" ||
                        prev2 == "ذَ" ||
                        prev2 == "ذْ"
                    ) {
                        if (counter % 2 == 0) {
                            if (counter != 0) {
                                if (counter == word_slash.length - 1) {
                                    word += "<span class='black-syll'>" + syll + "</span>";
                                } else {
                                    word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                                }
                            } else {
                                word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                            }
                        } else {
                            if (counter != 0) {
                                if (counter == word_slash.length - 1) {
                                    word += "<span class='red-syll'>" + syll + "</span>";
                                } else {
                                    word += "<span class='red-syll'>" + syll + "&zwj;</span>";
                                }
                            } else {
                                word += "<span class='red-syll'>" + syll + "&zwj;</span>";
                            }
                        }
                    } else if (
                        prev == "؟ " ||
                        prev == "!" ||
                        prev == ")" ||
                        prev == "(" ||
                        prev == "." ||
                        prev == "،" ||
                        prev == "," ||
                        prev == '"' ||
                        prev == "'" ||
                        prev == "٩" ||
                        prev == "٨" ||
                        prev == "٧" ||
                        prev == "٦" ||
                        prev == "٥" ||
                        prev == "٤" ||
                        prev == "٣" ||
                        prev == "٢" ||
                        prev == "١" ||
                        prev == "٠" ||
                        prev == "ا" ||
                        prev == "د" ||
                        prev == "ذ" ||
                        prev == "ر" ||
                        prev == "ز" ||
                        prev == "و" ||
                        prev == "إ" ||
                        prev == "آ" ||
                        prev == "ؤ" ||
                        prev == "أ"
                    ) {
                        if (counter % 2 == 0) {
                            if (counter != 0) {
                                if (counter == word_slash.length - 1) {
                                    word += "<span class='black-syll'>" + syll + "</span>";
                                } else {
                                    word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                                }
                            } else {
                                word += "<span class='black-syll'>" + syll + "&zwj;</span>";
                            }
                        } else {
                            if (counter != 0) {
                                if (counter == word_slash.length - 1) {
                                    word += "<span class='red-syll'>" + syll + "</span>";
                                } else {
                                    word += "<span class='red-syll'>" + syll + "&zwj;</span>";
                                }
                            } else {
                                word += "<span class='red-syll'>" + syll + "&zwj;</span>";
                            }
                        }
                    } else {
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
                                word += "<span class='red-syll'>" + syll + "&zwj;</span>";
                            }
                        }
                    }
                    counter++;
                    prev2 = syll.slice(-2);
                    prev = syll.slice(-1);
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
