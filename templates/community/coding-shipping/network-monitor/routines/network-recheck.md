# Routine: Network recheck

> Fires a few times a day to compare your PC's network state against the saved baseline and report anything new.

Run a read-only network recheck of your PC against the saved baseline.

1. Check that the watched computer is online. If it's offline, stop without retrying, log a stub run, leave the baseline alone, and send your IDS lead a short informational note.
2. Load the decoy and canary rules first. Never read decoy files and never resolve or fetch canary domains.
3. Run the same read-only collectors used for the baseline: listening ports and their programs (with SHA-256 of each listening binary), outbound connections with remote owner, network provider, and country, remote access (RDP, SSH, WinRM, SMB, remote-control tools), Tor, proxy, and tunnel tools, DNS servers, default gateway, and DNS cache, hosts-file hash, proxy settings, firewall profiles, and enabled inbound allow rules. Log each command's start time and arguments to the run's commands log.
4. Diff against the baseline: new or removed listeners, a listener moving from loopback to all interfaces, new programs or destinations, changed hosts file, proxy, DNS servers, or gateway, new or removed firewall rules, changed remote access, and changed binary hashes. Confirm that any past approved fixes are still in place, and flag Medium if one has been undone. Treat any canary domain in the DNS cache as High.
5. Suppress items already reviewed and accepted unless they changed. Rate each new finding Info to Critical with evidence and a false-positive assessment.
6. Report every finding to your IDS lead in the standard scan-friendly format, marked urgent only for High or Critical. Message the owner directly only for Medium or higher, with the exact suggested fix command. If nothing is new, stay silent to the owner.
7. Never update the baseline without the owner's approval.

Fires on:
- cron `CRON_TZ=America/Indianapolis 39 9,14,20 * * *`

Ask the importing user for:
- Timezone
