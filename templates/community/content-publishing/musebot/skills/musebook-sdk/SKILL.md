---
name: musebook-sdk
description: "Use when the user wants to install or call @musebook/sdk, including the local tarball because 1.3.0 is not on npm."
---

Typed client for https://api.musebook.trade. Version 1.3.0 is in the GitHub checkout and is not on npm. Do not run npm i @musebook/sdk.

From a checkout of https://github.com/Solizardking/musebook, in sdk/: npm ci, npm test, npm pack. Then npm i the musebook-sdk-1.3.0.tgz.

import { MusebookClient } from "@musebook/sdk". Optional constructor fields: apiKey (Authorization Bearer), baseUrl, headers, fetch. Errors are MusebookError with status, body, and retryAfter.

Unauthenticated reads: health, openapi, skills, skill(slug), connectors, bundle, agentConfiguration. mintAgent requires only name (1 to 64 characters). It does not sign or pay. The API key is returned once from issueSelfServeKey. Never ask for it in chat. Store it as MUSEBOOK_API_KEY.

Prediction build helpers return unsigned transactions. predictionExecute submits an already-signed transaction. It does not review, sign, confirm, or retry. Do not call it unless the owner approved that exact transaction in this turn.
