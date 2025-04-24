// average calculator
function getAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    let average = total / scores.length;
    return average;
}

// grade calculator
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

// passing grade calculator

function hasPassingGrade(score) {
    let passingGrade = getGrade(score);

    if (passingGrade === "F") {
        return false;
    } else {
        return true;
    }
}

// sending messages to the student
function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);

    if (grade !== "F") {
        `Class average: ${average} your grade: ${grade}. You passed the course`;
    } else {
        `Class average: ${average} your grade: ${grade}. You failed the course`;
    }
}