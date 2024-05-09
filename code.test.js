const { allPairsShortestPaths } = require('./code');

describe('FW Alg', () => {
    test('Simple graph', () => {
        const graph = {
            A: { B: 1, C: 4 },
            B: { A: 1, C: 2, D: 5 },
            C: { A: 4, B: 2, D: 1 },
            D: { B: 5, C: 1 }
        };
        
        const result = allPairsShortestPaths(graph);
        const expected = [
            [0, 1, 3, 4],
            [1, 0, 2, 3],
            [3, 2, 0, 1],
            [4, 3, 1, 0]
        ];
        
        expect(result).toEqual(expected);
    });

    test('Graph w no edges', () => {
        const graph = {
            A: {},
            B: {},
            C: {},
            D: {}
        };
        
        const result = allPairsShortestPaths(graph);
        const expected = [
            [0, Infinity, Infinity, Infinity],
            [Infinity, 0, Infinity, Infinity],
            [Infinity, Infinity, 0, Infinity],
            [Infinity, Infinity, Infinity, 0]
        ];
        
        expect(result).toEqual(expected);
    });

    test('Graph w negative weights no negative cycles', () => {
        const graph = {
            A: { B: 3, C: 8, E: -4 },
            B: { D: 1, E: 7 },
            C: { B: 4 },
            D: { A: 2, C: -5 },
            E: { D: 6 }
        };
        
        const result = allPairsShortestPaths(graph);
        const expected = [
            [0, 1, -3, 2, -4],
            [3, 0, -4, 1, -1],
            [7, 4, 0, 5, 3],
            [2, -1, -5, 0, -2],
            [8, 5, 1, 6, 0]
        ];
        
        expect(result).toEqual(expected);
    });
});
