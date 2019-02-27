var foo = new Object()

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log( typeof foo );
console.log( foo );
console.log( "----------------------------------------" );

var foo1 = {
	name : 'foo',
	age : 30,
	gender : 'male'
};

console.log( typeof foo1 );
console.log( foo1 );
console.log( "----------------------------------------" );

var Person = function (name) {
	this.name = name;
};

foo = new Person( 'foo' );
console.log( foo.name );
console.log( "----------------------------------------" );

function Person2( name, age, gender, position ) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var bar = new Person2( 'bar', 33, 'woman' );
console.dir( bar );

var baz = new Person2( 'baz', 25, 'woman' );
console.dir( baz );
console.log( "----------------------------------------" );

class Person3 {
    constructor( name, age, gender ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

bar = new Person3( 'bar', 33, 'woman' );
baz = new Person3( 'baz', 25, 'woman' );
console.dir( bar );
console.dir( baz );
console.log( "----------------------------------------" );

class Car {
    constructor( make, model ) {
        this.make = make;
        this.model = model;
        this._userGears = [ 'P', 'N', 'R', 'D' ];
        this._userGear = this._userGears[0];
    }

    get_userGear() {
        return this._userGear;
    }

    set_userGear( value ) {
        if ( this._userGears.indexOf( gear ) < 0 ) {
            console.log( `Error : Invalid gear ${gear}` );
        }
        this._userGear = value;
    }

    shift( gear ) {
        if ( this._userGears.indexOf( gear ) < 0 ) {
            console.log( `Error : Invalid gear ${gear}` );
        }
        this._userGear = gear;
    }
}

var car1 = new Car( "Tesla", "Model S" );
var car2 = new Car( "Mazda", "3i" );

car1.shift( 'D' );
car2.shift( 'R' );

console.log( car1.get_userGear() );
console.log( car2.get_userGear() );
console.log( "----------------------------------------" );

console.log( "----------------------------------------" );
foo = {
	name : 'foo',
	major : 'computer science'
};

console.log( foo.name );
console.log( foo['name'] );
console.log( foo.neckname );

foo.major = 'electronics engineering';
console.log( foo.major );
console.log( foo['major'] );

foo.age = 30;
console.log( foo.age );

foo['full-name'] = 'foo bar';
console.log( foo['full-name'] );
console.log( "----------------------------------------" );

foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

var prop;
for ( prop in foo ) {
	console.log( prop, foo[prop] );
}

foo1 = {
	name : 'foo',
	nickname : 'babo'
};

console.log( foo1.nickname );
delete foo1.nickname;
console.log( foo1.nickname );

delete foo1;
console.log( foo1.name );
