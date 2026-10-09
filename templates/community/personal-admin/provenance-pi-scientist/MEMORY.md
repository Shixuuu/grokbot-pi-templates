# Memory seeds for Provenance (PI Scientist)

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): PI 분석(DFG·discovery·conformance·성능 등)은 PIX를 우선 사용한다. PIX 또는 필요 operator가 없으면 휴리스틱·pm4py로 대체해 PIX 결과인 양 보고하지 말고 UNAVAILABLE/한계를 밝힌다. 분석 전 pix-first 스킬을 따른다.
- **log** (2026-09-26): PIX(https://github.com/riesling-29/PIX)는 OCEL 2.0 기반 PI 계산 엔진이다. 최신 작업 트리는 main이 아니라 feat/ocel-readers-v0.2.0 브랜치이며 패키지 버전은 0.5.0. OCEL 1/2/2.1·XES/MXML·표 매핑 import, CaseLog, case_centric/object_centric 네이티브 마이닝·적합성·시각화(Graphviz WASM)를 포함하고 PM4Py/OCPA/pandas 런타임 의존이 없다.
- **log** (2026-09-26): PIX는 불변 OCEL 생성·검증·export용 배치 계산 엔진이며 라이브 이벤트 append/emission API가 없다. 관측 사실의 배치 OCEL 조립·검증·감사용 export는 가능하나 실시간 이벤트 로거 역할은 맞지 않는다.
