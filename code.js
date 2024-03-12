function convertToAdjList(adjMatrix) {

    adjList = [];
    for (let vert = 0; vert < adjMatrix.length; vert++) {
        adjList[vert] = [];
        for (let hori = 0; hori < adjMatrix[vert].length; hori++) {
            if (adjMatrix[vert][hori] == 1) { 
                adjList[vert].push(hori);
               }
        } 
    }
    return adjList;
}