module.exports = {
    params: {
      designator: 'MCU',
      side: 'F',
      GND: {type: 'net', value: 'GND'},
      VBUS: {type: 'net', value: 'VBUS'},
      SBU2: {type: 'net', value: 'SBU2'},
      CC1: {type: 'net', value: 'CC1'},
      DN2: {type: 'net', value: 'DN2'},
      DP1: {type: 'net', value: 'DP1'},
      DN1: {type: 'net', value: 'DN1'},
      DP2: {type: 'net', value: 'DP2'},
      SBU1: {type: 'net', value: 'SBU1'},
      CC2: {type: 'net', value: 'CC2'}
    },
    body: p => { 
        const front =`
            (module "USB-C-12-Pin-MidMount" (layer F.Cu) (tedit 5ECE779E)
            
            ${p.at /* parametric position */}
            (fp_line (start 4.64 6.66) (end 4.64 0) (layer F.SilkS) (width 0.2))
            (fp_line (start -4.64 6.66) (end -4.64 0) (layer F.SilkS) (width 0.2))
            (fp_line (start -4.64 6.66) (end 4.64 6.66) (layer F.SilkS) (width 0.2))
            (fp_line (start 0 0) (end -4.64 0) (layer F.SilkS) (width 0.2))
            (fp_line (start 0 0) (end 4.64 0) (layer F.SilkS) (width 0.2))
            (pad "13" thru_hole oval (at 5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask))
            (pad "13" thru_hole oval (at -5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask))
            (pad "13" thru_hole oval (at -5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask))
            (pad "13" thru_hole oval (at 5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask))
            (pad "6" smd rect (at 0.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.DP1} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "7" smd rect (at -0.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.DN1} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "5" smd rect (at 0.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.DN2} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "8" smd rect (at -0.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.DP2} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "4" smd rect (at 1.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.CC1} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "3" smd rect (at 1.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.SBU2} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "10" smd rect (at -1.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.CC2} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "9" smd rect (at -1.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.SBU1} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "2" smd rect (at 2.45 7.235 ${p.rot}) (size 0.6 1.15) ${p.VBUS} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "1" smd rect (at 3.225 7.235 ${p.rot}) (size 0.6 1.15) ${p.GND} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "11" smd rect (at -2.45 7.235 ${p.rot}) (size 0.6 1.15) ${p.VBUS} (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "12" smd rect (at -3.225 7.235 ${p.rot}) (size 0.6 1.15) ${p.GND} (layers "F.Cu" "F.Paste" "F.Mask"))
          )
        `
        const back =`
        (module "USB-C-12-Pin-MidMount" (layer B.Cu) (tedit 5ECE779E)
              
          ${p.at /* parametric position */}
          (fp_line (start 4.64 6.66) (end 4.64 0) (layer B.SilkS) (width 0.2))
          (fp_line (start -4.64 6.66) (end -4.64 0) (layer B.SilkS) (width 0.2))
          (fp_line (start -4.64 6.66) (end 4.64 6.66) (layer B.SilkS) (width 0.2))
          (fp_line (start 0 0) (end -4.64 0) (layer B.SilkS) (width 0.2))
          (fp_line (start 0 0) (end 4.64 0) (layer B.SilkS) (width 0.2))
          (pad "13" thru_hole oval (at 5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask))
          (pad "13" thru_hole oval (at -5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask))
          (pad "13" thru_hole oval (at -5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask))
          (pad "13" thru_hole oval (at 5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask))

          (pad "7" smd rect (at 0.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.DN1} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "6" smd rect (at -0.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.DP1} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "8" smd rect (at 0.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.DP2} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "5" smd rect (at -0.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.DN2} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "9" smd rect (at 1.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.SBU1} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "10" smd rect (at 1.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.CC2} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "3" smd rect (at -1.75 7.235 ${p.rot}) (size 0.3 1.15) ${p.SBU2} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "4" smd rect (at -1.25 7.235 ${p.rot}) (size 0.3 1.15) ${p.CC1} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "11" smd rect (at 2.45 7.235 ${p.rot}) (size 0.6 1.15) ${p.VBUS} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "12" smd rect (at 3.225 7.235 ${p.rot}) (size 0.6 1.15) ${p.GND} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "2" smd rect (at -2.45 7.235 ${p.rot}) (size 0.6 1.15) ${p.VBUS} (layers "B.Cu" "B.Paste" "B.Mask"))
          (pad "1" smd rect (at -3.225 7.235 ${p.rot}) (size 0.6 1.15) ${p.GND} (layers "B.Cu" "B.Paste" "B.Mask"))
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
  