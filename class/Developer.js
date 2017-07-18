(function strict() {
    define([
        '../class/Model',
    ], Developer);

    function Developer(Model) {
        console.log('HERE');
        return class Developer extends Model {
            constructor(name, timePerDay) {
                super();
                console.log('this', this, name, timePerDay);
                this.name = name;
                this.timePerDay = timePerDay;
            }

            sayYourName() {
                console.log('My name is', this.name);
                console.log('My id is', this.uuid);
            }
        };
    }
})();

    