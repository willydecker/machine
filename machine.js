var createObject, extendObject,
  sayHello, sayText, 
  makeMammal,
  catPrototype, monkeyPrototype, donkeyPrototype,
  makeCat, makeMonkey, makeDonkey,
  garfieldCat, boringDog, abeMonkey, assDonkey
  ;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};

// ** object methods...
sayHello = function () {
  print( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  print( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeMammal = function ( arg_map ) {
  var mammal = {
    is_warm_blooded : true,
    has_fur : true,
    leg_count : 4,
    has_live_birth : true,
    hello_text : 'grunt',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( mammal, arg_map );
  return mammal;
  };

// ** use mammal constructor to create cat prototype
catPrototype = makeMammal({
  has_whiskers : true,
  hello_text : 'meow'
});

//monkey proto
monkeyPrototype = makeMammal({
  has_thumbs : true,
  hello_text : 'oo-oo-ah-ah'
});

//donkey proto
donkeyPrototype = makeMammal({
  has_hooves : true,
  hello_text : 'erhhh'
});

// ** cat constructor
makeCat = function( arg_map ) {
  var cat = Object.create( catPrototype );
  extendObject( cat, arg_map );
  return cat;
};

//monkey constuct
makeMonkey = function( arg_map ) {
  var monkey = Object.create( monkeyPrototype );
  extendObject( monkey, arg_map );
  return monkey;
}

//donkey constuct
makeDonkey = function( arg_map ) {
  var donkey = Object.create( donkeyPrototype );
  extendObject( donkey, arg_map );
  return donkey;
}

// ** cat instance
garfieldCat = makeCat({
  name : 'Garfield',
  weight_lbs : 8.6
  });

// another cat 
boringDog = makeCat({
  name : 'Boring Dog',
  favorite_game : 'Fetch and Hide'
});

// monkey
abeMonkey = makeMonkey({
  name : 'Abe",
  commmon_hobby : 'Solving Mysteries'
});

//donkey
assDonkey = makeDonkey({
  name : 'Ass',
  favorite_food : 'grass'
});

// ** cat instance method invocations
garfieldCat.say_hello();
garfieldCat.say_text('Purr...');
boringDog.say_hello();
abeMonkey.say_hello();
assDonkey.say_hello();
