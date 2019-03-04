// 상수 선언
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

// 변수 선언
let students = [ ];

// 학생 등록
function input_student() {
    let name = document.getElementById( 'txt-name' ).value;
    let subject1 = parseInt( document.getElementById( 'txt-subject1' ).value, 10 );
    let subject2 = parseInt( document.getElementById( 'txt-subject2' ).value, 10 );
    let subject3 = parseInt( document.getElementById( 'txt-subject3' ).value, 10 );

    let student = {};
    student.name = name;
    student.subjects = [];
    student.subjects.push( subject1 );
    student.subjects.push( subject2 );
    student.subjects.push( subject3 );
    student.total = 0;
    student.average = 0.0;
    student.grade = "";
    student.rank = 1;
    console.log( student );

    calculate( student );

    students.push( student );
    console.log( students );

    calculate_rank();

    printScoreTable();
}

// 학생 성적 계산
function calculate( student ) {
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

// 석차 계산
function calculate_rank() {
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
function tableHeader( parent ) {
    let caption = document.createElement( 'caption' );
    let nameHeader = document.createElement( 'th' );
    let subject1Header = document.createElement( 'th' );
    let subject2Header = document.createElement( 'th' );
    let subject3Header = document.createElement( 'th' );
    let totalHeader = document.createElement( 'th' );
    let averageHeader = document.createElement( 'th' );
    let gradeHeader = document.createElement( 'th' );
    let rankHeader = document.createElement( 'th' );
    let row = document.createElement( 'tr' );

    caption.textContent = "성적 일람표(입력순)";
    parent.appendChild( caption );
    nameHeader.textContent = "이름";
    parent.appendChild( nameHeader );
    subject1Header.textContent = "과목1";
    parent.appendChild( subject1Header );
    subject2Header.textContent = "과목2";
    parent.appendChild( subject2Header );
    subject3Header.textContent = "과목3";
    parent.appendChild( subject3Header );
    totalHeader.textContent = "총점";
    parent.appendChild( totalHeader );
    averageHeader.textContent = "평균";
    parent.appendChild( averageHeader );
    gradeHeader.textContent = "평가";
    parent.appendChild( gradeHeader );
    rankHeader.textContent = "석차";
    parent.appendChild( rankHeader );
    parent.appendChild( row );
}

function printScoreTable() {
    const parent = document.getElementById( 'scoretable-input' );

    let row;
    let d_name, d_subject1, d_subject2, d_subject3;
    let d_total, d_average, d_grade, d_rank;

    while ( parent.hasChildNodes() ) {
        parent.removeChild( parent.firstChild );
    }

    tableHeader( parent );
    console.log( parent );

    for ( let student of students ) {
        d_name = document.createElement( 'td' );
        d_subject1 = document.createElement( 'td' );
        d_subject2 = document.createElement( 'td' );
        d_subject3 = document.createElement( 'td' );
        d_total = document.createElement( 'td' );
        d_average = document.createElement( 'td' );
        d_grade = document.createElement( 'td' );
        d_rank = document.createElement( 'td' );
        d_name.textContent = `${student.name}`;
        parent.appendChild( d_name );
        d_subject1.textContent = `${student.subjects[0]}`;
        parent.appendChild( d_subject1 );
        d_subject2.textContent = `${student.subjects[1]}`;
        parent.appendChild( d_subject2 );
        d_subject3.textContent = `${student.subjects[0]}`;
        parent.appendChild( d_subject3 );
        d_total.textContent = `${student.total}`;
        parent.appendChild( d_total );
        d_average.textContent = `${student.average}`;
        parent.appendChild( d_average );
        d_grade.textContent = `${student.grade}`;
        parent.appendChild( d_grade );
        d_rank.textContent = `${student.rank}`;
        parent.appendChild( d_rank );

        row = document.createElement( 'tr' );
        parent.appendChild( row );

        console.log( `${student.name} ${student.subjects[0]} ${student.subjects[1]} ${student.subjects[0]}\
                      ${student.total} ${student.average} ${student.grade} ${student.rank}` );
    }
}
