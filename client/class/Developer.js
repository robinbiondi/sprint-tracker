(function strict() {

    var Model = require('class/Model');
   
    /**
     * @class Developer
     * @extends Model
     * 
     */
    module.exports = class Developer extends Model {
        /**
         * 
         * @param {string} name 
         * @param {number} timePerDay 
         */
        constructor(name, timePerDay) {
            super();
            console.log('this', this, name, timePerDay);
            this.name = name;
            this.timePerDay = timePerDay;
        }
        /**
         * 
         * @param {string} name 
         */
        setName(name) {

            this.name = name;
        }

        setTimePerDay(timePerDay) {
            console.log('setTimePerDay', timePerDay);
            this.timePerDay = timePerDay;
        }

        sayYourName() {
            console.log('My name is', this.name);
            console.log('My id is', this.uuid);
        }
    };
})();

    