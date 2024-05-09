function allPairsShortestPaths(graph) {
    const vertices = Object.keys(graph);
    const n = vertices.length;
    const dist = Array(n).fill(null).map(() => Array(n).fill(Infinity));
    
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0; 
        for (const neighbor in graph[vertices[i]]) {
            const j = vertices.indexOf(neighbor);
            dist[i][j] = graph[vertices[i]][neighbor];
        }
    }
    
    // FW alg
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}

module.exports = { allPairsShortestPaths };
