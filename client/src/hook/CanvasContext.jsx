import { createContext } from "react";

export const CanvasContext = createContext({
  nodes: {},
  setNodes: () => {},
  mouseState: "",
  setMouseState: () => {},
  position: [0, 0],
  setSvgPosition: () => {},
  scale: 1,
  setSvgScale: () => {},
  size: {},
  setSize: () => {},
  locked: false,
  setLocked: () => {},
  floor: {},
  setFloor: () => {},
  building: {},
  setBuilding: () => {},
  nodeJoin: null,
  setNodeJoin: () => {},
  state: "view"
})