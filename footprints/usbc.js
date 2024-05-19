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
      const standard =`
        (module USB_C_Receptacle_GCT_USB4105-xx-A_16P_TopMnt_Horizontal (layer ${p.side}.Cu) (tedit 5A02FF57)
          
          ${p.at /* parametric position */}
          (fp_line (start -4.67 -0.1) (end -4.67 -1.8)
            (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp a1eeccd3-aa83-4c93-b45d-7262a2d7d425))
          (fp_line (start 4.67 -0.1) (end 4.67 -1.8)
            (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp 209f1858-f5ab-4c1f-a628-f97c83201d6c))
          (fp_line (start 5 3.675) (end -5 3.675)
            (stroke (width 0.1) (type solid)) (layer "Dwgs.User") (tstamp 7aed9a0f-bb1a-43cc-b4d3-28a712f84382))
          (fp_rect (start -5.32 -4.76) (end 5.32 4.18)
            (stroke (width 0.05) (type solid)) (fill none) (layer "${p.side}.CrtYd") (tstamp 3ea629b3-6f3a-4b88-badd-085fe9fc101e))
          (fp_rect (start -4.47 -3.675) (end 4.47 3.675)
            (stroke (width 0.1) (type solid)) (fill none) (layer "${p.side}.Fab") (tstamp 24a86a67-f5f9-4c36-b998-9fb02feed9a9))
          (pad "" np_thru_hole circle (at -2.89 -2.605) (size 0.65 0.65) (drill 0.65) (layers "F&B.Cu" "*.Mask") (tstamp f7ad5bfd-86ec-4b77-ae63-e1564fa9625c))
          (pad "" np_thru_hole circle (at 2.89 -2.605) (size 0.65 0.65) (drill 0.65) (layers "F&B.Cu" "*.Mask") (tstamp 3692cede-81f4-43a3-9c0e-c4b3d10f415a))
          (pad "S1" thru_hole oval (at -4.32 -3.105) (size 1 2.1) (drill oval 0.6 1.7) (layers "*.Cu" "*.Mask" "${p.side}.Paste") (tstamp 616c3003-e8aa-498b-8931-01b4ed18e61e))
          (pad "S1" thru_hole oval (at -4.32 1.075) (size 1 1.8) (drill oval 0.6 1.4) (layers "*.Cu" "*.Mask" "${p.side}.Paste") (tstamp 8c5825d0-18ea-4df6-8155-dc384b747616))
          (pad "S1" thru_hole oval (at 4.32 -3.105) (size 1 2.1) (drill oval 0.6 1.7) (layers "*.Cu" "*.Mask" "${p.side}.Paste") (tstamp 2cef666f-5d00-4429-97be-9e2709f18da3))
          (pad "S1" thru_hole oval (at 4.32 1.075) (size 1 1.8) (drill oval 0.6 1.4) (layers "*.Cu" "*.Mask" "${p.side}.Paste") (tstamp 290f2e6a-3522-4a0c-b701-86f5272ce86c))
      `

      const front =`  
        (pad "A1" smd roundrect (at -3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 9681dcab-a989-4a65-88ee-3150863a6454))
        (pad "A4" smd roundrect (at -2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp ae64112e-962e-45c4-8915-8859cbde4b63))
        (pad "A5" smd roundrect (at -1.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.CC1} (roundrect_rratio 0.25) (tstamp ce8b1f70-5479-47ad-821e-50f697aecf82))
        (pad "A6" smd roundrect (at -0.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.DP1} (roundrect_rratio 0.25) (tstamp 3699b688-ab06-4762-aa52-405707db0e24))
        (pad "A7" smd roundrect (at 0.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.DN1} (roundrect_rratio 0.25) (tstamp 99ec03e8-67e4-4b82-92b7-0f5bfa30c439))
        (pad "A8" smd roundrect (at 1.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SBU1} (roundrect_rratio 0.25) (tstamp bf5c8414-f043-4b3e-ae5d-1a0d116184ab))
        (pad "A9" smd roundrect (at 2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp b41c3222-a510-45ba-af94-e524912d5ddf))
        (pad "A12" smd roundrect (at 3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 78c8d8b5-604f-4a67-886f-61b208a7fc9a))
        (pad "B1" smd roundrect (at 3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 330c94ca-c3c8-4738-990e-8b93f94e7423))
        (pad "B4" smd roundrect (at 2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp 09528608-3eb0-4a53-8fdb-34af7dcf8b69))
        (pad "B5" smd roundrect (at 1.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.CC2} (roundrect_rratio 0.25) (tstamp 2d957a0f-6b02-412f-89dd-f86e359ab40c))
        (pad "B6" smd roundrect (at 0.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.DP2} (roundrect_rratio 0.25) (tstamp 3e96f173-e720-4c41-829e-355c36e53e98))
        (pad "B7" smd roundrect (at -0.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.DN2} (roundrect_rratio 0.25) (tstamp 82643627-6eda-4ade-b41a-5ec23858355d))
        (pad "B8" smd roundrect (at -1.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SBU2} (roundrect_rratio 0.25) (tstamp 5bf6d068-224e-413d-aa2a-57b767ca3b33))
        (pad "B9" smd roundrect (at -2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp f5c8a4c4-a5d7-490e-87a0-cb31b7632287))
        (pad "B12" smd roundrect (at -3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp c322374b-0c8d-4a1f-87c5-e920d6191ee0))
      )`

      const back =`  
        (pad "A12" smd roundrect (at -3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 9681dcab-a989-4a65-88ee-3150863a6454))
        (pad "A9" smd roundrect (at -2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp ae64112e-962e-45c4-8915-8859cbde4b63))
        (pad "A8" smd roundrect (at -1.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.SBU1} (roundrect_rratio 0.25) (tstamp ce8b1f70-5479-47ad-821e-50f697aecf82))
        (pad "A7" smd roundrect (at -0.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.DN1} (roundrect_rratio 0.25) (tstamp 3699b688-ab06-4762-aa52-405707db0e24))
        (pad "A6" smd roundrect (at 0.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.DP1} (roundrect_rratio 0.25) (tstamp 99ec03e8-67e4-4b82-92b7-0f5bfa30c439))
        (pad "A5" smd roundrect (at 1.25 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.CC1} (roundrect_rratio 0.25) (tstamp bf5c8414-f043-4b3e-ae5d-1a0d116184ab))
        (pad "A4" smd roundrect (at 2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp b41c3222-a510-45ba-af94-e524912d5ddf))
        (pad "A1" smd roundrect (at 3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 78c8d8b5-604f-4a67-886f-61b208a7fc9a))
        (pad "B12" smd roundrect (at 3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp 330c94ca-c3c8-4738-990e-8b93f94e7423))
        (pad "B9" smd roundrect (at 2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp 09528608-3eb0-4a53-8fdb-34af7dcf8b69))
        (pad "B8" smd roundrect (at 1.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.SBU2} (roundrect_rratio 0.25) (tstamp 2d957a0f-6b02-412f-89dd-f86e359ab40c))
        (pad "B7" smd roundrect (at 0.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.DN2} (roundrect_rratio 0.25) (tstamp 3e96f173-e720-4c41-829e-355c36e53e98))
        (pad "B6" smd roundrect (at -0.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.DP2} (roundrect_rratio 0.25) (tstamp 82643627-6eda-4ade-b41a-5ec23858355d))
        (pad "B5" smd roundrect (at -1.75 -3.68 ${p.rot}) (size 0.3 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.CC2} (roundrect_rratio 0.25) (tstamp 5bf6d068-224e-413d-aa2a-57b767ca3b33))
        (pad "B4" smd roundrect (at -2.4 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VBUS} (roundrect_rratio 0.25) (tstamp f5c8a4c4-a5d7-490e-87a0-cb31b7632287))
        (pad "B1" smd roundrect (at -3.2 -3.68 ${p.rot}) (size 0.6 1.15) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND} (roundrect_rratio 0.25) (tstamp c322374b-0c8d-4a1f-87c5-e920d6191ee0))
      )`
      
    if(p.side == 'B') {
        return `
            ${standard}
            ${back}
        `
    }
    else {
        return `
            ${standard}
            ${front}
        `
    }
  }
}
