$(document).ready(function () {
    $("#text").autosize();
    $("#clear-modal").click(function () {
        $("#text").val("");
        $("#text").css("height", "350px");
        $(window).scrollTop(0);
        $("#clearModal").modal("hide");
    });
    var url = $("#dyslexiaVideo").attr("src");

    $("#videoModal").on("hide.bs.modal", function () {
        $("#dyslexiaVideo").attr("src", "");
    });

    $("#videoModal").on("show.bs.modal", function () {
        $("#dyslexiaVideo").attr("src", url);
    });

    $("#menuButton").click(function () {
        if ($("#trans").is(":hidden")) {
            $("#trans").show();
        } else {
            $("#trans").hide();
        }
    });
    $(".navbar-collapse.left").on("show.bs.collapse", function () {
        $("#navBrand").hide();
        $(window).resize(function () {
            if ($(window).width() > 991.98) {
                $("#navBrand").show();
            } else {
                $("#navBrand").hide();
            }
        });
    });
    $(".navbar-collapse.left").on("hide.bs.collapse", function () {
        $("#navBrand").show();
        $(window).resize(function () {
            if ($(window).width() > 991.98) {
                $("#navBrand").show();
            } else {
                $("#navBrand").show();
            }
        });
    });

    $("#import").click(function () {
        $("#paper").replaceWith(
            '<div id="chooseFile"> <form id="fileForm" method="POST" action="/upload" enctype="multipart/form-data"> <div class="custom-file"> <input type="file" name="doc_file" accept=".doc,.docx" class="custom-file-input" id="customFile"/> <label class="custom-file-label" for="customFile">Choose file</label> </div><div> <button id="btnResetForm" class="btn btn-primary"><i class="fas fa-eraser"></i></button> <button id="submitDoc" class="btn btn-primary"><i class="fas fa-check"></i></button> </div></form> </div>'
        );
        bsCustomFileInput.init();
        var btn = document.getElementById("btnResetForm");
        var form = document.querySelector("form");
        btn.addEventListener("click", function (e) {
            form.reset();
            e.preventDefault();
        });
        $("#submitDoc").click(function (e) {
            if (document.getElementById("customFile").files.length == 0) {
                alert("No file chosen!");
                e.preventDefault();
            }
        });
    });
    $("#inputHere").click(function () {
        $("#chooseFile").replaceWith(
            '<form id="paper" method="POST" action=""> <div class="row"> <textarea class="col-12" placeholder="...أَدْخِلِ النَّصَ مُحَرَّكًا" id="text" name="text" rows="4" style="overflow: hidden; word-wrap: break-word; resize: none; height: 350px" ></textarea> <br/> </div><div class="row mt-4"> <label for="clear" class="sr-only">Clear</label> <button type="button" id="clear" class="btn btn-primary functButton" value="eraser" data-toggle="modal" data-target="#clearModal" > <i class="fas fa-eraser"></i> </button> <label for="submit" class="sr-only">Convert</label> <button type="submit" id="submit" class="btn btn-primary functButton" value="تحويل"> <i class="fas fa-paint-brush"></i> تحويل </button> </div></form>'
        );
        $("#text").autosize();
    });
});

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("active");
        } else {
            $(".navbar").removeClass("active");
        }
    });
});
