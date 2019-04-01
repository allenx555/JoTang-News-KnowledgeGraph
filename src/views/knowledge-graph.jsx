import React, { Component } from 'react';
import G6 from 'g6';
import createG6 from 'g6-react';
 
const data = {
    nodes: [{
      id: 'node1',
      x: 100,
      y: 200
   },{
      id: 'node2',
      x: 300,
      y: 200
   }],
    edges: [{
      source: 'node1',
      target: 'node2'
   }]
};
 
const graph = new G6.Graph({
    container: 'mountNode',
    width: 500,
    height: 500
});

graph.data(data);
graph.render();