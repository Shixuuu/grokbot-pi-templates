---
name: 3d-game-art-pipeline
description: "Use this when turning locked 2D game concept art into 3D production meshes: T-pose or A-pose model sheets, topology, UVs, bake, export, and asking before Meshy3D or Tripo3D."
---

# 3D game art pipeline

Production pipeline from a locked 2D concept to an engine-ready mesh. Complements [Game mockups](sand-workflow:game-mockups) and [2D game art pipeline](sand-workflow:2d-game-art-pipeline). Does **not** replace a rigid hierarchical prop pipeline or a Blender armature, weights, and clips pipeline. After 2D exists, **ask before using Tripo3D or Meshy3D**.

## Gate: 2D must be a production spec

A single 3/4 beauty shot is not a 3D brief. Do not start 3D until you have a **model sheet**:

- Front, side/profile, **back** (plus 3/4 if depth, asymmetry, or layered gear)
- Close-ups: face, hands, complex costume
- Material callouts by **type** (metal, cloth, leather, emissive), not only color
- Rigid vs deforming, functional vs decorative
- Scale vs a known object (hand, doorway, another character)
- Horizontal landmarks (eyes, shoulders, waist, knees, feet) aligned across views
- **Neutral T-pose or A-pose**, matching the intended bind pose — not an action pose
- Internally consistent: same costume, colors, proportions, lighting, scale. Do not flip 3/4 front to fake the back.

If any of that is missing, request it. Then ask the project: engine, hero vs background, poly/texture budget, shared skeleton, mocap, and **T vs A rest pose**.

## T-pose vs A-pose (project choice, not a commandment)

| Use | Prefer |
|---|---|
| Unity Humanoid Avatar, Mixamo, generic retarget, no TD | **T-pose** or a mild A. Unity still documents modeling in T-pose and expects T-pose on the Avatar (Enforce T-Pose if needed). |
| Custom character with lots of lowered-arm idle/aim | **A-pose (~30–45°)** often deforms shoulders better; less UV stretch when arms drop. |
| Gameplay-weighted rest | Sit the rest pose in the **middle of likely deformation** (climbing may want higher arms). |

Concept sheets **must match the bind pose** the modeler will use. Document one rest pose for the whole roster; switching mid-project is expensive. Film defaults to T; games often use A — do not copy film blindly. A-pose is not “more professional.” T-pose is not obsolete.

For image-to-3D: Meshy treats T-pose as the most widely supported rigging input and also supports A-pose (~45°). Tripo has a `t_pose` flag for rigging. Mixamo wants a **neutral** humanoid pose, not crossed limbs.

## Ask before AI mesh gen

After 2D is locked, ask: Meshy3D, Tripo3D, or model by hand? Do not auto-call.

- **Rigid prop from one image** → prefer a rigid hierarchical prop pipeline, not these character tools.
- **Deforming character** → Meshy/Tripo are **blockout / first-mesh**, never a substitute for retopo, UVs, bake, or a Blender armature, weights, and clips pipeline.

### Prepare 2D for Meshy / Tripo

- Orthographic or near-ortho front / side / back (perspective foreshortens limbs)
- Full body, nothing cropped, subject ~70–90% of frame
- Plain white or transparent background, even studio lighting (shadows bake into albedo)
- Clean silhouette, limbs uncrossed, fingers separated
- One subject per image; same pose, scale, lighting on every view
- Meshy: 1024²+ ideal; pose **toggle** on Image-to-3D (text “T-pose” is not enough); multi-view then remesh (multi-view is not in Smart Topology mode)
- Tripo: front required for 4-view [front, left, back, right]; optional `t_pose`; `auto_size` in meters; treat 50k–100k faces as a starting mesh, not ship geo
- Avoid: glass, hair strands, thin wires, busy backgrounds, mixed sketch+color, mixed close-up+full-body

**Always cleanup after AI:** scale, origin, flipped normals, fused clothing/body, extra blobs, retopo if it deforms, UVs, PBR (no baked lighting), bind-pose naming. Do not ship an AI GLB as game-ready.

## Pipeline (hand path; AI joins after cleanup)

1. **Brief** (engine, budget, T vs A, shared skeleton).
2. **2D lock** (model sheet above).
3. **Branch:** AI only after ask → generate → cleanup. Else blockout in DCC at **real-world metric** (human ~1.7–1.8 m). Feet on ground. Engine test-import **now**.
4. **High-poly** only if you need sculpted form, bevels, engravings. Simple stylized props can be modeled at final res. Normal maps **do not change silhouette**; openings, overhangs, moving parts, and outer contour need real geo.
5. **Retopo** the game mesh. Characters: **manual** joint edge flow. Decimation is not finished retopo.
6. **UVs** (UV0 unique/tiling; UV1 non-overlapping if lightmaps). Texel density is a **project spec**. Padding 2–4 px at target res; test mips. Power-of-two sizes from screen coverage, not “4K looks professional.”
7. **Lock** triangulation, hard edges (coincide with UV splits), smoothing. Then **bake**: tangent normal, AO, curvature. Inspect under rotating light. Match OpenGL vs DirectX green channel to the engine.
8. **Texture PBR:** basecolor with **no baked lighting**; roughness, metallic, normal. Pack to the **project shader** (Unreal often ORM; Unity smoothness may live in a channel). Trim sheets and atlases: merge compatible materials; keep glass/skin/emissive separate.
9. **LODs** if screen size / instance count justifies (same pivot; drop silhouette-useless detail first). Heuristic only: LOD1 ~50%, LOD2 ~25%, LOD3 ~10%/impostor. Test in camera.
10. **Collision is gameplay**, not visual. Simple boxes/convex hulls. Unreal same-FBX prefixes: `UCX_` convex, `UBX_` box, `UCP_` capsule, `USP_` sphere, closed convex, name-matched to the render mesh.
11. **Freeze transforms** to (1,1,1). Character origin at **feet**. Prop pivot at placement (door on hinge). Naming convention.
12. **Export** FBX/GLB per engine (see table). Reimport to the DCC, then the engine. Validate vs a 1 m cube (Unity) or 180 cm mannequin (UE).
13. **Characters** → hand off to a Blender armature, weights, and clips pipeline (or Mixamo only for humanoid prototypes: no wings/tails/huge cloth, no disconnected parts, origin 0,0,0).
14. **In-engine:** scale, normals, material channels, LOD transitions, collision, a deform test (raise arm, walk). Topology that only looks good in rest pose is incomplete.

## Topology (characters)

Matters most where the mesh deforms: shoulders/armpits, crotch, mouth corners, knees, elbows, hands.

- Quad-dominant while editing; engines triangulate. Control triangulation where it affects bake/shading.
- Concentric loops at joints (about 2–3 parallel loops at elbow/knee/shoulder).
- Face: loops around mouth and eyes.
- Poles (5+ edges) **off** high-deformation zones.
- Density higher at joints and silhouette, gradual falloff on flats.
- Cap holes, weld verts, remove hidden faces before skinning.
- Test bind early (simple raise-arm / walk). Then leave IK/FK/weights to the rig skill.

Unity Humanoid: ≥15 bones, names by body part, default **4** skin influences, mesh modeled with space in the armpits. Maya bind pose is the only pose that does not deform skin.

## Scale, axes, export

| | Units | Up | Notes |
|---|---|---|---|
| Unity | 1 unit = 1 meter | Y-up | File-scale defaults differ by format; Convert Units so Scale Factor = 1. Do not embed textures in FBX. |
| Unreal | 1 UU = 1 cm | Z-up, +X forward | FBX 2020.2; Convert Scene + Convert Scene Unit. Blender meters → UE cm is a common 100× bug — fix **one** end, not both. |
| Blender | 1 unit = 1 m, Z-up | Z-up | Apply scale before bind/export. |

Model in real-world metric. Do not mix meter and centimeter corrections in both DCC and engine.

## Texel density (starting bands, not laws)

Set one project number. Formula: resolution / world size (1024 on 1 m ≈ 1024 px/m). Rough bands: hero/FPS ~1024+ px/m; player ~512–1024; interactive props ~512; env ~256–512; distant ~64–128; mobile often half. Keep density consistent across a scene.

## Avoid

- Starting 3D from one 3/4 with no back, no materials, no T/A
- Action-pose as the only modeling reference
- Calling Meshy/Tripo without asking
- Shipping AI mesh without retopo / scale / UVs / normal check
- Using a rigid prop pipeline for deforming characters, or Meshy/Tripo as a rig
- Poles and n-gons on deforming joints; normals used to fake silhouette
- Baking before UVs/triangulation/hard edges are final
- OpenGL normals in a DirectX Unreal material (or the reverse)
- Albedo with baked lighting; overlapping UVs on the lightmap channel
- Unapplied scale; character origin at centroid; extra cameras in the FBX
- Visual-res collision; triangle count as the only quality metric
- Changing rest pose mid-project without retargeting the animation set
- Inventing universal polycount or texel numbers

## Sources (practices drawn from)

Unity Creating models for animation / Importing humanoid / Preparing model files; Unreal coordinate system, FBX static/skeletal pipelines, import options; Autodesk Maya bind pose; Adobe Mixamo FAQ; Meshy Image-to-3D and pose docs; Tripo image-to-model, multiview, t_pose; Polycount topology and T vs A discussion; Nasty Rodent concept/bake/UV/import; 3DSkillUp game-asset and high-to-low pipelines.
