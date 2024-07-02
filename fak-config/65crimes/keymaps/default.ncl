let { tap, hold, td, combo, macro, ..} = import "fak/keycode.ncl" in

# We alias commonly used stuff, so we don't end up repeating them over and over.
let kc = tap.reg.kc in
let ks = tap.reg.ks in
let md = hold.reg.mod in
let mo = hold.reg.layer in

let TRANS = tap.trans & hold.trans in

{
  layers = [
    # BASE
    [
      kc.ESC , kc.N1  , kc.N2  , kc.N3  , kc.N4 , kc.N5 , kc.N6 , kc.N7 , kc.N8  , kc.N9  , kc.N0  , kc.MINS, kc.EQL,          kc.BSPC,
      kc.TAB , kc.Q   , kc.W   , kc.E   , kc.R  , kc.T  , kc.Y  , kc.U  , kc.I   , kc.O   , kc.P   , kc.LBRC, kc.RBRC, kc.BSLS, kc.DEL ,
      kc.CAPS, kc.A   , kc.S   , kc.D   , kc.F  , kc.G  , kc.H  , kc.J  , kc.K   , kc.L   , kc.SCLN, kc.QUOT,          kc.ENT , kc.PGUP,
      md.lsft, kc.Z   , kc.X   , kc.C   , kc.V  , kc.B  , kc.N  , kc.M  , kc.COMM, kc.DOT , kc.SLSH,          md.rsft, kc.UP  , kc.PGDN,
      md.lctl, md.lgui, md.lalt, kc.SPC ,         kc.SPC,         kc.SPC,          mo 1   , md.rctl,          kc.LEFT, kc.DOWN, kc.RIGHT,
    ],
    # FUNC
    [
      TRANS  , kc.F1  , kc.F2  , kc.F3  , kc.F4 , kc.F5 , kc.F6 , kc.F7 , kc.F8  , kc.F9  , kc.F10 , kc.F11 , kc.F12 ,              TRANS  ,
      TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  ,
      TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  ,          TRANS  , TRANS  ,
      TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  , TRANS  ,          TRANS  , TRANS  , TRANS  ,
      TRANS  , TRANS  , TRANS  , TRANS  ,          TRANS  ,          TRANS  ,          TRANS  , TRANS  ,          TRANS  , TRANS  , TRANS  ,
    ]
  ]
}