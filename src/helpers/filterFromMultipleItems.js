// Filters from edges and node with a specific key
export default (dataGroup, key, value) => dataGroup.edges.filter(data => data.node[key] === value)[0].node;