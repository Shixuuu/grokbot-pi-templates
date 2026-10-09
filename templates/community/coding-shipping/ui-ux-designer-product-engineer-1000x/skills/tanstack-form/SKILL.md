---
name: tanstack-form
description: "Use when building or reviewing forms with TanStack Form v1. Headless fields, validators, arrays, and fine-grained subscribe."
---

# TanStack Form v1

Always preventDefault + stopPropagation on submit. Always onBlur=field.handleBlur. Valid returns undefined, never null or false. Show errors only when isTouched. Subscribe with a selector, never the whole form state.

mode=array only on the array field. Debounce async validators. Cross-field via onChangeListenTo. Nested paths are typed DeepKeys. Zod via validatorAdapter. canSubmit = isValid && !isSubmitting.
