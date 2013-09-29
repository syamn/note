// Table definition
module.exports = function init(Sequelize, db){
    var User = db.define('users_test', {
            user_id: { type: Sequelize.INTEGER(8).UNSIGNED, autoIncrement: true, allowNull: false, primaryKey: true },
            email: { type: Sequelize.STRING(256), defaultValue: null },
            password: { type: Sequelize.STRING(256), defaultValue: null },
            login_key: { type: Sequelize.STRING(256), defaultValue: null },
            created: { type: Sequelize.DATE, allowNull: false },
        }, {
            timestamps: false,
            underscored: true
        }
    );

    // Create table if not exists
    // User.sync();

    return User;
}
