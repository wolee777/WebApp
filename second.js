var r = 2;
console.log( `\nr = ${r}` );

const r1 = r++ + r++;
console.log( `r1 = ${r1}` );
console.log( `r = ${r}` );

const r2 = ++r + ++r;
console.log( `r2 = ${r2} ` );
console.log( `r = ${r}` );

const r3 = r++ + ++r;
console.log( `r3 = ${r3} ` );
console.log( `r = ${r}` );

const r4 = ++r + r++;
console.log( `r4 = ${r4} ` );
console.log( `r = ${r}\n` );
console.log( "----------------------------------------" );
console.log();

r = 10;
console.log( `r = ${r}` );
var r5 = r-- + r--;
console.log( `r5 = ${r5} ` );
console.log( `r = ${r}` );
var r6 = --r + --r;
console.log( `r6 = ${r6} ` );
console.log( `r = ${r}` );
var r7 = r-- + --r;
console.log( `r7 = ${r7} ` );
console.log( `r = ${r}` );
var r8 = --r + r--;
console.log( `r8 = ${r8} ` );
console.log( `r = ${r}` );
x = 3;
y = null;
x += y = 6 * 5 / 2;
console.log( `\nx = ${x} y = ${y}` );
console.log( "----------------------------------------" );
console.log();

var n = 5;
s = "5";
console.log( '\nn === "5" ==> ' + ( n === s ) );
console.log( '5 !== "5" ==> ' + ( n !== s ) );
console.log( '5 === Number( "5" ) ==> ' + ( n === Number( s ) ) );
console.log( '5 !== Number( "5" ) ==> ' + ( n !== Number( s ) ) );
console.log( '5 == "5" ==> ' + ( n == s ) );
console.log( '5 != "5" ==> ' + ( n != s ) );

var a = { name: "an object" };
var b = { name: "an object" };
console.log( `\n${a} === ${b} ==> ` );
console.log( a === b );
console.log( `\n${a} !== ${b} ==> ` );
console.log( a !== b );
console.log( `\n${a} == ${b} ==> ` );
console.log( a == b );
console.log( `\n${a} != ${b} ==> ` );
console.log( a != b );
console.log( "----------------------------------------" );
console.log();

console.log( "\n" + ( 3 > 5 ) );
console.log( 3 >= 5 );
console.log( 3 < 5 );
console.log( 3 <= 5 );
console.log( 5 > 5 );
console.log( 5 >= 5 );
console.log( 5 < 5 );
console.log( 5 <= 5 );

n = 0;
while ( true ) {
    n += 0.1;
    //if ( n == 0.3 ) {
    if ( Math.abs( n - 0.3 ) < Number.EPSILON ) {
        break;
    }
}
console.log( `\nStoped at ${n}\n` );
console.log( "----------------------------------------" );
console.log();

console.log( 3 + 5 + "8" );
console.log( "3" + 5 + 8 );

var skipIt = true;
x = 0;
var result = skipIt || x++;
console.log( `\nskipIt = ${skipIt}` );
console.log( `x = ${x}` );
console.log( `result = ${result}` );
console.log( `x = ${x}` );
var doIt = false;
result = doIt && x++;
console.log( `\ndoIt = ${doIt}` );
console.log( `x = ${x}` );
console.log( `result = ${result}` );
console.log( `x = ${x}` );
console.log( "----------------------------------------" );
console.log();

var suppliedOptions = {};
var options = suppliedOptions || { name: "Default" };
console.log( "\noptions = " + options );
suppliedOptions = null;
options = suppliedOptions || { name: "Default" };
console.log( "\noptions = " + options );

doIt = false;
result = doIt ? "Did it!" : "Didn't do it";
console.log( `\nresult = ${result}` );

var x = 0;
var y = 10;
var z;
z = ( x++, y++ );
console.log( `\nx = ${x}` );
console.log( `y = ${y}` );
console.log( `z = ${z}` );
console.log( "----------------------------------------" );
console.log();

n = 22;
console.log( `\n${n} >> 1` );
console.log( n >> 1 );
console.log( `\n${n} >>> 1` );
console.log( n >>> 1 );

console.log( `\n${n} = ~${n}` );
n = ~n;
console.log( `${n} = ~${n}` );

n++;
console.log( `\n${n}++` );

console.log( `\n${n} >> 1` );
console.log( n >> 1 );

console.log( `\n${n} >>> 1` );
console.log( n >>> 1 );
console.log( "----------------------------------------" );
console.log();

const FLAG_EXECUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;

var p = FLAG_READ | FLAG_WRITE;
var hasWrite = p & FLAG_WRITE;
var hasExecute = p & FLAG_EXECUTE;
console.log( `\np = ${p}` );
console.log( `hasWrite = ${hasWrite}` );
console.log( `hasExecute = ${hasExecute}` );
p = p ^ FLAG_WRITE;
console.log( `\np = ${p}` );
p = p ^ FLAG_WRITE;
console.log( `\np = ${p}` );
const hasReadOrExecute = p & ( FLAG_READ | FLAG_EXECUTE );
const hasReadAndExecute = p & ( FLAG_READ | FLAG_EXECUTE ) === (FLAG_READ | FLAG_EXECUTE);

console.log( `\nhasReadOrExecute = ${hasReadOrExecute}` );
console.log( `hasReadAndExecute = ${hasReadAndExecute}` );
console.log( "----------------------------------------" );
console.log();

console.log( "\ntypeof undefined => " + ( typeof undefind ) );
console.log( "typeof null => " + ( typeof null ) );
console.log( "typeof {} => " + ( typeof {} ) );
console.log( "typeof [] => " + ( typeof [] ) );
console.log( "typeof true => " + ( typeof true ) );
console.log( "typeof 1 => " + ( typeof 1 ) );
console.log( 'typeof "" => ' + ( typeof "" ) );
console.log( "typeof Symbol() => " + ( typeof Symbol() ) );             // ES6
console.log( "typeof function() {} => " + ( typeof function() {} ) );
var v, v2;
v = v2 = 9.8;
console.log( `\nv = ${v}` );
console.log( `v2 = ${v2}` );
var nums = [ 3, 5, 15, 7, 5 ];
var i = 0;
while ( ( n = nums[i] ) < 10 && i++ < nums.length ) {
    console.log( `Number less than 10: ${n}.` );
}
console.log( `Number greater than 10 found: ${n}.` );
console.log( `${nums.length - i - 1} numbers remain` );
console.log( "----------------------------------------" );
console.log();

var obj = { b1: 2, c1: 3, d1: 4 };
var { a1, b1, c1 } = obj;   //  변수 선언 및 촤기화( 해체 할당 )
console.log( `\na1 = ${a1}\tb1 = ${b1}\tc1 = ${c1}` );
var obj2 = { b2: 2, c2: 3, d2: 4 };
var a2, b2, c2;             // 변수 선언
( { a2, b2, c2 } = obj2 );  // 값 치환( 해체 할당 )
console.log( `\na2 = ${a2}\tb2 = ${b2}\tc2 = ${c2}` );
var arr = [ 1, 2, 3 ];
var [ x5, y5 ] = arr;
console.log( `\nx5 = ${x5}\ty5 = ${y5}` );
var arr2 = [ 1, 2, 3, 4, 5 ];
var [ x6, y6, ...rest ] = arr2;
console.log( `\nx6 = ${x6}\ty6 = ${y6}\trest = ${rest}` );
var a5 = 5, b5 = 10;
console.log( `\na5 = ${a5}\tb5 = ${b5}` );
[ a5, b5 ] = [ b5, a5 ];
console.log( `\na5 = ${a5}\tb5 = ${b5}` );
console.log( "----------------------------------------" );
console.log();

var totalVet;
if ( new Date().getDay() === 3 ) {
    totalVet = 1;
} else {
    totalVet = 2;
}
console.log( `totalVet : ${totalVet}` );

for ( var temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp ) {
    console.log( j );
}
console.log();

var s = '3';
for ( ; s.length < 10; s = ' ' + s );
console.log( s );

for ( var x = 0.2; x < 3.0; x += 0.2 ) {
    console.log( x );
}

var player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for ( var prop in player ) {
    if ( !player.hasOwnProperty( prop ) ) {
        continue;
    }
    console.log( prop + ': ' + player[ prop ] );
}
console.log();

var hand = [ 5, 6, 7, 8 ];
for ( var ii = 0; ii < hand.length; ++ii ) {
    console.log( `face : ${hand[ii]}` );
}
console.log();

for ( var face of hand ) {
    console.log( `face : ${face}` );
}

var select = 1;
if ( select === 1 ) {
    console.log( "First" );
} else if ( select === 2 ) {
    console.log( "Second" );
} else {
    console.log( "Other..." );
}

switch ( select ) {
    case 1:
        console.log( "First" );     break;
    case 2:
        console.log( "Second" );    break;
    default:
        console.log( "Other..." );  break;
}
