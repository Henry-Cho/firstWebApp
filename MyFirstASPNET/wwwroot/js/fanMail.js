﻿$("#btn").click(() => {
    let hw = $("#hw").val() * 0.55;
    let gp = $("#gp").val() * 0.05;
    let quiz = $("#quiz").val() * 0.1;
    let exam = $("#exam").val() * 0.2;
    let intex = $("#intex").val() * 0.1;

    let total = hw + gp + quiz + exam + intex;

    let letterGrade = "";

    if (total >= 94) {
        letterGrade = "A";
    }
    else if (total >= 90) {
        letterGrade = "A-";
    }
    else if (total >= 87) {
        letterGrade = "B+";
    }
    else if (total >= 84) {
        letterGrade = "B";
    }
    else if (total >= 80) {
        letterGrade = "B-";
    }
    else if (total >= 77) {
        letterGrade = "C+";
    }
    else if (total >= 74) {
        letterGrade = "C";
    }
    else if (total >= 70) {
        letterGrade = "C-";
    }
    else if (total >= 67) {
        letterGrade = "D+";
    }
    else if (total >= 64) {
        letterGrade = "D";
    }
    else if (total >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    $("#tp").html(total + "%");
    $("#lg").html(letterGrade);
})