// Consts
module.exports = {
    SIZE: 40,
	get SIZE_WITH_BORDER() {
        return this.SIZE + 1;
    },
	BORDER_CHAR: '+',
    LIVE_CHAR: 'X',
    DEAD_CHAR: ' ',
    FRAME_RATE: 1000,
    LIFE_PROB: 0.1,
};

