// 학생 성적 계산
function calculate( students ) {
    for ( let student of students ) {
        for ( let subject of student["subjects"] ) {
            student["total"] += subject;
        }
        student["average"] = student["total"] / MAX_SUBJECT;
        if ( student["average"] >= EXCELLENT ) {
            student["grade"] = "Excellent";
        } else if ( student["average"] < FAIL ) {
            student["grade"] = "Fail";
        }
    }
}

// 석차 계산
function calculate_rank( students ) {
    for ( let i = 0; i < students.length; ++i ) {
        students[i].rank = 1;
        for ( let j = 0; j < students.length; ++j ) {
            if ( students[i].average < students[j].average ) {
                ++students[i].rank;
            }
        }
    }
}

// 평균순 Sort
function sort_average( students ) {
    const maxSort = students.length - 1;
    let k;

    for ( let i = 0; i < maxSort; ++i ) {
        k = i;
        for ( let j = i + 1; j < students.length; ++j ) {
            if ( students[k].average < students[j].average ) {
                k = j;
            }

        }

        if ( i != k ) {
            [ students[i], students[k] ] = [ students[k], students[i] ];
        }
    }
}

// 성적 일람표 출력
function printScoreTable( students ) {
    for ( let student of students ) {
        console.log( `${student.name} ${student.subjects[0]} ${student.subjects[1]} ${student.subjects[0]}\
                      ${student.total} ${student.average} ${student.grade} ${student.rank}` );
    }
}

// 상수 선언
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

// 변수 선언
let students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

// main
console.log( "\n10명의 학생 성적을 출력하는 프로그램(함수 사용)\n" );
calculate( students );
calculate_rank( students );
printScoreTable( students );
sort_average( students );
console.log( "\n\n" );
printScoreTable( students );
