module.exports = {
    params: {
      designator: 'MCU',
      side: 'F',
      DPLUSIN: {type: 'net', value: 'DPLUSIN'},
      DNEGIN: {type: 'net', value: 'DNEGIN'},
      DPLUSOUT: {type: 'net', value: 'DPLUSOUT'},
      DNEGOUT: {type: 'net', value: 'DNEGOUT'},
      GND: {type: 'net', value: 'GND'},
      VBUS: {type: 'net', value: 'VBUS'}
    },
    body: p => { 
      const front =`
        (module SOT-23-6_Handsoldering (layer F.Cu) (tedit 5A02FF57)
          
          ${p.at /* parametric position */}
          (fp_line (start -0.9 1.61) (end 0.9 1.61) (layer F.SilkS) (width 0.12))
          (fp_line (start 0.9 -1.61) (end -2.05 -1.61) (layer F.SilkS) (width 0.12))
          (fp_line (start -2.4 1.8) (end -2.4 -1.8) (layer F.CrtYd) (width 0.05))
          (fp_line (start 2.4 1.8) (end -2.4 1.8) (layer F.CrtYd) (width 0.05))
          (fp_line (start 2.4 -1.8) (end 2.4 1.8) (layer F.CrtYd) (width 0.05))
          (fp_line (start -2.4 -1.8) (end 2.4 -1.8) (layer F.CrtYd) (width 0.05))
          (fp_line (start -0.9 -0.9) (end -0.25 -1.55) (layer F.Fab) (width 0.1))
          (fp_line (start 0.9 -1.55) (end -0.25 -1.55) (layer F.Fab) (width 0.1))
          (fp_line (start -0.9 -0.9) (end -0.9 1.55) (layer F.Fab) (width 0.1))
          (fp_line (start 0.9 1.55) (end -0.9 1.55) (layer F.Fab) (width 0.1))
          (fp_line (start 0.9 -1.55) (end 0.9 1.55) (layer F.Fab) (width 0.1))
          (pad 1 smd rect (at -1.35 -0.95 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.DPLUSIN})
          (pad 2 smd rect (at -1.35 0 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.GND})
          (pad 3 smd rect (at -1.35 0.95 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.DNEGIN})
          (pad 4 smd rect (at 1.35 0.95 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.DNEGOUT})
          (pad 6 smd rect (at 1.35 -0.95 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.DPLUSOUT})
          (pad 5 smd rect (at 1.35 0 ${p.rot}) (size 1.56 0.65) (layers F.Cu F.Paste F.Mask) ${p.VBUS})
        )
      `
      const back =`
        (module SOT-23-6_Handsoldering (layer B.Cu) (tedit 5A02FF57)
            
        ${p.at /* parametric position */}
        (fp_line (start -0.9 1.61) (end 0.9 1.61) (layer B.SilkS) (width 0.12))
        (fp_line (start -0.9 -1.61) (end 2.05 -1.61) (layer B.SilkS) (width 0.12))

        (fp_line (start -2.4 1.8) (end -2.4 -1.8) (layer B.CrtYd) (width 0.05))
        (fp_line (start 2.4 1.8) (end -2.4 1.8) (layer B.CrtYd) (width 0.05))
        (fp_line (start 2.4 -1.8) (end 2.4 1.8) (layer B.CrtYd) (width 0.05))
        (fp_line (start -2.4 -1.8) (end 2.4 -1.8) (layer B.CrtYd) (width 0.05))

        (fp_line (start 0.9 -0.9) (end 0.25 -1.55) (layer B.Fab) (width 0.1))
        (fp_line (start -0.9 -1.55) (end 0.25 -1.55) (layer B.Fab) (width 0.1))
        (fp_line (start 0.9 -0.9) (end 0.9 1.55) (layer B.Fab) (width 0.1))
        (fp_line (start -0.9 1.55) (end 0.9 1.55) (layer B.Fab) (width 0.1))
        (fp_line (start -0.9 -1.55) (end -0.9 1.55) (layer B.Fab) (width 0.1))

        (pad 6 smd rect (at -1.35 -0.95 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.DPLUSOUT})
        (pad 5 smd rect (at -1.35 0 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.VBUS})
        (pad 4 smd rect (at -1.35 0.95 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.DNEGOUT})
        (pad 3 smd rect (at 1.35 0.95 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.DNEGIN})
        (pad 1 smd rect (at 1.35 -0.95 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.DPLUSIN})
        (pad 2 smd rect (at 1.35 0 ${p.rot}) (size 1.56 0.65) (layers B.Cu B.Paste B.Mask) ${p.GND})
      )
    `
    if(p.side == 'B') {
      return `${back}`
    }
    else {
      return `${front}`
    }
  }
}
