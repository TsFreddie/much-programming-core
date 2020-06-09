Vue.directive( "sortable", function( value ) {
    var that = this,
        key = this.arg;
  
    value = value || {};
    value.onUpdate = function( e ) {
      var vm = that.vm,
          array = vm[ key ],
          target = array[ e.oldIndex ];
      array.$remove( target );
      array.splice( e.newIndex, 0, target );
      vm.$emit( "sort", target, e.oldIndex, e.newIndex );
    };
  
    Sortable.create(value, value );
});


// -----------------------
//  Const declarations
// -----------------------
const locked_keys = ['FN'];
const unavaliabe_keys = ['C9', 'CF', 'E7', 'Light', 'Macro'];
const unbindable_keys = ['Light'];
const unbindable_desc = ['change a specific RGB setting'];
const special_keys = {
    'L0': {targetKey: '10', targetLayer: 'FN'},
    'L1': {targetKey: '11', targetLayer: 'FN'},
    'L2': {targetKey: '12', targetLayer: 'FN'},
    'L3': {targetKey: '13', targetLayer: 'FN'},
};

const ktmName = [
    'G9(L_Space)', 'R_ALT', 'ESC', 'Q', 'TAB', 'A', 'L_SHIFT', 'Z',
    'G15', 'PN', 'W', 'E', 'S', 'D', 'X', 'C',
    'L_ALT', 'G13', 'R', 'T', 'F', 'G', 'V', 'B',
    'G10(Fn1)', 'G16(FN)', 'Y', 'U', 'H', 'J', 'N', 'M',
    'ENTER', 'L_CTRL', 'I', 'O', 'K', 'L', 'COMMA', 'DOT',
    'BACKSPACE', 'L_WIN', 'P', 'R_CTRL', 'SEMICOLON', 'DEL', 'FN0', 'R_SHIFT',
    'SPACE', 'G11', 'NOTHING'
];

const keyName = {
    '0': 'NOTHING',
    '1': 'ERR_RO',
    '2': 'POST_FAIL',
    '3': 'UNDEFINED',
    '4': 'A',
    '5': 'B',
    '6': 'C',
    '7': 'D',
    '8': 'E',
    '9': 'F',
    'A': 'G',
    'B': 'H',
    'C': 'I',
    'D': 'J',
    'E': 'K',
    'F': 'L',
    '10': 'M',
    '11': 'N',
    '12': 'O',
    '13': 'P',
    '14': 'Q',
    '15': 'R',
    '16': 'S',
    '17': 'T',
    '18': 'U',
    '19': 'V',
    '1A': 'W',
    '1B': 'X',
    '1C': 'Y',
    '1D': 'Z',
    '1E': '1',
    '1F': '2',
    '20': '3',
    '21': '4',
    '22': '5',
    '23': '6',
    '24': '7',
    '25': '8',
    '26': '9',
    '27': '0',
    '28': 'ENTER',
    '29': 'ESC',
    '2A': 'BACKSPACE',
    '2B': 'TAB',
    '2C': 'SPACE',
    '2D': 'NEG',
    '2E': 'EQUATION',
    '2F': 'L_BRACKETS',
    '30': 'R_BRACKETS',
    '31': 'BACKSLASH',
    '32': 'CODE42',
    '33': 'SEMICOLON',
    '34': 'APOSTROPHE',
    '35': 'TILDE',
    '36': 'COMMA',
    '37': 'DOT',
    '38': 'SLASH',
    '39': 'CAP',
    '3A': 'F1',
    '3B': 'F2',
    '3C': 'F3',
    '3D': 'F4',
    '3E': 'F5',
    '3F': 'F6',
    '40': 'F7',
    '41': 'F8',
    '42': 'F9',
    '43': 'F10',
    '44': 'F11',
    '45': 'F12',
    '46': 'PRINT',
    '47': 'SCROLL',
    '48': 'PAUSE',
    '49': 'INSERT',
    '4A': 'HOME',
    '4B': 'PGUP',
    '4C': 'DEL',
    '4D': 'END',
    '4E': 'PGDN',
    '4F': 'R_ARROW',
    '50': 'L_ARROW',
    '51': 'DN_ARROW',
    '52': 'UP_ARROW',
    '53': 'NUM_LOCK',
    '54': 'NUM_DIV',
    '55': 'NUM_STAR',
    '56': 'NUM_NEG',
    '57': 'NUM_PLUS',
    '58': 'NUM_ENTER',
    '59': 'NUM_1',
    '5A': 'NUM_2',
    '5B': 'NUM_3',
    '5C': 'NUM_4',
    '5D': 'NUM_5',
    '5E': 'NUM_6',
    '5F': 'NUM_7',
    '60': 'NUM_8',
    '61': 'NUM_9',
    '62': 'NUM_0',
    '63': 'NUM_DOT',
    '64': 'CODE45',
    '65': 'MENU',
    '66': 'POWER',
    '67': 'EQUAL',
    '68': 'F13',
    '69': 'F14',
    '6A': 'F15',
    '6B': 'F16',
    '6C': 'F17',
    '6D': 'F18',
    '6E': 'F19',
    '6F': 'F20',
    '70': 'F21',
    '71': 'F22',
    '72': 'F23',
    '73': 'F24',
    '74': 'KB_EXECUTE',
    '75': 'KB_HELP',
    '76': 'KB_MENU',
    '77': 'KB_SELECT',
    '78': 'KB_STOP',
    '79': 'KB_AGAIN',
    '7A': 'KB_UNDO',
    '7B': 'KB_CUT',
    '7C': 'KB_COPY',
    '7D': 'KB_PASTE',
    '7E': 'KB_FIND',
    '7F': 'KB_MUTE',
    '80': 'KB_VOL_UP',
    '81': 'KB_VOL_DN',
    '82': 'LOCCAP',
    '83': 'LOCNUM',
    '84': 'LOCSCR',
    '85': 'CODE107',
    '86': '0x086',
    '87': 'CODE56',
    '88': 'CODE133',
    '89': 'CODE14',
    '8A': 'CODE132',
    '8B': 'CODE131',
    '90': 'CODE151',
    '91': 'CODE150',
    'B0': 'MOUSE_KEY1',
    'B1': 'MOUSE_KEY2',
    'B2': 'MOUSE_KEY3',
    'B3': 'MOUSE_KEY4',
    'B4': 'MOUSE_KEY5',
    'B5': 'MOUSE_KEY6',
    'B6': 'MOUSE_KEY7',
    'B7': 'MOUSE_KEY8',
    'B8': 'MOUSE_KEY9',
    'B9': 'MOUSE_KEY10',
    'BA': 'MOUSE_KEY11',
    'BB': 'MOUSE_KEY12',
    'BC': 'MOUSE_KEY13',
    'BD': 'MOUSE_KEY14',
    'BE': 'MOUSE_KEY15',
    'BF': 'MOUSE_KEY16',
    'C0': 'G1',
    'C1': 'G2',
    'C2': 'G3',
    'C3': 'G4',
    'C4': 'G5',
    'C5': 'G6',
    'C6': 'G7',
    'C7': 'G8',
    'C8': 'G9', // L_Space
    'C9': 'G10(Fn1)',
    'CA': 'G11',
    'CB': 'G12',
    'CC': 'G13',
    'CD': 'G14',
    'CE': 'G15',
    'CF': 'G16(FN)',
    'D0': 'G17',
    'D1': 'G18',
    'D2': 'G19',
    'D3': 'G20',
    'D4': 'G21',
    'D5': 'G22',
    'D6': 'G23',
    'D7': 'G24',
    'E0': 'L_CTRL',
    'E1': 'L_SHIFT',
    'E2': 'L_ALT',
    'E3': 'L_WIN',
    'E4': 'R_CTRL',
    'E5': 'R_SHIFT',
    'E6': 'R_ALT',
    'E7': 'R_WIN',
    'E9': 'ACPI_PD',
    'EA': 'ACPI_SLEEP',
    'EB': 'ACPI_WAKE',
    'EC': 'MEDIA_SEL',
    'ED': 'MAIL',
    'EE': 'CALCULATOR',
    'EF': 'MYCOMPUTER',
    'F0': 'PLAY_PAUSE',
    'F1': 'STOP',
    'F2': 'PRE_TRACK',
    'F3': 'NEXT_TRACK',
    'F4': 'MUTE',
    'F5': 'VOL_DEC',
    'F6': 'VOL_INC',
    'F7': 'W3SEARCH',
    'F8': 'W3HOME',
    'F9': 'W3BACK',
    'FA': 'W3FORWARD',
    'FB': 'W3STOP',
    'FC': 'W3REFRESH',
    'FD': 'W3FAVORITE',
    // Cheating keycode
    'FN': 'FN MODIFIER',
    'PN': 'PN MODIFIER',
    'FN1': 'FN1 MODIFIER',
    'Light': 'RGB CONTROL',
    'L0': 'SWITCH TO L0',
    'L1': 'SWITCH TO L1',
    'L2': 'SWITCH TO L2',
    'L3': 'SWITCH TO L3',
    'Macro': 'MACRO',
};

const keyLegend = {
    '0': '',
    '1': 'ERR_RO',
    '2': 'POST_FAIL',
    '3': 'UNDEFINED',
    '4': 'A',
    '5': 'B',
    '6': 'C',
    '7': 'D',
    '8': 'E',
    '9': 'F',
    'A': 'G',
    'B': 'H',
    'C': 'I',
    'D': 'J',
    'E': 'K',
    'F': 'L',
    '10': 'M',
    '11': 'N',
    '12': 'O',
    '13': 'P',
    '14': 'Q',
    '15': 'R',
    '16': 'S',
    '17': 'T',
    '18': 'U',
    '19': 'V',
    '1A': 'W',
    '1B': 'X',
    '1C': 'Y',
    '1D': 'Z',
    '1E': '! 1',
    '1F': '\@ 2',
    '20': '\# 3',
    '21': '\$ 4',
    '22': '\% 5',
    '23': '^ 6',
    '24': '\& 7',
    '25': '* 8',
    '26': '( 9',
    '27': ') 0',
    '28': 'Enter',
    '29': 'ESC',
    '2A': '<i class="fas fa-backspace"></i>',
    '2B': 'Tab',
    '2C': 'Space',
    '2D': '_ -',
    '2E': '+ =',
    '2F': '{ [',
    '30': '} ]',
    '31': '| \\',
    '32': 'CODE42',     // ??
    '33': ': \;',
    '34': '\" \'',
    '35': '~ `',
    '36': '&lt ,',
    '37': '&gt .',
    '38': '? /',
    '39': 'Caps',
    '3A': 'F1',
    '3B': 'F2',
    '3C': 'F3',
    '3D': 'F4',
    '3E': 'F5',
    '3F': 'F6',
    '40': 'F7',
    '41': 'F8',
    '42': 'F9',
    '43': 'F10',
    '44': 'F11',
    '45': 'F12',
    '46': 'Prtsc',
    '47': 'Scrlk',
    '48': 'Pause',
    '49': 'Ins',
    '4A': 'Home',
    '4B': 'PgUp',
    '4C': 'Del',
    '4D': 'End',
    '4E': 'PgDn',
    '4F': '<i class="fas fa-arrow-right"></i>',
    '50': '<i class="fas fa-arrow-left"></i>',
    '51': '<i class="fas fa-arrow-down"></i>',
    '52': '<i class="fas fa-arrow-up"></i>',
    '53': 'Numlk',
    '54': '/',
    '55': '*',
    '56': '-',
    '57': '+',
    '58': 'Ret',
    '59': '1',
    '5A': '2',
    '5B': '3',
    '5C': '4',
    '5D': '5',
    '5E': '6',
    '5F': '7',
    '60': '8',
    '61': '9',
    '62': '0',
    '63': '.',
    '64': 'CODE45',     // ??
    '65': '<i class="fas fa-bars"></i>',
    '66': 'POWER',      // ??
    '67': 'EQUAL',      // ??
    '68': 'F13',
    '69': 'F14',
    '6A': 'F15',
    '6B': 'F16',
    '6C': 'F17',
    '6D': 'F18',
    '6E': 'F19',
    '6F': 'F20',
    '70': 'F21',
    '71': 'F22',
    '72': 'F23',
    '73': 'F24',
    '74': 'KB_EXECUTE', // ??
    '75': 'KB_HELP',    // ??
    '76': 'KB_MENU',    // ??
    '77': 'KB_SELECT',  // ??
    '78': 'KB_STOP',    // ??
    '79': 'KB_AGAIN',   // ??
    '7A': 'KB_UNDO',    // ??
    '7B': 'KB_CUT',     // ??
    '7C': 'KB_COPY',    // ??
    '7D': 'KB_PASTE',   // ??
    '7E': 'KB_FIND',    // ??
    '7F': 'KB_MUTE',    // ??
    '80': 'KB_VOL_UP',  // ??
    '81': 'KB_VOL_DN',  // ??
    '82': 'LOCCAP',     // ??
    '83': 'LOCNUM',     // ??
    '84': 'LOCSCR',     // ??
    '85': 'CODE107',    // ??
    '86': '0x086',      // ??
    '87': 'CODE56',     // ??
    '88': 'CODE133',    // ??a
    '89': 'CODE14',     // ??
    '8A': 'CODE132',    // ??
    '8B': 'CODE131',    // ?? 8C-8F?
    '90': 'CODE151',    // ??
    '91': 'CODE150',    // ?? 92-9F?
    'B0': 'MOUSE_KEY1', // ??
    'B1': 'MOUSE_KEY2', // ??
    'B2': 'MOUSE_KEY3', // ??
    'B3': 'MOUSE_KEY4', // ??
    'B4': 'MOUSE_KEY5', // ??
    'B5': 'MOUSE_KEY6', // ??
    'B6': 'MOUSE_KEY7', // ??
    'B7': 'MOUSE_KEY8', // ??
    'B8': 'MOUSE_KEY9', // ??
    'B9': 'MOUSE_KEY10',// ??
    'BA': 'MOUSE_KEY11',// ??
    'BB': 'MOUSE_KEY12',// ??
    'BC': 'MOUSE_KEY13',// ??
    'BD': 'MOUSE_KEY14',// ??
    'BE': 'MOUSE_KEY15',// ??
    'BF': 'MOUSE_KEY16',// ??
    'C0': 'G1',         // ??
    'C1': 'G2',         // ??
    'C2': 'G3',         // ??
    'C3': 'G4',         // ??
    'C4': 'G5',         // ??
    'C5': 'G6',         // ??
    'C6': 'G7',         // ??
    'C7': 'G8',         // ??
    'C8': 'G9',         // ??
    'C9': 'G10',        // ??
    'CA': 'G11',        // ??
    'CB': 'G12',        // ??
    'CC': 'G13',        // ??
    'CD': 'G14',        // ??
    'CE': 'G15',        // ??
    'CF': 'G16',        // ??
    'D0': 'G17',        // ??
    'D1': 'G18',        // ??
    'D2': 'G19',        // ??
    'D3': 'G20',        // ??
    'D4': 'G21',        // ??
    'D5': 'G22',        // ??
    'D6': 'G23',        // ??
    'D7': 'G24',        // ?? D8-DF?
    'E0': 'Ctrl',
    'E1': 'Shift',
    'E2': 'Alt',
    'E3': 'Sys',
    'E4': 'Ctrl',
    'E5': 'Shift',
    'E6': 'Alt',
    'E7': 'Sys',
    'E9': 'ACPI_PD',    // ??
    'EA': 'ACPI_SLEEP', // ??
    'EB': 'ACPI_WAKE',  // ??
    'EC': 'MEDIA_SEL',  // ??
    'ED': '<i class="fas fa-envelope"></i>',
    'EE': '<i class="fas fa-calculator"></i>',
    'EF': '<i class="fas fa-desktop"></i>',
    'F0': '<i class="fas fa-play"></i>',
    'F1': '<i class="fas fa-stop"></i>',
    'F2': '<i class="fas fa-step-backward"></i>',
    'F3': '<i class="fas fa-step-forward"></i>',
    'F4': '<i class="fas fa-volume-off"></i>',
    'F5': '<i class="fas fa-volume-down"></i>',
    'F6': '<i class="fas fa-volume-up"></i>',
    'F7': '<i class="fas fa-search"></i>',
    'F8': '<i class="fas fa-home"></i>',
    'F9': '<i class="fas fa-arrow-alt-circle-left"></i>',
    'FA': '<i class="fas fa-arrow-alt-circle-right"></i>',
    'FB': '<i class="fas fa-ban"></i>',
    'FC': '<i class="fas fa-sync-alt"></i>',
    'FD': '<i class="fas fa-heart"></i>',      // FE-FF?
    // Cheating keycode
    'FN': '<span class="color-fn">Fn</span>',
    'PN': '<span class="color-pn">Pn</span>',
    'FN1': '<span class="color-fn1">Fn1</span>',
    'Light': '<i class="fas fa-lightbulb"></i>',
    'L0': 'L0',
    'L1': 'L1',
    'L2': 'L2',
    'L3': 'L3',
    'Macro': '<i class="fas fa-keyboard"></i>',
};

const fullKeyboard = [
    [
        FK('F5', '0_5x1'),
        FK('F6', '0_5x1'),
        FK('F4', '0_5x1'),
        FK('F2', '0_5x1'),
        FK('F0', '0_5x1'),
        FK('F1', '0_5x1'),
        FK('F3', '0_5x1'),
        FK(null, '0_5x1'),
        FK('EF', '0_5x1'),
        FK('EE', '0_5x1'),
        FK('F7', '0_5x1'),
        FK('ED', '0_5x1'),
        FK('F9', '0_5x1'),
        FK('FA', '0_5x1'),
        FK('FB', '0_5x1'),
        FK('FC', '0_5x1'),
        FK('FD', '0_5x1'),
        FK('F8', '0_5x1'),
        FK(null, '0_5x1'),
        FK('L0', '0_5x1'),
        FK('L1', '0_5x1'),
        FK('L2', '0_5x1'),
        FK('L3', '0_5x1'),
    ],
    [
        FK(null, '0_5x1')
    ],
    [
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
        FK('68', '0_5x1'),
        FK('69', '0_5x1'),
        FK('6A', '0_5x1'),
        FK('6B', '0_5x1'),
        FK(null, '0_5x0_5'),
        FK('6C', '0_5x1'),
        FK('6D', '0_5x1'),
        FK('6E', '0_5x1'),
        FK('6F', '0_5x1'),
        FK(null, '0_5x0_5'),
        FK('70', '0_5x1'),
        FK('71', '0_5x1'),
        FK('72', '0_5x1'),
        FK('73', '0_5x1'),
        FK(null, '0_5x0_5'),
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
        FK(null, '0_5x0_5'),
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
        FK(null, '0_5x1'),
    ],
    [
        FK('29'),
        FK(null),
        FK('3A'),
        FK('3B'),
        FK('3C'),
        FK('3D'),
        FK(null, '1x0_5'),
        FK('3E'),
        FK('3F'),
        FK('40'),
        FK('41'),
        FK(null, '1x0_5'),
        FK('42'),
        FK('43'),
        FK('44'),
        FK('45'),
        FK(null, '1x0_5'),
        FK('46'),
        FK('47'),
        FK('48'),
        FK(null, '1x0_5'),
        FK('PN'),
        FK('FN'),
        FK('FN1'),
        FK('0'),
    ],
    [
        FK(null, '0_5x1')
    ],
    [
        FK('35'),
        FK('1E'),
        FK('1F'),
        FK('20'),
        FK('21'),
        FK('22'),
        FK('23'),
        FK('24'),
        FK('25'),
        FK('26'),
        FK('27'),
        FK('2D'),
        FK('2E'),
        FK('2A', '1x2'),
        FK(null, '1x0_5'),
        FK('49'),
        FK('4A'),
        FK('4B'),
        FK(null, '1x0_5'),
        FK('53'),
        FK('54'),
        FK('55'),
        FK('56'),
    ],
    [
        FK('2B', '1x1_5'),
        FK('14'),
        FK('1A'),
        FK('8'),
        FK('15'),
        FK('17'),
        FK('1C'),
        FK('18'),
        FK('C'),
        FK('12'),
        FK('13'),
        FK('2F'),
        FK('30'),
        FK('31', '1x1_5'),
        FK(null, '1x0_5'),
        FK('4C'),
        FK('4D'),
        FK('4E'),
        FK(null, '1x0_5'),
        FK('5F'),
        FK('60'),
        FK('61'),
        FK('57', '2x1'),
        FK(null), // fill in plus sign
    ],
    [
        FK('39', '1x1_75'),
        FK('4'),
        FK('16'),
        FK('7'),
        FK('9'),
        FK('A'),
        FK('B'),
        FK('D'),
        FK('E'),
        FK('F'),
        FK('33'),
        FK('34'),
        FK('28', '1x2_25'),
        FK(null, '1x4'),
        FK('5C'),
        FK('5D'),
        FK('5E'),
        FK(null),
    ],
    [
        FK('E1', '1x2_25'),
        FK('1D'),
        FK('1B'),
        FK('6'),
        FK('19'),
        FK('5'),
        FK('11'),
        FK('10'),
        FK('36'),
        FK('37'),
        FK('38'),
        FK('E5', '1x2_75'),
        FK(null, '1x1_5'),
        FK('52'),
        FK(null, '1x1_5'),
        FK('59'),
        FK('5A'),
        FK('5B'),
        FK('58', '2x1'),
        FK(null),
    ],
    [
        FK('E0', '1x1_25'),
        FK('E3', '1x1_25'),
        FK('E2', '1x1_25'),
        FK('2C', '1x6_25'),
        FK('E6', '1x1_25'),
        FK('E7', '1x1_25'),
        FK('65', '1x1_25'),
        FK('E4', '1x1_25'),
        FK(null, '1x0_5'),
        FK('50'),
        FK('51'),
        FK('4F'),
        FK(null, '1x0_5'),
        FK('62', '1x2'),
        FK('63'),
        FK(null),
    ],
]

const visibleKeyCode = fullKeyboard.reduce((p, r)=>p.concat(r.map(v=>v.code)),[]);
const hiddenKeyCode = Object.keys(keyName).filter(v=>unavaliabe_keys.indexOf(v) < 0 && visibleKeyCode.indexOf(v) < 0).sort((a,b)=>(a.length - b.length || a.localeCompare(b)));

// Patch keyLegend so I don't need to change it
for (const key of hiddenKeyCode) {
    keyLegend[key] = '<i class="fas fa-flask"></i>';
}

// -----------------------
//  Templates
// -----------------------
function Key(keyCode, fnktm, defaults = [], type = '1x1', override = []) {
    var default_fn = !defaults[0] ? '0' : defaults[0];
    var default_fn1 = !defaults[1] ? '0' : defaults[1];
    var default_pn = !defaults[2] ? '0' : defaults[2];
    var default_bind = !defaults[3] ? keyCode : defaults[3];

    var override_fn = !override[0] ? default_fn : override[0];
    var override_fn1 = !override[1] ? default_fn1 : override[1];
    var override_pn = !override[2] ? default_pn : override[2];
    var override_bind = !override[3] ? default_bind : override[3];
    return {
        code: keyCode,
        locked: locked_keys.indexOf(override_bind) >= 0,
        ktm: fnktm,
        profiles: [
        {
            default_fn: default_fn,
            default_fn1: default_fn1,
            default_pn: default_pn,
            default_bind: default_bind,
            bind: override_bind,
            fn: override_fn,
            fn1: override_fn1,
            pn: override_pn,
            bind_macro: -1,
            fn_macro: -1,
            fn1_macro: -1,
            pn_macro: -1,
        }, 
        {
            default_fn: default_fn,
            default_fn1: default_fn1,
            default_pn: default_pn,
            default_bind: default_bind,
            bind: override_bind,
            fn: override_fn,
            fn1: override_fn1,
            pn: override_pn,
            bind_macro: -1,
            fn_macro: -1,
            fn1_macro: -1,
            pn_macro: -1,
        }, 
        {
            default_fn: default_fn,
            default_fn1: default_fn1,
            default_pn: default_pn,
            default_bind: default_bind,
            bind: override_bind,
            fn: override_fn,
            fn1: override_fn1,
            pn: override_pn,
            bind_macro: -1,
            fn_macro: -1,
            fn1_macro: -1,
            pn_macro: -1,
        }, 
        {
            default_fn: default_fn,
            default_fn1: default_fn1,
            default_pn: default_pn,
            default_bind: default_bind,
            bind: override_bind,
            fn: override_fn,
            fn1: override_fn1,
            pn: override_pn,
            bind_macro: -1,
            fn_macro: -1,
            fn1_macro: -1,
            pn_macro: -1,
        }
        ],
        type: type
    };
}

function FK(keyCode=null, type="1x1") { // FullKeyboard Key 
    return {code: keyCode, type: type};
}

function defaultRows() {
    return [
        [
            Key('29', 2, ['0', '35', 'Light']),
            Key('14', 3, ['F5', '3A', 'Light']),
            Key('1A', 10, ['F6', '3B', 'Light']),
            Key('8', 11, ['F4', '3C', 'Light']),
            Key('15', 18, ['0', '3D', 'Light']),
            Key('17', 19, ['0', '3E', 'Light']),
            Key('1C', 26, ['EE', '3F', 'Light']),
            Key('18', 27, ['4B', '40', 'Light']),
            Key('C', 34, ['52', '41']), 
            Key('12', 35, ['4E', '42']), 
            Key('13', 42, ['46', '43']), 
            Key('4C', 45, ['47', '44']), 
            Key('2A', 40, ['48', '45'])
        ],
        [
            Key('2B', 4, ['39', '1E'], '1x1_25'), 
            Key('4', 5, ['F2', '1F']), 
            Key('16', 12, ['F0', '20']), 
            Key('7', 13, ['F3', '21']), 
            Key('9', 20, ['0', '22']), 
            Key('A', 21, ['0', '23']), 
            Key('B', 28, ['4A', '24']), 
            Key('D', 29, ['50', '25']), 
            Key('E', 36, ['51', '26']), 
            Key('F', 37, ['4F', '27']), 
            Key('33', 44, ['49', '2D']), 
            Key('28', 32, ['0', '2E'], '1x1_75')
        ],
        [
            Key('E1', 6, [], '1x1_75'),
            Key('1D', 7),
            Key('1B', 14),
            Key('6', 15, ['0','0','Light']),
            Key('19', 22, ['0','0','Light']),
            Key('5', 23, ['0', '36'], '1x1', ['0', '34']),
            Key('11', 30, ['4D', '38']),
            Key('10', 21, ['L0', '2F']),
            Key('36', 38, ['L1','30','Light']),
            Key('37', 39, ['L2','31','Light']),
            Key('E5', 47, ['L3'], '1x1_25'),
            Key('C9', 24, ['0','0','0', 'FN1']),
        ],
        [
            Key('E0', 33, [], '1x1_25'),
            Key('E3', 41),
            Key('E2', 16),
            Key('CF', 25, ['0','0','0', 'PN']),
            Key('C8', 0, ['0', '0', '0', '2C'], '1x1_75'),
            Key('2C', 48, [], '1x2_75'),
            Key('E7', 46, ['0','0','0', 'FN']),
            Key('E6', 1),
            Key('65', 9),
            Key('E4', 43, [], '1x1_25'),
        ],
    ];
}

// -----------------------
//  Vue.js
// -----------------------
var app = new Vue({
    el: '#app',
    created: function () {
        window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = false;
        });

        // initialize rows
        if (!this.rows) {
            this.rows = defaultRows();
        }
    },
    data: {
        rows: null,
        macros: [],

        // states
        active_profile: 0,
        active_tab: 0,
        selected_key: null,
        binding_key: null,
        binding_macro: -1,
        selected_key_layer: 0,
        editing_macro: null,
        editing_macro_index: null,
        new_macro: false,
        macro_next_id: 0,
        default_timer: 10,

        // consts
        locked_keys: locked_keys,
        unbindable_keys: unbindable_keys,
        unbindable_desc: unbindable_desc,
        special_keys: special_keys,
        ktmName: ktmName,
        keyName: keyName,
        keyLegend: keyLegend,
        fullKeyboard: fullKeyboard,

        // other
        UIkit: UIkit,
        fileListener: null,
        advanced: false
    },
    computed: {
        ledClass: function () {
          return {
            'led-red': this.active_profile == 1,
            'led-green': this.active_profile == 2,
            'led-blue': this.active_profile == 3,
          }
        },
        currentKeyHasLayers: function () {
            return this.currentKeyProfile.bind != 'FN' && this.currentKeyProfile.bind != 'FN1' && this.currentKeyProfile.bind != 'PN';
        },
        currentKeyLayerPrefix: function() {
            switch (this.selected_key_layer) {
                case 0:
                return "";
                case 1:
                return "Pn + ";
                case 2:
                return "Fn + ";
                case 3:
                return "Fn1 + ";
            }
            return "";
        },
        currentProfileNumMacro: function () {
            let count = 0;
            for (var r in this.rows) {
                var row = this.rows[r];
                for (k in row) {
                    var key = row[k];
                    if (key.profiles[this.active_profile].bind == "Macro") count += 1;
                    if (key.profiles[this.active_profile].pn == "Macro") count += 1;
                    if (key.profiles[this.active_profile].fn == "Macro") count += 1;
                    if (key.profiles[this.active_profile].fn1 == "Macro") count += 1;
                }
            }
            return count;
        },
        currentKeyProfile: function() {
            return this.selected_key.profiles[this.active_profile];
        },
        currentKeyBind: function () {
            switch (this.selected_key_layer) {
                case 0:
                return this.selected_key.profiles[this.active_profile].bind;
                case 1:
                return this.selected_key.profiles[this.active_profile].pn;
                case 2:
                return this.selected_key.profiles[this.active_profile].fn;
                case 3:
                return this.selected_key.profiles[this.active_profile].fn1;
            }
            return null;
        },
        currentKeyDefault: function () {
            switch (this.selected_key_layer) {
                case 0:
                return this.selected_key.profiles[this.active_profile].default_bind;
                case 1:
                return this.selected_key.profiles[this.active_profile].default_pn;
                case 2:
                return this.selected_key.profiles[this.active_profile].default_fn;
                case 3:
                return this.selected_key.profiles[this.active_profile].default_fn1;
            }
            return null;
        },
        currentKeyCode: function () {
            return this.selected_key.code;
        },
        shortcuts: function() {
            var _this = this;
            var _run_through_rows = function(f) {
                for (var r in _this.rows) {
                    var row = _this.rows[r];
                    for (k in row) {
                        var key = row[k];
                        f(key, _this.active_profile);
                    }
                }
            }
            return {
                "Remove all RGB controls": function () {
                    _run_through_rows(function(k, p) {
                        if (k.profiles[p].pn == 'Light') {
                            k.profiles[p].pn = '0'
                        }
                    });
                    UIkit.notification('<i class="fas fa-check"></i> RGB control removed.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                },
                "Clear Fn layer": function () {
                    _run_through_rows(function(k, p) {
                        k.profiles[p].fn = '0'
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Fn layer cleared.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                },
                "Clear Pn layer": function () {
                    _run_through_rows(function(k, p) {
                        k.profiles[p].pn = '0'
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Pn layer cleared.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                },
                "Clear Fn1 layer": function () {
                    _run_through_rows(function(k, p) {
                        k.profiles[p].fn1 = '0'
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Fn1 layer cleared.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                },
                "Clone to L0": function () {
                    _run_through_rows(function(k, p) {
                        console.log(0);
                        console.log(k.profiles[0].fn);
                        k.profiles[0].bind = k.profiles[p].bind
                        k.profiles[0].pn = k.profiles[p].pn
                        k.profiles[0].fn = k.profiles[p].fn
                        k.profiles[0].fn1 = k.profiles[p].fn1
                        console.log(p);
                        console.log(k.profiles[p].fn)
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Copyed profile L'+_this.active_profile+' to L0.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                    _this.active_profile = 0;
                },
                "Clone to L1": function () {
                    _run_through_rows(function(k, p) {
                        console.log(k);
                        k.profiles[1].bind = k.profiles[p].bind
                        k.profiles[1].pn = k.profiles[p].pn
                        k.profiles[1].fn = k.profiles[p].fn
                        k.profiles[1].fn1 = k.profiles[p].fn1
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Copyed profile L'+_this.active_profile+' to L1.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                    _this.active_profile = 1;
                },
                "Clone to L2": function () {
                    _run_through_rows(function(k, p) {
                        k.profiles[2].bind = k.profiles[p].bind
                        k.profiles[2].pn = k.profiles[p].pn
                        k.profiles[2].fn = k.profiles[p].fn
                        k.profiles[2].fn1 = k.profiles[p].fn1
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Copyed profile L'+_this.active_profile+' to L2.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                    _this.active_profile = 2;
                },
                "Clone to L3": function () {
                    _run_through_rows(function(k, p) {
                        k.profiles[3].bind = k.profiles[p].bind
                        k.profiles[3].pn = k.profiles[p].pn
                        k.profiles[3].fn = k.profiles[p].fn
                        k.profiles[3].fn1 = k.profiles[p].fn1
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Copyed profile L'+_this.active_profile+' to L3.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                    _this.active_profile = 3;
                },

            }
        },
        rowsToMPCData: function () {
            var profileCount = 4;
            var data = {
                functionSet: [],
                keyChange: [],
                macro: [],
            }
            
            // initialize functionSet index [0 - profile 0 FN, 1 - profile 1 FN1, 2 - profile 3 PN]
            // note: 50 is default - bind to nothing instead of 0 (firmware bug)
            var layerIndex = {"FN": 0, "FN1": 1, "PN": 2};
            for (var i = 0; i < profileCount; i++) {
                data.functionSet.push({
                    key: "FN",
                    ktm: [50],
                    profileIndex: i
                });
                data.functionSet.push({
                    key: "FN1",
                    ktm: [50],
                    profileIndex: i
                });
                data.functionSet.push({
                    key: "PN",
                    ktm: [50],
                    profileIndex: i
                });
            }

            for (var r in this.rows) {
                var row = this.rows[r];
                for (var k in row) {
                    var key = row[k];
                    for (var i = 0; i < profileCount; i++) {
                        var profile = key.profiles[i];
                        if (profile.bind == "FN" || profile.bind == "FN1" || profile.bind == "PN") {
                            // Function Set
                            var bind = data.functionSet[i*3+layerIndex[profile.bind]];
                            if (bind.ktm[0] == 50) {
                                bind.ktm[0] = key.ktm;
                            } else {
                                bind.ktm.push(key.ktm);
                            }
                        }
                        else {
                            // Key Change & macros

                            // helpers
                            var addToKeyChange = function (key_code, bind_code, default_code, layer) {
                                if (unbindable_keys.indexOf(bind_code) < 0 && bind_code != default_code) {
                                    if (special_keys[bind_code]) {
                                        data.keyChange.push({
                                            profileIndex: i,
                                            sourceKey: key_code,
                                            sourceLayer: layer,
                                            targetKey: special_keys[bind_code].targetKey,
                                            targetLayer: special_keys[bind_code].targetLayer,
                                        });
                                    } else {
                                        data.keyChange.push({
                                            profileIndex: i,
                                            sourceKey: key_code,
                                            sourceLayer: layer,
                                            targetKey: bind_code,
                                            targetLayer: "INIT",
                                        });
                                    }
                                }
                            }

                            var addToMacros = function (macros, key_code, macro_id, layer) {
                                var bind_macro = macros.filter(function(m){return m.id == macro_id})[0];
                                if (!bind_macro) return;
                                var events = [];
                                bind_macro.events.forEach(function(e, index) {
                                    if (special_keys[e.code]) {
                                        events.push({
                                            key: special_keys[e.code].targetKey,
                                            event: e.event,
                                            timer: e.timer,
                                            layer: special_keys[e.code].targetLayer,
                                        });
                                    } else {
                                        events.push({
                                            key: e.code,
                                            event: e.event,
                                            timer: e.timer,
                                            layer: 'INIT',
                                        });
                                    }
                                })
                                data.macro.push({
                                    macro: events,
                                    macroRepeat: bind_macro.repeats,
                                    macroType: bind_macro.type,
                                    profileIndex: i,
                                    sourceKey: key_code,
                                    sourceLayer: layer,
                                });
                            }

                            // main layer
                            if (profile.bind == "Macro") addToMacros(this.macros, key.code, profile.bind_macro, "INIT");
                            else addToKeyChange(key.code, profile.bind, key.code, "INIT");
                            // pn layer
                            if (profile.pn == "Macro") addToMacros(this.macros, key.code, profile.pn_macro, "PN");
                            else addToKeyChange(key.code, profile.pn, profile.default_pn, "PN");
                            // fn layer
                            if (profile.fn == "Macro") addToMacros(this.macros, key.code, profile.fn_macro, "FN");
                            else addToKeyChange(key.code, profile.fn, profile.default_fn, "FN");
                            // fn1 layer
                            if (profile.fn1 == "Macro") addToMacros(this.macros, key.code, profile.fn1_macro, "FN1");
                            else addToKeyChange(key.code, profile.fn1, profile.default_fn1, "FN1");
                        }
                    }
                }
            }
            return data;
        },
    },
    methods: {
        openFile: function (callback) {
            var inputFile = document.getElementById("importFile");
            if (this.fileListener) {
                inputFile.removeEventListener('change', this.fileListener);
            }
            this.fileListener = function(t) { callback(t.target.files); t.target.value = ''; }
            inputFile.addEventListener('change', this.fileListener);
            if(inputFile && document.createEvent) {
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, false);
                inputFile.dispatchEvent(evt);
            }
        },
        setTimer: function (event, e) {
            event.timer = parseInt(e.target.value);
            event.timer = (!event.timer) ? 10 : Math.min(Math.max(event.timer, 1), 16777216);
            this.default_timer = event.timer;
        },
        setRepeats: function (e) {
            this.editing_macro.repeats = parseInt(e.target.value);
            this.editing_macro.repeats = (!this.editing_macro.repeats) ? 2 : Math.min(Math.max(this.editing_macro.repeats, 2), 510);
        },
        newMacro: function () {
            this.new_macro = true;
            this.default_timer = 10;
            this.editing_macro = {
                id: this.macro_next_id,
                title: "Macro "+(this.macro_next_id+1),
                events: [],
                repeats: 2,
                type: 1,
            }
            UIkit.modal('#macro-modal', {bgClose: null}).show();
        },
        editMacro: function (index) {
            this.new_macro = false;
            this.default_timer = 10;
            this.editing_macro_index = index;
            this.editing_macro = {
                title: this.macros[index].title, 
                events: this.macros[index].events.concat([]),
                repeats: this.macros[index].repeats,
                type: this.macros[index].type
            };
            UIkit.modal('#macro-modal', {bgClose: null}).show();
        },
        saveMacro: function () {
            if (this.new_macro) {
                this.macros.push(this.editing_macro);
                this.macro_next_id += 1;
                new_macro = false;
            } else {
                this.macros[this.editing_macro_index].repeats = this.editing_macro.repeats;
                this.macros[this.editing_macro_index].type = this.editing_macro.type;
                this.macros[this.editing_macro_index].title = this.editing_macro.title;
                this.macros[this.editing_macro_index].events = this.editing_macro.events;
            }
            UIkit.modal('#macro-modal').hide();
        },
        removeMacro: function(){
            this.macros.splice(this.editing_macro_index, 1);
            // Unbind macro keys
            this.rows.map(function(row){row.map(function(k){k.profiles.map(function(key) {
                if (key.bind == 'Macro') {
                    key.bind = '0';
                }
                if (key.fn == 'Macro') {
                    key.fn = '0';
                }
                if (key.fn1 == 'Macro') {
                    key.fn1 = '0';
                }
                if (key.pn == 'Macro') {
                    key.pn = '0';
                }
            })})});
            UIkit.modal('#macro-modal').hide();
        },
        previewMacro: function(macro) {
            return macro.events.filter(function(e) {return e.event==1;}).map(function(e){return e.code});
        },
        bindKey: function (type) {
            var profile = this.selected_key.profiles[this.active_profile];
            this.selected_key_layer = type;
            switch (type) {
                case 0:
                this.binding_key = profile.bind;
                this.binding_macro = profile.bind_macro;
                break;
                case 1:
                this.binding_key = profile.pn;
                this.binding_macro = profile.pn_macro;
                break;
                case 2:
                this.binding_key = profile.fn;
                this.binding_macro = profile.fn_macro;
                break;
                case 3:
                this.binding_key = profile.fn1;
                this.binding_macro = profile.fn1_macro;
                break;
            }
            UIkit.modal('#key-selector-modal', {bgClose: null}).show();
        },
        confirmBind: function () {
            var profile = this.selected_key.profiles[this.active_profile];
            switch (this.selected_key_layer) {
                case 0:
                profile.bind = this.binding_key;
                profile.bind_macro = (this.binding_key == "Macro") ? this.binding_macro : -1;
                break;
                case 1:
                profile.pn = this.binding_key;
                profile.pn_macro = (this.binding_key == "Macro") ? this.binding_macro : -1;
                break;
                case 2:
                profile.fn = this.binding_key;
                profile.fn_macro = (this.binding_key == "Macro") ? this.binding_macro : -1;
                break;
                case 3:
                profile.fn1 = this.binding_key;
                profile.fn1_macro = (this.binding_key == "Macro") ? this.binding_macro : -1;
                break;
            }
            UIkit.modal('#key-selector-modal').hide()
        },
        addMacro: function () {
            UIkit.modal('#macro-modal', {bgClose: null}).show()
        },
        generate: function (){
            try {
                var blob = new Blob([this.convertToBytes(this.rowsToMPCData)], { type: "octet/stream" });
                UIkit.notification('<i class="fas fa-download"></i> Layout file generated.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                saveAs(blob, 'layout.cys');
            } catch (err) {
                console.error(err);
                UIkit.notification('<i class="fas fa-exclamation-circle"></i> Generation failed. Something is wrong on our part.', {pos: 'bottom-right',status:'danger'}).$el.classList.add('uk-box-shadow-large');
            }

        },
        importMacros: function (file) {
            var reader = new FileReader();
            var _this = this;
            reader.onload = function(e) {
                try {
                    var obj = JSON.parse(reader.result);

                    if (obj.macros && obj.macros.length > 0) {
                        obj.macros.forEach(function(macro, index) {
                            macro.id = _this.macro_next_id;
                            _this.macros.push(macro);
                            _this.macro_next_id += 1;
                        });
                        UIkit.notification('<i class="fas fa-check"></i> Macros imported.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                    } else {
                        UIkit.notification('<i class="fas fa-check"></i> Layout file contains no macro.', {pos: 'bottom-right',status:'warning'}).$el.classList.add('uk-box-shadow-large');
                    }
                } catch (err) {
                    console.error(err);
                    UIkit.notification('<i class="fas fa-exclamation-circle"></i> Failed to open.', {pos: 'bottom-right',status:'danger'}).$el.classList.add('uk-box-shadow-large');
                }   
            }
            try {
                reader.readAsText(file[0]);
            } catch (err) {
                console.error(err);
                UIkit.notification('<i class="fas fa-exclamation-circle"></i> Can not open this file.', {pos: 'bottom-right',status:'warning'}).$el.classList.add('uk-box-shadow-large');
            }
        },
        importFile: function (file) {
            var reader = new FileReader();
            var _this = this;
            reader.onload = function(e) {
                try {
                    var obj = JSON.parse(reader.result);
                    if (!obj.layout) {
                        throw "no layout";
                    }
                    if (obj.macros && obj.macros.length > 0) {
                        _this.macros = obj.macros;
                        _this.macro_next_id = obj.macros[obj.macros.length-1].id + 1;
                    }

                    _set_key = function(key, imported) {
                        key.profiles.forEach(function (p, index) {
                            p.bind = imported.profiles[index].bind;
                            p.fn = imported.profiles[index].fn;
                            p.fn1 = imported.profiles[index].fn1;
                            p.pn = imported.profiles[index].pn;
                            p.bind_macro = imported.profiles[index].bind_macro;
                            p.fn_macro = imported.profiles[index].fn_macro;
                            p.fn1_macro = imported.profiles[index].fn1_macro;
                            p.pn_macro = imported.profiles[index].pn_macro;
                        })
                    }
                    _this.rows.forEach(function (row, r) {
                        row.forEach(function (key, k) {
                            _set_key(key, obj.layout[r][k]);
                        });
                    });
                    UIkit.notification('<i class="fas fa-check"></i> Layout file opened.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                } catch (err) {
                    console.error(err);
                    UIkit.notification('<i class="fas fa-exclamation-circle"></i> Failed to open.', {pos: 'bottom-right',status:'danger'}).$el.classList.add('uk-box-shadow-large');
                }   
            }
            try {
                reader.readAsText(file[0]);
            } catch (err) {
                console.error(err);
                UIkit.notification('<i class="fas fa-exclamation-circle"></i> Can not open this file.', {pos: 'bottom-right',status:'warning'}).$el.classList.add('uk-box-shadow-large');
            }
        },
        exportFile: function () {
            var _this = this;
            var toFile = function () {
                var exportData = {
                    layout: _this.rows,
                    macros: _this.macros,
                };
                return JSON.stringify(exportData);
            }
            var blob = new Blob([toFile()], { type: "text/plain;charset=utf-8" });
            UIkit.notification('<i class="fas fa-download"></i> Download started.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
            saveAs(blob, 'export.txt');
        },
        setupEventList: function () {
            var sortable = UIkit.sortable("#macro-list");
            var _this = this;
            if (!sortable || sortable.mpcSet) return;
            UIkit.util.on('.uk-sortable', 'start', function(e) {
                var index = null;
                
                e.target.childNodes.forEach(function (node, i) {
                    if (node == e.detail[1]) {
                        index = i;
                    }
                });
                e.target.movingIndex = index;
            });
            UIkit.util.on('.uk-sortable', 'moved', function(e) {
                var index = null;
                
                e.target.childNodes.forEach(function (node, i) {
                    if (node == e.detail[1]) {
                        index = i;
                    }
                });
                _this.moveEvent(e.target.movingIndex, index);
            });
            sortable.mpcSet = true;
        },
        isUnbindable: function(keycode) {
            return unbindable_keys.indexOf(keycode) >= 0;
        },
        unbindableDesc: function(keycode) {
            return unbindable_desc[unbindable_keys.indexOf(keycode)];
        },
        isLocked: function(keycode) {
            return locked_keys.indexOf(keycode) >= 0;
        },
        isSpecial: function(keycode) {
            return special_keys.indexOf(keycode) >= 0;
        },
        copyObj: function(src) {
            let target = {};
            for (let prop in src) {
            if (src.hasOwnProperty(prop)) {
                target[prop] = src[prop];
            }
            }
            return target;
        },
        numberTo2Bytes: function(num) {
            var bytes = [0, 0];
            for (var i = 0; i < bytes.length; i++) {
                var byte = num & 0xff;
                bytes[i] = byte;
                num = (num - byte) / 0x100;
            }
            return bytes;
        },
        numberTo4Bytes: function(num) {
            var bytes = [0, 0, 0, 0];
            for (var i = 0; i < bytes.length; i++) {
                var byte = num & 0xff;
                bytes[i] = byte;
                num = (num - byte) / 0x100;
            }
            return bytes;
        },
        stringToBytes: function(str) {
            var binaryLen = str.length;
            var bytes = [];
            for (var i = 0; i < binaryLen; i++) {
                var ascii = str.charCodeAt(i);
                bytes[i] = ascii;
            }
            return bytes;
        },
        isLocal: function(){
            return window.location.protocol == "file:"
        },
        convertToBytes: function (mpcData) {
            var _this = this;
            var profileCount = 4;
            var itemSize = mpcData.macro.length * 2 + mpcData.keyChange.length + mpcData.functionSet.length;
            var cysHeader = {
                title: this.stringToBytes('CYFI'),
                rev: this.numberTo2Bytes(0),
                itemSize: this.numberTo2Bytes(itemSize)
            };
            var cysItem = [];
            var cysProfile = [];
            var cysMacro = [];
            var macroIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var profilePos = 8 + itemSize * 8;
            var generateForProfile = function (filterIndex) {
                //function set
                var filterFunctionSet = mpcData.functionSet.filter(function (row) {
                    return parseInt(row.profileIndex) === filterIndex;
                });
                filterFunctionSet.forEach(function (row, idx) {
                    var profile = {
                        pos: profilePos,
                        len: [2],
                        key: { FN: 0x94, FN1: 0x95, PN: 0x96, FN3: 0x97 }[row.key],
                        index: _this.numberTo2Bytes(row.ktm.length),
                        data: row.ktm
                    };
                    var profileLength = 8;
                    if (profilePos % 0x1000 + profileLength > 0x1000) {
                        profilePos = Math.ceil(profilePos / 0x1000) * 0x1000;
                        profile.pos = profilePos;
                    }
                    cysProfile.push(profile);
                    cysItem.push({
                        type: [0],
                        profileIndex: [parseInt(row.profileIndex)],
                        macroIndex: _this.numberTo2Bytes(0),
                        itemDataShift: _this.numberTo4Bytes(profilePos)
                    }); 
                    profilePos += profileLength;
                });
                //key change
                var filterKeyChange = mpcData.keyChange.filter(function (row) {
                    return parseInt(row.profileIndex) === filterIndex;
                });
                filterKeyChange.forEach(function (row, idx) {
                    var profileIndex = [];
                    profileIndex.push(parseInt(row.sourceKey, 16));
                    if (row.sourceLayer == 'FN') {
                        profileIndex.push(1);
                    }
                    else if (row.sourceLayer == 'FN1') {
                        profileIndex.push(2);
                    }
                    else if (row.sourceLayer == 'PN') {
                        profileIndex.push(3);
                    }
                    else {
                        profileIndex.push(0);
                    }
                    var profileData = [];
                    profileData.push(parseInt(row.targetKey, 16));
                    if (row.targetLayer == 'FN') {
                        profileData.push(1);
                    }
                    else if (row.targetLayer == 'FN1') {
                        profileData.push(2);
                    }
                    else if (row.targetLayer == 'PN') {
                        profileData.push(3);
                    }
                    else {
                        profileData.push(0);
                    }
                    var profile = {
                        pos: profilePos,
                        len: [2],
                        key: [0x20],
                        index: profileIndex,
                        data: profileData.concat(_this.numberTo2Bytes(0))
                    };
                    var profileLength = 8;
                    if (profilePos % 0x1000 + profileLength > 0x1000) {
                        profilePos = Math.ceil(profilePos / 0x1000) * 0x1000;
                        profile.pos = profilePos;
                    }
                    cysProfile.push(profile);
                    cysItem.push({
                        type: [0],
                        profileIndex: [parseInt(row.profileIndex)],
                        macroIndex: _this.numberTo2Bytes(0),
                        itemDataShift: _this.numberTo4Bytes(profilePos)
                    });
                    profilePos += profileLength;
                });
                //macro
                var filterMacro = mpcData.macro.filter(function (row) {
                    return parseInt(row.profileIndex) === filterIndex;
                });
                var macroPos = profilePos + filterMacro.length * 8 + 4;
                filterMacro.forEach(function (row, idx) {
                    var profileData = parseInt(row.macroType).toString(2) + '111';
                    if (row.sourceLayer == 'FN') {
                        profileData += '01';
                    }
                    else if (row.sourceLayer == 'FN1') {
                        profileData += '10';
                    }
                    else if (row.sourceLayer == 'PN') {
                        profileData += '11';
                    }
                    else {
                        profileData += '00';
                    }
                    var profile = {
                        pos: profilePos,
                        len: [2],
                        key: [0x18],
                        index: _this.numberTo2Bytes(macroIndex[row.profileIndex]),
                        data: [parseInt(row.sourceKey, 16), parseInt(profileData, 2)].concat(_this.numberTo2Bytes(parseInt(row.macroRepeat)))
                    };
                    var profileLength = 8;
                    if (profilePos % 0x1000 + profileLength > 0x1000) {
                        profilePos = Math.ceil(profilePos / 0x1000) * 0x1000;
                        profile.pos = profilePos;
                    }
                    cysProfile.push(profile);
                    cysItem.push({
                        type: [0],
                        profileIndex: [parseInt(row.profileIndex)],
                        macroIndex: _this.numberTo2Bytes(0),
                        itemDataShift: _this.numberTo4Bytes(profilePos)
                    });
                    profilePos += profileLength;
                    var macro = {
                        pos: macroPos,
                        macro: []
                    };
                    row.macro.forEach(function (item, idx) {
                        var macroData = '';
                        if (item.event == '1') {
                            macroData += '001';
                        }
                        else {
                            macroData += '010';
                        }
                        macroData += '111';
                        if (item.layer == 'FN') {
                            macroData += '01';
                        }
                        else if (item.layer == 'FN1') {
                            macroData += '10';
                        }
                        else if (item.layer == 'PN') {
                            macroData += '11';
                        }
                        else {
                            macroData += '00';
                        }
                        var timer = parseInt(item.timer);
                        var macroTimer = [];
                        if (timer < 16383) {
                            macroTimer = _this.numberTo2Bytes(timer / 0.5 - 1);
                        }
                        else {
                            macroTimer = _this.numberTo2Bytes(Math.floor(timer / 512) - 1 + 32768);
                        }
                        macro.macro = macro.macro.concat([parseInt(item.key, 16), parseInt(macroData, 2)]).concat(macroTimer);
                    });
                    macro.macro = macro.macro.concat([0, 0xFC, 0, 0]);
                    var macroLength = macro.macro.length;
                    if (macroPos % 0x1000 + macroLength > 0x1000) {
                        macroPos = Math.ceil(macroPos / 0x1000) * 0x1000;
                        macro.pos = macroPos;
                    }
                    cysMacro.push(macro);
                    cysItem.push({
                        type: [1],
                        profileIndex: [parseInt(row.profileIndex)],
                        macroIndex: _this.numberTo2Bytes(macroIndex[row.profileIndex]),
                        itemDataShift: _this.numberTo4Bytes(macroPos)
                    });
                    macroPos += macroLength;
                    macroIndex[row.profileIndex]++;
                });
                profilePos = macroPos + 8;
            };
            // Mod: check range [0, profileCount)
            for (var filterIndex = 0; filterIndex < profileCount; filterIndex++) {
                generateForProfile(filterIndex);
            }
            var bytes = [];
            bytes = bytes.concat(cysHeader.title, cysHeader.rev, cysHeader.itemSize);
            cysItem.forEach(function (item, idx) {
                bytes = bytes.concat(item.type, item.profileIndex, item.macroIndex, item.itemDataShift);
            });
            while (bytes.length < profilePos) {
                bytes.push(0);
            }
            cysProfile.forEach(function (profile, idx) {
                var newData = [];
                newData = newData.concat(profile.len, profile.key, profile.index, profile.data);
                for (var pos = 0; pos < newData.length; pos++) {
                    bytes[profile.pos + pos] = newData[pos];
                }
            });
            cysMacro.forEach(function (macro, idx) {
                var newData = [];
                newData = newData.concat(macro.macro);
                for (var pos = 0; pos < newData.length; pos++) {
                    bytes[macro.pos + pos] = newData[pos];
                }
            });
            while (bytes.length < 8192) {
                bytes.push(255);
            }
            return new Uint8Array(bytes);
        },
        newEvent: function(key) {
            if (this.editing_macro.events.length > 0) {
                this.editing_macro.events[this.editing_macro.events.length - 1].timer = this.default_timer;
            }
            this.editing_macro.events.push({
                code: key,
                event: 1,
                timer: this.default_timer,
            }, {
                code: key,
                event: 0,
                timer: this.default_timer,
            })
        },
        removeEvent: function(index) {
            this.editing_macro.events.splice(index, 1);
        }
    }
});