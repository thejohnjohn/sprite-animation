import { Lightning, Utils } from '@lightningjs/sdk'

let XAxis = 960
let YAxis = 600

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
        mountX: 0,
        mountY: 0,
        x: XAxis,
        y: YAxis,
        transitions: { x: { duration: 2, timingFunction: 'ease' }, color: { duration: 1 } },
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: YAxis + 120,
        text: {
          text: "Let's start Building!",
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    }
  }

  _active() {
    setInterval(() => {
      this.tag('Background')
        .animation({
          duration: 1,
          repeat: 0,
          actions: [
            {
              t: '',
              p: 'color',
              v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xffffffff } },
            },
          ],
        })
        .start()

      this.tag('Logo')
        .animation({
          duration: 1,
          repeat: 0,
          actions: [
            {
              t: '',
              p: 'color',
              v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xffffffff } },
            },
            {
              t: '',
              p: 'x',
              v: {
                0: { v: XAxis },
                0.5: {
                  v: () => {
                    return XAxis
                  },
                },
              },
            },
            {
              t: '',
              p: 'y',
              v: {
                0: { v: YAxis },
                0.5: {
                  v: () => {
                    return YAxis
                  },
                },
              },
            },
          ],
        })
        .start()

      XAxis = Math.floor(Math.random() * 960)
      YAxis = Math.floor(Math.random() * 600)
    }, 2000)
  }
}
