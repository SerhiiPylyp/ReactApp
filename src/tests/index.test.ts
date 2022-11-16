import { generateUniqueId } from "../to-do/helpers";

describe('Helpers tests', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();
    const id3 = generateUniqueId();
    const id4 = generateUniqueId();

    test('generateUniqueId test', () => {
        expect([id1, id2, id3].includes(id4)).toEqual(false)
    })
})
