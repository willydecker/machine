//var createObject, extendObject,
  //sayHello, sayText, 
  //makeMammal,
  //catPrototype, monkeyPrototype, donkeyPrototype,
  //makeCat, makeMonkey, makeDonkey,
  //garfieldCat, boringDog, abeMonkey, assDonkey
  //;
  
var createObject, extendObject,
  soundMade, sayText,
  makeMachine,
  gravProto, antigravProto, //this is the vehicles following laws of gravity and not
  makeCar, makePlane,
  toyotaCar, lufthansaPlane, deltaPlane
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
soundMade = function () {
  print( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  print( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeMachine = function ( arg_map ) {
  var machine = {
    uses_gas : true,
    made_of_metal : true,
    has_engine : true,
    hello_text : 'VROOM',
    name : 'anonymous',
    sound_made : soundMade,
    say_text : sayText
    };
  extendObject( machine, arg_map );
  return machine;
  };

// ** use mammal constructor to create gravity prototype
gravProto = makeMachine({
  has_tires : true,
  hello_text : 'beep beep'
});

//plane proto
antigravProto = makeMachine({
  has_wings : true,
  hello_text : '*drops napalm*'
});

// ** car constructor
makeCar = function( arg_map ) {
  var car = Object.create( gravProto );
  extendObject( car, arg_map );
  return car;
};

//plane constuct
makePlane = function( arg_map ) {
  var plane = Object.create( antigravProto );
  extendObject( plane, arg_map );
  return plane;
};

// ** car instance
toyotaCar = makeCar({
  name : 'Toyota',
  breaks_often : true,
  lasts_forever : true,
  });

// lufthansa airlines
lufthansaPlane = makePlane({
  name : 'Lufthansa',
  leg_room : 1 // in feet
});

//delta airlines
deltaPlane = makePlane({
  name : 'Delta',
  service : "Great"
});

// ** car instance method invocations
toyotaCar.sound_made();
toyotaCar.say_text('I am a car!');
lufthansaPlane.sound_made();
lufthansaPlane.say_text('I am a plane!');
deltaPlane.sound_made();
deltaPlane.say_text('I am a plane too!');
