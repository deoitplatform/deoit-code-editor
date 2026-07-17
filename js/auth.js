var _supabase = supabase.createClient(
  'https://oujwlzywbhyntcehgbcx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91andsenl3Ymh5bnRjZWhnYmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMDg0NTYsImV4cCI6MjA5OTg4NDQ1Nn0._kErT8JtI0ifd2MSPg2VI8AhKiql_MvjvD3_8HEXqS8'
);

var _currentSupabaseUser = null;

_supabase.auth.onAuthStateChange(function(_event, session) {
  _currentSupabaseUser = session ? session.user : null;
});

_supabase.auth.getUser().then(function(ref) {
  _currentSupabaseUser = ref.data ? ref.data.user : null;
});

function signInGoogle() {
  return _supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + '/pages/editor' }
  });
}

function signInGithub() {
  return _supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: window.location.origin + '/pages/editor' }
  });
}

function signOut() {
  _currentSupabaseUser = null;
  return _supabase.auth.signOut();
}

function onAuth(cb) {
  _supabase.auth.onAuthStateChange(function(_event, session) {
    _currentSupabaseUser = session ? session.user : null;
    cb(_currentSupabaseUser);
  });
  _supabase.auth.getUser().then(function(ref) {
    var user = ref.data ? ref.data.user : null;
    _currentSupabaseUser = user;
    cb(user);
  });
}

function getUser() {
  return _currentSupabaseUser;
}
