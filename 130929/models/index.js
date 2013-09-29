var Sequelize = require('sequelize');

var db = null;
var models = new Object();

/**
 * 指定されたモデルをロードしてオブジェクトに展開する
 * @param modelName モデル名
 */
function loadModel(modelName){
    models[modelName.toLowerCase()] = require('./' + modelName)(Sequelize, db);
}

/**
 * 外部に公開する初期化用メソッド
 * Sequelizeのインスタンス生成と、全モデルのロードを受け持つ
 * (app.jsでrequireした後1度のみコールする)
 */
exports.initialize = function initialize(){
    // Create new Sequelize instance
    var dbConfig = require.main.exports.config('DB');
    db = new Sequelize(dbConfig.NAME, dbConfig.USER, dbConfig.PASS, { host: dbConfig.HOST, port:dbConfig.PORT });

    // Load all models // TODO: ディレクトリ内を走査して自動で全モデルをロード?
    loadModel('user');

    console.log('Database initialized successfully.');
}

/**
 * モデルを取得するgetterメソッド
 * @param name 取得するモデル名 (大文字小文字を問わない)
 * @throws Error ロードされていないモデルを取得しようとした場合
 * @returns instance
 */
exports.get = function get(name){
    var retval = models[name.toLowerCase()];
    if (retval === void 0 || retval === null){
        throw new Error('Failed to get model ' + name + ': model not loaded');
    }
    return retval;
}

/**
 * Sequelizeインスタンスを返す
 * @returns Sequelizeインスタンス (初期化されていない場合にnull)
 */
exports.getDatabase = function getDatabase(){
    return db;
}
