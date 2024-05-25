// Choc v1 u2 Stabilizer Cutout
// Based on FKcaps / mbk-footprints
// https://github.com/FKcaps/mbk-footprints/blob/main/mbk.pretty/Choc-2u.kicad_mod

module.exports = {
    params: {
      designator: 'S'
    },
    body: p => { 
      const footprint =`
        (module Choc-2u-cutout (layer F.Cu) (tedit 605ABF13)
          
        ${p.at /* parametric position */}
        (fp_line (start 14 -5.5) (end 14 -9) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 10 -9) (end 10 -5.5) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 10 -5.5) (end 14 -5.5) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 10 -9) (end 14 -9) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 9.35 -3.2) (end 9.35 2.3) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 14.65 2.3) (end 14.65 -3.2) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 9.35 -3.2) (end 14.65 -3.2) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 9.35 2.3) (end 14.65 2.3) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -10 -5.5) (end -10 -9) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14 -9) (end -14 -5.5) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14 -5.5) (end -10 -5.5) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14 -9) (end -10 -9) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14.65 -3.2) (end -14.65 2.3) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -9.35 2.3) (end -9.35 -3.2) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14.65 -3.2) (end -9.35 -3.2) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -14.65 2.3) (end -9.35 2.3) (layer Edge.Cuts) (width 0.12))
      )
    `
    return `${footprint}`
  }
}
