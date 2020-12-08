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

const keyLocales = {
    us: {
        name: 'QWERTY (US)',
    },
    de: {
        name: 'QWERTY (German)',
    },
    jp: {
        name: 'QWERTY (Japanese)'
    },
    colemak: {
        name: 'Colemak (US)',
    },
    dvorak: {
        name: 'Dvorak (US)',
    },
    dvorakl: {
        name: 'Dvorak Left-handed (US)',
    },
    dvorakr: {
        name: 'Dvorak Right-handed (US)',
    },
};

const keyDef = {
    '0': { name: 'Nothing', legend: '' },
    '1': { name: 'Error Roll Over', legend: 'x01' },
    '2': { name: 'POST Fail', legend: 'x02' },
    '3': { name: 'Error Undefined', legend: 'x03' },
    '4': { name: 'A', legend: 'A' },
    '5': { name: 'B', legend: 'B' },
    '6': { name: 'C', legend: 'C' },
    '7': { name: 'D', legend: 'D' },
    '8': { name: 'E', legend: 'E' },
    '9': { name: 'F', legend: 'F' },
    'A': { name: 'G', legend: 'G' },
    'B': { name: 'H', legend: 'H' },
    'C': { name: 'I', legend: 'I' },
    'D': { name: 'J', legend: 'J' },
    'E': { name: 'K', legend: 'K' },
    'F': { name: 'L', legend: 'L' },
    '10': { name: 'M', legend: 'M' },
    '11': { name: 'N', legend: 'N' },
    '12': { name: 'O', legend: 'O' },
    '13': { name: 'P', legend: 'P' },
    '14': { name: 'Q', legend: 'Q' },
    '15': { name: 'R', legend: 'R' },
    '16': { name: 'S', legend: 'S' },
    '17': { name: 'T', legend: 'T' },
    '18': { name: 'U', legend: 'U' },
    '19': { name: 'V', legend: 'V' },
    '1A': { name: 'W', legend: 'W' },
    '1B': { name: 'X', legend: 'X' },
    '1C': { name: 'Y', legend: 'Y' },
    '1D': { name: 'Z', legend: 'Z' },
    '1E': { name: 'Top Row 1', legend: '1<b style="font-size: 80%;"> !</b>' },
    '1F': { name: 'Top Row 2', legend: '2<b style="font-size: 80%;"> @</b>' },
    '20': { name: 'Top Row 3', legend: '3<b style="font-size: 80%;"> #</b>' },
    '21': { name: 'Top Row 4', legend: '4<b style="font-size: 80%;"> $</b>' },
    '22': { name: 'Top Row 5', legend: '5<b style="font-size: 80%;"> %</b>' },
    '23': { name: 'Top Row 6', legend: '6<b style="font-size: 80%;"> ^</b>' },
    '24': { name: 'Top Row 7', legend: '7<b style="font-size: 80%;"> &amp;</b>' },
    '25': { name: 'Top Row 8', legend: '8<b style="font-size: 80%;"> *</b>' },
    '26': { name: 'Top Row 9', legend: '9<b style="font-size: 80%;"> (</b>' },
    '27': { name: 'Top Row 0', legend: '0<b style="font-size: 80%;"> )</b>' },
    '28': { name: 'Return / Enter', legend: 'Enter' },
    '29': { name: 'Escape', legend: 'ESC' },
    '2A': { name: 'Backspace', legend: '<i class="fas fa-backspace"></i>' },
    '2B': { name: 'Tab', legend: 'Tab' },
    '2C': { name: 'Spacebar', legend: 'Space' },
    '2D': { name: 'Minus & Underscore (- _)', legend: '-<b style="font-size: 80%;"> _</b>' },
    '2E': { name: 'Equal & Plus (= +)', legend: '=<b style="font-size: 80%;"> +</b>' },
    '2F': { name: 'Left Bracket & Brace ([ {)', legend: '[<b style="font-size: 80%;"> {</b>' },
    '30': { name: 'Right Bracket & Brace (] })', legend: ']<b style="font-size: 80%;"> }</b>' },
    '31': { name: 'Backslash & Vertical Bar (\\ |)', legend: '\\<b style="font-size: 80%;"> |</b>' },
    '32': { name: 'Non-US Pound (# ~)', legend: '<i class="fas fa-hashtag">' },
    '33': { name: 'Semicolon & Colon (; :)', legend: ';<b style="font-size: 80%;"> :</b>' },
    '34': { name: 'Quotation Marks (\' ")', legend: '&apos;<b style="font-size: 80%;"> &quot;</b>' },
    '35': { name: 'Accent Grave & Tilde (` ~)', legend: '`<b style="font-size: 80%;"> ~</b>' },
    '36': { name: 'Comma & Less Than (, <)', legend: ',<b style="font-size: 80%;"> &lt;</b>' },
    '37': { name: 'Dot & Greater Than (. >)', legend: '.<b style="font-size: 80%;"> &gt;</b>' },
    '38': { name: 'Slash & Question Mark (/ ?)', legend: '/<b style="font-size: 80%;"> ?</b>' },
    '39': { name: 'CapsLock', legend: 'Caps' },
    '3A': { name: 'F1', legend: 'F1' },
    '3B': { name: 'F2', legend: 'F2' },
    '3C': { name: 'F3', legend: 'F3' },
    '3D': { name: 'F4', legend: 'F4' },
    '3E': { name: 'F5', legend: 'F5' },
    '3F': { name: 'F6', legend: 'F6' },
    '40': { name: 'F7', legend: 'F7' },
    '41': { name: 'F8', legend: 'F8' },
    '42': { name: 'F9', legend: 'F9' },
    '43': { name: 'F10', legend: 'F10' },
    '44': { name: 'F11', legend: 'F11' },
    '45': { name: 'F12', legend: 'F12' },
    '46': { name: 'PrintScreen', legend: 'Prtsc' },
    '47': { name: 'ScrollLock', legend: 'Scrlk' },
    '48': { name: 'Pause', legend: 'Pause' },
    '49': { name: 'Insert', legend: 'Ins' },
    '4A': { name: 'Home', legend: 'Home' },
    '4B': { name: 'Page Up', legend: 'PgUp' },
    '4C': { name: 'Delete Forward', legend: 'Del' },
    '4D': { name: 'End', legend: 'End' },
    '4E': { name: 'Page Down', legend: 'PgDn' },
    '4F': { name: 'Right Arrow', legend: '<i class="fas fa-arrow-right"></i>' },
    '50': { name: 'Left Arrow', legend: '<i class="fas fa-arrow-left"></i>' },
    '51': { name: 'Down Arrow', legend: '<i class="fas fa-arrow-down"></i>' },
    '52': { name: 'Up Arrow', legend: '<i class="fas fa-arrow-up"></i>' },
    '53': { name: 'NumLock', legend: '<span style="font-size: 80%;">Numlk</span>' },
    '54': { name: 'Keypad /', legend: '<span style="font-size: 80%;">KP </span>/' },
    '55': { name: 'Keypad *', legend: '<span style="font-size: 80%;">KP </span>*' },
    '56': { name: 'Keypad -', legend: '<span style="font-size: 80%;">KP </span>-' },
    '57': { name: 'Keypad +', legend: '<span style="font-size: 80%;">KP </span>+' },
    '58': { name: 'Keypad Return / Enter', legend: 'Ret' },
    '59': { name: 'Keypad 1 (End)', legend: '<span style="font-size: 80%;">KP </span>1' },
    '5A': { name: 'Keypad 2 (Down)', legend: '<span style="font-size: 80%;">KP </span>2' },
    '5B': { name: 'Keypad 3 (PageDn)', legend: '<span style="font-size: 80%;">KP </span>3' },
    '5C': { name: 'Keypad 4 (Left)', legend: '<span style="font-size: 80%;">KP </span>4' },
    '5D': { name: 'Keypad 5', legend: '<span style="font-size: 80%;">KP </span>5' },
    '5E': { name: 'Keypad 6 (Right)', legend: '<span style="font-size: 80%;">KP </span>6' },
    '5F': { name: 'Keypad 7 (Home)', legend: '<span style="font-size: 80%;">KP </span>7' },
    '60': { name: 'Keypad 8 (Up)', legend: '<span style="font-size: 80%;">KP </span>8' },
    '61': { name: 'Keypad 9 (PageUp)', legend: '<span style="font-size: 80%;">KP </span>9' },
    '62': { name: 'Keypad 0 (Insert)', legend: '<span style="font-size: 80%;">KP </span>0' },
    '63': { name: 'Keypad Dot (Delete)', legend: '<span style="font-size: 80%;">KP </span>.' },
    '64': { name: 'Non-US Backslash (\\)', legend: '\\\\' },
    '65': { name: 'Menu / Application', legend: '<i class="fas fa-bars"></i>' },
    '66': { name: 'Power', legend: 'x66' },
    '67': { name: 'Keypad Equal', legend: '<span style="font-size: 80%;">KP </span>=' },
    '68': { name: 'F13', legend: 'F13' },
    '69': { name: 'F14', legend: 'F14' },
    '6A': { name: 'F15', legend: 'F15' },
    '6B': { name: 'F16', legend: 'F16' },
    '6C': { name: 'F17', legend: 'F17' },
    '6D': { name: 'F18', legend: 'F18' },
    '6E': { name: 'F19', legend: 'F19' },
    '6F': { name: 'F20', legend: 'F20' },
    '70': { name: 'F21', legend: 'F21' },
    '71': { name: 'F22', legend: 'F22' },
    '72': { name: 'F23', legend: 'F23' },
    '73': { name: 'F24', legend: 'F24' },
    '74': { name: 'Execute', legend: 'x74' },
    '75': { name: 'Help', legend: 'x75' },
    '76': { name: 'Menu', legend: 'x76' },
    '77': { name: 'Select', legend: 'x77' },
    '78': { name: 'Stop', legend: 'x78' },
    '79': { name: 'Again', legend: 'x79' },
    '7A': { name: 'Undo', legend: 'x7A' },
    '7B': { name: 'Cut', legend: 'x7B' },
    '7C': { name: 'Copy', legend: 'x7C' },
    '7D': { name: 'Paste', legend: 'x7D' },
    '7E': { name: 'Find', legend: 'x7E' },
    '7F': { name: 'Mute', legend: 'x7F' },
    '80': { name: 'Volume Up', legend: 'x80' },
    '81': { name: 'Volume Down', legend: 'x81' },
    '82': { name: 'Locking CapsLock', legend: 'x82' },
    '83': { name: 'Locking NumLock', legend: 'x83' },
    '84': { name: 'Locking ScrollLock', legend: 'x84' },
    '85': { name: 'Comma', legend: 'x85' },
    '86': { name: 'Equal Sign', legend: 'x86' },
    '87': { name: 'International 1', legend: '<i class="fas fa-globe"></i>' },
    '88': { name: 'International 2', legend: '<i class="fas fa-globe"></i>' },
    '89': { name: 'International 3', legend: '<i class="fas fa-globe"></i>' },
    '8A': { name: 'International 4', legend: '<i class="fas fa-globe"></i>' },
    '8B': { name: 'International 5', legend: '<i class="fas fa-globe"></i>' },
    '8C': { name: 'International 6', legend: '<i class="fas fa-globe"></i>' },
    '8D': { name: 'International 7', legend: '<i class="fas fa-globe"></i>' },
    '8E': { name: 'International 8', legend: '<i class="fas fa-globe"></i>' },
    '8F': { name: 'International 9', legend: '<i class="fas fa-globe"></i>' },
    '90': { name: 'Language 1', legend: '<i class="fas fa-language"></i>' },
    '91': { name: 'Language 2', legend: '<i class="fas fa-language"></i>' },
    '92': { name: 'Language 3', legend: '<i class="fas fa-language"></i>' },
    '93': { name: 'Language 4', legend: '<i class="fas fa-language"></i>' },
    '94': { name: 'Language 5', legend: '<i class="fas fa-language"></i>' },
    '95': { name: 'Language 6', legend: '<i class="fas fa-language"></i>' },
    '96': { name: 'Language 7', legend: '<i class="fas fa-language"></i>' },
    '97': { name: 'Language 8', legend: '<i class="fas fa-language"></i>' },
    '98': { name: 'Language 9', legend: '<i class="fas fa-language"></i>' },

    '99': { name: 'AltErase', legend: 'x99' },
    '9A': { name: 'SysReq', legend: 'x9A' },
    '9B': { name: 'Cancel', legend: 'x9B' },
    '9C': { name: 'Clear', legend: 'x9C' },
    '9D': { name: 'Prior', legend: 'x9D' },
    '9E': { name: 'Return', legend: 'x9E' },
    '9F': { name: 'Separator', legend: 'x9F' },
    'A0': { name: 'Out', legend: 'xA0' },
    'A1': { name: 'Oper', legend: 'xA1' },
    'A2': { name: 'Clear / Again', legend: 'xA2' },
    'A3': { name: 'CrSel / Props', legend: 'xA3' },
    'A4': { name: 'ExSel', legend: 'xA4' },

    // Vortex Specific
    'B0': { name: 'Mouse Key 1', legend: 'M1' },
    'B1': { name: 'Mouse Key 2', legend: 'M2' },
    'B2': { name: 'Mouse Key 3', legend: 'M3' },
    'B3': { name: 'Mouse Key 4', legend: 'M4' },
    'B4': { name: 'Mouse Key 5', legend: 'M5' },
    'B5': { name: 'Mouse Key 6', legend: 'M6' },
    'B6': { name: 'Mouse Key 7', legend: 'M7' },
    'B7': { name: 'Mouse Key 8', legend: 'M8' },
    'B8': { name: 'Mouse Key 9', legend: 'M9' },
    'B9': { name: 'Mouse Key 10', legend: 'M10' },
    'BA': { name: 'Mouse Key 11', legend: 'M11' },
    'BB': { name: 'Mouse Key 12', legend: 'M12' },
    'BC': { name: 'Mouse Key 13', legend: 'M13' },
    'BD': { name: 'Mouse Key 14', legend: 'M14' },
    'BE': { name: 'Mouse Key 15', legend: 'M15' },
    'BF': { name: 'Mouse Key 16', legend: 'M16' },
    'C0': { name: 'Vortex G1', legend: 'G1' },
    'C1': { name: 'Vortex G2', legend: 'G2' },
    'C2': { name: 'Vortex G3', legend: 'G3' },
    'C3': { name: 'Vortex G4', legend: 'G4' },
    'C4': { name: 'Vortex G5', legend: 'G5' },
    'C5': { name: 'Vortex G6', legend: 'G6' },
    'C6': { name: 'Vortex G7', legend: 'G7' },
    'C7': { name: 'Vortex G8', legend: 'G8' },
    'C8': { name: 'Vortex G9 (L_Space)', legend: 'LSpace' },
    'C9': { name: 'Vortex G10 (Fn1)', legend: 'Fn1' },
    'CA': { name: 'Vortex G11', legend: 'G11' },
    'CB': { name: 'Vortex G12', legend: 'G12' },
    'CC': { name: 'Vortex G13', legend: 'G13' },
    'CD': { name: 'Vortex G14 (Fn)', legend: 'G14' },
    'CE': { name: 'Vortex G15', legend: 'G15' },
    'CF': { name: 'Vortex G16 (Pn)', legend: 'Pn' },
    'D0': { name: 'Vortex G17', legend: 'G17' },
    'D1': { name: 'Vortex G18', legend: 'G18' },
    'D2': { name: 'Vortex G19', legend: 'G19' },
    'D3': { name: 'Vortex G20', legend: 'G20' },
    'D4': { name: 'Vortex G21', legend: 'G21' },
    'D5': { name: 'Vortex G22', legend: 'G22' },
    'D6': { name: 'Vortex G23', legend: 'G23' },
    'D7': { name: 'Vortex G24', legend: 'G24' },

    // Modifiers & System
    'E0': { name: 'Left Control', legend: 'Ctrl' },
    'E1': { name: 'Left Shift', legend: 'Shift' },
    'E2': { name: 'Left Alt', legend: 'Alt' },
    'E3': { name: 'Left System', legend: 'Sys' },
    'E4': { name: 'Right Control', legend: '<span style="font-size: 80%">R </span>Ctrl' },
    'E5': { name: 'Right Shift', legend: '<span style="font-size: 80%">R </span><span style="font-size: 90%">Shift</span>' },
    'E6': { name: 'Right Alt', legend: '<span style="font-size: 80%">R </span>Alt' },
    'E7': { name: 'Right System', legend: '<span style="font-size: 80%">R </span>Sys' },

    // Vortex Specific
    'E9': { name: 'ACPI PD', legend: 'xE9' },
    'EA': { name: 'ACPI Sleep', legend: 'xEA' },
    'EB': { name: 'ACPI Wake', legend: 'xEB' },
    'EC': { name: 'Media Sel', legend: 'xEC' },
    'ED': { name: 'Mail', legend: '<i class="fas fa-envelope"></i>' },
    'EE': { name: 'Calculator', legend: '<i class="fas fa-calculator"></i>' },
    'EF': { name: 'My Computer', legend: '<i class="fas fa-desktop"></i>' },
    'F0': { name: 'Media Play/Pause', legend: '<i class="fas fa-play"></i>' },
    'F1': { name: 'Media Stop', legend: '<i class="fas fa-stop"></i>' },
    'F2': { name: 'Media Previous Track', legend: '<i class="fas fa-step-backward"></i>' },
    'F3': { name: 'Media Next Track', legend: '<i class="fas fa-step-forward"></i>' },
    'F4': { name: 'Media Volume Mute', legend: '<i class="fas fa-volume-off"></i>' },
    'F5': { name: 'Media Volume Down', legend: '<i class="fas fa-volume-down"></i>' },
    'F6': { name: 'Media Volume Up', legend: '<i class="fas fa-volume-up"></i>' },
    'F7': { name: 'Web Search', legend: '<i class="fas fa-search"></i>' },
    'F8': { name: 'Web Home', legend: '<i class="fas fa-home"></i>' },
    'F9': { name: 'Web Back', legend: '<i class="fas fa-arrow-alt-circle-left"></i>' },
    'FA': { name: 'Web Forward', legend: '<i class="fas fa-arrow-alt-circle-right"></i>' },
    'FB': { name: 'Web Stop', legend: '<i class="fas fa-ban"></i>' },
    'FC': { name: 'Web Refresh', legend: '<i class="fas fa-sync-alt"></i>' },
    'FD': { name: 'Web Favorate', legend: '<i class="fas fa-heart"></i>' },

    // Cheating keycode
    'FN': { name: 'Fn Layer Modifier', legend: '<span class="color-fn">Fn</span>' },
    'PN': { name: 'Pn Layer Modifier', legend: '<span class="color-pn">Pn</span>' },
    'FN1': { name: 'Fn1 Layer Modifier', legend: '<span class="color-fn1">Fn1</span>' },
    'Light': { name: 'RGB Control', legend: '<i class="fas fa-lightbulb"></i>' },
    'L0': { name: 'Profile Switch L0', legend: 'L0' },
    'L1': { name: 'Profile Switch L1', legend: 'L1' },
    'L2': { name: 'Profile Switch L2', legend: 'L2' },
    'L3': { name: 'Profile Switch L3', legend: 'L3' },
    'Macro': { name: 'MACRO', legend: '<i class="fas fa-keyboard"></i>' },
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
const hiddenKeyCode = Object.keys(keyDef).filter(v=>unavaliabe_keys.indexOf(v) < 0 && visibleKeyCode.indexOf(v) < 0).sort((a,b)=>(a.length - b.length || a.localeCompare(b)));

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
        binding_key: '0',
        binding_macro: -1,
        selected_key_layer: 0,
        editing_macro: null,
        editing_macro_index: null,
        editing_macro_from_keybind: false,
        new_macro: false,
        macro_next_id: 0,
        default_timer: 10,
        locale: 'us',

        // consts
        locked_keys: locked_keys,
        unbindable_keys: unbindable_keys,
        unbindable_desc: unbindable_desc,
        special_keys: special_keys,
        keyDef: {...keyDef},
        fullKeyboard: fullKeyboard,
        keyLocales: keyLocales,

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
        currentKeyLayerPrefix: function() {
            switch (this.selected_key_layer) {
                case 0:
                return "";
                case 1:
                return "Pn";
                case 2:
                return "Fn";
                case 3:
                return "Fn1";
            }
            return "";
        },
        currentKeyLayerColor: function() {
            switch (this.selected_key_layer) {
                case 0:
                return "";
                case 1:
                return "color-pn";
                case 2:
                return "color-fn";
                case 3:
                return "color-fn1";
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
        newMacro: function (from_keybind = false) {
            this.new_macro = true;
            this.default_timer = 10;
            this.editing_macro = {
                id: this.macro_next_id,
                title: "Macro "+(this.macro_next_id+1),
                events: [],
                repeats: 2,
                type: 1,
            }
            this.editing_macro_from_keybind = from_keybind;
            UIkit.modal('#macro-modal', {bgClose: null}).show();
        },
        editMacro: function (index, from_keybind = false) {
            this.new_macro = false;
            this.default_timer = 10;
            this.editing_macro_index = index;
            this.editing_macro = {
                title: this.macros[index].title, 
                events: this.macros[index].events.concat([]),
                repeats: this.macros[index].repeats,
                type: this.macros[index].type
            };
            this.editing_macro_from_keybind = from_keybind;
            UIkit.modal('#macro-modal', {bgClose: null}).show();
        },
        saveMacro: function () {
            if (this.editing_macro.title.length == 0 || this.editing_macro.events.length ==0) return;
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
            if (this.editing_macro_from_keybind) {
                this.binding_key = 'Macro';
                this.binding_macro = this.editing_macro.id;
                this.confirmBind();
            }
            UIkit.modal('#macro-modal').hide();
        },
        setAllTimer: function(interval) {
            for (const event of this.editing_macro.events) {
                event.timer = interval;
            }
        },
        changeLocale: function (locale) {
            if (!this.keyLocales[locale]) {
                locale = 'us';
            }
            this.keyDef = {...keyDef};
            for (const key in this.keyLocales[locale].keys) {
                this.keyDef[key] = this.keyLocales[locale].keys[key];
            }
        },
        removeMacro: function() {
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
            if (this.editing_macro_from_keybind) {
                UIkit.modal('#key-selector-modal', {bgClose: null}).show();
            } else {
                UIkit.modal('#macro-modal').hide();
            }
        },
        cancelMacro: function() {
            if (this.editing_macro_from_keybind) {
                UIkit.modal('#key-selector-modal', {bgClose: null}).show();
            } else {
                UIkit.modal('#macro-modal').hide();
            }
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
        generateOld: function (){
            try {
                var blob = new Blob([this.convertToBytesOld(this.rowsToMPCData)], { type: "octet/stream" });
                UIkit.notification('<i class="fas fa-download"></i> Layout file generated.', {pos: 'bottom-right',status:'success'}).$el.classList.add('uk-box-shadow-large');
                saveAs(blob, 'layout.cys');
            } catch (err) {
                console.error(err);
                UIkit.notification('<i class="fas fa-exclamation-circle"></i> Generation failed. Something is wrong on our part.', {pos: 'bottom-right',status:'danger'}).$el.classList.add('uk-box-shadow-large');
            }

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
        convertToBytes: function (mpc) {
            const buffer = [];

            const grow = (offset, fill) => {
                while (buffer.length < offset) {
                    buffer.push(fill);
                }
            }
            const set1Byte = (offset, num) => {
                grow(offset+1);
                let bytes = num & 0xff;
                buffer[offset] = bytes;
            };

            const set2Bytes = (offset, num) => {
                grow(offset+2);
                let bytes = num & 0xffff;
                buffer[offset] = bytes & 0xff;
                buffer[offset+1] = (bytes & 0xff00) >> 8;
            };

            const set4Bytes = (offset, num) => {
                grow(offset+4);
                let bytes = num & 0xffffffff;
                buffer[offset] = bytes & 0xff;
                buffer[offset+1] = (bytes & 0xff00) >> 8;
                buffer[offset+2] = (bytes & 0xff0000) >> 16;
                buffer[offset+3] = (bytes & 0xff000000) >> 24;
            };

            const set8Bytes = (offset, arr) => {
                grow(offset+8);
                buffer[offset] = arr[0], buffer[offset+1] = arr[1];
                buffer[offset+2] = arr[2], buffer[offset+3] = arr[3];
                buffer[offset+4] = arr[4], buffer[offset+5] = arr[5];
                buffer[offset+6] = arr[6], buffer[offset+7] = arr[7];
            };

            const setDescriptor = (offset, profile, dataPosition) => {
                set1Byte(offset, 0); // type
                set1Byte(offset+1, profile); // profileIndex
                set2Bytes(offset+2, 0); // macroIndex
                set4Bytes(offset+4, dataPosition); // dataPosition
            };

            const setMacroDescriptor = (offset, profile, macro, dataPosition) => {
                set1Byte(offset, 1); // type
                set1Byte(offset+1, profile); // profileIndex
                set2Bytes(offset+2, macro); // macroIndex
                set4Bytes(offset+4, dataPosition); // dataPosition
            }

            const profileCount = 4;
            const itemSize = mpc.macro.length * 2 + mpc.keyChange.length + mpc.functionSet.length;

            set4Bytes(0, 1229347139); // CYFI
            set2Bytes(4, 0); // revision
            set2Bytes(6, itemSize);

            let descriptorOffset = 8;
            let dataOffset = descriptorOffset + itemSize * 8;
            
            const processProfile = (profile) => {
                const macroIndex = 0;
                const functionSet = mpc.functionSet.filter((v) => v.profileIndex == profile);        
                for (const data of functionSet) {
                    // data
                    const layerCode = { FN: 0x94, FN1: 0x95, PN: 0x96 }[data.key];
                    const dataItem = [0x02, layerCode, data.ktm.length, 0, 0, 0, 0, 0];
                    let index = 4;
                    for (const ktm of data.ktm) {
                        dataItem[index] = ktm;
                        index += 1;
                    }
                    set8Bytes(dataOffset, dataItem);
                    
                    // descriptor
                    setDescriptor(descriptorOffset, data.profileIndex, dataOffset);

                    dataOffset += 8;
                    descriptorOffset += 8;
                }

                const keyChanges = mpc.keyChange.filter((v) => v.profileIndex == profile); 
                for (const data of keyChanges) {
                    // data
                    const LAYER_ID = { FN: 1, FN1: 2, PN: 3, INIT: 0 };
                    const sourceLayer = LAYER_ID[data.sourceLayer];
                    const targetLayer = LAYER_ID[data.targetLayer];
                    const dataItem = [0x02, 0x20,
                        parseInt(data.sourceKey, 16), sourceLayer,
                        parseInt(data.targetKey, 16), targetLayer,
                        0, 0];
                    
                    set8Bytes(dataOffset, dataItem);
                    
                    // descriptor
                    setDescriptor(descriptorOffset, data.profileIndex, dataOffset);

                    dataOffset += 8;
                    descriptorOffset += 8;
                }

                const macros = mpc.macro.filter((v) => v.profileIndex == profile);
                macroPos = profilePos + filterMacro.length * 8 + 4;
                for (const data of macros) {
                    // data
                    const macroType = (data.macroType << 5) + 0x1C + { FN: 1, FN1: 2, PN: 3, INIT: 0}[data.sourceLayer];
                    const repeat = parseInt(data.macroRepeat);
                    const dataItem = [0x02, 0x18,
                        (macroIndex & 0xFF), (macroIndex & 0xFF00) >> 8,
                        parseInt(data.sourceKey, 16), macroType,
                        (repeat & 0xFF), (repeat & 0xFF00) >> 8];
                    set8Bytes(dataOffset, dataItem);
                    
                    // descriptor
                    setDescriptor(descriptorOffset, data.profileIndex, dataOffset);

                    // macro
                    for (const event of data.macro) {
                        const eventType = ((2 - event.event) << 5) + 0x1C + { FN: 1, FN1: 2, PN: 3, INIT: 0}[data.sourceLayer];
                        let timer = event.timer;
                        if (timer < 1) timer = 1;
                        if (timer > 16777216) timer = 16777216;

                        if (timer < 16383) {

                        }
                    }

                    macroPos += macro.
                   
                    dataOffset += 8;
                }
                
                profilePos = macroPos + 8;
            }

            for (let profile = 0; profile < profileCount; profile++) {
                processProfile(profile);
            }

            grow(8192, 255);
            return new Uint8Array(buffer);
        },
        convertToBytesOld: function (mpcData) {
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
                        key: { FN: 0x94, FN1: 0x95, PN: 0x96 }[row.key],
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
                        if (timer < 1) timer = 1;
                        if (timer > 16777216) timer = 16777216;

                        var macroTimer = [];
                        if (timer < 16383) {
                            macroTimer = _this.numberTo2Bytes(timer * 2 - 1);
                        }
                        else {
                            macroTimer = _this.numberTo2Bytes(Math.floor(timer / 512) + 32767);
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
        },
        currentProfileNumModifier: function (modifier) {
            let count = 0;
            for (var r in this.rows) {
                var row = this.rows[r];
                for (k in row) {
                    var key = row[k];
                    if (key.profiles[this.active_profile].bind == modifier) count += 1;
                }
            }
            return count;
        },
    }
});