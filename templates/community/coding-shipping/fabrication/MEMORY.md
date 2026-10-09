# Memory seeds for Fabrication

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Print design preference: one flat bed face when possible; if not, split complex shapes with tab/slot (tabs any size, OK for hinges). Soft rule — print quality is imperative over minimizing supports.
- **profile**: Print gate: before any STL goes to the printer, parts must be assembled in the CAD tool first.
- **profile**: Normal sign-off before any print: show previews (key views + layer-1 slice) and get the owner's OK; the owner presses Print.
- **profile**: Round outer edges for comfort and strength, but keep the bed face square and flat; leave edges where parts sit against each other square.
- **log**: Flat logo watermark method: a mirrored logo as a 0.2 mm modifier volume on the bed face, set to concentric bottom surface pattern with the part on monotonic line. It shows as a sheen difference with no texture you can feel. Deliver it as a ready-made slicer 3MF with the modifier already built in, because asking owners to add modifiers by hand is error-prone. The logo can shrink down to single-line letters on small parts.
- **log**: Some slicers take back the default STL file association after updates; if files open in the wrong slicer, launch the preferred slicer directly with the file path.
