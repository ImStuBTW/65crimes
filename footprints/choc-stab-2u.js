// Choc v1 u2 Stabilizer Cutout
// Based on FKcaps / mbk-footprints
// https://github.com/FKcaps/mbk-footprints/blob/main/mbk.pretty/Choc-2u-cutout.kicad_mod

module.exports = {
    params: {
      designator: 'S'
    },
    body: p => { 
      const footprint =`
        (module Choc-2u-cutout (layer F.Cu) (tedit 605ABF13)
          
        ${p.at /* parametric position */}
        (fp_line (start 10.2 -8.45) (end 13.8 -8.45) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 13.8 -8.45) (end 13.8 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 10.2 -8.45) (end 10.2 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 13.8 -3.8) (end 15.15 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 8.85 -3.8) (end 10.2 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 8.85 3.05) (end 8.85 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 15.15 3.05) (end 15.15 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 8.85 3.05) (end 15.15 3.05) (layer Edge.Cuts) (width 0.12))

        (fp_line (start -13.8 -8.45) (end -10.2 -8.45) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -10.2 -8.45) (end -10.2 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -13.8 -8.45) (end -13.8 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -10.2 -3.8) (end -8.85 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -15.15 -3.8) (end -13.8 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -15.15 3.05) (end -15.15 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -8.85 3.05) (end -8.85 -3.8) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -15.15 3.05) (end -8.85 3.05) (layer Edge.Cuts) (width 0.12))
        
        (fp_line (start -7 7) (end 7 7) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 7 7) (end 7 -7) (layer Edge.Cuts) (width 0.12))
        (fp_line (start 7 -7) (end -7 -7) (layer Edge.Cuts) (width 0.12))
        (fp_line (start -7 -7) (end -7 7) (layer Edge.Cuts) (width 0.12))
      )
    `
    return `${footprint}`
  }
}
