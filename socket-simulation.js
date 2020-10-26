let stock = {
    random0: function() {
        return Math.random() > 0.5 ? 1 : -1;
    },

    getPrice: function (input) {
        let start = input.startingPoint;
        let rate = 1.002;
        let variance = 0.2;
        let total = start * rate + variance * stock.random0();

        if (total > 1000) {
            return total - 750;
        }
        return total;
    }
};

module.exports = stock;
