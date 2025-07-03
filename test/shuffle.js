import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

describe("shuffle", () => {
    it("must perform rearranging of the array elements", () => {
        const array = [11, 4, 9, 5, 3];
        const shuffled = shuffle(array);
        expect(shuffled.sort()).to.deep.equal(array.slice().sort());
        expect(shuffled).to.have.lengthOf(array.length);
        const isShuffled = array.every(
            (val, index) => val === shuffled[index]
        );
        expect(isShuffled).to.be.false;
    });
});
