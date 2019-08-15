function theBeatlesPlay(muscician, instrument) {
  var list;
  for (var i=0; i<muscician.length; i++) {
    list.push(muscician[i] + " plays " + instruments[i]);
  }
  return list;
}