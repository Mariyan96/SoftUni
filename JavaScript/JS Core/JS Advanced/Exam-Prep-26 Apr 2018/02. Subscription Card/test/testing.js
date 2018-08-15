let expect = require('chai').expect;
const SubscriptionCard =require('../codeToTest');


describe('SubscriptionCardTest',function () {
    describe('Constructor tests',function () {
        it('should initzialised correctly',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
        })
    });
    describe('Blocking test',function () {
        it('should return false for new object',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.be.equal(false);
            expect(card._subscriptions.length).to.be.equal(0);
        })
        it('should return true for blocking',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        })
        it('should return false for blocking and unblocking',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock()
            expect(card.isBlocked).to.be.equal(false);
        })
        it('should return false for blocking and unblocking',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock()
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        })
    });
    describe('add subscription test',function () {
        it('should be valid',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1);
            expect(card._subscriptions[0].line).to.be.equal('120');
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
        });
        it('should be valid',function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(2);
            expect(card._subscriptions[0].line).to.be.equal('120');
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
            expect(card._subscriptions[1].line).to.be.equal('*');
            expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'));
            expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'));
        })
    })
    describe('is valid tests',function () {
        it('should be valid', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(false);
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true);
            expect(card.isValid('120', new Date('2018-05-22'))).to.be.equal(false);
            expect(card.isValid('121', new Date('2018-04-22'))).to.be.equal(false);
        })
        it('should be valid', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('2112', new Date('2018-04-22'))).to.be.equal(true);
            expect(card.isValid('1251', new Date('2018-04-21'))).to.be.equal(false);
            expect(card.isValid('12531', new Date('2018-05-21'))).to.be.equal(true);
            expect(card.isValid('15321', new Date('2018-05-22'))).to.be.equal(false);
        })
        it('should be valid', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block()
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(false);
        })
    })
    describe('is valid tests',function () {
        it('should be valid', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName="test";
            card.lastName="test";
            card.SSN="test";
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
        })
    })
});