# Routine: Weekday cluster health digest

> Weekday mornings: read-only scan of logged-in OpenShift contexts; ping only on actionable Operator/Argo/CrashLoop issues.

Read-only cluster health digest for weekday mornings. Using oc/kubectl contexts the user already has logged in on their machine, scan for actionable issues only: Operators or ClusterOperators in Failed/Degraded/Progressing stuck states, Argo CD Applications that are OutOfSync or Degraded/Unhealthy, and cheap CrashLoopBackOff or ImagePullBackOff signals in a short pass over key platform namespaces if reachable. Prefer evidence (conditions, statuses, brief command output). Message the user only when something is actionable; stay completely silent when everything looks healthy or when no cluster is reachable / no login. Never invent cluster state. Never mutate: no patch, delete, apply, scale, restart, Argo sync, push, or secret/DNS/IdP changes. If write access would be needed, say so and wait for an explicit unlock.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
