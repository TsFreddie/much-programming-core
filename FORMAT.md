# Binary Format

## Overall Structure
Note: `item_size = num_key_change + num_func_change + 2 * num_macro`

The following represents:
- KeyChange: X -> W (L1)
- FuncChange: Fn <- C (L2)
- Macro: Z -> 1d 1u (L1)

- 0x00: `4` bytes of identifier "CYFI" (`43 59 46 49`)
- 0x04: `2` bytes of revision (`00 00`)
- 0x06: `2` bytes of number of items (int16 `item_size`)
- 0x08: `item_size * 8 bytes` of item description
- 0x28: `8 bytes` of L1 KeyChange data
- 0x30: `8 bytes` of L2 Macro data
- 0x38: `4 bytes` of `00` gap between macro data and macro events
    - Try to cut this down
- 0x3C: `num_events * 4 bytes` of Macro events
- 0x44: `4 bytes` of macro ending (`00 FC 00 00`)
- 0x48: `8 bytes` of `00` gap between L1 and L2
    - Try to cut this down
- 0x50: `8 bytes` of FuncChange data
- 0x58: `8 bytes` of `00` gap between L2 and L3
- 0x60: `8 bytes` of `00` gap between L3 and L4
- 0x68: `8 bytes` of `00` gap between L4 and L5
- 0x70: `8 bytes` of `00` data after L5

## Item Description (8 Bytes)

- byte 0: Item Type (`0 = key, 1 = macro`)
- byte 1: Profile Index
- byte 2~3: Macro Index (`0 for key item`)
- byte 4~7: Data Location (`data position for key, event position for macro`)

## Key Change Data (8 Bytes)

- byte 0: Length (Always `02`)
- byte 1: Fixed (Always `20`)
- byte 2: KeyCode
- byte 3: Modifier (`00 = INIT, 01 = FN, 02 = FN1, 03 = PN`)
- byte 4: Target KeyCode
- byte 5: Target Modifier (Usually `00`, but you can get L1~L4 by using FN `01` Modifier)
    - Try to find more keys with modifiers
- byte 6~7: Unused (Always `00 00`)

## Func Change Data (8 Bytes)

- byte 0: Length (Always `02`)
- byte 1: Key Type (`94 = FN, 95 = FN1, 96 = PN`)
- byte 2~3: Number of target keys
    - Maybe byte 0 can cut this down?
- byte 4~7: Each byte is a KTM code of keys
    - Try dynamic length?

## Macro Data (8 Bytes)

- byte 0: Length (Always `02`)
- byte 1: Fixed (Always `18`)
- byte 2~3: Macro Index
    - Can we get this index higher than 20?
- byte 4: KeyCode
- byte 5: Macro Type & Modifier
    - bit 0~2: Macro Type (`1 = Once, 2 = Until Release, 3 = Toggle, 4 = Repeats`)
        - Try other values?
    - bit 3~5: Always `111`
    - bit 6~7: Modifier (`00 = INIT, 01 = FN, 10 = FN1, 11 = FN`)
- byte 6~7: Number of repeats

## Macro Events (4 Bytes)

- byte 0: KeyCode
- byte 1: Event Type & Modifier
    - bit 0~2: Event Type (`001 = Down, 010 = Up`)
    - bit 3~5: Always `111`
    - bit 6~7: Modifier (`00 = INIT, 01 = FN, 10 = FN1, 11 = FN`)
- byte 2~3: Timer
    - Range: `0x0000 ~ 0x7FFF`, granularity: 0.5ms, min = 0ms, max = 16383.5ms
    - Range: `0x8000 ~ 0xFFFF`, granularity: 512ms, min = ???, max = ???
