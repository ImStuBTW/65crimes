module.exports = {
    params: {
      designator: 'MCU',
      side: 'F',
      from: undefined,
      to: undefined
    },
    body: p => { 
      const front =`
        (module C_0201_0603Metric_Pad0.64x0.40mm_HandSolder (layer F.Cu) (tedit 5F6BB9E0)
          
        ${p.at /* parametric position */}
        (fp_line (start -0.3 0.15) (end -0.3 -0.15) (layer F.Fab) (width 0.1))
        (fp_line (start -0.3 -0.15) (end 0.3 -0.15) (layer F.Fab) (width 0.1))
        (fp_line (start 0.3 -0.15) (end 0.3 0.15) (layer F.Fab) (width 0.1))
        (fp_line (start 0.3 0.15) (end -0.3 0.15) (layer F.Fab) (width 0.1))
        (fp_line (start -0.88 0.35) (end -0.88 -0.35) (layer F.CrtYd) (width 0.05))
        (fp_line (start -0.88 -0.35) (end 0.88 -0.35) (layer F.CrtYd) (width 0.05))
        (fp_line (start 0.88 -0.35) (end 0.88 0.35) (layer F.CrtYd) (width 0.05))
        (fp_line (start 0.88 0.35) (end -0.88 0.35) (layer F.CrtYd) (width 0.05))
        (pad "" smd roundrect (at -0.4325 0) (size 0.458 0.36) (layers F.Paste) (roundrect_rratio 0.25))
        (pad "" smd roundrect (at 0.4325 0) (size 0.458 0.36) (layers F.Paste) (roundrect_rratio 0.25))
        (pad 1 smd roundrect (at -0.4075 0 ${p.rot}) (size 0.635 0.4) (layers F.Cu F.Mask) ${p.from} (roundrect_rratio 0.25))
        (pad 2 smd roundrect (at 0.4075 0 ${p.rot}) (size 0.635 0.4) (layers F.Cu F.Mask) ${p.to} (roundrect_rratio 0.25))
    )
    `
    const back =`
        (module C_0201_0603Metric_Pad0.64x0.40mm_HandSolder (layer B.Cu) (tedit 5F6BB9E0)
            
        ${p.at /* parametric position */}
        (fp_line (start -0.3 0.15) (end -0.3 -0.15) (layer B.Fab) (width 0.1))
        (fp_line (start -0.3 -0.15) (end 0.3 -0.15) (layer B.Fab) (width 0.1))
        (fp_line (start 0.3 -0.15) (end 0.3 0.15) (layer B.Fab) (width 0.1))
        (fp_line (start 0.3 0.15) (end -0.3 0.15) (layer B.Fab) (width 0.1))
        (fp_line (start -0.88 0.35) (end -0.88 -0.35) (layer B.CrtYd) (width 0.05))
        (fp_line (start -0.88 -0.35) (end 0.88 -0.35) (layer B.CrtYd) (width 0.05))
        (fp_line (start 0.88 -0.35) (end 0.88 0.35) (layer B.CrtYd) (width 0.05))
        (fp_line (start 0.88 0.35) (end -0.88 0.35) (layer B.CrtYd) (width 0.05))
        (pad "" smd roundrect (at -0.4325 0) (size 0.458 0.36) (layers B.Paste) (roundrect_rratio 0.25))
        (pad "" smd roundrect (at 0.4325 0) (size 0.458 0.36) (layers B.Paste) (roundrect_rratio 0.25))
        (pad 2 smd roundrect (at -0.4075 0 ${p.rot}) (size 0.635 0.4) (layers B.Cu B.Mask) ${p.to} (roundrect_rratio 0.25))
        (pad 1 smd roundrect (at 0.4075 0 ${p.rot}) (size 0.635 0.4) (layers B.Cu B.Mask) ${p.from} (roundrect_rratio 0.25))
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
