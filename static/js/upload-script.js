$(document).ready(function () {
    function transform(content) {
        var text = "";
        var words = content.split(" ");
        words.forEach(function (element) {
            var word = " ";
            var size = element.length;
            var word_slash = element.split("/");
            var counter = 0;
            var prev3 = "";
            var prev2 = "";
            var prev = "";
            var gris = "";
            var gris1 = "";
            var gris2 = "";
            var word5 = "";
            var word6 = "";
            var word7 = "";
            if (size > 0) {
                word_slash.forEach(function (syll) {
                    if (counter == 0) {
                        gris2 = syll.split("`");
                        if (gris2.length > 1) {
                            if (word_slash.length == 1) {
                                word7 = "<span class='grey-syll'>" + gris2[0] + "&zwj;</span>" + "<span class='black-syll'>" + gris2[1] + "</span>";
                            } else {
                                word7 = "<span class='grey-syll'>" + gris2[0] + "&zwj;</span>" + "<span class='black-syll'>" + gris2[1] + "&zwj;</span>";
                            }
                        } else {
                            if (word_slash.length == 1) {
                                word7 = "<span class='black-syll'>" + gris2[0] + "</span>";
                            } else {
                                word7 = "<span class='black-syll'>" + gris2[0] + "&zwj;</span>";
                            }
                        }
                        word += word7;
                    } else if (word_slash.length == 1) {
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
                        prev2 == "ذْ" ||
                        prev2 == "ءَ" || 
                        prev2 == "ءُ" || 
                        prev2 == "ءِ" || 
                        prev2 == "ءً" || 
                        prev2 == "ءٌ" || 
                        prev2 == "ءٍ" || 
                        prev2 == "ءْ" || 
                        prev2 == "ءّ"
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
                        prev == "؟" ||
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
                        prev == "أ" ||
                        prev == "ء"
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
                        prev3 == "دًّ" ||
                        prev3 == "دّْ" ||
                        prev3 == "ذًّ" ||
                        prev3 == "ذّْ" ||
                        prev3 == "رّْ" ||
                        prev3 == "رًّ" ||
                        prev3 == "زّْ" ||
                        prev3 == "زًّ" ||
                        prev3 == "وًّ" ||
                        prev3 == "وّْ" ||
                        prev3 == "ؤّْ" ||
                        prev3 == "ؤًّ" ||
                        prev3 == "إِّ" ||
                        prev3 == "إٍّ" ||
                        prev3 == "ؤِّ" ||
                        prev3 == "ؤٍّ" ||
                        prev3 == "ؤٌّ" ||
                        prev3 == "ؤُّ" ||
                        prev3 == "ؤَّ" ||
                        prev3 == "ؤّْ" ||
                        prev3 == "أّْ" ||
                        prev3 == "أٌّ" ||
                        prev3 == "أُّ" ||
                        prev3 == "أًّ" ||
                        prev3 == "أَّ" ||
                        prev3 == "وٍّ" ||
                        prev3 == "وٌّ" ||
                        prev3 == "وِّ" ||
                        prev3 == "وُّ" ||
                        prev3 == "وَّ" ||
                        prev3 == "وّْ" ||
                        prev3 == "زٍّ" ||
                        prev3 == "زِّ" ||
                        prev3 == "زٌّ" ||
                        prev3 == "زَّ" ||
                        prev3 == "زُّ" ||
                        prev3 == "زّْ" ||
                        prev3 == "رٌّ" ||
                        prev3 == "رٍّ" ||
                        prev3 == "رَّ" ||
                        prev3 == "رُّ" ||
                        prev3 == "رّْ" ||
                        prev3 == "رِّ" ||
                        prev3 == "ذٍّ" ||
                        prev3 == "ذٌّ" ||
                        prev3 == "دٍّ" ||
                        prev3 == "دٌّ" ||
                        prev3 == "دّْ" ||
                        prev3 == "دِّ" ||
                        prev3 == "دُّ" ||
                        prev3 == "دَّ" ||
                        prev3 == "اًّ" ||
                        prev3 == "ذِّ" ||
                        prev3 == "ذُّ" ||
                        prev3 == "ذَّ" ||
                        prev3 == "ذّْ" ||
                        prev3 == "ءَّ" || 
                        prev3 == "ءُّ" || 
                        prev3 == "ءِّ" || 
                        prev3 == "ءًّ" || 
                        prev3 == "ءٌّ" || 
                        prev3 == "ءٍّ" || 
                        prev3 == "ءّْ" || 
                        prev3 == "ءّْ"
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
                    prev3 = syll.slice(-3);
                    prev2 = syll.slice(-2);
                    prev = syll.slice(-1);
                });
                gris = word.split("^");
                if (gris.length > 1) {
                    word5 = gris[0] + "<span class='grey-syll'>&zwj;" + gris[1] + "</span>";
                } else {
                    word5 = gris[0];
                }
                gris1 = word5.split("|");
                if (gris1.length > 1) {
                    word6 = gris1[0] + "<span class='grey-syll'>" + gris1[1] + "&zwj;</span>" + gris1[2];
                } else {
                    word6 = gris1[0];
                }
                text += word6;
            }
        });
        // text = text.trim();
        document.getElementById("text-uploads").innerHTML = text;
    }
    var text = document.getElementById("text-uploads").innerHTML;
    transform(text);
    $("#text-uploads").autosize();
});
