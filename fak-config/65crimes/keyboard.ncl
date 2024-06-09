let { ColToRowKey, .. } = import "fak/keyboard.ncl" in
let { CH559L, .. } = import "fak/mcus.ncl" in

{
  mcu = CH559L,
  usb_dev = {
    vendor_id = 4095,  # 0xFFF
    product_id = 1628, # 0x65C
    product_ver = 256,  # 0x0100
  },
  matrix = {
    # Net:  col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15
    cols = [34,   35,   36,   37,   20,   21,   22,   23,   24,   25,    26,    27,    07,    06,    05],

    # Net:  row1, row2, row3, row4, row5
    rows = [33,   03,   02,   01,   00]
  },
  keys =
    let M = ColToRowKey in
    [
        M 0 0, M 1 0, M 2 0, M 3 0, M 4 0, M 5 0, M 6 0, M 7 0, M 8 0, M 9 0, M 10 0, M 11 0, M 12 0,         M 14 0,
        M 0 1, M 1 1, M 2 1, M 3 1, M 4 1, M 5 1, M 6 1, M 7 1, M 8 1, M 9 1, M 10 1, M 11 1, M 12 1, M 13 0, M 14 1,
        M 0 2, M 1 2, M 2 2, M 3 2, M 4 2, M 5 2, M 6 2, M 7 2, M 8 2, M 9 2, M 10 2, M 11 2,         M 13 1, M 14 2,
        M 0 3, M 1 3, M 2 3, M 3 3, M 4 3, M 5 3, M 6 3, M 7 3, M 8 3, M 9 3, M 10 3,         M 12 2, M 13 2, M 14 3,
        M 0 4, M 1 4, M 2 4, M 3 4,        M 5 4,        M 7 4,        M 9 4, M 10 4,         M 12 3, M 13 3, M 14 4,
    ]
}