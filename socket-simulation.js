let stock = {
    random0: function() {
        return Math.random() > 0.5 ? 1 : -1;
    },

    getPrice: function (input) {
        let start = input.startingPoint;
        let rate = 1.002;
        let variance = 0.5;

        return start * rate + variance * stock.random0();
    }
};

module.exports = stock;
