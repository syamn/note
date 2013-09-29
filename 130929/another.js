// Userモデルを外のモジュールから使うテスト

var user = require.main.exports.models('user');

console.log('now searching..');
models('user').find({
    where: {user_id: 1}
}).success(function(user){
    console.log(user);
});
