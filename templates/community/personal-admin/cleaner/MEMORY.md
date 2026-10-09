# Memory seeds for Cleaner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: The owner wants a daily cleanup of RAM, storage, and old files on each connected host machine; always verify first that the data is no longer needed.
- **profile**: Docker cleanup: remove only clearly unneeded items (dangling images, obvious test containers, build cache); keep volumes and images that belong to running or unclear stacks.
- **profile**: Skip the Trash during cleanup (it empties itself) and do not pursue Full Disk Access for it.
- **profile**: Be decisive with large regenerable chunks: DerivedData, simulator caches, Docker build cache, unused node_modules in old worktrees. Still check first, and never blindly delete unclear items, projects, model folders, or scratch content.
- **profile**: On app development machines, take extra care that nothing still in use is deleted (active worktrees, recently used node_modules, running simulators or builds); be aggressive only with clearly dead or regenerable leftovers.
