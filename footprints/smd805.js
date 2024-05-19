module.exports = {
    params: {
      designator: 'MCU',
      side: 'F',
      from: undefined,
      to: undefined
    },
    body: p => { 
      const front =`
        (module C_0805_2012Metric_Pad1.18x1.45mm_HandSolder (layer F.Cu) (tedit 5F68FEEF)
          
        ${p.at /* parametric position */}
        (fp_line (start -1 0.625) (end -1 -0.625) (layer F.Fab) (width 0.1))
        (fp_line (start -1 -0.625) (end 1 -0.625) (layer F.Fab) (width 0.1))
        (fp_line (start 1 -0.625) (end 1 0.625) (layer F.Fab) (width 0.1))
        (fp_line (start 1 0.625) (end -1 0.625) (layer F.Fab) (width 0.1))
        (fp_line (start -0.261252 -0.735) (end 0.261252 -0.735) (layer F.SilkS) (width 0.12))
        (fp_line (start -0.261252 0.735) (end 0.261252 0.735) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.88 0.98) (end -1.88 -0.98) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.88 -0.98) (end 1.88 -0.98) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.88 -0.98) (end 1.88 0.98) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.88 0.98) (end -1.88 0.98) (layer F.CrtYd) (width 0.05))
        (pad 1 smd roundrect (at -1.0375 0 ${p.rot}) (size 1.175 1.45) (layers F.Cu F.Mask F.Paste) ${p.from} (roundrect_rratio 0.212766))
        (pad 2 smd roundrect (at 1.0375 0 ${p.rot}) (size 1.175 1.45) (layers F.Cu F.Mask F.Paste) ${p.to} (roundrect_rratio 0.212766))
    )
    `
    const back =`
      (module C_0805_2012Metric_Pad1.18x1.45mm_HandSolder (layer B.Cu) (tedit 5F68FEEF)
            
        ${p.at /* parametric position */}
        (fp_line (start -1 0.625) (end -1 -0.625) (layer B.Fab) (width 0.1))
        (fp_line (start -1 -0.625) (end 1 -0.625) (layer B.Fab) (width 0.1))
        (fp_line (start 1 -0.625) (end 1 0.625) (layer B.Fab) (width 0.1))
        (fp_line (start 1 0.625) (end -1 0.625) (layer B.Fab) (width 0.1))
        (fp_line (start -0.261252 -0.735) (end 0.261252 -0.735) (layer B.SilkS) (width 0.12))
        (fp_line (start -0.261252 0.735) (end 0.261252 0.735) (layer B.SilkS) (width 0.12))
        (fp_line (start -1.88 0.98) (end -1.88 -0.98) (layer B.CrtYd) (width 0.05))
        (fp_line (start -1.88 -0.98) (end 1.88 -0.98) (layer B.CrtYd) (width 0.05))
        (fp_line (start 1.88 -0.98) (end 1.88 0.98) (layer B.CrtYd) (width 0.05))
        (fp_line (start 1.88 0.98) (end -1.88 0.98) (layer B.CrtYd) (width 0.05))
        (pad 2 smd roundrect (at -1.0375 0 ${p.rot}) (size 1.175 1.45) (layers B.Cu B.Mask B.Paste) ${p.to} (roundrect_rratio 0.212766))
        (pad 1 smd roundrect (at 1.0375 0 ${p.rot}) (size 1.175 1.45) (layers B.Cu B.Mask B.Paste) ${p.from} (roundrect_rratio 0.212766))
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
