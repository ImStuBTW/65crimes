module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    P16: {type: 'net', value: 'P16'},
    P17: {type: 'net', value: 'P17'},
    RST: {type: 'net', value: 'RST'},
    P30: {type: 'net', value: 'P30'},
    P45: {type: 'net', value: 'P45'},
    P44: {type: 'net', value: 'P44'},
    P31: {type: 'net', value: 'P31'},
    P32: {type: 'net', value: 'P32'},
    P33: {type: 'net', value: 'P33'},
    P34: {type: 'net', value: 'P34'},
    P35: {type: 'net', value: 'P35'},
    P36: {type: 'net', value: 'P36'},

    P37: {type: 'net', value: 'P37'},
    P43: {type: 'net', value: 'P43'},
    P42: {type: 'net', value: 'P42'},
    BOOT: {type: 'net', value: 'BOOT'},
    P47: {type: 'net', value: 'P47'},
    GND: {type: 'net', value: 'GND'},
    P41: {type: 'net', value: 'P41'},
    P40: {type: 'net', value: 'P40'},
    P20: {type: 'net', value: 'P20'},
    P21: {type: 'net', value: 'P21'},
    P22: {type: 'net', value: 'P22'},
    P23: {type: 'net', value: 'P23'},

    P24: {type: 'net', value: 'P24'},
    P25: {type: 'net', value: 'P25'},
    P26: {type: 'net', value: 'P26'},
    P27: {type: 'net', value: 'P27'},
    P55: {type: 'net', value: 'P55'},
    P54: {type: 'net', value: 'P54'},
    P51: {type: 'net', value: 'P51'},
    P50: {type: 'net', value: 'P50'},
    P07: {type: 'net', value: 'P07'},
    P06: {type: 'net', value: 'P06'},
    P05: {type: 'net', value: 'P05'},
    P04: {type: 'net', value: 'P04'},

    P03: {type: 'net', value: 'P03'},
    P02: {type: 'net', value: 'P02'},
    P01: {type: 'net', value: 'P01'},
    P00: {type: 'net', value: 'P00'},
    VBUS: {type: 'net', value: 'VBUS'},
    V33: {type: 'net', value: 'V33'},
    P10: {type: 'net', value: 'P10'},
    P11: {type: 'net', value: 'P11'},
    P12: {type: 'net', value: 'P12'},
    P13: {type: 'net', value: 'P13'},
    P14: {type: 'net', value: 'P14'},
    P15: {type: 'net', value: 'P15'}
  },
  body: p => { 
    const front =`
      (module LQFP-48_7x7mm_P0.5mm (layer F.Cu) (tedit 5D9F72AF)
      
      ${p.at /* parametric position */}
      (fp_text reference "${p.ref}" (at 0 -5.85) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 5.85) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start 3.16 3.61) (end 3.61 3.61) (layer F.SilkS) (width 0.12))
      (fp_line (start 3.61 3.61) (end 3.61 3.16) (layer F.SilkS) (width 0.12))
      (fp_line (start -3.16 3.61) (end -3.61 3.61) (layer F.SilkS) (width 0.12))
      (fp_line (start -3.61 3.61) (end -3.61 3.16) (layer F.SilkS) (width 0.12))
      (fp_line (start 3.16 -3.61) (end 3.61 -3.61) (layer F.SilkS) (width 0.12))
      (fp_line (start 3.61 -3.61) (end 3.61 -3.16) (layer F.SilkS) (width 0.12))
      (fp_line (start -3.16 -3.61) (end -3.61 -3.61) (layer F.SilkS) (width 0.12))
      (fp_line (start -3.61 -3.61) (end -3.61 -3.16) (layer F.SilkS) (width 0.12))

      (fp_line (start -3.61 -3.16) (end -4.9 -3.16) (layer F.SilkS) (width 0.12))

      (fp_line (start -2.5 -3.5) (end 3.5 -3.5) (layer F.Fab) (width 0.1))
      (fp_line (start 3.5 -3.5) (end 3.5 3.5) (layer F.Fab) (width 0.1))
      (fp_line (start 3.5 3.5) (end -3.5 3.5) (layer F.Fab) (width 0.1))
      (fp_line (start -3.5 3.5) (end -3.5 -2.5) (layer F.Fab) (width 0.1))
      (fp_line (start -3.5 -2.5) (end -2.5 -3.5) (layer F.Fab) (width 0.1))
      
      (fp_line (start 0 -5.15) (end -3.15 -5.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.15 -5.15) (end -3.15 -3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.15 -3.75) (end -3.75 -3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.75 -3.75) (end -3.75 -3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.75 -3.15) (end -5.15 -3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -5.15 -3.15) (end -5.15 0) (layer F.CrtYd) (width 0.05))
      (fp_line (start 0 -5.15) (end 3.15 -5.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.15 -5.15) (end 3.15 -3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.15 -3.75) (end 3.75 -3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.75 -3.75) (end 3.75 -3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.75 -3.15) (end 5.15 -3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 5.15 -3.15) (end 5.15 0) (layer F.CrtYd) (width 0.05))
      (fp_line (start 0 5.15) (end -3.15 5.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.15 5.15) (end -3.15 3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.15 3.75) (end -3.75 3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.75 3.75) (end -3.75 3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.75 3.15) (end -5.15 3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start -5.15 3.15) (end -5.15 0) (layer F.CrtYd) (width 0.05))
      (fp_line (start 0 5.15) (end 3.15 5.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.15 5.15) (end 3.15 3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.15 3.75) (end 3.75 3.75) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.75 3.75) (end 3.75 3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.75 3.15) (end 5.15 3.15) (layer F.CrtYd) (width 0.05))
      (fp_line (start 5.15 3.15) (end 5.15 0) (layer F.CrtYd) (width 0.05))

      ${''/* first side */}
      (pad 1 smd roundrect (at -4.1625 -2.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P16} (roundrect_rratio 0.25))
      (pad 2 smd roundrect (at -4.1625 -2.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P17} (roundrect_rratio 0.25))
      (pad 3 smd roundrect (at -4.1625 -1.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.RST} (roundrect_rratio 0.25))
      (pad 4 smd roundrect (at -4.1625 -1.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P30} (roundrect_rratio 0.25))
      (pad 5 smd roundrect (at -4.1625 -0.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P45} (roundrect_rratio 0.25))
      (pad 6 smd roundrect (at -4.1625 -0.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P44} (roundrect_rratio 0.25))
      (pad 7 smd roundrect (at -4.1625 0.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P31} (roundrect_rratio 0.25))
      (pad 8 smd roundrect (at -4.1625 0.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P32} (roundrect_rratio 0.25))
      (pad 9 smd roundrect (at -4.1625 1.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P33} (roundrect_rratio 0.25))
      (pad 10 smd roundrect (at -4.1625 1.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P34} (roundrect_rratio 0.25))
      (pad 11 smd roundrect (at -4.1625 2.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P35} (roundrect_rratio 0.25))
      (pad 12 smd roundrect (at -4.1625 2.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P36} (roundrect_rratio 0.25))

      ${''/* second side */}
      (pad 13 smd roundrect (at -2.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P37} (roundrect_rratio 0.25))
      (pad 14 smd roundrect (at -2.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P43} (roundrect_rratio 0.25))
      (pad 15 smd roundrect (at -1.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P42} (roundrect_rratio 0.25))
      (pad 16 smd roundrect (at -1.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.BOOT} (roundrect_rratio 0.25))
      (pad 17 smd roundrect (at -0.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P47} (roundrect_rratio 0.25))
      (pad 18 smd roundrect (at -0.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.GND} (roundrect_rratio 0.25))
      (pad 19 smd roundrect (at 0.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P41} (roundrect_rratio 0.25))
      (pad 20 smd roundrect (at 0.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P40} (roundrect_rratio 0.25))
      (pad 21 smd roundrect (at 1.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P20} (roundrect_rratio 0.25))
      (pad 22 smd roundrect (at 1.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P21} (roundrect_rratio 0.25))
      (pad 23 smd roundrect (at 2.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P22} (roundrect_rratio 0.25))
      (pad 24 smd roundrect (at 2.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P23} (roundrect_rratio 0.25))

      ${''/* third side */}
      (pad 25 smd roundrect (at 4.1625 2.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P24} (roundrect_rratio 0.25))
      (pad 26 smd roundrect (at 4.1625 2.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P25} (roundrect_rratio 0.25))
      (pad 27 smd roundrect (at 4.1625 1.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P26} (roundrect_rratio 0.25))
      (pad 28 smd roundrect (at 4.1625 1.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P27} (roundrect_rratio 0.25))
      (pad 29 smd roundrect (at 4.1625 0.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P55} (roundrect_rratio 0.25))
      (pad 30 smd roundrect (at 4.1625 0.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P54} (roundrect_rratio 0.25))
      (pad 31 smd roundrect (at 4.1625 -0.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P51} (roundrect_rratio 0.25))
      (pad 32 smd roundrect (at 4.1625 -0.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P50} (roundrect_rratio 0.25))
      (pad 33 smd roundrect (at 4.1625 -1.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P07} (roundrect_rratio 0.25))
      (pad 34 smd roundrect (at 4.1625 -1.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P06} (roundrect_rratio 0.25))
      (pad 35 smd roundrect (at 4.1625 -2.25 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P05} (roundrect_rratio 0.25))
      (pad 36 smd roundrect (at 4.1625 -2.75 ${p.rot}) (size 1.475 0.3) (layers F.Cu F.Mask F.Paste) ${p.P04} (roundrect_rratio 0.25))

      ${''/* fourth side */}
      (pad 37 smd roundrect (at 2.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P03} (roundrect_rratio 0.25))
      (pad 38 smd roundrect (at 2.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P02} (roundrect_rratio 0.25))
      (pad 39 smd roundrect (at 1.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P01} (roundrect_rratio 0.25))
      (pad 40 smd roundrect (at 1.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P00} (roundrect_rratio 0.25))
      (pad 41 smd roundrect (at 0.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.VBUS} (roundrect_rratio 0.25))
      (pad 42 smd roundrect (at 0.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.V33} (roundrect_rratio 0.25))
      (pad 43 smd roundrect (at -0.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P10} (roundrect_rratio 0.25))
      (pad 44 smd roundrect (at -0.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P11} (roundrect_rratio 0.25))
      (pad 45 smd roundrect (at -1.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P12} (roundrect_rratio 0.25))
      (pad 46 smd roundrect (at -1.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P13} (roundrect_rratio 0.25))
      (pad 47 smd roundrect (at -2.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P14} (roundrect_rratio 0.25))
      (pad 48 smd roundrect (at -2.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers F.Cu F.Mask F.Paste) ${p.P15} (roundrect_rratio 0.25))
      )
    `
    const back =`
      (module LQFP-48_7x7mm_P0.5mm (layer B.Cu) (tedit 5D9F72AF)
      
      ${p.at /* parametric position */}
      (fp_text reference "${p.ref}" (at 0 -5.85) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 5.85) (layer B.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start 3.16 3.61) (end 3.61 3.61) (layer B.SilkS) (width 0.12))
      (fp_line (start 3.61 3.61) (end 3.61 3.16) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.16 3.61) (end -3.61 3.61) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.61 3.61) (end -3.61 3.16) (layer B.SilkS) (width 0.12))
      (fp_line (start 3.16 -3.61) (end 3.61 -3.61) (layer B.SilkS) (width 0.12))
      (fp_line (start 3.61 -3.61) (end 3.61 -3.16) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.16 -3.61) (end -3.61 -3.61) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.61 -3.61) (end -3.61 -3.16) (layer B.SilkS) (width 0.12))

      (fp_line (start -3.16 4.9) (end -3.16 3.61) (layer B.SilkS) (width 0.12))

      (fp_line (start 2.5 -3.5) (end -3.5 -3.5) (layer B.Fab) (width 0.1))
      (fp_line (start -3.5 -3.5) (end -3.5 3.5) (layer B.Fab) (width 0.1))
      (fp_line (start -3.5 3.5) (end 3.5 3.5) (layer B.Fab) (width 0.1))
      (fp_line (start 3.5 3.5) (end 3.5 -2.5) (layer B.Fab) (width 0.1))
      (fp_line (start 3.5 -2.5) (end 2.5 -3.5) (layer B.Fab) (width 0.1))
      
      (fp_line (start 0 -5.15) (end -3.15 -5.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.15 -5.15) (end -3.15 -3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.15 -3.75) (end -3.75 -3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.75 -3.75) (end -3.75 -3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.75 -3.15) (end -5.15 -3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -5.15 -3.15) (end -5.15 0) (layer B.CrtYd) (width 0.05))
      (fp_line (start 0 -5.15) (end 3.15 -5.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.15 -5.15) (end 3.15 -3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.15 -3.75) (end 3.75 -3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.75 -3.75) (end 3.75 -3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.75 -3.15) (end 5.15 -3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 5.15 -3.15) (end 5.15 0) (layer B.CrtYd) (width 0.05))
      (fp_line (start 0 5.15) (end -3.15 5.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.15 5.15) (end -3.15 3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.15 3.75) (end -3.75 3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.75 3.75) (end -3.75 3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -3.75 3.15) (end -5.15 3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start -5.15 3.15) (end -5.15 0) (layer B.CrtYd) (width 0.05))
      (fp_line (start 0 5.15) (end 3.15 5.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.15 5.15) (end 3.15 3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.15 3.75) (end 3.75 3.75) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.75 3.75) (end 3.75 3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 3.75 3.15) (end 5.15 3.15) (layer B.CrtYd) (width 0.05))
      (fp_line (start 5.15 3.15) (end 5.15 0) (layer B.CrtYd) (width 0.05))

      ${''/* first side */}
      (pad 12 smd roundrect (at -4.1625 -2.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P36} (roundrect_rratio 0.25))
      (pad 11 smd roundrect (at -4.1625 -2.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P35} (roundrect_rratio 0.25))
      (pad 10 smd roundrect (at -4.1625 -1.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P34} (roundrect_rratio 0.25))
      (pad 9 smd roundrect (at -4.1625 -1.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P33} (roundrect_rratio 0.25))
      (pad 8 smd roundrect (at -4.1625 -0.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P32} (roundrect_rratio 0.25))
      (pad 7 smd roundrect (at -4.1625 -0.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P31} (roundrect_rratio 0.25))
      (pad 6 smd roundrect (at -4.1625 0.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P44} (roundrect_rratio 0.25))
      (pad 5 smd roundrect (at -4.1625 0.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P45} (roundrect_rratio 0.25))
      (pad 4 smd roundrect (at -4.1625 1.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P30} (roundrect_rratio 0.25))
      (pad 3 smd roundrect (at -4.1625 1.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.RST} (roundrect_rratio 0.25))
      (pad 2 smd roundrect (at -4.1625 2.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P17} (roundrect_rratio 0.25))
      (pad 1 smd roundrect (at -4.1625 2.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P16} (roundrect_rratio 0.25))

      ${''/* second side */}
      (pad 48 smd roundrect (at -2.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P15} (roundrect_rratio 0.25))
      (pad 47 smd roundrect (at -2.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P14} (roundrect_rratio 0.25))
      (pad 46 smd roundrect (at -1.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P13} (roundrect_rratio 0.25))
      (pad 45 smd roundrect (at -1.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P12} (roundrect_rratio 0.25))
      (pad 44 smd roundrect (at -0.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P11} (roundrect_rratio 0.25))
      (pad 43 smd roundrect (at -0.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P10} (roundrect_rratio 0.25))
      (pad 42 smd roundrect (at 0.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.V33} (roundrect_rratio 0.25))
      (pad 41 smd roundrect (at 0.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.VBUS} (roundrect_rratio 0.25))
      (pad 40 smd roundrect (at 1.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P00} (roundrect_rratio 0.25))
      (pad 39 smd roundrect (at 1.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P01} (roundrect_rratio 0.25))
      (pad 38 smd roundrect (at 2.25 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P02} (roundrect_rratio 0.25))
      (pad 37 smd roundrect (at 2.75 4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P03} (roundrect_rratio 0.25))

      ${''/* third side */}
      (pad 36 smd roundrect (at 4.1625 2.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P04} (roundrect_rratio 0.25))
      (pad 35 smd roundrect (at 4.1625 2.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P05} (roundrect_rratio 0.25))
      (pad 34 smd roundrect (at 4.1625 1.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P06} (roundrect_rratio 0.25))
      (pad 33 smd roundrect (at 4.1625 1.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P07} (roundrect_rratio 0.25))
      (pad 32 smd roundrect (at 4.1625 0.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P50} (roundrect_rratio 0.25))
      (pad 31 smd roundrect (at 4.1625 0.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P51} (roundrect_rratio 0.25))
      (pad 30 smd roundrect (at 4.1625 -0.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P54} (roundrect_rratio 0.25))
      (pad 29 smd roundrect (at 4.1625 -0.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P55} (roundrect_rratio 0.25))
      (pad 28 smd roundrect (at 4.1625 -1.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P27} (roundrect_rratio 0.25))
      (pad 27 smd roundrect (at 4.1625 -1.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P26} (roundrect_rratio 0.25))
      (pad 26 smd roundrect (at 4.1625 -2.25 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P25} (roundrect_rratio 0.25))
      (pad 25 smd roundrect (at 4.1625 -2.75 ${p.rot}) (size 1.475 0.3) (layers B.Cu B.Mask B.Paste) ${p.P24} (roundrect_rratio 0.25))

      ${''/* fourth side */}
      (pad 24 smd roundrect (at 2.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P23} (roundrect_rratio 0.25))
      (pad 23 smd roundrect (at 2.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P22} (roundrect_rratio 0.25))
      (pad 22 smd roundrect (at 1.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P21} (roundrect_rratio 0.25))
      (pad 21 smd roundrect (at 1.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P20} (roundrect_rratio 0.25))
      (pad 20 smd roundrect (at 0.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P40} (roundrect_rratio 0.25))
      (pad 19 smd roundrect (at 0.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P41} (roundrect_rratio 0.25))
      (pad 18 smd roundrect (at -0.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.GND} (roundrect_rratio 0.25))
      (pad 17 smd roundrect (at -0.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P47} (roundrect_rratio 0.25))
      (pad 16 smd roundrect (at -1.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.BOOT} (roundrect_rratio 0.25))
      (pad 15 smd roundrect (at -1.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P42} (roundrect_rratio 0.25))
      (pad 14 smd roundrect (at -2.25 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P43} (roundrect_rratio 0.25))
      (pad 13 smd roundrect (at -2.75 -4.1625 ${p.rot}) (size 0.3 1.475) (layers B.Cu B.Mask B.Paste) ${p.P37} (roundrect_rratio 0.25))
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
