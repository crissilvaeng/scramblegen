import * as SRVisualizer from 'sr-visualizer'
import { Scrambow } from 'scrambow'

const generator = new Scrambow()
const scramble = generator.get(1)[0].scramble_string

SRVisualizer.cubeSVG(document.getElementById('container'), {
  width: 250,
  height: 250,
  backgroundColor: 'black',
  algorithm: scramble
})

document.getElementById('scramble-alg').innerText = scramble
