---
name: adaptlypost-api
description: "Use this when publishing, scheduling, listing, retrying, or looking up social accounts through the AdaptlyPost REST API (Instagram, TikTok, YouTube, X, Facebook, LinkedIn, Pinterest, Threads, Bluesky)."
---

Publish and schedule social media posts through the AdaptlyPost REST API.

Auth: every request needs the header Authorization: Bearer <token>. The owner creates the token at https://app.adaptlypost.com/api-tokens (it starts with adaptly_). Store it in the AdaptlyPost connector credential field token. Never put the token in the conversation, in memory, or in this skill.

Read the token from that credential file at call time. If it is missing, request it with a secret-request (label "AdaptlyPost API token", connector adaptlypost, field token) and stop until it is provided.

Base URL: https://post.adaptlypost.com/post/api/v1
Full spec: GET /openapi.json on the same base URL (no auth needed). Fetch the spec when an endpoint or field is unclear instead of guessing.

Workflow:
1. GET /social-accounts to learn which platforms are connected and get connection IDs. Facebook pages use pageId instead of a connection ID.
2. For media posts, POST /upload-urls with {files:[{fileName, mimeType}]}, PUT the file bytes to each uploadUrl, then use the returned publicUrl values as mediaUrls.
3. POST /social-posts with text, platforms, contentType (TEXT | IMAGE | VIDEO | CAROUSEL), the connection ID arrays, and scheduledAt + timezone (omit scheduledAt to publish now, or saveAsDraft: true to hold it). Per-platform captions go in platformTexts. TikTok needs privacyLevel in tiktokConfigs. Pinterest needs boardId in pinterestConfigs.
4. POST /social-posts/bulk to schedule many posts in one call.
5. GET /social-posts/{id}/results after publishing. Retry failures with POST /social-posts/{id}/retry.

Validation: confirm the target platforms, exact text, and schedule time with the owner before any POST that publishes. Never publish to a platform the owner did not name.

Failure: if a platform fails, report the per-platform error from /results and offer a retry. Do not silently retry more than once.
