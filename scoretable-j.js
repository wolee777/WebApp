// 상수 선언
const MAX_SUBJECTS = 3;
const EXCELLENT = 90;
const FAIL = 60;
const MAX_SUBJECT = 100;
const MIN_SUBJECT = 0;

// 성적 테이블
let students = [];
let sortStudents = [];

$( document ).ready( function() {
    $( "#btn-search" ).click( function() {
        search_student()
    });
    $( "#btn-save" ).click( function() {
        input_student()
    });
});

// 학생 등록
function input_student() {
    let name = $( "#txt-name" ).val();
    let subject1 = parseInt( $( "#txt-subject1" ).val(), 10 );
    let subject2 = parseInt( $( "#txt-subject2" ).val(), 10 );
    let subject3 = parseInt( $( "#txt-subject3" ).val(), 10 );

    if ( ( name.length > 0 ) &&
         ( subject1 >= MIN_SUBJECT && subject1 <= MAX_SUBJECT ) &&
         ( subject2 >= MIN_SUBJECT && subject2 <= MAX_SUBJECT ) &&
         ( subject3 >= MIN_SUBJECT && subject3 <= MAX_SUBJECT ) ) {
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
        calculate( student );

        students.push( student );
        calculate_rank();

        sortStudents.push( students[ students.length - 1] );
        //sortStudents.sort( ( x, y ) => x.average < y.average );
        sort_average( sortStudents )
        console.log( sortStudents );

        printScoreTable();
    } else {
        window.alert( "Error : 이름이 없거나 과목 점수 입력 오류!!!" );
    }
    $( "input[type='text']" ).val( "" );
    $( "#txt-name" ).focus();
}

function search_student() {
    let txtName = $( 'txt-name' ).val();
    let sortNameStudents = [];
    let searchResult = [];
    let searchIndex;

    if ( students.length > 0 && txtName.length > 0 ) {
        for ( let student of students ) {
            sortNameStudents.push( student );
        }
        //sortNameStudents.sort( ( x, y ) => x.name > y.name );
        sort_name( sortNameStudents );
        console.log( sortNameStudents );

        searchIndex = sortNameStudents.findIndex( o => o.name === txtName );

        while ( searchIndex !== "undefined" ) {
            searchResult.push( sortNameStudents[ searchIndex++ ] );
            console.log( sortNameStudents[searchIndex] );
            while ( sortNameStudents[searchIndex]["name"] === txtName ) {
                searchResult.push( sortNameStudents[ searchIndex++ ] );
            }
            break;
        }

        if ( searchResult.length > 0 ) {
            const parentInput = $( 'scoretable-input' );
            const parentAverage = $( 'scoretable-average' );

            clearTable( parentInput, parentAverage );
            printTableHeader( parentInput, "성적 일람표(검색결과)" );
            for ( let student of searchResult ) {
                printRowData( parentInput, student );
            }
        } else {
            window.alert( `Error : ${txtName} not found!!!` );
            console.log( "data not found!!!" );
        }
        $( 'txt-name' ).val( "" );
        $( 'txt-name' ).focus();
    } else {
        window.alert( "Error : 이름이 없거나 학생 정보가 없습니다.!!!" );
        $( 'txt-name' ).val( "" );
        $( 'txt-name' ).focus();
    }
}

// 학생 성적 계산
function calculate( student ) {
    for ( let subject of student["subjects"] ) {
        student["total"] += subject;
    }
    student["average"] = student["total"] / MAX_SUBJECTS;
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

function sort_name( students ) {
    const maxSort = students.length - 1;
    let k;

    for ( let i = 0; i < maxSort; ++i ) {
        k = i;
        for ( let j = i + 1; j < students.length; ++j ) {
            if ( students[k].name > students[j].name ) {
                k = j;
            }
        }

        if ( i != k ) {
            [ students[i], students[k] ] = [ students[k], students[i] ];
        }
    }
}

// 성적 일람표 출력
function clearTable( parentInput, parentAverage ) {
    while ( parentInput.hasChildNodes() ) {
        parentInput.removeChild( parentInput.firstChild );
    }

    while ( parentAverage.hasChildNodes() ) {
        parentAverage.removeChild( parentAverage.firstChild );
    }
}

function printTableHeader( parent, title ) {
    $caption = $( `<caption>${title}</caption>` );
    $( `#${parent}` ).append( $caption );

    $header = $( "<th>이름</th><th>과목1</th><th>과목2</th><th>과목2</th><th>총점</th><th>평균</th><th>평가</th><th>석차</th>" );
    $( `#${parent}` ).append( $header );
    $( `#${parent}` ).append( "<tr></tr>" );
}

function printRowData( parent, student ) {
    $( `#${parent}`).append( `<td>${student.name}</td>` );
    $( `#${parent}`).append( `<td>${student.subjects[0]}</td>` );
    $( `#${parent}`).append( `<td>${student.subjects[1]}</td>` );
    $( `#${parent}`).append( `<td>${student.subjects[2]}</td>` );
    $( `#${parent}`).append( `<td>${student.total}</td>` );
    $( `#${parent}`).append( `<td>${student.average}</td>` );
    $( `#${parent}`).append( `<td>${student.grade}</td>` );
    $( `#${parent}`).append( `<td>${student.rank}</td>` );
    $( `#${parent}` ).append( "<tr></tr>" );
}

function printScoreTable() {
    const parentInput = $( 'scoretable-input' );
    const parentAverage = $( 'scoretable-average' );

    clearTable( parentInput, parentAverage );

    // 입력순
    printTableHeader( "scoretable-input", "성적 일람표(입력순)" );
    for ( let student of students ) {
        printRowData( "scoretable-input", student );
    }

    // 평균순
    printTableHeader( "scoretable-average", "성적 일람표(평균순)" );
    for ( let student of sortStudents ) {
        printRowData( "scoretable-average", student );
    }
}
