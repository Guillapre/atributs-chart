# dnd-attr-charts

## Description
The purpose of this tool, is a clean way to visually see and get a description of a character attributes from roll20. works with both NPC and PC.
 
Macro for roll20 5th Edition OGL Sheet.
```
&{template:default} {{name=@{selected|token_name}}} {{Attr Chart=[Attribute Chart](https://guillapre.github.io/dnd-attr-charts/?name=@{selected|token_name}&level=@{selected|class_display}@{selected|npc_type}&attributes=@{selected|strength}+@{selected|dexterity}+@{selected|constitution}+@{selected|intelligence}+@{selected|wisdom}+@{selected|charisma}&skills=@{selected|npc_athletics}+@{selected|npc_acrobatics}+@{selected|npc_sleight_of_hand}+@{selected|npc_stealth}+@{selected|npc_arcana}+@{selected|npc_history}+@{selected|npc_investigation}+@{selected|npc_nature}+@{selected|npc_religion}+@{selected|npc_animal_handling}+@{selected|npc_insight}+@{selected|npc_medicine}+@{selected|npc_perception}+@{selected|npc_survival}+@{selected|npc_deception}+@{selected|npc_intimidation}+@{selected|npc_performance}+@{selected|npc_persuasion})}}
```
## How this works?
With the macro, you generate a url with the Query string to the JavaScript process on the page load.

The structure for Query string is:
https://guillapre.github.io/dnd-attr-charts/?name={**Character Name**}&level={**Description**}&attributes={**STR**}+{**DEX**}+{**CON**}+{**INT**}+{**WIS**}+{**CHA**}&skills=**{Character Athletics}**+**{Character Acrobatics}**+**{Character Sleight_of_hand}**+**{Character Stealth}**+**{Character Arcana}**+**{Character History}**+**{Character Investigation}**+**{Character Nature}**+**{Character Religion}**+**{Character Animal_handling}**+**{Character Insight}**+**{Character Medicine}**+**{Character Perception}**+**{Character Survival}**+**{Character Deception}**+**{Character Intimidation}**+**{Character Performance}**+**{Character Persuasion}**

## Example
[Aeda's Braarzyer's](https://guillapre.github.io/dnd-attr-charts/?name=Aeda%27s%20Braarzyer%27s&level=Path%20of%20the%20Ancestral%20Guardian%20Barbarian%204&attributes=20+20+20+13+10+10+20&skills=5+5+5+5+1+1+1+1+1+0+0+0+0+0+0+0+0+0+5)
![Aeda's Braarzyer's Macro](https://cdn.discordapp.com/attachments/722006558317215841/786003773046652928/bababui.png)
![roll20 in game macro](https://cdn.discordapp.com/attachments/722006558317215841/786004986340704306/msedge_5HiDZlIGdL.png)
![you can also SPIN THE GRAPH](https://cdn.discordapp.com/attachments/722006558317215841/786005481411182642/QcJiLBFgPi.gif)

## What we use?
the webpage is made with bootstrap 5, an simples JavaScript codes and Plottly for make the chart. If you want check it out.

### final considerations 
If this project help you, you can give me a cup of coffee :P

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=H2JKXRTGJUG26)
